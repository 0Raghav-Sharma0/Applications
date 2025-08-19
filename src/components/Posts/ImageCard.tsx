import React, { useState } from 'react';
import { Post } from '../../types';
import { Heart, Eye } from 'lucide-react';

interface ImageCardProps {
  post: Post;
}

export const ImageCard: React.FC<ImageCardProps> = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="pt-2">
      {post.content && (
        <div className="px-4 pb-2">
          <p className="text-gray-800">{post.content}</p>
        </div>
      )}
      
      <div className="relative group">
        <img
          src={post.data?.imageUrl}
          alt="Post content"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
          <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      
      <div className="p-4 flex items-center space-x-4">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center space-x-2 text-sm transition-colors ${
            liked ? 'text-red-600' : 'text-gray-500 hover:text-red-600'
          }`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
      </div>
    </div>
  );
};