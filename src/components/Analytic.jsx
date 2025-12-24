 import React from "react";
import apex_graph from "../assets/apex_graph.png";
import { TbUsers } from "react-icons/tb";
import { BiCoinStack } from "react-icons/bi";
import { LuMousePointerClick } from "react-icons/lu";

const Analytic = () => {
  return (
    // FULL PAGE BACKGROUND + CENTERED CONTAINER
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-3 sm:px-4 lg:px-6 py-4">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-1 sm:px-2">
          <div>
            <h1 className="text-[18px] sm:text-[20px] font-bold">
              Analytic overview
            </h1>
            <p className="text-[#737373] text-[13px] sm:text-[14px]">
              Explore the metrics to understand trends and drive.
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <h3 className="text-[#737373] text-[13px] sm:text-[14px]">
              Show by:
            </h3>
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
              {/* ... Top pages content as in your code ... */}
            </div>

            {/* Session devices */}
            <div className="flex-1 border border-gray-200 rounded-[14px] shadow p-4 sm:p-5 flex flex-col items-center">
              {/* ... Session devices content as in your code ... */}
            </div>

            {/* Top channel */}
            <div className="flex-1 border border-gray-200 rounded-[14px] shadow p-4 sm:p-5">
              {/* ... Top channel content as in your code ... */}
            </div>
          </div>
        </div>

        {/* Traffic data – bottom card */}
        <div className="px-1 sm:px-2 pb-6">
          <div className="border border-gray-200 rounded-[14px] shadow p-4 sm:p-5 mt-5">
            {/* ... Traffic data content as in your code ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytic;
