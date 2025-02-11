"use client"
import QuizQuestionsComponent from '@/components/AdminDashboardComponents/QuizQuestionsComponent';
import StudentsDataTableComponent from '@/components/AdminDashboardComponents/StudentsDataTableComponent';
import ListBlog from '@/components/BlogpageComponents/UploadComponents/ListBlog';
import ListCategory from '@/components/BlogpageComponents/UploadComponents/ListCategory';
import UploadBlog from '@/components/BlogpageComponents/UploadComponents/UploadBlog';
import UploadCategory from '@/components/BlogpageComponents/UploadComponents/UploadCategory';
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
      case 'ListBlog':
        return <ListBlog />;
      case 'CategoryList':
        return <ListCategory />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-[110vh] font-sans w-[100vw] ">
      <div className="w-64 bg-gray-800 min-h-[110vh] text-white flex flex-col">
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
          <li
            className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
              activeComponent === 'UploadBlog' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveComponent('ListBlog')}
          >
            Blog List
          </li>
          <li
            className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
              activeComponent === 'CategoryList' ? 'bg-gray-700' : ''
            }`}
            onClick={() => setActiveComponent('CategoryList')}
          >
            Category List
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
