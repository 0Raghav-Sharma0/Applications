import React, { useEffect } from 'react';
import { PostCard } from '../components/Posts/PostCard';
import { mockPosts } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Sparkles, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  const { posts, setPosts } = useApp();

  useEffect(() => {
    setPosts(mockPosts);
  }, [setPosts]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 flex items-center">
              <Sparkles className="w-6 h-6 mr-2" />
              Welcome to InsightFlow
            </h1>
            <p className="text-blue-100">
              Discover trending opinions and share your insights with the community
            </p>
          </div>
          <TrendingUp className="w-12 h-12 text-blue-200" />
        </div>
      </div>

      {/* Trending Topics Bar */}
      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">🔥 Trending Now</h3>
        <div className="flex flex-wrap gap-2">
          {['#SpicyNoodles', '#SmartWatchTrends', '#SustainableFashion', '#CoffeeAesthetic'].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium hover:from-orange-200 hover:to-red-200 cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-4">
        <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          Load More Posts
        </button>
      </div>
    </div>
  );
};