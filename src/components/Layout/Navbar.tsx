import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, TrendingUp, Plus, Database, MessageSquare, User } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/trending', icon: TrendingUp, label: 'Trending' },
  { path: '/contribute', icon: Database, label: 'Contribute' },
  { path: '/discussions', icon: MessageSquare, label: 'Discuss' },
  { path: '/profile', icon: User, label: 'Profile' },
];

export const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:top-0 md:left-0 md:w-64 md:h-screen md:border-t-0 md:border-r md:py-6 z-50">
      <div className="flex justify-around md:flex-col md:space-y-2">
        {/* Logo - Desktop only */}
        <div className="hidden md:block mb-8 px-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              InsightFlow
            </span>
          </Link>
        </div>

        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 px-2 md:px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs md:text-sm font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};