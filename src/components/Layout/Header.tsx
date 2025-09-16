import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';
import { Notification } from '../../types';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  notifications: Notification[];
  onMarkNotificationAsRead: (notificationId: string) => void;
  onMarkAllNotificationsAsRead: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onPageChange, 
  notifications, 
  onMarkNotificationAsRead, 
  onMarkAllNotificationsAsRead 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => onPageChange('home')}
              className="text-2xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
            >
              ProfileHub
            </button>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search creators..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onPageChange('discover')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'discover'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Discover
            </button>
            <button
              onClick={() => onPageChange('feed')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'feed'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              My Feed
            </button>
            <button
              onClick={() => onPageChange('dashboard')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'dashboard'
                  ? 'text-teal-600'
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => onPageChange('become-creator')}
              className="border-2 border-gray text-gray m-2 px-2 rounded-full font-semibold text-m hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Become a Creator
            </button>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <NotificationDropdown
              notifications={notifications}
              onMarkAsRead={onMarkNotificationAsRead}
              onMarkAllAsRead={onMarkAllNotificationsAsRead}
            />
            <button 
              onClick={() => onPageChange('profile')}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search creators..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    onPageChange('home');
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === 'home'
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onPageChange('discover');
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === 'discover'
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  Discover
                </button>
                <button
                  onClick={() => {
                    onPageChange('feed');
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === 'feed'
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  My Feed
                </button>
                <button
                  onClick={() => {
                    onPageChange('dashboard');
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === 'dashboard'
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    onPageChange('become-creator');
                    setIsMenuOpen(false);
                  }}
                  className="text-left px-4 py-2 text-sm font-medium rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors"
                >
                  Become a Creator
                </button>
                <button
                  onClick={() => {
                    onPageChange('profile');
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === 'profile'
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  Profile
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;