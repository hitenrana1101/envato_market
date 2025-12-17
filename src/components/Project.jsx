import React from "react";
import { MdPowerSettingsNew } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import graph from "../assets/graph_list.png";

const OverviewCards = () => {
  const cards = [
    { label: "Ongoing project", value: 12, bg: "bg-[#E5F3FF]" },
    { label: "Project completed", value: 68, bg: "bg-[#E5FFEF]" },
    { label: "Upcoming project", value: 7, bg: "bg-[#F4E8FF]" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-[18px] sm:text-[20px] font-semibold text-[#171717]">
          Overview
        </h1>
        <button className="px-3 py-1 text-[12px] font-semibold border border-gray-200 rounded-lg hover:bg-gray-50">
          All projects
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {cards.map((c, i) => (
          <div
            key={i}
            className={`${c.bg} flex items-center justify-between rounded-xl px-4 py-3 sm:py-4`}
          >
            <div>
              <p className="text-[12px] font-medium text-gray-600">
                {c.label}
              </p>
              <p className="text-[28px] sm:text-[36px] font-bold text-gray-900">
                {c.value}
              </p>
            </div>
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white">
              <MdPowerSettingsNew className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScheduleGantt = () => {
  const rows = [
    { group: "Design", items: ["User research", "Design system", "Prototype"] },
    {
      group: "Development",
      items: ["Infra architecture", "Develop core modules", "Integrate modules"],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-4">
      <h2 className="text-[16px] font-semibold text-[#171717] mb-4">
        Schedule
      </h2>
      <div className="border rounded-xl overflow-hidden">
        <div className="flex text-[11px] sm:text-[12px] text-gray-500 border-b bg-gray-50">
          <div className="w-32 sm:w-48 px-3 sm:px-4 py-2">Name</div>
          <div className="flex-1 grid grid-cols-7 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="py-2 border-l">
                {d}
              </div>
            ))}
          </div>
        </div>

        <div className="divide-y text-[11px] sm:text-[12px]">
          {rows.map((row) => (
            <div key={row.group} className="flex">
              <div className="w-32 sm:w-48 px-3 sm:px-4 py-3 font-semibold text-[#171717]">
                {row.group}
              </div>
              <div className="flex-1 relative px-3 sm:px-4 py-3">
                <div className="absolute inset-0 grid grid-cols-7">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="border-l border-dashed border-gray-200"
                    />
                  ))}
                </div>
                <div className="relative flex flex-col gap-2">
                  <div className="h-3 sm:h-4 w-3/4 rounded-full bg-[#FACC15]/80" />
                  <div className="h-3 sm:h-4 w-1/3 rounded-full bg-[#FDBA74]/80" />
                  <div className="h-3 sm:h-4 w-1/2 rounded-full bg-[#22C55E]/70" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MiniCalendar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3 sm:mb-4 text-[13px] sm:text-[14px]">
        <button className="p-1 rounded hover:bg-gray-100">&lt;</button>
        <span className="font-semibold">Dec 2025</span>
        <button className="p-1 rounded hover:bg-gray-100">&gt;</button>
      </div>

      <div className="grid grid-cols-7 text-[10px] sm:text-[11px] text-gray-400 mb-2 gap-y-1">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d} className="text-center">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-[11px] sm:text-[12px] gap-y-1">
        {Array.from({ length: 35 }).map((_, i) => {
          const day = i + 1;
          const isCurrent = day === 8;
          return (
            <div key={i} className="flex justify-center">
              {day > 0 && day <= 31 && (
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full ${
                    isCurrent
                      ? "bg-[#2563EB] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {day}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TodaySchedule = () => {
  const events = [
    {
      title: "Daily standup",
      type: "Meeting",
      time: "10:00 AM",
      color: "bg-[#E5F3FF]",
      text: "text-[#2563EB]",
      icon: IoVideocamOutline,
    },
    {
      title: "Lunch break",
      type: "Break",
      time: "12:00 PM",
      color: "bg-[#FFF4D6]",
      text: "text-[#EA580C]",
      icon: IoVideocamOutline,
    },
    {
      title: "Townhall",
      type: "Event",
      time: "03:00 PM",
      color: "bg-[#DCFCE7]",
      text: "text-[#16A34A]",
      icon: IoVideocamOutline,
    },
    {
      title: "Write daily report",
      type: "Task",
      time: "05:00 PM",
      color: "bg-[#F3E8FF]",
      text: "text-[#7C3AED]",
      icon: IoVideocamOutline,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 mt-4">
      <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#171717] mb-3 sm:mb-4">
        Schedule today
      </h3>
      <div className="space-y-3 text-[12px] sm:text-[13px]">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg ${e.color} ${e.text}`}
              >
                <e.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="font-medium text-[#171717]">{e.title}</p>
                <p className="text-gray-500 text-[11px] sm:text-[12px]">
                  {e.type}
                </p>
              </div>
            </div>
            <span className="text-[11px] sm:text-[12px] text-gray-500">
              {e.time}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-4 sm:mt-5 w-full text-[13px] py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-blue-600 font-medium text-[14px] hover:border hover:border-blue-500">
        Add event
      </button>
    </div>
  );
};

const ProjectDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F4F5F7] px-3 sm:px-6 lg:px-10 py-6 sm:py-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left side: overview + schedule */}
        <div className="flex-1">
          <OverviewCards />
          <ScheduleGantt />
        </div>

        {/* Right side: calendar + today schedule */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <MiniCalendar />
          <TodaySchedule />
        </div>
      </div>

      {/* Bottom three cards */}
      <div className="max-w-6xl mx-auto mt-8 sm:mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {/* Current tasks */}
        <div className="bg-white border border-gray-300 rounded-[12px] h-auto md:h-[492px] p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-[18px] sm:text-[20px] font-medium">
              Current tasks
            </h3>
            <button className="border border-gray-500 text-xs sm:text-sm text-gray-400 font-medium rounded-[6px] px-2 py-1 hover:text-blue-400 hover:border-blue-400">
              All tasks
            </button>
          </div>

          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="mt-6 flex justify-between items-center text-sm"
            >
              <div className="flex items-center">
                <SiTicktick className="text-gray-400 mr-2 w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] hover:text-blue-500" />
                <div>
                  <h3 className="text-[14px] sm:text-[15px] font-medium">
                    Unable to upload file
                  </h3>
                  <p className="text-[12px] sm:text-[14px] text-gray-500">
                    August 05
                  </p>
                </div>
              </div>
              <div
                className={`${
                  i % 2 === 0 ? "bg-pink-200 w-[48px]" : "bg-orange-200 w-[60px]"
                } text-center rounded-[8px] px-2 py-1 h-fit text-[11px] sm:text-[12px] font-medium`}
              >
                {i % 2 === 0 ? "High" : "Medium"}
              </div>
            </div>
          ))}
        </div>

        {/* Task overview */}
        <div className="bg-white border border-gray-300 rounded-[12px] h-auto md:h-[492px] p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] sm:text-[20px] font-medium">
              Task Overview
            </h1>
            <div className="bg-[#f5f5f5] p-1 sm:p-2 rounded-[8px] text-xs sm:text-sm">
              <button className="mr-2 text-gray-500">Daily</button>
              <button className="bg-white px-2 py-1 rounded-[6px] shadow">
                Weekly
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-4 sm:mt-5 text-sm sm:text-base">
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-medium">213</h3>
              <p className="text-gray-500 text-[12px] sm:text-[14px]">
                Total Tasks
              </p>
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-medium">126</h3>
              <p className="text-gray-500 text-[12px] sm:text-[14px]">
                On Going
              </p>
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] font-medium">87</h3>
              <p className="text-gray-500 text-[12px] sm:text-[14px]">
                Finished
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <img src={graph} alt="Task graph" className="w-full h-auto" />
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white border border-gray-300 rounded-[12px] h-auto md:h-[492px] p-4 sm:p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-[18px] sm:text-[20px] font-medium">
              Recent activity
            </h1>
            <button className="border border-gray-500 rounded-[6px] px-2 py-1 text-xs sm:text-sm mb-auto font-medium text-gray-400 hover:text-blue-400 hover:border-blue-400">
              View All
            </button>
          </div>

          {/* Item 1 */}
          <div className="flex mt-6">
            <div>
              <h3 className="bg-[#bedbff] font-medium p-1 text-center w-[30px] h-[30px] text-[12px] rounded-full mr-4">
                AG
              </h3>
            </div>
            <div>
              <h1 className="font-medium text-sm sm:text-base">
                Angelina Gotelli
              </h1>
              <p className="text-[#737373] text-[11px] sm:text-[12px] font-medium">
                08:50 PM
              </p>
            </div>
          </div>
          <div className="ml-10 sm:ml-12 mt-1 text-[12px] sm:text-[13px]">
            <p className="text-[#737373]">
              has change{" "}
              <span className="font-medium text-black text-[13px] sm:text-[14px]">
                PD-979
              </span>{" "}
              status to
            </p>
            <h3 className="text-[14px] font-bold">Completed</h3>
          </div>

          {/* Item 2 */}
          <div className="flex mt-6">
            <div>
              <h3 className="bg-[#bedbff] font-medium p-1 text-center w-[30px] h-[30px] text-[12px] rounded-full mr-4">
                HR
              </h3>
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">Max Alexander</h3>
              <p className="text-[11px] sm:text-[12px] font-bold text-[#737373]">
                08:23 PM
              </p>
            </div>
          </div>
          <div className="mt-1 ml-10 sm:ml-12 text-[12px] sm:text-[13px] text-[#737373]">
            <p>
              comment on your{" "}
              <span className="text-black font-medium">Post</span>
            </p>
          </div>

          <div className="bg-[#f5f5f5] w-full sm:w-[285px] h-auto mt-4 p-4 rounded-[12px] ml-4 sm:ml-10 text-[12px] sm:text-[13px] text-[#737373]">
            <p>
              Fine, Java MIGHT be a good example of what a programming language
              should be like. But Java applications are good examples of what
              applications SHOULDN'T be like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;
