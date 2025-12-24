import React from "react";
import apex_graph from "../assets/apex_graph.png";
import { TbUsers } from "react-icons/tb";
import { BiCoinStack } from "react-icons/bi";
import { LuMousePointerClick } from "react-icons/lu";


const Analytic = () => {
  return (
    <div className="min-h-screen bg-white px-3 sm:px-4 lg:px-6 py-4">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-1 sm:px-2">
        <div>
          <h1 className="text-[18px] sm:text-[20px] font-bold">Analytic overview</h1>
          <p className="text-[#737373] text-[13px] sm:text-[14px]">
            Explore the metrics to understand trends and drive.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <h3 className="text-[#737373] text-[13px] sm:text-[14px]">Show by:</h3>
          <div className="bg-[#F5F5F5] rounded-lg px-2 py-1 text-[13px] sm:text-[14px] text-[#262626]">
            <select
              name="Monthly"
              className="border-none bg-[#F5F5F5] outline-none text-[13px] sm:text-[14px]"
            >
              <option value="monthly">Monthly</option>
              <option value="weekly">Weekly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>
      </div>


      {/* web analytic + right cards */}
      <div className="mt-5 flex flex-col lg:flex-row gap-5 px-1 sm:px-2">
        {/* Web analytic */}
        <div className="w-full lg:flex-[2] border border-gray-200 shadow p-4 sm:p-5 rounded-[10px]">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] text-[#171717]">
              Web analytic
            </h3>
            <div className="flex gap-4 text-[13px] sm:text-[14px] text-[#737373]">
              <p>Natural</p>
              <p>Referral</p>
              <p>Direct</p>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 mt-5">
            <div>
              <h3 className="text-[#737373] text-[13px] sm:text-[14px]">
                Page views
              </h3>
              <h4 className="text-[#171717] font-bold text-[20px] sm:text-[24px]">
                $32,124{" "}
                <span className="text-[#10b981] text-[12px] sm:text-[14px]">
                  +4.2%
                </span>
              </h4>
            </div>
            <div>
              <h3 className="text-[#737373] text-[13px] sm:text-[14px]">
                Avg. Time on page
              </h3>
              <h4 className="text-[#171717] font-bold text-[20px] sm:text-[24px]">
                3m 16s{" "}
                <span className="text-[#ff6a55] text-[12px] sm:text-[14px]">
                  -0.2%
                </span>
              </h4>
            </div>
          </div>


          <div className="mt-4">
            <img src={apex_graph} alt="" className="w-full h-auto" />
          </div>
        </div>


        {/* right small cards */}
        <div className="w-full lg:flex-1 flex flex-col sm:flex-row lg:flex-col gap-4">
          <div className="border rounded-[14px] border-gray-200 shadow h-[150px] sm:h-[160px] p-4 sm:p-5 flex-1">
            <div className="flex justify-between">
              <h4 className="text-[#737373] text-[14px] sm:text-[16px]">
                Visitor
              </h4>
              <div className="h-[40px] sm:h-[48px] bg-[#FFD6A7] rounded-full w-[40px] sm:w-[48px] flex justify-center items-center">
                <TbUsers className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <h4 className="font-bold text-[20px] sm:text-[24px]">
                149,328
              </h4>
              <p className="text-[#737373] text-[12px] sm:text-[14px]">
                <span className="text-[#10b981] font-bold">+5.2%</span> vs last
                month
              </p>
            </div>
          </div>


          <div className="border border-gray-200 rounded-[14px] shadow h-[150px] sm:h-[160px] p-4 sm:p-5 flex-1">
            <div className="flex justify-between">
              <h4 className="text-[#737373] text-[14px] sm:text-[16px]">
                Conversion rate
              </h4>
              <div className="h-[40px] sm:h-[48px] bg-[#A4F4CF] rounded-full w-[40px] sm:w-[48px] flex justify-center items-center">
                <BiCoinStack className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <h4 className="font-bold text-[20px] sm:text-[24px]">6.8%</h4>
              <p className="text-[#737373] text-[12px] sm:text-[14px]">
                <span className="text-[#ff6a55] font-bold">-1.8%</span> vs last
                month
              </p>
            </div>
          </div>


          <div className="border border-gray-200 rounded-[14px] shadow h-[150px] sm:h-[160px] p-4 sm:p-5 flex-1">
            <div className="flex justify-between">
              <h4 className="text-[#737373] text-[14px] sm:text-[16px]">
                Ad campaign clicks
              </h4>
              <div className="h-[40px] sm:h-[48px] bg-[#E9D4FF] rounded-full w-[40px] sm:w-[48px] flex justify-center items-center">
                <LuMousePointerClick className="h-[20px] w-[20px] sm:h-[24px] sm:w-[24px]" />
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <h4 className="font-bold text-[20px] sm:text-[24px]">
                17,333
              </h4>
              <p className="text-[#737373] text-[12px] sm:text-[14px]">
                <span className="text-[#10b981] font-bold">+2.3%</span> vs last
                month
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom section: Top pages / Session devices / Top channel */}
      <div className="px-1 sm:px-2 pt-6 pb-4">
        <div className="flex flex-col xl:flex-row gap-5">
          {/* Top pages */}
          <div className="flex-1 border border-gray-200 rounded-[14px] shadow p-4 sm:p-5">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#171717]">
                Top pages
              </h3>
              <button className="px-3 py-1 text-[11px] sm:text-[12px] border border-gray-200 rounded-[6px] text-[#171717]">
                Export data
              </button>
            </div>


            <div className="hidden md:flex text-[12px] text-[#737373] mb-2">
              <span className="w-2/5">Page URL</span>
              <span className="w-1/5">Views</span>
              <span className="w-2/5">Unique visitors</span>
            </div>


            {[
              {
                url: "/dashboard",
                views: "6465",
                vChange: "+1.7%",
                visitors: "1078",
                uvChange: "+1.2%",
              },
              {
                url: "/affiliate",
                views: "3687",
                vChange: "+1.4%",
                visitors: "801",
                uvChange: "+0.9%",
              },
              {
                url: "/contact",
                views: "2918",
                vChange: "+2.6%",
                visitors: "655",
                uvChange: "+1.4%",
              },
              {
                url: "/products",
                views: "4882",
                vChange: "-0.7%",
                visitors: "936",
                uvChange: "-0.3%",
              },
              {
                url: "/sign-in",
                views: "1527",
                vChange: "+1.1%",
                visitors: "389",
                uvChange: "+0.8%",
              },
              {
                url: "/about",
                views: "2103",
                vChange: "-0.9%",
                visitors: "450",
                uvChange: "-1.5%",
              },
            ].map((row, idx) => {
              const posV = row.vChange.startsWith("+");
              const posU = row.uvChange.startsWith("+");
              return (
                <div
                  key={idx}
                  className="border-t border-gray-100 py-2 text-[12px] sm:text-[13px]"
                >
                  {/* mobile layout */}
                  <div className="md:hidden">
                    <div className="flex justify-between">
                      <span className="font-medium text-[#171717]">
                        {row.url}
                      </span>
                      <span className="text-[#171717]">{row.views} views</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#737373] mt-1">
                      <span>Visitors: {row.visitors}</span>
                      <span>
                        <span
                          className={posV ? "text-[#10b981]" : "text-[#ff6a55]"}
                        >
                          {row.vChange}
                        </span>{" "}
                        /{" "}
                        <span
                          className={posU ? "text-[#10b981]" : "text-[#ff6a55]"}
                        >
                          {row.uvChange}
                        </span>
                      </span>
                    </div>
                  </div>


                  {/* desktop layout */}
                  <div className="hidden md:flex">
                    <span className="w-2/5 text-[#171717]">{row.url}</span>
                    <span className="w-1/5 text-[#171717]">{row.views}</span>
                    <span className="w-2/5 flex gap-2">
                      <span
                        className={posV ? "text-[#10b981]" : "text-[#ff6a55]"}
                      >
                        {row.vChange}
                      </span>
                      <span
                        className={posU ? "text-[#10b981]" : "text-[#ff6a55]"}
                      >
                        {row.uvChange}
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>


          {/* Session devices */}
          <div className="flex-1 border border-gray-200 rounded-[14px] shadow p-4 sm:p-5 flex flex-col items-center">
            <div className="flex justify-between items-center w-full mb-3 sm:mb-4">
              <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#171717]">
                Session devices
              </h3>
              <button className="px-3 py-1 text-[11px] sm:text-[12px] border border-gray-200 rounded-[6px] text-[#171717]">
                Export data
              </button>
            </div>


            <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] mt-1 mb-3 flex items-center justify-center">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    "conic-gradient(#4F46E5 0 42%, #F97316 42% 76%, #38BDF8 76% 100%)",
                }}
              ></div>
              <div className="absolute w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full bg-white"></div>
            </div>


            <div className="flex justify-around w-full mt-3 text-[12px] sm:text-[13px]">
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-[#4F46E5] mb-1"></span>
                <p className="text-[#737373]">Desktop</p>
                <p className="font-semibold text-[#171717]">42.1%</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-[#F97316] mb-1"></span>
                <p className="text-[#737373]">Mobile</p>
                <p className="font-semibold text-[#171717]">33.7%</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-[#38BDF8] mb-1"></span>
                <p className="text-[#737373]">Tablet</p>
                <p className="font-semibold text-[#171717]">19.6%</p>
              </div>
            </div>
          </div>


          {/* Top channel */}
          <div className="flex-1 border border-gray-200 rounded-[14px] shadow p-4 sm:p-5">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <div>
                <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#171717]">
                  Top channel
                </h3>
                <p className="text-[12px] sm:text-[13px] text-[#737373] mt-1">
                  Visitors
                </p>
                <h1 className="text-[24px] sm:text-[28px] font-bold text-[#171717] mt-1">
                  79,328{" "}
                  <span className="text-[#10b981] text-[13px] sm:text-[14px]">
                    +2.6%
                  </span>
                </h1>
              </div>
              <button className="px-3 py-1 text-[11px] sm:text-[12px] border border-gray-200 rounded-[6px] text-[#171717]">
                Export data
              </button>
            </div>


            <div className="hidden md:flex text-[12px] text-[#737373] mb-2">
              <span className="w-2/5">Channel</span>
              <span className="w-1/5">Percentage</span>
              <span className="w-2/5">Total</span>
            </div>


            {[
              { name: "Google", percent: "40%", total: "31,731" },
              { name: "Instagram", percent: "30%", total: "23,798" },
              { name: "Facebook", percent: "15%", total: "11,899" },
              { name: "X", percent: "13%", total: "10,313" },
            ].map((row, idx) => (
              <div
                key={idx}
                className="border-t border-gray-100 py-2 text-[12px] sm:text-[13px]"
              >
                <div className="md:hidden flex justify-between">
                  <span className="font-medium text-[#171717]">
                    {row.name}
                  </span>
                  <span className="text-[#171717]">{row.percent}</span>
                </div>
                <div className="md:hidden text-[11px] text-[#737373]">
                  Total: {row.total}
                </div>


                <div className="hidden md:flex items-center">
                  <span className="w-2/5 text-[#171717]">{row.name}</span>
                  <span className="w-1/5 text-[#171717]">
                    {row.percent}
                  </span>
                  <span className="w-2/5 text-[#171717]">{row.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Traffic data – bottom card */}
      <div className="px-1 sm:px-2 pb-6">
        <div className="border border-gray-200 rounded-[14px] shadow p-4 sm:p-5 mt-5">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#171717]">
              Traffic data
            </h3>
            <button className="px-3 py-1 text-[11px] sm:text-[12px] border border-gray-200 rounded-[6px] text-[#171717]">
              Export data
            </button>
          </div>


          {/* desktop header */}
          <div className="hidden lg:flex text-[12px] text-[#737373] mb-2">
            <span className="w-1/5">Source</span>
            <span className="w-1/5">Visits</span>
            <span className="w-1/5">Unique visitors</span>
            <span className="w-1/5">Bounce rate</span>
            <span className="w-1/5">Avg. session duration</span>
            <span className="w-1/5 text-right">Progress to goal (%)</span>
          </div>


          {[
            {
              source: "Direct",
              visits: 1500,
              unique: 1200,
              bounce: "40%",
              duration: "00:03:45",
              progress: 60,
              bar: "bg-amber-400",
            },
            {
              source: "Natural",
              visits: 3000,
              unique: 2500,
              bounce: "35%",
              duration: "00:04:20",
              progress: 75,
              bar: "bg-emerald-400",
            },
            {
              source: "Referral",
              visits: 1000,
              unique: 850,
              bounce: "45%",
              duration: "00:03:10",
              progress: 80,
              bar: "bg-emerald-400",
            },
            {
              source: "Social Media",
              visits: 2000,
              unique: 1800,
              bounce: "50%",
              duration: "00:02:50",
              progress: 40,
              bar: "bg-red-400",
            },
            {
              source: "Email Campaign",
              visits: 800,
              unique: 700,
              bounce: "30%",
              duration: "00:05:00",
              progress: 55,
              bar: "bg-amber-400",
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className="border-t border-gray-100 py-3 text-[12px] sm:text-[13px]"
            >
              {/* mobile layout */}
              <div className="lg:hidden">
                <div className="flex justify-between">
                  <span className="font-medium text-[#171717]">
                    {row.source}
                  </span>
                  <span className="text-[#171717]">{row.visits} visits</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#737373] mt-1">
                  <span>Unique: {row.unique}</span>
                  <span>Bounce: {row.bounce}</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#737373] mt-1">
                  <span>Avg. duration: {row.duration}</span>
                  <span>{row.progress}%</span>
                </div>
                <div className="mt-1 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                  <span
                    className={`block h-full ${row.bar}`}
                    style={{ width: `${row.progress}%` }}
                  ></span>
                </div>
              </div>


              {/* desktop layout */}
              <div className="hidden lg:flex items-center">
                <span className="w-1/5 text-[#171717]">{row.source}</span>
                <span className="w-1/5 text-[#171717]">{row.visits}</span>
                <span className="w-1/5 text-[#171717]">{row.unique}</span>
                <span className="w-1/5 text-[#171717]">{row.bounce}</span>
                <span className="w-1/5 text-[#171717]">{row.duration}</span>


                <span className="w-1/5 flex items-center justify-end gap-2">
                  <span className="w-[120px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
                    <span
                      className={`block h-full ${row.bar}`}
                      style={{ width: `${row.progress}%` }}
                    ></span>
                  </span>
                  <span className="text-[#171717]">{row.progress}%</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Analytic;