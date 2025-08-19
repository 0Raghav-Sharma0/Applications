import React from 'react';
import { Survey } from '../../types';
import { FileText, Users } from 'lucide-react';

interface SurveyCardProps {
  post: Survey;
}

export const SurveyCard: React.FC<SurveyCardProps> = ({ post }) => {
  return (
    <div className="p-4 pt-2">
      <p className="text-gray-900 mb-3 font-medium">{post.content}</p>
      
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 border border-teal-100">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-teal-800 flex items-center">
            <FileText className="w-4 h-4 mr-2" />
            {post.data.title}
          </h4>
          <div className="flex items-center text-teal-600 text-sm">
            <Users className="w-4 h-4 mr-1" />
            {post.data.responses}
          </div>
        </div>
        
        <div className="space-y-2">
          {post.data.questions.slice(0, 2).map((question, index) => (
            <div key={question.id} className="text-sm text-gray-700">
              <span className="font-medium">Q{index + 1}:</span> {question.text}
            </div>
          ))}
          {post.data.questions.length > 2 && (
            <p className="text-sm text-teal-600 font-medium">
              +{post.data.questions.length - 2} more questions
            </p>
          )}
        </div>
        
        <button className="mt-3 w-full py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
          Take Survey
        </button>
      </div>
    </div>
  );
};