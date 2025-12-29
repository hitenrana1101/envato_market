import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import img from "../assets/thumb-1.jpg"

import Ecommerce from "./Ecommerce";
import Project from "./Project";
import Marketing from "./Marketing";
import Analytic from "./Analytic";
import AiChat from "./AiChat";
import Scrum_Board from "./Scrum_Board";
import List from "./List";
import Details from "./Details";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex min-h-screen bg-white overflow-x-hidden">
      {/* HEADER FIXED TOP */}
      <header className="h-[72px] flex items-center justify-between px-4 md:px-6 border-b bg-white fixed top-0 left-0 right-0 z-40">
        <div className="flex items-center gap-3">
          {/* hamburger - sirf mobile pe dikh */}
          <button
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            onClick={toggleSidebar}
          >
            <span className="block w-5 h-[2px] bg-gray-700 mb-1" />
            <span className="block w-5 h-[2px] bg-gray-700 mb-1" />
            <span className="block w-5 h-[2px] bg-gray-700" />
          </button>

          <h2 className="text-lg font-semibold text-[#111827]">Ecommerce</h2>

          <nav className="hidden md:flex items-center gap-4 text-sm text-[#6B7280] ml-4">
            <Link to="/dashboard" className="hover:text-[#111827]">
              Overview
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 text-lg">
            🔍
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 text-lg">
            🔔
          </button>
          <img src={img} alt="" className="w-9 h-9 rounded-full object-cover" />
        </div>
       </header>

        {/* SIDEBAR: desktop pe hamesha open, mobile pe slide */}
        <div
          className={`
          fixed left-0 top-[72px]
          h-[calc(100vh-72px)]
          z-30
          w-[260px]
          transform transition-transform duration-200
          bg-white
          lg:static lg:translate-x-0 lg:h-screen lg:top-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        >
          <Sidebar onLinkClick={closeSidebar} />
        </div>

        {/* MOBILE OVERLAY */}
        {sidebarOpen && (
          <div
            className="fixed inset-x-0 top-[72px] bottom-0 bg-black/30 z-20 lg:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* RIGHT CONTENT: desktop pe sidebar ki width ke hisaab se shift */}
        <div className="flex-1 flex flex-col pt-[72px] lg:ml-[20px]">
          <main className="flex-1 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="project" element={<Project />} />
              <Route path="marketing" element={<Marketing />} />
              <Route path="analytic" element={<Analytic />} />

              <Route path="ai/chat" element={<AiChat />} />
              <Route path="projects/scrum-board" element={<Scrum_Board />} />
              <Route path="projects/List" element={<List />} />
              <Route path="projects/Details" element={<Details />} />
            </Routes>
          </main>
        </div>
    </div>
  );
};

export default DashboardLayout;
