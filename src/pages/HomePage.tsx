import React from 'react';
import { Creator } from '../types';
import CreatorCard from '../components/Creator/CreatorCard';
import { Star, TrendingUp, Users, Zap } from 'lucide-react';

interface HomePageProps {
  creators: Creator[];
  onCreatorSelect: (creator: Creator) => void;
}

const HomePage: React.FC<HomePageProps> = ({ creators, onCreatorSelect }) => {
  const featuredCreators = creators.slice(0, 3);
  const trendingCreators = creators;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Support Your Favorite
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              Creators
            </span>
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patrons supporting creators worldwide. Get exclusive content, 
            behind-the-scenes access, and help bring amazing projects to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.hash = 'discover'}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover Creators
            </button>
            <button 
              onClick={() => window.location.hash = 'become-creator'}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Become a Creator
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">250K+</div>
              <div className="text-gray-600 text-sm md:text-base">Active Patrons</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600 text-sm md:text-base">Creators</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">$2M+</div>
              <div className="text-gray-600 text-sm md:text-base">Paid to Creators</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">500K+</div>
              <div className="text-gray-600 text-sm md:text-base">Posts Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Creators</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover amazing creators who are building something special with their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCreators.map((creator) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                onClick={() => onCreatorSelect(creator)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Creators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending This Week</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Check out the creators that are gaining the most support from the community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingCreators.map((creator) => (
              <CreatorCard
                key={creator.id}
                creator={creator}
                onClick={() => onCreatorSelect(creator)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Support Amazing Creators?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our community today and start supporting the creators you love.
          </p>
          <button 
            onClick={() => window.location.hash = 'discover'}
            className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;