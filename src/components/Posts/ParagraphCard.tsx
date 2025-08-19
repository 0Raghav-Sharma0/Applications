import React, { useState } from 'react';
import { Post } from '../../types';
import { Heart, MessageCircle } from 'lucide-react';

interface ParagraphCardProps {
  post: Post;
}

export const ParagraphCard: React.FC<ParagraphCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  
  const shouldTruncate = post.content.length > 200;
  const displayText = shouldTruncate && !showFullText 
    ? post.content.substring(0, 200) + '...' 
    : post.content;

  return (
    <div className="p-4 pt-2">
      <div className="prose max-w-none">
        <p className="text-gray-800 leading-relaxed mb-3">
          {displayText}
        </p>
        
        {shouldTruncate && (
          <button
            onClick={() => setShowFullText(!showFullText)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700"
          >
            {showFullText ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      
      <div className="flex items-center space-x-4 mt-4 pt-3 border-t border-gray-50">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center space-x-2 text-sm transition-colors ${
            liked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          <span>Agree</span>
        </button>
        
        <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>Discuss</span>
        </button>
      </div>
    </div>
  );
};