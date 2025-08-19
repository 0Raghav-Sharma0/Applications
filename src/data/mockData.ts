import { User, Post, Poll, Survey, TrendingTopic, Badge } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Chen',
  username: 'alexc',
  email: 'alex@example.com',
  avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  interests: ['Food', 'Technology', 'Fashion', 'Lifestyle'],
  followers: 1247,
  following: 892,
  badges: [
    { id: '1', name: 'First Poll', icon: '🗳️', earned: true },
    { id: '2', name: 'Top Voter', icon: '⭐', earned: true },
    { id: '3', name: 'Trend Setter', icon: '🔥', earned: false },
  ]
};

export const mockPosts: Post[] = [
  {
    id: '1',
    type: 'poll',
    author: {
      id: '2',
      name: 'Maya Rodriguez',
      username: 'mayar',
      email: 'maya@example.com',
      avatar: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      interests: ['Food'],
      followers: 543,
      following: 234,
      badges: []
    },
    content: 'Which instant noodle flavor dominates your cravings?',
    timestamp: '2h ago',
    tags: ['Food', 'Trending'],
    engagement: { votes: 1247, comments: 23, shares: 12 },
    data: {
      question: 'Which instant noodle flavor dominates your cravings?',
      options: [
        { id: '1', text: '🌶️ Spicy', votes: 897, percentage: 72 },
        { id: '2', text: '🧀 Cheese', votes: 225, percentage: 18 },
        { id: '3', text: '🍛 Curry', votes: 125, percentage: 10 }
      ],
      totalVotes: 1247
    }
  },
  {
    id: '2',
    type: 'survey',
    author: {
      id: '3',
      name: 'David Kim',
      username: 'davidk',
      email: 'david@example.com',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      interests: ['Technology'],
      followers: 2341,
      following: 567,
      badges: []
    },
    content: 'Help shape the future of smartwatch design!',
    timestamp: '4h ago',
    tags: ['Technology', 'Design'],
    engagement: { votes: 892, comments: 45, shares: 28 },
    data: {
      title: 'Smartwatch Design Preferences',
      questions: [
        {
          id: '1',
          text: 'Preferred dial shape?',
          type: 'multiple',
          options: ['Round', 'Square', 'Rectangular']
        },
        {
          id: '2',
          text: 'Most important feature?',
          type: 'multiple',
          options: ['Battery Life', 'AI Assistant', 'Fitness Tracking', 'Style']
        },
        {
          id: '3',
          text: 'Additional thoughts on smartwatch trends?',
          type: 'text'
        }
      ],
      responses: 892
    }
  },
  {
    id: '3',
    type: 'paragraph',
    author: {
      id: '4',
      name: 'Emma Wilson',
      username: 'emmaw',
      email: 'emma@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      interests: ['Fashion'],
      followers: 1876,
      following: 445,
      badges: []
    },
    content: 'I believe minimalist sneakers with earthy tones will absolutely dominate 2025 fashion. The shift towards sustainable materials and neutral aesthetics reflects our collective move toward conscious consumption. What\'s your take on this trend?',
    timestamp: '6h ago',
    tags: ['Fashion', 'Sustainability', '2025Trends'],
    engagement: { votes: 456, comments: 67, shares: 34 }
  },
  {
    id: '4',
    type: 'image',
    author: mockUser,
    content: 'New coffee shop aesthetic - loving the industrial vibes! ☕',
    timestamp: '1d ago',
    tags: ['Lifestyle', 'Coffee', 'Design'],
    engagement: { votes: 234, comments: 18, shares: 9 },
    data: {
      imageUrl: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  }
];

export const trendingTopics: TrendingTopic[] = [
  { id: '1', name: 'SpicyNoodles', posts: 234, growth: 45, category: 'Food' },
  { id: '2', name: 'SmartWatchTrends', posts: 189, growth: 32, category: 'Technology' },
  { id: '3', name: 'SustainableFashion', posts: 156, growth: 28, category: 'Fashion' },
  { id: '4', name: 'CoffeeAesthetic', posts: 98, growth: 15, category: 'Lifestyle' }
];