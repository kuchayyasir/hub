import React from "react";
import { Creator } from "../../types";
import { Users, DollarSign, CheckCircle } from "lucide-react";

interface CreatorCardProps {
  creator: Creator;
  onClick: () => void;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creator, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-200 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={creator.cover}
          alt={`${creator.name} cover`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center">
            {creator.name}
            {creator.isVerified && (
              <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
            )}
          </h3>
        </div>

        <p className="text-sm text-teal-600 font-medium mb-2">
          {creator.category}
        </p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{creator.bio}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            <span>{creator.totalPatrons.toLocaleString()} patrons</span>
          </div>
          <div className="flex items-center text-green-600 font-medium">
            <DollarSign className="w-4 h-4 mr-1" />
            <span>${creator.monthlyEarnings.toLocaleString()}/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;
