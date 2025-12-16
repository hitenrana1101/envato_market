import React, { useState } from "react";
import Projects_overview from "./Projects_overview";
import Projects_Tasks from "./Projects_Tasks";
import Projects_Attechments from "./Projects_Attechments";
import { HiInformationCircle } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { FaPaperclip } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const Details = () => {
  const [active, setActive] = useState("Overview");

  return (
    <div className="bg-white flex flex-col items-center min-h-screen">
      {/* Top bar */}
      <div className="flex justify-between items-center p-7 border-b w-[1250px] border-gray-300">
        <h3 className="font-bold text-[24px]">EVO SaaS</h3>
        <div className="flex gap-3">
          <button className="text-[14px] text-[rgb(84,84,84)] px-4 h-[40px] rounded-[12px] border border-gray-300 font-semibold">
            Share
          </button>
          <button className="text-[14px] text-white bg-blue-600 px-5 h-[40px] rounded-[12px] font-semibold">
            Edit
          </button>
        </div>
      </div>

      {/* Sidebar + content wrapper */}
      <div className="px-12 mt-6 flex gap-10 w-[1250px]">
        {/* Sidebar */}
        <div className="flex flex-col gap-1 w-[210px] flex-shrink-0">
          <button
            onClick={() => setActive("Overview")}
            className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
              active === "Overview"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <HiInformationCircle className="text-[18px]" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActive("Tasks")}
            className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
              active === "Tasks"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <LuNotepadText className="text-[18px]" />
            <span>Tasks</span>
          </button>

          <button
            onClick={() => setActive("Attachments")}
            className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
              active === "Attachments"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <FaPaperclip className="text-[16px]" />
            <span>Attachments</span>
          </button>

          <button
            onClick={() => setActive("Activities")}
            className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
              active === "Activities"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <SlCalender className="text-[16px]" />
            <span>Activities</span>
          </button>

          <button
            onClick={() => setActive("Settings")}
            className={`flex items-center gap-3 h-[44px] px-4 rounded-2xl text-[15px] font-semibold w-full ${
              active === "Settings"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <IoSettingsOutline className="text-[18px]" />
            <span>Settings</span>
          </button>
        </div>

        {/* Right side content */}
        <div className="flex-1 min-w-0">
          {active === "Overview" && <Projects_overview />}
          {active === "Tasks" && <Projects_Tasks />}
          {active === "Attachments" && <Projects_Attechments />}
          {active === "Activities" && <div>Activities content here</div>}
          {active === "Settings" && <div>Settings content here</div>}
        </div>
      </div>
    </div>
  );
};

export default Details;
