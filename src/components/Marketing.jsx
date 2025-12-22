import React from "react";
import { CiBag1 } from "react-icons/ci";
import bargraph from "../assets/bar_graph.png";
import lead_score from "../assets/lead_score.png";

const campaigns = [
  {
    toggle: false,
    icon: "🎯",
    title: "Summer Sale",
    type: "Promotional",
    status: "Completed",
    budget: "$20,000",
    conversions: "50%",
    start: "28 Nov 2025",
    end: "11 Dec 2025",
    statusColor: "bg-green-200 text-green-700",
  },
  {
    toggle: true,
    icon: "🏫",
    title: "Back-to-School Promo",
    type: "Seasonal",
    status: "Active",
    budget: "$15,000",
    conversions: "35%",
    start: "03 Dec 2025",
    end: "12 Dec 2025",
    statusColor: "bg-blue-200 text-blue-700",
  },
  {
    toggle: true,
    icon: "🛍️",
    title: "New Product Launch",
    type: "Seasonal",
    status: "Active",
    budget: "$30,000",
    conversions: "60%",
    start: "06 Dec 2025",
    end: "14 Dec 2025",
    statusColor: "bg-blue-200 text-blue-700",
  },
  {
    toggle: false,
    icon: "🎁",
    title: "Holiday Gift Guide",
    type: "Launch",
    status: "Disabled",
    budget: "$50,000",
    conversions: "0%",
    start: "08 Dec 2025",
    end: "12 Dec 2025",
    statusColor: "bg-gray-200 text-gray-600",
  },
  {
    toggle: true,
    icon: "🏷️",
    title: "Clearance Sale",
    type: "Promotional",
    status: "Active",
    budget: "$10,000",
    conversions: "20%",
    start: "03 Dec 2025",
    end: "12 Dec 2025",
    statusColor: "bg-blue-200 text-blue-700",
  },
];

const Marketing = () => {
  return (
    // FULL PAGE BACKGROUND + CENTERED CONTAINER
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto p-3 sm:p-4 md:p-6">
        {/* ========= KPI SUMMARY BOX ========= */}
        <div className="bg-white border border-gray-300 rounded-[12px] w-full">
          <div>
            <h2 className="text-[18px] sm:text-[20px] text-[#171717] font-bold px-4 py-3">
              Kpi summary
            </h2>
          </div>

          <div className="mt-2 sm:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 pb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="bg-[#ffccd3] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center">
                  <CiBag1 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-[#737373] mt-3 text-xs sm:text-sm md:text-base">
                  {i === 1 && "Total marketing spend"}
                  {i === 2 && "ROI"}
                  {i === 3 && "Conversion rates"}
                  {i === 4 && "Total leads"}
                </p>
                <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-bold">
                  {i === 1 && "$192,817"}
                  {i === 2 && "270%"}
                  {i === 3 && "4.5%"}
                  {i === 4 && "1,289"}
                </h2>
                <p className="text-[#737373] text-xs sm:text-sm">
                  <span className="text-[#10b981] font-medium mr-1">
                    {i === 1 && "+5.3%"}
                    {i === 2 && "+8.1%"}
                    {i === 3 && "+0.9%"}
                    {i === 4 && "+16.2%"}
                  </span>
                  vs last month
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========= ADS + LEAD SCORE BOXES ========= */}
        <div className="mt-6 flex flex-col xl:flex-row gap-6">
          {/* Ads performance */}
          <div className="bg-white w-full xl:flex-[2] border border-gray-300 shadow rounded-[12px] p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="text-[18px] sm:text-[20px] text-[#171717]">
                Ads performance
              </h2>
              <div className="bg-[#f5f5f5] p-1 sm:p-2 rounded-[12px] text-[#737373] flex items-center text-xs sm:text-sm">
                <button className="mr-2 sm:mr-3 text-[#171717] font-bold shadow bg-white rounded-[8px] px-2 py-1">
                  All
                </button>
                <button className="mr-2 sm:mr-3 text-[#737373] font-medium">
                  Campaign
                </button>
                <button className="text-[#737373] font-medium">Email</button>
              </div>
            </div>

            <div className="mt-4">
              <img
                src={bargraph}
                alt="Ads performance graph"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Lead performance */}
          <div className="bg-white w-full xl:flex-1 border border-gray-300 rounded-[12px] p-4 sm:p-5 shadow">
            <h3 className="text-[18px] sm:text-[20px] font-bold mb-3">
              Lead performance score
            </h3>

            <img
              src={lead_score}
              alt="Lead performance score"
              className="w-full h-auto object-contain mb-4"
            />

            {[
              { no: 1, label: "Lead Volume", color: "bg-[#10b981]", value: "78%" },
              {
                no: 2,
                label: "Conversion Rate",
                color: "bg-[#f59e0b]",
                value: "57%",
              },
              {
                no: 3,
                label: "Lead Quality",
                color: "bg-[#FF6A55]",
                value: "26%",
              },
              {
                no: 4,
                label: "Response Time",
                color: "bg-[#10b981]",
                value: "76%",
              },
              {
                no: 5,
                label: "Cost per Lead",
                color: "bg-[#f59e0b]",
                value: "42%",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="flex items-center mt-3 gap-2 sm:gap-3 text-xs sm:text-sm"
              >
                <p className="border rounded-full w-6 h-6 flex justify-center items-center font-bold text-[10px]">
                  {item.no}
                </p>
                <h3 className="text-xs sm:text-sm md:text-base">{item.label}</h3>
                <p className="flex-grow border-b border-dotted ml-1 sm:ml-2"></p>
                <p
                  className={`${item.color} text-white rounded-[12px] px-2 py-1`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========= CAMPAIGNS HEADER + TABLE ========= */}
        <div className="mt-6 bg-white shadow border border-gray-300 p-4 sm:p-5 rounded-[10px]">
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            <h4 className="text-[18px] sm:text-[20px] font-medium">Campaigns</h4>
            <button className="bg-[#ffffff] hover:text-blue-400 hover:border hover:border-blue-400 border border-gray-300 px-3 py-2 rounded-[12px] font-medium text-[#52525D] text-sm">
              Create campaign
            </button>
          </div>

          {/* Mobile cards */}
          <div className="mt-4 space-y-3 sm:hidden">
            {campaigns.map((item, i) => (
              <div
                key={i}
                className="border rounded-[10px] p-3 text-sm flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.type}</div>
                    </div>
                  </div>
                  <label className="relative inline-flex cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={item.toggle}
                    />
                    <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition"></div>
                    <div className="absolute left-1 top-1 w-3.5 h-3.5 bg-white rounded-full peer-checked:translate-x-4.5 transition"></div>
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className={`px-3 py-1 rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                  <span>Budget: {item.budget}</span>
                  <span>Conv: {item.conversions}</span>
                  <span>
                    {item.start} – {item.end}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="mt-4 overflow-x-auto hidden sm:block">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="text-gray-600 border-b text-xs sm:text-sm">
                  <th className="py-3 px-2 text-left">Campaign</th>
                  <th className="px-2 text-left">Status</th>
                  <th className="px-2 text-left">Budget</th>
                  <th className="px-2 text-left">Conversions</th>
                  <th className="px-2 text-left">Start</th>
                  <th className="px-2 text-left">End</th>
                </tr>
              </thead>

              <tbody>
                {campaigns.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 whitespace-nowrap"
                  >
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-3">
                        {/* Toggle */}
                        <label className="relative inline-flex cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={item.toggle}
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                        </label>

                        {/* Icon + title */}
                        <span className="text-xl">{item.icon}</span>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-xs text-gray-500">
                            {item.type}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-2">{item.budget}</td>
                    <td className="px-2">{item.conversions}</td>
                    <td className="px-2">{item.start}</td>
                    <td className="px-2">{item.end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
