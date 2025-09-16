export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isCreator: boolean;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  bio: string;
  category: string;
  totalPatrons: number;
  monthlyEarnings: number;
  createdAt: string;
  isVerified: boolean;
}

export interface Tier {
  id: string;
  creatorId: string;
  name: string;
  description: string;
  price: number;
  benefits: string[];
  patronCount: number;
  color: string;
}

export interface Post {
  id: string;
  creatorId: string;
  creator: Creator;
  title: string;
  content: string;
  image?: string;
  tier: string;
  likes: number;
  comments: number;
  createdAt: string;
  isLiked: boolean;
}

export interface Subscription {
  id: string;
  userId: string;
  creatorId: string;
  tierId: string;
  status: 'active' | 'paused' | 'cancelled';
  startDate: string;
  nextPayment: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'new_post' | 'tier_update' | 'payment' | 'message' | 'milestone';
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
  creatorId?: string;
  postId?: string;
}

export interface CreatorApplication {
  id: string;
  userId: string;
  name: string;
  category: string;
  bio: string;
  socialLinks: {
    website?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}