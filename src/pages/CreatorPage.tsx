import React from 'react';
import { Creator, Tier } from '../types';
import TierCard from '../components/Creator/TierCard';
import { CheckCircle, Users, DollarSign, Calendar, ExternalLink } from 'lucide-react';

interface CreatorPageProps {
  creator: Creator;
  tiers: Tier[];
  onTierSelect: (tier: Tier) => void;
  onBack: () => void;
}

const CreatorPage: React.FC<CreatorPageProps> = ({ creator, tiers, onTierSelect, onBack }) => {
  const creatorTiers = tiers.filter(tier => tier.creatorId === creator.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={creator.cover}
          alt={`${creator.name} cover`}
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* Creator Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                  {creator.name}
                  {creator.isVerified && (
                    <CheckCircle className="w-8 h-8 text-blue-500 ml-3" />
                  )}
                </h1>
              </div>
              
              <p className="text-teal-600 font-medium text-lg mb-4">{creator.category}</p>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">{creator.bio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-gray-400 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{creator.totalPatrons.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">patrons</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <DollarSign className="w-6 h-6 text-gray-400 mr-3" />
                  <div>
                    <div className="text-2xl font-bold text-green-600">${creator.monthlyEarnings.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-gray-400 mr-3" />
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {new Date(creator.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                    <div className="text-sm text-gray-600">creating since</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Follow Creator
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Membership Tiers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose a membership level and get exclusive access to {creator.name}'s content and community.
            </p>
          </div>
          
          {creatorTiers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creatorTiers.map((tier) => (
                <TierCard
                  key={tier.id}
                  tier={tier}
                  onSelect={onTierSelect}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">This creator hasn't set up membership tiers yet.</p>
            </div>
          )}
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About {creator.name}</h3>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to my creator page! I'm passionate about {creator.category.toLowerCase()} and love sharing my 
              creative process with my community. When you become a patron, you're not just supporting my work – 
              you're becoming part of a creative journey.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I believe in creating authentic, high-quality content that inspires and educates. Your support 
              helps me continue creating and allows me to experiment with new ideas and techniques.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Thank you for considering supporting my work. I can't wait to share this creative adventure with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;