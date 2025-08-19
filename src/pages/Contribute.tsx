import React, { useState } from 'react';
import { Database, Clock, Users, Star, ChevronRight, CheckCircle } from 'lucide-react';

const dataRequests = [
  {
    id: '1',
    title: 'Rate Your Morning Coffee Routine',
    description: 'Help us understand coffee preferences across different demographics',
    type: 'Rating',
    reward: '5 points',
    timeEstimate: '2 min',
    participants: 1247,
    category: 'Food & Beverage',
    questions: [
      'How many cups of coffee do you drink per day?',
      'What time do you have your first coffee?',
      'Rate your favorite coffee type (1-5 stars)'
    ]
  },
  {
    id: '2',
    title: 'Smartphone Usage Patterns',
    description: 'Share your daily phone usage data to help understand digital habits',
    type: 'Data Entry',
    reward: '8 points',
    timeEstimate: '3 min',
    participants: 892,
    category: 'Technology',
    questions: [
      'Average daily screen time (hours)',
      'Most used app category',
      'Phone usage during meals (Yes/No)'
    ]
  },
  {
    id: '3',
    title: 'Weekend Activity Preferences',
    description: 'Tell us about your ideal weekend activities and preferences',
    type: 'Multiple Choice',
    reward: '3 points',
    timeEstimate: '1 min',
    participants: 2341,
    category: 'Lifestyle',
    questions: [
      'Preferred weekend activity',
      'Indoor vs Outdoor preference',
      'Social vs Solo activities'
    ]
  },
  {
    id: '4',
    title: 'Fashion Color Trends 2025',
    description: 'Share your color preferences to predict upcoming fashion trends',
    type: 'Visual Selection',
    reward: '6 points',
    timeEstimate: '2 min',
    participants: 567,
    category: 'Fashion',
    questions: [
      'Select your top 3 favorite colors',
      'Rate seasonal color palettes',
      'Upload inspiration images (optional)'
    ]
  },
  {
    id: '5',
    title: 'Work From Home Setup',
    description: 'Help companies understand remote work preferences and setups',
    type: 'Photo + Data',
    reward: '10 points',
    timeEstimate: '4 min',
    participants: 445,
    category: 'Business',
    questions: [
      'Upload photo of your workspace',
      'Rate your productivity (1-10)',
      'List your essential work tools'
    ]
  },
  {
    id: '6',
    title: 'Local Food Discovery',
    description: 'Share your favorite local restaurants and hidden gems',
    type: 'Location + Review',
    reward: '7 points',
    timeEstimate: '3 min',
    participants: 1156,
    category: 'Food & Beverage',
    questions: [
      'Restaurant name and location',
      'Favorite dish and price range',
      'Rate overall experience (1-5 stars)'
    ]
  }
];

const categories = ['All', 'Food & Beverage', 'Technology', 'Lifestyle', 'Fashion', 'Business'];

interface ContributeFormProps {
  request: typeof dataRequests[0];
  onBack: () => void;
}

const ContributeForm: React.FC<ContributeFormProps> = ({ request, onBack }) => {
  const [responses, setResponses] = useState<{ [key: string]: any }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onBack();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-4">Your data has been submitted successfully.</p>
        <div className="bg-green-50 rounded-lg p-4 mb-4">
          <p className="text-green-800 font-medium">You earned {request.reward}!</p>
        </div>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Contributing
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{request.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{request.description}</p>
        </div>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
        >
          Back
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {request.questions.map((question, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {question}
            </label>
            {request.type === 'Rating' && question.includes('Rate') ? (
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setResponses({...responses, [index]: star})}
                    className={`p-2 ${responses[index] >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    <Star className="w-6 h-6 fill-current" />
                  </button>
                ))}
              </div>
            ) : request.type === 'Multiple Choice' ? (
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setResponses({...responses, [index]: e.target.value})}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            ) : question.includes('Upload') || question.includes('photo') ? (
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setResponses({...responses, [index]: e.target.files?.[0]})}
              />
            ) : (
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your response"
                onChange={(e) => setResponses({...responses, [index]: e.target.value})}
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Submit Data & Earn {request.reward}
        </button>
      </form>
    </div>
  );
};

export const Contribute: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState<typeof dataRequests[0] | null>(null);

  const filteredRequests = selectedCategory === 'All' 
    ? dataRequests 
    : dataRequests.filter(req => req.category === selectedCategory);

  if (selectedRequest) {
    return <ContributeForm request={selectedRequest} onBack={() => setSelectedRequest(null)} />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <Database className="w-6 h-6 mr-2" />
          Contribute Your Data
        </h1>
        <p className="text-emerald-100">
          Share your insights and earn points by contributing to research requests
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-blue-600">127</div>
          <div className="text-sm text-gray-600">Points Earned</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-green-600">23</div>
          <div className="text-sm text-gray-600">Contributions</div>
        </div>
        <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
          <div className="text-2xl font-bold text-purple-600">8</div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Data Requests */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <div
            key={request.id}
            onClick={() => setSelectedRequest(request)}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md cursor-pointer transition-all duration-200 group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {request.title}
                  </h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {request.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{request.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {request.timeEstimate}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {request.participants.toLocaleString()} participants
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {request.reward}
                  </div>
                </div>
                
                <div className="mt-3">
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    {request.category}
                  </span>
                </div>
              </div>
              
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-bold text-blue-900 mb-3">💡 Contribution Tips</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Be honest and accurate with your responses</li>
          <li>• Complete profiles earn more points per contribution</li>
          <li>• Photo contributions typically have higher rewards</li>
          <li>• Check back daily for new data requests</li>
        </ul>
      </div>
    </div>
  );
};