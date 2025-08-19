export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  interests: string[];
  followers: number;
  following: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  earned: boolean;
}

export interface Post {
  id: string;
  type: 'poll' | 'survey' | 'paragraph' | 'image';
  author: User;
  content: string;
  timestamp: string;
  tags: string[];
  engagement: {
    votes: number;
    comments: number;
    shares: number;
  };
  data?: any;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export interface Poll extends Post {
  type: 'poll';
  data: {
    question: string;
    options: PollOption[];
    totalVotes: number;
  };
}

export interface Survey extends Post {
  type: 'survey';
  data: {
    title: string;
    questions: SurveyQuestion[];
    responses: number;
  };
}

export interface SurveyQuestion {
  id: string;
  text: string;
  type: 'multiple' | 'text' | 'rating';
  options?: string[];
}

export interface TrendingTopic {
  id: string;
  name: string;
  posts: number;
  growth: number;
  category: string;
}