"use client"
import QuizQuestionsComponent from '@/components/AdminDashboardComponents/QuizQuestionsComponent';
import StudentsDataTableComponent from '@/components/AdminDashboardComponents/StudentsDataTableComponent';
import QuestionsManager from '@/components/QuizComponents/QuestionsManager';
import React, { useState } from 'react';

const AdminDashboardContainer = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />;
      case 'Students':
        return <StudentsDataTableComponent />;
      case 'quiz':
        return <QuestionsManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <ul className="flex flex-col py-4">
          <li
            className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
              activeComponent === 'dashboard' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveComponent('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
              activeComponent === 'users' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveComponent('Students')}
          >
            Students
          </li>
          <li
            className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
              activeComponent === 'settings' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveComponent('quiz')}
          >
            Quiz Questions
          </li>
        </ul>
      </div>

      <div className="flex-1 bg-gray-100 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div>
    <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
    <p>Welcome to the admin dashboard!</p>
  </div>
);

export default AdminDashboardContainer;
