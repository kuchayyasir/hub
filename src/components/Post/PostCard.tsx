import React, { useState } from 'react';
import { Post } from '../../types';
import { Heart, MessageCircle, Share, Clock, CheckCircle } from 'lucide-react';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id);
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Creator Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center">
          <img
            src={post.creator.avatar}
            alt={post.creator.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3 flex-1">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-900 flex items-center">
                {post.creator.name}
                {post.creator.isVerified && (
                  <CheckCircle className="w-4 h-4 text-blue-500 ml-1" />
                )}
              </h3>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              <span>{formatTimeAgo(post.createdAt)}</span>
              <span className="mx-2">•</span>
              <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-medium">
                {post.tier}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
        
        {post.image && (
          <div className="rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 text-sm transition-colors ${
                isLiked
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{post.likes + (isLiked && !post.isLiked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-green-500 transition-colors">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;