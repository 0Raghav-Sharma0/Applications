import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Post } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  isAuthenticated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  
  const isAuthenticated = user !== null;

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      posts,
      setPosts,
      isAuthenticated,
    }}>
      {children}
    </AppContext.Provider>
  );
};