"use client";

import QuizQuestionsComponent from "@/components/AdminDashboardComponents/QuizQuestionsComponent";
import StudentsDataTableComponent from "@/components/AdminDashboardComponents/StudentsDataTableComponent";
import ListBlog from "@/components/BlogpageComponents/UploadComponents/ListBlog";
import ListCategory from "@/components/BlogpageComponents/UploadComponents/ListCategory";
import UploadBlog from "@/components/BlogpageComponents/UploadComponents/UploadBlog";
import UploadCategory from "@/components/BlogpageComponents/UploadComponents/UploadCategory";
import QuestionsManager from "@/components/QuizComponents/QuestionsManager";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Loader from "@/components/Loader";
import Image from "next/image";
import { removeToken } from "@/utils/cookies";
import PrivacyAdmin from "@/components/AdminDashboardComponents/PrivacyAdminComponents/PrivacyAdmin";
import TermsAndCondition from "@/components/AdminDashboardComponents/Policies/TermsAndCondition";
import TermsOfServices from "@/components/AdminDashboardComponents/Policies/TermsOfServices";
import IntellectualPropertyPolicy from "@/components/AdminDashboardComponents/Policies/IntellectualPropertyPolicy";
import ComplianceRegulatoryPoliciesPage from "@/components/AdminDashboardComponents/Policies/ComplianceRegulatoryPolicies";
import LiabilityDisclaimerPolicy from '@/components/AdminDashboardComponents/Policies/LiabilityDisclaimerPolicy';


const AdminDashboardContainer = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  // const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleChangePage = (component) => {
    setActiveComponent(component);
  };

  const handleLogout = async () => {
    await removeToken();
    window.location.reload();
  };

  const renderContent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "Students":
        return <StudentsDataTableComponent />;
      case "quiz":
        return <QuestionsManager />;
      case "ListBlog":
        return <ListBlog />;
      case "CategoryList":
        return <ListCategory />;
      case "PrivacyPolicy":
        return <PrivacyAdmin />;
      case "TermsAndConditions":
        return <TermsAndCondition />;
      case "TermsOfServices":
        return <TermsOfServices />;
      case "IntellectualPropertyPolicy":
        return <IntellectualPropertyPolicy />;
      case "ComplianceRegulatoryPoliciesPage":
        return <ComplianceRegulatoryPoliciesPage />;
      case 'LiabilityDisclaimerPolicy':
          return <LiabilityDisclaimerPolicy/>

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen font-sans">
      <button
        className="md:hidden absolute top-4 left-4 text-gray-900"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="w-8 h-8" />
      </button>

      <div
        className={`fixed z-10 md:relative w-64 bg-gray-800 text-white flex flex-col h-screen transition-transform transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
          <span>Admin Panel</span>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col py-4">
          {[
            { name: "Dashboard", key: "dashboard" },
            { name: "Students", key: "Students" },
            { name: "Quiz Questions", key: "quiz" },
            { name: "Blog List", key: "ListBlog" },
            { name: "Category List", key: "CategoryList" },

            { name: "Privacy policies", key: "PrivacyPolicy" },
            { name: "Terms and Conditions", key: "TermsAndConditions" },
            { name: "Terms of Services", key: "TermsOfServices" },
            {
              name: "Intellectual Property Policy",
              key: "IntellectualPropertyPolicy",
            },
            {
              name: "Compliance & Regulatory Policies ",
              key: "ComplianceRegulatoryPoliciesPage",
            },
            {name:"Liability Disclaimer Policy",key:"LiabilityDisclaimerPolicy"}

          ].map((item) => (
            <li
              key={item.key}
              className={`px-6 py-3 cursor-pointer hover:bg-gray-700 ${
                activeComponent === item.key ? "bg-gray-700" : ""
              }`}
              onClick={() => handleChangePage(item.key)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <div
            className="flex items-center justify-center gap-2 bg-red-500 w-24 p-2 rounded-md "
            onClick={handleLogout}
          >
            <button className="">Logout</button>
            <Image
              src="/logOut.svg"
              height={40}
              width={40}
              alt="logout"
            ></Image>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-16 md:mt-0 bg-gray-100 p-6 overflow-y-auto h-screen">
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
