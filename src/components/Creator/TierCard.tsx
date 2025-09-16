import React from 'react';
import { Tier } from '../../types';
import { Check, Users } from 'lucide-react';

interface TierCardProps {
  tier: Tier;
  onSelect: (tier: Tier) => void;
}

const TierCard: React.FC<TierCardProps> = ({ tier, onSelect }) => {
  return (
    <div className={`bg-white rounded-xl border-2 ${tier.color} p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
        <div className="flex items-baseline mb-3">
          <span className="text-3xl font-bold text-gray-900">${tier.price}</span>
          <span className="text-gray-600 ml-2">per month</span>
        </div>
        <p className="text-gray-600 text-sm">{tier.description}</p>
      </div>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">What you'll get:</h4>
        <ul className="space-y-2">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-teal-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <Users className="w-4 h-4 mr-1" />
          <span>{tier.patronCount} patrons</span>
        </div>
      </div>

      <button
        onClick={() => onSelect(tier)}
        className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        Become a Patron
      </button>
    </div>
  );
};

export default TierCard;