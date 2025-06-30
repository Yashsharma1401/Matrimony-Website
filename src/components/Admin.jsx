import React, { useState } from "react";
import {
  MdPeople,
  MdSettings,
  MdPerson,
  MdCloud,
  MdShowChart,
  MdFeedback,
} from "react-icons/md";
import { FaBars } from "react-icons/fa";
import image from "../assets/images/logo.jpeg"; // your logo image
import ReportAnalytics from "./ReportAnalytics";
import FeedBackSupport from "./FeedBackSupport";
import MasterManageContent from "./MasterManageContent";
import UserSearch from "./UserSearch";
import UserMange from "./UserMange";
import ContentManage from "./ContentManage";

const UserManagementContent = () => <div className="text-lg font-bold"><UserMange /></div>;
const MasterManagementContent = () => <div className="text-lg font-bold"><MasterManageContent /></div>;
const SearchUserContent = () => <div className="text-lg font-bold"><UserSearch /></div>;
const ContentManagementContent = () => <div className="text-lg font-bold"><ContentManage /></div>;
const FeedbackSupportContent = () => <div className="text-lg font-bold"><FeedBackSupport /></div>;
const ReportsAnalyticsContent = () => <div className="text-lg font-bold"><ReportAnalytics /></div>;

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState("UserManagement");

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const menuItems = [
    { title: "User Management", icon: <MdPeople />, component: "UserManagement" },
    { title: "Master Management", icon: <MdSettings />, component: "MasterManagement" },
    { title: "Search User", icon: <MdPerson />, component: "SearchUser" },
    { title: "Content Management", icon: <MdCloud />, component: "ContentManagement" },
    { title: "Feedback and Support", icon: <MdFeedback />, component: "FeedbackSupport" },
    { title: "Reports and Analytics", icon: <MdShowChart />, component: "ReportsAnalytics" },
  ];

  const renderMainContent = () => {
    switch (activeSubItem) {
      case "UserManagement": return <UserManagementContent />;
      case "MasterManagement": return <MasterManagementContent />;
      case "SearchUser": return <SearchUserContent />;
      case "ContentManagement": return <ContentManagementContent />;
      case "FeedbackSupport": return <FeedbackSupportContent />;
      case "ReportsAnalytics": return <ReportsAnalyticsContent />;
      default: return <div className="text-lg font-bold">Welcome to Admin Panel</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen font-sans">
      {/* Navbar */}
      <div className="h-16 flex items-center justify-between px-4 bg-pink-600 text-white shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="text-2xl md:hidden"
          >
            <FaBars />
          </button>
          <h1 className="text-xl font-bold tracking-wide">Wedding Matrimony Admin</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src={image} alt="Logo" className="w-10 h-10 rounded-full border-2 border-white" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for md+ */}
        <div className="hidden md:flex flex-col w-74 bg-white border-r">
          <ul className="flex-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => setActiveSubItem(item.component)}
                  className={`w-full flex items-center px-6 py-4 hover:bg-pink-50 transition ${
                    activeSubItem === item.component ? "bg-pink-100 text-pink-600 font-semibold" : "text-gray-700"
                  }`}
                >
                  <span className="mr-3 text-xl">{item.icon}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Drawer for mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex md:hidden">
            <div className="w-74 bg-white flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={toggleSidebar} className="text-xl">
                  ✕
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setActiveSubItem(item.component);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center px-6 py-4 hover:bg-pink-50 transition ${
                        activeSubItem === item.component ? "bg-pink-100 text-pink-600 font-semibold" : "text-gray-700"
                      }`}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      <span>{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            {renderMainContent()}
          </div>
        </div>
      </div>

      {/* Bottom navigation for mobile */}
      <div className="fixed bottom-0 w-full bg-white shadow-inner border-t flex md:hidden">
        {menuItems.slice(0, 4).map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveSubItem(item.component)}
            className={`flex-1 py-2 flex flex-col items-center text-sm ${
              activeSubItem === item.component ? "text-pink-600" : "text-gray-600"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs">{item.title.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Admin;
