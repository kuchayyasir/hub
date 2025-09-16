import React, { useState } from 'react';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import BecomeCreatorPage from './pages/BecomeCreatorPage';
import ProfilePage from './pages/ProfilePage';
import CreatorPage from './pages/CreatorPage';
import FeedPage from './pages/FeedPage';
import DashboardPage from './pages/DashboardPage';
import { mockCreators, mockTiers, mockPosts, mockUser, mockNotifications } from './data/mockData';
import { Creator, Tier, User, Notification, CreatorApplication, Subscription } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [user, setUser] = useState<User>(mockUser);
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [subscriptions] = useState<Subscription[]>([
    {
      id: '1',
      userId: '1',
      creatorId: '1',
      tierId: '2',
      status: 'active',
      startDate: '2024-01-15',
      nextPayment: '2025-02-15'
    }
  ]);

  const handleCreatorSelect = (creator: Creator) => {
    setSelectedCreator(creator);
    setCurrentPage('creator');
  };

  const handleTierSelect = (tier: Tier) => {
    // In a real app, this would handle the subscription process
    alert(`Selected ${tier.name} tier for $${tier.price}/month. Payment integration would be handled here.`);
  };

  const handlePostLike = (postId: string) => {
    // In a real app, this would update the backend
    console.log(`Liked post: ${postId}`);
  };

  const handleNotificationMarkAsRead = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const handleCreatorApplicationSubmit = (application: Omit<CreatorApplication, 'id' | 'userId' | 'status' | 'submittedAt'>) => {
    // In a real app, this would submit to the backend
    console.log('Creator application submitted:', application);
  };

  const handleUserUpdate = (updatedUser: User) => {
    setUser(updatedUser);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            creators={mockCreators}
            onCreatorSelect={handleCreatorSelect}
          />
        );
      case 'discover':
        return (
          <DiscoverPage
            creators={mockCreators}
            onCreatorSelect={handleCreatorSelect}
          />
        );
      case 'become-creator':
        return (
          <BecomeCreatorPage
            onApplicationSubmit={handleCreatorApplicationSubmit}
          />
        );
      case 'profile':
        return (
          <ProfilePage
            user={user}
            subscriptions={subscriptions}
            onUserUpdate={handleUserUpdate}
          />
        );
      case 'creator':
        return selectedCreator ? (
          <CreatorPage
            creator={selectedCreator}
            tiers={mockTiers}
            onTierSelect={handleTierSelect}
            onBack={() => setCurrentPage('home')}
          />
        ) : (
          <HomePage
            creators={mockCreators}
            onCreatorSelect={handleCreatorSelect}
          />
        );
      case 'feed':
        return (
          <FeedPage
            posts={mockPosts}
            onPostLike={handlePostLike}
          />
        );
      case 'dashboard':
        return <DashboardPage />;
      default:
        return (
          <HomePage
            creators={mockCreators}
            onCreatorSelect={handleCreatorSelect}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        notifications={notifications}
        onMarkNotificationAsRead={handleNotificationMarkAsRead}
        onMarkAllNotificationsAsRead={handleMarkAllNotificationsAsRead}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;