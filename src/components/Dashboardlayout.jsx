import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

import Ecommerce from "./Ecommerce";
import Project from "./Project";
import Marketing from "./Marketing";
import Analytic from "./Analytic";
import AiChat from "./AiChat";
import Scrum_Board from "./Scrum_Board";
import List from "./List"

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="h-[72px] flex items-center justify-between px-6 border-b bg-white">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 lg:hidden">
              <span className="block w-5 h-[2px] bg-gray-700 mb-1"></span>
              <span className="block w-5 h-[2px] bg-gray-700 mb-1"></span>
              <span className="block w-5 h-[2px] bg-gray-700"></span>
            </button>

            <h2 className="text-lg font-semibold text-[#111827]">Ecommerce</h2>

            <nav className="hidden md:flex items-center gap-4 text-sm text-[#6B7280] ml-4">
              <Link to="/dashboard" className="hover:text-[#111827]">
                Overview
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">🔍</button>
            <button className="p-2 rounded-full hover:bg-gray-100">🔔</button>
            <div className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden" />
          </div>
        </header>

        <main className="flex-1 bg-gray-50">
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="project" element={<Project />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="analytic" element={<Analytic />} />

            {/* AI -> Chat */}
            <Route path="ai/chat" element={<AiChat />} />
            <Route path="projects/scrum-board" element={<Scrum_Board />} />
            <Route path="projects/List" element={<List/>}/> 

            {/* baaki routes baad mein add kar sakte ho */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
