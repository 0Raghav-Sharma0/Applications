import React from 'react';
import { User, Settings, Award, TrendingUp, MessageSquare, Share2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockUser } from '../data/mockData';

const achievements = [
  { name: 'First Poll', description: 'Created your first poll', icon: '🗳️', earned: true },
  { name: 'Top Voter', description: 'Voted on 100+ posts', icon: '⭐', earned: true },
  { name: 'Trend Setter', description: 'Created a trending post', icon: '🔥', earned: false },
  { name: 'Community Leader', description: 'Reached 1000 followers', icon: '👑', earned: false },
];

const userPosts = [
  {
    id: '1',
    type: 'poll',
    title: 'New coffee shop aesthetic - loving the industrial vibes!',
    engagement: { votes: 234, comments: 18, shares: 9 },
    timestamp: '1d ago'
  },
  {
    id: '2',
    type: 'paragraph',
    title: 'Thoughts on the minimalist design trend in 2025...',
    engagement: { votes: 156, comments: 23, shares: 12 },
    timestamp: '3d ago'
  },
  {
    id: '3',
    type: 'poll',
    title: 'Best productivity apps for remote work?',
    engagement: { votes: 342, comments: 45, shares: 18 },
    timestamp: '5d ago'
  }
];

export const Profile: React.FC = () => {
  const { user } = useApp();
  const currentUser = user || mockUser;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold">{currentUser.name}</h1>
              <p className="text-purple-100 mb-2">@{currentUser.username}</p>
              <div className="flex items-center space-x-4 text-sm text-purple-100">
                <span>{currentUser.followers.toLocaleString()} followers</span>
                <span>{currentUser.following.toLocaleString()} following</span>
              </div>
            </div>
          </div>
          <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Edit
          </button>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {currentUser.interests.map((interest) => (
            <span
              key={interest}
              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className={`p-4 rounded-lg border transition-all ${
                achievement.earned
                  ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200'
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`text-2xl ${achievement.earned ? 'grayscale-0' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                <div>
                  <h3 className={`font-semibold ${achievement.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {achievement.name}
                  </h3>
                  <p className={`text-sm ${achievement.earned ? 'text-gray-700' : 'text-gray-400'}`}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Your Posts</h2>
        <div className="space-y-4">
          {userPosts.map((post) => (
            <div key={post.id} className="p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                      {post.type.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{post.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {post.engagement.votes}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {post.engagement.comments}
                    </div>
                    <div className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      {post.engagement.shares}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};