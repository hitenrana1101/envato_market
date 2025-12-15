import React from "react";
import Projects_overview from "./Projects_overview";
import { HiInformationCircle } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { FaPaperclip } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";

const Details = () => {
  const active = "Overview"; // baad me state/router se control kar sakta hai

  return (
    <div className="bg-white">
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
      <div className="px-12 mt-6 flex gap-10">
        {/* Sidebar */}
        <div className="flex flex-col gap-1">
          {/* Link 1 */}
          <button
            className={`flex items-center gap-3 w-[210px] h-[44px] px-4 rounded-2xl text-[15px] font-semibold
            ${
              active === "Overview"
                ? "bg-[#f3f6ff] border border-blue-500 text-blue-600"
                : "text-[#545454] hover:bg-gray-100"
            }`}
          >
            <HiInformationCircle className="text-[18px]" />
            <span>Overview</span>
          </button>

          {/* Link 2 */}
          <button
            className="flex items-center gap-3 w-[210px] h-[44px] px-4 rounded-2xl text-[15px] font-semibold text-[#545454] hover:bg-gray-100"
          >
            <LuNotepadText className="text-[18px]" />
            <span>Tasks</span>
          </button>

          {/* Link 3 */}
          <button
            className="flex items-center gap-3 w-[210px] h-[44px] px-4 rounded-2xl text-[15px] font-semibold text-[#545454] hover:bg-gray-100"
          >
            <FaPaperclip className="text-[16px]" />
            <span>Attachments</span>
          </button>

          {/* Link 4 */}
          <button
            className="flex items-center gap-3 w-[210px] h-[44px] px-4 rounded-2xl text-[15px] font-semibold text-[#545454] hover:bg-gray-100"
          >
            <SlCalender className="text-[16px]" />
            <span>Activities</span>
          </button>

          {/* Link 5 */}
          <button
            className="flex items-center gap-3 w-[210px] h-[44px] px-4 rounded-2xl text-[15px] font-semibold text-[#545454] hover:bg-gray-100"
          >
            <IoSettingsOutline className="text-[18px]" />
            <span>Settings</span>
          </button>
        </div>
        {/* Right side content placeholder */}
        <div className="flex-1">
          <Projects_overview />
          {/* <Routes>
            <Route path='projects/Projects_overview' element={<Projects_overview />} /> 
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
