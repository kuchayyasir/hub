import React, { useState } from 'react';
import { Post } from '../types';
import PostCard from '../components/Post/PostCard';
import { Filter } from 'lucide-react';

interface FeedPageProps {
  posts: Post[];
  onPostLike: (postId: string) => void;
}

const FeedPage: React.FC<FeedPageProps> = ({ posts, onPostLike }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    return post.creator.category.toLowerCase().includes(filter.toLowerCase());
  });

  const categories = ['all', 'digital art', 'game development', 'food & cooking'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Feed</h1>
          <p className="text-gray-600 text-lg">
            Latest updates from creators you support
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center text-gray-600">
            <Filter className="w-5 h-5 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onLike={onPostLike}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No posts found for the selected filter.</p>
              <button
                onClick={() => setFilter('all')}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Show all posts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;