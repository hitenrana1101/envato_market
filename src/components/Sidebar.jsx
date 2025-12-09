// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiShoppingCart,
  FiFolder,
  FiUsers,
  FiBox,
  FiShoppingBag
} from "react-icons/fi";
import { BiBarChart, BiHelpCircle } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiBrain } from "react-icons/pi";

const SidebarItem = ({ to, icon: Icon, label, hasChildren }) => {
  // agar to diya hai to NavLink, warna simple button
  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm
           ${isActive ? "bg-[#EEF2FF] text-[#111827]" : "text-[#4B5563] hover:bg-gray-100"}`
        }
      >
        <span className="flex items-center">
          <Icon className="mr-3 text-lg" />
          {label}
        </span>
        {hasChildren && (
          <span className="text-xs text-gray-400 font-semibold">&#9662;</span>
        )}
      </NavLink>
    );
  }

  return (
    <button className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#4B5563] hover:bg-gray-100">
      <span className="flex items-center">
        <Icon className="mr-3 text-lg" />
        {label}
      </span>
      {hasChildren && (
        <span className="text-xs text-gray-400 font-semibold">&#9662;</span>
      )}
    </button>
  );
};

const Sidebar = () => {
  return (
    <aside className="h-[230vh] w-[260px] bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center px-6 py-5 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-[#111827] flex items-center justify-center text-white text-xl font-bold">
          e
        </div>
        <span className="ml-3 text-xl font-semibold text-[#111827]">Ecme</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Dashboard title */}
        <p className="text-xs font-semibold text-gray-400 mb-2">DASHBOARD</p>

        {/* Ecommerce button -> /dashboard */}
        <SidebarItem to="/dashboard" icon={FiShoppingCart} label="Ecommerce" />

        {/* Main items */}
        <nav className="mt-3 space-y-1">
          {/* Project -> /dashboard/project (ye hi next page kholega) */}
          <SidebarItem to="/dashboard/project" icon={FiFolder} label="Project" />
          <SidebarItem to="/dashboard/Marketing" icon={BiBarChart} label="Marketing" />
          <SidebarItem to="/dashboard/Analytic" icon={BiBarChart} label="Analytic" />
        </nav>

        {/* Concepts title */}
        <p className="mt-6 text-xs font-semibold text-gray-400 mb-2">CONCEPTS</p>
        <nav className="space-y-1">
          <SidebarItem icon={PiBrain} label="AI" hasChildren />
          <SidebarItem icon={AiOutlineProject} label="Projects" hasChildren />
          <SidebarItem icon={FiUsers} label="Customer" hasChildren />
          <SidebarItem icon={FiBox} label="Products" hasChildren />
          <SidebarItem icon={FiShoppingBag} label="Orders" hasChildren />
          <SidebarItem icon={HiOutlineUserCircle} label="Account" hasChildren />
          <SidebarItem icon={BiHelpCircle} label="Help Center" hasChildren />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
