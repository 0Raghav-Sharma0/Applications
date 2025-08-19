import React from 'react';
import { TrendingUp, ArrowUp, Users, MessageSquare } from 'lucide-react';
import { trendingTopics } from '../data/mockData';

const categories = ['All', 'Food', 'Technology', 'Fashion', 'Lifestyle'];

const insights = [
  {
    id: '1',
    title: 'Spicy noodles dominate 72% of polls this week',
    category: 'Food',
    engagement: '1.2k votes',
    trend: '+45%'
  },
  {
    id: '2',
    title: '80% users prefer round dials over square dials in watches',
    category: 'Technology',
    engagement: '892 responses',
    trend: '+32%'
  },
  {
    id: '3',
    title: 'AI art feedback posts trending among 3000 users',
    category: 'Technology',
    engagement: '456 discussions',
    trend: '+28%'
  },
  {
    id: '4',
    title: 'Minimalist sneaker trend gains momentum',
    category: 'Fashion',
    engagement: '678 opinions',
    trend: '+15%'
  }
];

export const Trending: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <TrendingUp className="w-6 h-6 mr-2" />
          Trending Insights
        </h1>
        <p className="text-orange-100">
          Discover what's hot right now across all categories
        </p>
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

      {/* Trending Topics */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">🔥 Hot Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trendingTopics.map((topic) => (
            <div
              key={topic.id}
              className="p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">#{topic.name}</h3>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  {topic.growth}%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{topic.category}</span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1" />
                  {topic.posts} posts
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Key Insights</h2>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{insight.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {insight.engagement}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-medium">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  {insight.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};