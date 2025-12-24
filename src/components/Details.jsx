import React, { useState } from "react";
import Projects_overview from "./Projects_overview";
import Projects_Tasks from "./Projects_Tasks";
import Projects_Attechments from "./Projects_Attechments";
import { HiInformationCircle } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { FaPaperclip } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Details = () => {
  const [active, setActive] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { key: "Overview", label: "Overview", icon: HiInformationCircle },
    { key: "Tasks", label: "Tasks", icon: LuNotepadText },
    { key: "Attachments", label: "Attachments", icon: FaPaperclip },
    { key: "Activities", label: "Activities", icon: SlCalender },
    { key: "Settings", label: "Settings", icon: IoSettingsOutline },
  ];

  return (
    <div className="bg-white min-h-screen flex justify-center">
      {/* center container, thodi narrow width for nice responsive look */}
      <div className="w-full max-w-[1100px] flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-7 py-4 border-b border-gray-300">
          <div className="flex items-center gap-3">
            {/* mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg border border-gray-200 hover:bg-gray-100"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <RxHamburgerMenu className="text-[18px]" />
            </button>
            <h3 className="font-bold text-[20px] sm:text-[24px]">EVO SaaS</h3>
          </div>

          {/* Share / Edit buttons header me hi flex ke sath */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-[12px] sm:text-[14px] text-[rgb(84,84,84)] px-3 sm:px-4 h-[36px] sm:h-[40px] rounded-[12px] border border-gray-300 font-semibold">
              Share
            </button>
            <button className="text-[12px] sm:text-[14px] text-white bg-blue-600 px-4 sm:px-5 h-[36px] sm:h-[40px] rounded-[12px] font-semibold">
              Edit
            </button>
          </div>
        </div>

        {/* Main layout wrapper */}
        <div className="flex mt-6 px-4 sm:px-7 gap-6">
          {/* Desktop sidebar */}
          <div className="hidden md:flex flex-col gap-1 w-[210px] flex-shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
                    isActive
                      ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                      : "text-[#545454] hover:bg-gray-100"
                  }`}
                >
                  <Icon className="text-[18px]" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right side content (Projects_* components) */}
          <div className="flex-1 min-w-0">
            {active === "Overview" && <Projects_overview />}
            {active === "Tasks" && <Projects_Tasks />}
            {active === "Attachments" && <Projects_Attechments />}
            {active === "Activities" && <div>Activities content here</div>}
            {active === "Settings" && <div>Settings content here</div>}
          </div>
        </div>

        {/* Mobile / tablet off-canvas sidebar only */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setSidebarOpen(false)}
            />
            {/* drawer sidebar */}
            <div className="absolute left-0 top-0 h-full w-[240px] bg-white shadow-xl p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-[16px]">Navigation</h4>
                <button
                  className="p-1 rounded-md hover:bg-gray-100 text-sm"
                  onClick={() => setSidebarOpen(false)}
                >
                  Close
                </button>
              </div>

              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = active === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => {
                      setActive(tab.key);
                      setSidebarOpen(false);
                    }}
                    className={`flex items-center gap-3 h-[40px] px-3 rounded-xl text-[14px] font-semibold w-full ${
                      isActive
                        ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                        : "text-[#545454] hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="text-[18px]" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
