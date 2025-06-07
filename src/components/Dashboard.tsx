import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, FolderOpen, Bell, LogOut, Building, User, Palette } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FormData } from './OnboardingWizard';

const projectActivityData = [
  { day: 'Mon', projects: 12 },
  { day: 'Tue', projects: 19 },
  { day: 'Wed', projects: 15 },
  { day: 'Thu', projects: 25 },
  { day: 'Fri', projects: 22 },
  { day: 'Sat', projects: 8 },
  { day: 'Sun', projects: 5 }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<FormData | null>(null);

  useEffect(() => {
    const isCompleted = localStorage.getItem('onboardingCompleted');
    if (!isCompleted) {
      navigate('/onboarding');
      return;
    }
    const savedData = localStorage.getItem('onboardingData');
    if (savedData) {
      setUserData(JSON.parse(savedData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('onboardingCompleted');
    localStorage.removeItem('onboardingData');
    navigate('/onboarding');
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${userData.theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <header className={`${userData.theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building className={`w-8 h-8 ${userData.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <h1 className={`text-xl font-bold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${userData.theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome, {userData.name}!
              </span>
              <button
                onClick={handleLogout}
                className={`p-2 rounded-lg transition-colors duration-200 ${userData.theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`${userData.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6 mb-8`}>
          <h2 className={`text-2xl font-bold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
            Welcome to your dashboard, {userData.name}!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`flex items-center p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
              <User className={`w-5 h-5 ${userData.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mr-3`} />
              <div>
                <div className={`text-xs ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                  Contact
                </div>
                <div className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {userData.email}
                </div>
              </div>
            </div>
            <div className={`flex items-center p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-gray-700' : 'bg-purple-50'}`}>
              <Building className={`w-5 h-5 ${userData.theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} mr-3`} />
              <div>
                <div className={`text-xs ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                  Company
                </div>
                <div className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {userData.companyName}
                </div>
                <div className={`text-xs ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {userData.industry} • {userData.companySize}
                </div>
              </div>
            </div>
            <div className={`flex items-center p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-gray-700' : 'bg-green-50'}`}>
              <Palette className={`w-5 h-5 ${userData.theme === 'dark' ? 'text-green-400' : 'text-green-600'} mr-3`} />
              <div>
                <div className={`text-xs ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide`}>
                  Preferences
                </div>
                <div className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {userData.theme.charAt(0).toUpperCase() + userData.theme.slice(1)} Theme
                </div>
                <div className={`text-xs ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {userData.defaultLayout.charAt(0).toUpperCase() + userData.defaultLayout.slice(1)} Layout
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`${userData.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'}`}>
                <Users className={`w-6 h-6 ${userData.theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div className="ml-4">
                <p className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total Team Members
                </p>
                <p className={`text-2xl font-bold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  24
                </p>
              </div>
            </div>
          </div>
          <div className={`${userData.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-green-900' : 'bg-green-100'}`}>
                <FolderOpen className={`w-6 h-6 ${userData.theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <div className="ml-4">
                <p className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active Projects
                </p>
                <p className={`text-2xl font-bold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  12
                </p>
              </div>
            </div>
          </div>
          <div className={`${userData.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${userData.theme === 'dark' ? 'bg-orange-900' : 'bg-orange-100'}`}>
                <Bell className={`w-6 h-6 ${userData.theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`} />
              </div>
              <div className="ml-4">
                <p className={`text-sm font-medium ${userData.theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Notifications
                </p>
                <p className={`text-2xl font-bold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  7
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${userData.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-6`}>
          <h3 className={`text-lg font-semibold ${userData.theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>
            Weekly Project Activity
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke={userData.theme === 'dark' ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="day" stroke={userData.theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={userData.theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: userData.theme === 'dark' ? '#1f2937' : '#ffffff',
                    border: userData.theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
                    borderRadius: '8px',
                    color: userData.theme === 'dark' ? '#ffffff' : '#000000'
                  }}
                />
                <Bar dataKey="projects" fill={userData.theme === 'dark' ? '#3b82f6' : '#2563eb'} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
