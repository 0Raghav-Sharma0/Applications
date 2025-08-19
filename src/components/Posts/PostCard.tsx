import React from 'react';
import { MessageSquare, Share2, TrendingUp } from 'lucide-react';
import { Post, Poll } from '../../types';
import { PollCard } from './PollCard';
import { SurveyCard } from './SurveyCard';
import { ParagraphCard } from './ParagraphCard';
import { ImageCard } from './ImageCard';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const renderPostContent = () => {
    switch (post.type) {
      case 'poll':
        return <PollCard post={post as Poll} />;
      case 'survey':
        return <SurveyCard post={post} />;
      case 'paragraph':
        return <ParagraphCard post={post} />;
      case 'image':
        return <ImageCard post={post} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-sm text-gray-500">@{post.author.username} • {post.timestamp}</p>
            </div>
          </div>
          <TrendingUp className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Content */}
      {renderPostContent()}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Engagement */}
      <div className="px-4 py-3 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{post.engagement.votes}</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">{post.engagement.comments}</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
          <Share2 className="w-4 h-4" />
          <span className="text-sm font-medium">{post.engagement.shares}</span>
        </button>
      </div>
    </div>
  );
};