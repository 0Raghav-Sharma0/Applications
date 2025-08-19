import React, { useState } from 'react';
import { Poll } from '../../types';

interface PollCardProps {
  post: Poll;
}

export const PollCard: React.FC<PollCardProps> = ({ post }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionId: string) => {
    if (!hasVoted) {
      setSelectedOption(optionId);
      setHasVoted(true);
    }
  };

  return (
    <div className="p-4 pt-2">
      <p className="text-gray-900 mb-4 font-medium">{post.content}</p>
      
      <div className="space-y-3">
        {post.data.options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <button
              key={option.id}
              onClick={() => handleVote(option.id)}
              disabled={hasVoted}
              className={`w-full p-3 rounded-lg border transition-all duration-200 relative overflow-hidden ${
                hasVoted
                  ? isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-gray-50'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              {hasVoted && (
                <div
                  className="absolute left-0 top-0 h-full bg-blue-100 transition-all duration-500"
                  style={{ width: `${option.percentage}%` }}
                />
              )}
              
              <div className="relative flex items-center justify-between">
                <span className="font-medium text-gray-900">{option.text}</span>
                {hasVoted && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">{option.votes}</span>
                    <span className="text-sm font-semibold text-gray-900">{option.percentage}%</span>
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
      
      {hasVoted && (
        <p className="text-sm text-gray-500 mt-3 text-center">
          {post.data.totalVotes.toLocaleString()} total votes
        </p>
      )}
    </div>
  );
};