import React, { useState } from 'react';
import { MessageSquare, Clock, Users, TrendingUp, Plus } from 'lucide-react';

const discussionsData = [
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
  },
  {
    id: '6',
    title: 'Virtual reality concerts – future of live music?',
    author: 'MusicLover99',
    replies: 112,
    views: 2984,
    lastActivity: '3h ago',
    category: 'Technology',
    isHot: true
  },
  {
    id: '7',
    title: 'Best street food cities in the world',
    author: 'TravelFoodie',
    replies: 65,
    views: 1763,
    lastActivity: '5h ago',
    category: 'Food',
    isHot: false
  },
  {
    id: '8',
    title: 'Thrifting tips for stylish wardrobes',
    author: 'BudgetChic',
    replies: 44,
    views: 1032,
    lastActivity: '10h ago',
    category: 'Fashion',
    isHot: false
  },
  {
    id: '9',
    title: 'Morning routines that boost productivity',
    author: 'MindfulStart',
    replies: 51,
    views: 1387,
    lastActivity: '12h ago',
    category: 'Lifestyle',
    isHot: false
  },
  {
    id: '10',
    title: 'Future of space tourism – when will it be affordable?',
    author: 'CosmosDreamer',
    replies: 93,
    views: 2678,
    lastActivity: '2d ago',
    category: 'Technology',
    isHot: true
  }
];

const categories = ['All', 'Technology', 'Food', 'Fashion', 'Lifestyle'];

export const Discussions: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDiscussions = activeCategory === 'All'
    ? discussionsData
    : discussionsData.filter(d => d.category === activeCategory);

  return (
    <div className="space-y-6 px-3 sm:px-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 sm:p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1 flex items-center">
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Community Discussions
            </h1>
            <p className="text-green-100 text-sm sm:text-base">
              Join conversations and share your perspectives
            </p>
          </div>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
            <Plus className="w-4 h-4 mr-2" />
            New Topic
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(5);
            }}
            className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap text-sm sm:text-base transition-colors ${
              activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Hot Discussions */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
          🔥 Hot Discussions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {filteredDiscussions.filter(d => d.isHot).map((discussion) => (
            <div
              key={discussion.id}
              className="p-3 sm:p-4 border border-orange-200 bg-orange-50 rounded-lg hover:bg-orange-100 cursor-pointer transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                    {discussion.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span>by {discussion.author}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      {discussion.category}
                    </span>
                    <div className="flex items-center">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {discussion.replies}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {discussion.views}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {discussion.lastActivity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Discussions */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
          All Discussions
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {filteredDiscussions.slice(0, visibleCount).map((discussion) => (
            <div
              key={discussion.id}
              className="p-3 sm:p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {discussion.title}
                    </h3>
                    {discussion.isHot && (
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span>by {discussion.author}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                      {discussion.category}
                    </span>
                    <div className="flex items-center">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {discussion.replies} replies
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {discussion.views} views
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-xs sm:text-sm">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {discussion.lastActivity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      {visibleCount < filteredDiscussions.length && (
        <div className="text-center py-4">
          <button
            onClick={() => setVisibleCount(prev => prev + 5)}
            className="px-5 sm:px-6 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            Load More Discussions
          </button>
        </div>
      )}
    </div>
  );
};
