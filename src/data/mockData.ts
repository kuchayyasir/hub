import { Creator, Tier, Post, User } from '../types';
import { Notification } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  isCreator: false,
};

export const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    cover: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Digital artist creating stunning illustrations and teaching art fundamentals. Join me on my creative journey!',
    category: 'Digital Art',
    totalPatrons: 1247,
    monthlyEarnings: 8340,
    createdAt: '2023-01-15',
    isVerified: true,
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    cover: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Indie game developer sharing behind-the-scenes content and tutorials. Building the next generation of games!',
    category: 'Game Development',
    totalPatrons: 892,
    monthlyEarnings: 5650,
    createdAt: '2023-03-22',
    isVerified: true,
  },
  {
    id: '3',
    name: 'Emma Taylor',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    cover: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Food blogger and recipe developer. Sharing delicious recipes and cooking tips for home chefs.',
    category: 'Food & Cooking',
    totalPatrons: 634,
    monthlyEarnings: 3420,
    createdAt: '2023-02-08',
    isVerified: false,
  },
];

export const mockTiers: Tier[] = [
  {
    id: '1',
    creatorId: '1',
    name: 'Art Enthusiast',
    description: 'Access to my basic content and monthly sketches',
    price: 5,
    benefits: ['Monthly sketch pack', 'Access to community', 'Early access to posts'],
    patronCount: 456,
    color: 'bg-blue-100 border-blue-300',
  },
  {
    id: '2',
    creatorId: '1',
    name: 'Creative Supporter',
    description: 'Get tutorials, process videos, and exclusive artwork',
    price: 15,
    benefits: ['Everything in Art Enthusiast', 'Video tutorials', 'High-res artwork downloads', 'Monthly Q&A session'],
    patronCount: 523,
    color: 'bg-purple-100 border-purple-300',
  },
  {
    id: '3',
    creatorId: '1',
    name: 'Art Collector',
    description: 'Premium tier with prints, personal feedback, and more',
    price: 50,
    benefits: ['Everything in Creative Supporter', 'Monthly art print', 'Personal feedback on your art', 'Custom commission discount'],
    patronCount: 268,
    color: 'bg-gradient-to-br from-orange-100 to-pink-100 border-orange-300',
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    creatorId: '1',
    creator: mockCreators[0],
    title: 'New Character Design Process',
    content: 'Here\'s my step-by-step process for creating compelling character designs. I start with rough thumbnails and gradually refine the concept...',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    tier: 'Creative Supporter',
    likes: 89,
    comments: 23,
    createdAt: '2025-01-20T10:30:00Z',
    isLiked: false,
  },
  {
    id: '2',
    creatorId: '2',
    creator: mockCreators[1],
    title: 'Game Development Update #12',
    content: 'This week I\'ve been working on the combat system. The player feedback has been incredible, and I\'ve implemented several requested features...',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
    tier: 'All Patrons',
    likes: 156,
    comments: 34,
    createdAt: '2025-01-19T14:15:00Z',
    isLiked: true,
  },
  {
    id: '3',
    creatorId: '3',
    creator: mockCreators[2],
    title: 'Italian Pasta Recipe Collection',
    content: 'I\'ve compiled my favorite Italian pasta recipes from my recent trip to Italy. Each recipe includes video tutorials and chef tips...',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
    tier: 'Food Lovers',
    likes: 67,
    comments: 12,
    createdAt: '2025-01-18T09:45:00Z',
    isLiked: false,
  },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    userId: '1',
    type: 'new_post',
    title: 'New post from Sarah Chen',
    message: 'Sarah just posted "New Character Design Process"',
    createdAt: '2025-01-20T10:30:00Z',
    read: false,
    creatorId: '1',
    postId: '1'
  },
  {
    id: '2',
    userId: '1',
    type: 'payment',
    title: 'Payment processed',
    message: 'Your monthly payment of $15 to Sarah Chen has been processed',
    createdAt: '2025-01-19T09:00:00Z',
    read: false,
    creatorId: '1'
  },
  {
    id: '3',
    userId: '1',
    type: 'milestone',
    title: 'Creator milestone reached!',
    message: 'Mike Rodriguez just reached 1,000 patrons!',
    createdAt: '2025-01-18T15:30:00Z',
    read: true,
    creatorId: '2'
  },
  {
    id: '4',
    userId: '1',
    type: 'tier_update',
    title: 'Tier benefits updated',
    message: 'Emma Taylor updated the benefits for the Food Lovers tier',
    createdAt: '2025-01-17T11:20:00Z',
    read: true,
    creatorId: '3'
  }
];