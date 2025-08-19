import React from 'react';
import { MessageSquare, Clock, Users, TrendingUp, Plus } from 'lucide-react';

const discussions = [
  {
    id: '1',
    title: 'Best affordable smartwatches of 2025?',
    author: 'TechEnthusiast23',
    replies: 47,
    views: 1204,
    lastActivity: '2h ago',
    category: 'Technology',
    isHot: true
  },
  {
    id: '2',
    title: 'Next big noodle flavor trend predictions',
    author: 'FoodieExplorer',
    replies: 89,
    views: 2341,
    lastActivity: '4h ago',
    category: 'Food',
    isHot: true
  },
  {
    id: '3',
    title: 'Sustainable fashion vs. fast fashion debate',
    author: 'EcoWarrior',
    replies: 156,
    views: 4567,
    lastActivity: '6h ago',
    category: 'Fashion',
    isHot: false
  },
  {
    id: '4',
    title: 'Coffee shop aesthetics - minimalist or cozy?',
    author: 'CafeHopper',
    replies: 34,
    views: 892,
    lastActivity: '8h ago',
    category: 'Lifestyle',
    isHot: false
  },
  {
    id: '5',
    title: 'AI impact on creative industries - thoughts?',
    author: 'CreativeThink',
    replies: 78,
    views: 1567,
    lastActivity: '1d ago',
    category: 'Technology',
    isHot: false
  }
];

const categories = ['All', 'Technology', 'Food', 'Fashion', 'Lifestyle'];

export const Discussions: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2" />
              Community Discussions
            </h1>
            <p className="text-green-100">
              Join conversations and share your perspectives
            </p>
          </div>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            New Topic
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg font-medium text-gray-700 hover:bg-gray-50 whitespace-nowrap transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Hot Discussions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          🔥 Hot Discussions
        </h2>
        <div className="space-y-4">
          {discussions.filter(d => d.isHot).map((discussion) => (
            <div
              key={discussion.id}
              className="p-4 border border-orange-200 bg-orange-50 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>by {discussion.author}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {discussion.category}
                    </span>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {discussion.replies}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {discussion.views}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {discussion.lastActivity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Discussions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Discussions</h2>
        <div className="space-y-4">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-gray-900">{discussion.title}</h3>
                    {discussion.isHot && (
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>by {discussion.author}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {discussion.category}
                    </span>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {discussion.views} views
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {discussion.lastActivity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center py-4">
        <button className="px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
          Load More Discussions
        </button>
      </div>
    </div>
  );
};