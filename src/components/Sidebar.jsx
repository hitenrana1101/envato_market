import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiShoppingCart,
  FiFolder,
  FiUsers,
  FiBox,
  FiShoppingBag,
} from "react-icons/fi";
import { BiBarChart, BiHelpCircle } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { PiBrain } from "react-icons/pi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const ChildLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center pl-8 pr-3 py-1.5 text-sm rounded-xl
       ${isActive ? "text-[#2563EB]" : "text-[#6B7280] hover:text-[#111827]"}`
    }
  >
    <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3" />
    {label}
  </NavLink>
);

const DropdownItem = ({ icon: Icon, label, childrenItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#4B5563] hover:bg-gray-100"
      >
        <span className="flex items-center">
          <Icon className="mr-3 text-lg" />
          {label}
        </span>
        <span className="text-xs text-gray-400 font-semibold">
          {open ? <IoChevronUp /> : <IoChevronDown />}
        </span>
      </button>

      {open && (
        <div className="mt-1 space-y-1">
          {childrenItems.map((item) => (
            <ChildLink key={item.label} to={item.to} label={item.label} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarItem = ({ to, icon: Icon, label }) => (
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
  </NavLink>
);

const Sidebar = () => {
  return (
    <aside className="h-[230vh] w-[260px] bg-white border-r border-gray-200 flex flex-col">
      <div className="flex items-center px-6 py-5 border-b border-gray-100">
        <div className="w-9 h-9 rounded-xl bg-[#111827] flex items-center justify-center text-white text-xl font-bold">
          e
        </div>
        <span className="ml-3 text-xl font-semibold text-[#111827]">Ecme</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-xs font-semibold text-gray-400 mb-2">DASHBOARD</p>

        <SidebarItem to="/dashboard" icon={FiShoppingCart} label="Ecommerce" />

        <nav className="mt-3 space-y-1">
          <SidebarItem to="/dashboard/project" icon={FiFolder} label="Project" />
          <SidebarItem
            to="/dashboard/marketing"
            icon={BiBarChart}
            label="Marketing"
          />
          <SidebarItem
            to="/dashboard/analytic"
            icon={BiBarChart}
            label="Analytic"
          />
        </nav>

        <p className="mt-6 text-xs font-semibold text-gray-400 mb-2">
          CONCEPTS
        </p>
        <nav className="space-y-1">
          <DropdownItem
            icon={PiBrain}
            label="AI"
            childrenItems={[
              { label: "Chat", to: "/dashboard/ai/chat" },
            ]}
          />

          <DropdownItem
            icon={AiOutlineProject}
            label="Projects"
            childrenItems={[
              { label: "Scrum Board", to: "/dashboard/projects/scrum-board" },
              { label: "List", to: "/dashboard/projects/list" },
              { label: "Details", to: "/dashboard/projects/details" },
              { label: "Tasks", to: "/dashboard/projects/tasks" },
              { label: "Issue", to: "/dashboard/projects/issue" },
            ]}
          />

          <DropdownItem
            icon={FiUsers}
            label="Customer"
            childrenItems={[{ label: "List", to: "/dashboard/customer/list" }]}
          />

          <DropdownItem
            icon={FiBox}
            label="Products"
            childrenItems={[
              { label: "All Products", to: "/dashboard/products" },
            ]}
          />

          <DropdownItem
            icon={FiShoppingBag}
            label="Orders"
            childrenItems={[{ label: "All Orders", to: "/dashboard/orders" }]}
          />

          <DropdownItem
            icon={HiOutlineUserCircle}
            label="Account"
            childrenItems={[
              { label: "Profile", to: "/dashboard/account/profile" },
            ]}
          />

          <DropdownItem
            icon={BiHelpCircle}
            label="Help Center"
            childrenItems={[
              { label: "Support", to: "/dashboard/help/support" },
            ]}
          />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
