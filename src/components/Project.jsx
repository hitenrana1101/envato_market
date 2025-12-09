import React from "react";
import { MdPowerSettingsNew } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import graph from "../assets/graph_list.png"

const OverviewCards = () => {
    const cards = [
        { label: "Ongoing project", value: 12, bg: "bg-[#E5F3FF]" },
        { label: "Project completed", value: 68, bg: "bg-[#E5FFEF]" },
        { label: "Upcoming project", value: 7, bg: "bg-[#F4E8FF]" },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-[20px] font-semibold text-[#171717]">Overview</h1>
                <button className="px-3 py-1 text-[12px] font-semibold border border-gray-200 rounded-lg hover:bg-gray-50">
                    All projects
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className={`${c.bg} flex items-center justify-between rounded-xl px-4 py-4`}
                    >
                        <div>
                            <p className="text-[12px] font-medium text-gray-600">
                                {c.label}
                            </p>
                            <p className="text-[36px] font-bold text-gray-900">{c.value}</p>
                        </div>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                            <MdPowerSettingsNew className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ScheduleGantt = () => {
    // dummy bars only for UI look
    const rows = [
        { group: "Design", items: ["User research", "Design system", "Prototype"] },
        {
            group: "Development",
            items: ["Infra architecture", "Develop core modules", "Integrate modules"],
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-4">
            <h2 className="text-[16px] font-semibold text-[#171717] mb-4">
                Schedule
            </h2>
            <div className="border rounded-xl overflow-hidden">
                <div className="flex text-[12px] text-gray-500 border-b bg-gray-50">
                    <div className="w-48 px-4 py-2">Name</div>
                    <div className="flex-1 grid grid-cols-7 text-center">
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                            <div key={d} className="py-2 border-l">
                                {d}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="divide-y text-[12px]">
                    {rows.map((row) => (
                        <div key={row.group} className="flex">
                            <div className="w-48 px-4 py-3 font-semibold text-[#171717]">
                                {row.group}
                            </div>
                            <div className="flex-1 relative px-4 py-3">
                                <div className="absolute inset-0 grid grid-cols-7">
                                    {Array.from({ length: 7 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="border-l border-dashed border-gray-200"
                                        />
                                    ))}
                                </div>
                                <div className="relative flex flex-col gap-2">
                                    <div className="h-4 w-3/4 rounded-full bg-[#FACC15]/80" />
                                    <div className="h-4 w-1/3 rounded-full bg-[#FDBA74]/80" />
                                    <div className="h-4 w-1/2 rounded-full bg-[#22C55E]/70" />
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
        <div className="bg-white rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4 text-[14px]">
                <button className="p-1 rounded hover:bg-gray-100">&lt;</button>
                <span className="font-semibold">Dec 2025</span>
                <button className="p-1 rounded hover:bg-gray-100">&gt;</button>
            </div>

            <div className="grid grid-cols-7 text-[11px] text-gray-400 mb-2 gap-y-1">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                    <div key={d} className="text-center">
                        {d}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 text-[12px] gap-y-1">
                {Array.from({ length: 35 }).map((_, i) => {
                    const day = i - 0 + 1;
                    const isCurrent = day === 8;
                    return (
                        <div key={i} className="flex justify-center">
                            {day > 0 && day <= 31 && (
                                <div
                                    className={`w-7 h-7 flex items-center justify-center rounded-full ${isCurrent
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
        <div className="bg-white rounded-2xl shadow-sm p-5 mt-4">
            <h3 className="text-[16px] font-semibold text-[#171717] mb-4">
                Schedule today
            </h3>
            <div className="space-y-3 text-[13px]">
                {events.map((e, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between rounded-xl"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-9 h-9 flex items-center justify-center rounded-lg ${e.color} ${e.text}`}
                            >
                                <e.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-medium text-[#171717]">{e.title}</p>
                                <p className="text-gray-500 text-[12px]">{e.type}</p>
                            </div>
                        </div>
                        <span className="text-[12px] text-gray-500">{e.time}</span>
                    </div>
                ))}
            </div>
            <button className="mt-5 w-full text-[13px] py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-blue-600 font-medium
            text-[14px] hover:border hover:border-blue-500">
                Add event
            </button>
        </div>
    );
};

const ProjectDashboard = () => {
    return (
        <div className="min-h-screen bg-[#F4F5F7] p-6">
            <div className="max-w-6xl mx-auto flex gap-6">
                {/* Left side: overview + schedule */}
                <div className="flex-1">
                    <OverviewCards />
                    <ScheduleGantt />
                </div>

                {/* Right side: calendar + today schedule */}
                <div className="w-80">
                    <MiniCalendar />
                    <TodaySchedule />
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-10 ">
                    <div className="bg-white border border-gray-300 rounded-[12px] h-[492px] w-[376.66px] p-6">
                        <div className="flex justify-between">
                            <h3 className="text-[20px] font-medium mr-[137px]">Current tasks</h3>
                            <button className="border border-gray-500 mb-auto text-gray-400 font-medium rounded-[6px] p-1
              hover:text-blue-400 hover:border hover:border-blue-400 ">All tasks</button>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="flex items-center ">
                                <SiTicktick className="text-gray-400 mr-2 w-[26px] h-[26px] hover:text-blue-500" />
                                <div>
                                    <h3 className="text-[15px] font-medium">Unable to upload file</h3>
                                    <p className="text-[14px] text-gray-500">August 05</p>
                                </div>
                            </div>
                            <div className="bg-pink-200 w-[48.55px] text-center rounded-[10px] p-[5px] h-fit text-[12px] font-medium ">High</div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="flex items-center ">
                                <SiTicktick className="text-gray-400 mr-2 w-[26px] h-[26px] hover:text-blue-500" />
                                <div>
                                    <h3 className="text-[15px] font-medium">Unable to upload file</h3>
                                    <p className="text-[14px] text-gray-500">August 05</p>
                                </div>
                            </div>
                            <div className="bg-orange-200 w-[60.55px] text-center rounded-[8px] p-[5px] h-fit text-[12px] font-medium ">Medium</div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="flex items-center ">
                                <SiTicktick className="text-gray-400 mr-2 w-[26px] h-[26px] hover:text-blue-500" />
                                <div>
                                    <h3 className="text-[15px] font-medium">Unable to upload file</h3>
                                    <p className="text-[14px] text-gray-500">August 05</p>
                                </div>
                            </div>
                            <div className="bg-pink-200 w-[48.55px] text-center rounded-[10px] p-[5px] h-fit text-[12px] font-medium ">High</div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="flex items-center ">
                                <SiTicktick className="text-gray-400 mr-2 w-[26px] h-[26px] hover:text-blue-500" />
                                <div>
                                    <h3 className="text-[15px] font-medium">Unable to upload file</h3>
                                    <p className="text-[14px] text-gray-500">August 05</p>
                                </div>
                            </div>
                            <div className="bg-pink-200 w-[48.55px] text-center rounded-[10px] p-[5px] h-fit text-[12px] font-medium ">High</div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <div className="flex items-center ">
                                <SiTicktick className="text-gray-400 mr-2 w-[26px] h-[26px] hover:text-blue-500" />
                                <div>
                                    <h3 className="text-[15px] font-medium">Unable to upload file</h3>
                                    <p className="text-[14px] text-gray-500">August 05</p>
                                </div>
                            </div>
                            <div className="bg-orange-200 w-[60.55px] text-center rounded-[8px] p-[5px] h-fit text-[12px] font-medium ">Medium</div>
                        </div>
                    </div>

                    <div className="bg-white border p-6 border-gray-300 rounded-[12px] h-[492px] w-[376.66px]">
                        <div className="flex justify-between">
                            <h1 className="text-[20px] font-medium ">Task Overview</h1>
                            <div className=" bg-[#f5f5f5] p-2 rounded-[8px]">
                                <button className=" mr-2 text-gray-500">Daily</button>
                                <button className="bg-white p-1 rounded-[6px] shadow shadow-2xs">Weekly</button>
                            </div>
                        </div>
                        <div className="flex justify-between mt-5">
                            <div>
                                <h3 className="text-[18px] font-medium">213</h3>
                                <p className="text-gray-500">Total Tasks</p>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">126</h3>
                                <p className="text-gray-500">On Going</p>
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">87</h3>
                                <p className="text-gray-500">Finished</p>
                            </div>
                        </div>
                        <div>
                            <img src={graph} alt="" />
                        </div>
                    </div>
                    <div className="bg-white border p-6  border-gray-300 rounded-[12px] h-[492px] w-[376.66px]">
                        <div className=" flex justify-between ">
                            <h1 className="text-[20px] font-medium ">Recent activity</h1>
                            <button className="border border-gray-500 rounded-[6px] p-1 mb-auto font-medium text-gray-400
                       hover:text-blue-400 hover:border hover:border-blue-400 ">View All</button>
                        </div>
                        <div className="flex mt-8 ">
                            <div>
                                <h3 className="bg-[#bedbff] font-medium p-1 text-center w-[30px] text-[12px] h-[30px] rounded-full
                            mr-5">AG</h3>
                            </div>
                            <div>
                                <h1 className="font-medium">Angelina Gotelli</h1>
                                <p className="text-[#737373] text-[12px] font-medium">08:50 PM</p>
                            </div>
                        </div>
                        <div className="ml-12">
                            <p className="text-[#737373] text-[12px]">has change <span className="font-medium text-black text-[14px]
                            ">PD-979</span> status to</p>
                            <h3 className="text-[14px] font-bold">Completed</h3>
                        </div>
                        <div className="flex mt-9">
                        <div>
                            <h3 className="bg-[#bedbff] font-medium p-1 text-center w-[30px] text-[12px] h-[30px] rounded-full
                            mr-5">HR</h3>
                        </div>
                        <div>
                            <h3 className="font-bold">Max Alexander</h3>
                            <p className="text-[12px] font-bold text-[#737373]">08:23 PM</p>
                        </div>
                        </div>
                        <div>
                            <p className="ml-12 text-[#737373]">comment on your <span className="text-black font-medium">Post</span></p>
                        </div>
                        <div className="bg-[#f5f5f5] w-[285px] h-[166px] p-[20px] rounded-[12px] ml-10 text-[#737373]">
                            <p>Fine, Java MIGHT be a good example of 
                            what a programming language should be like.
                            But Java applications are good examples of
                            what applications SHOULDN'T be like.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectDashboard;
