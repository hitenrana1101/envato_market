import React from "react";
import linegraph from "../assets/produce_monthly.webp"
import graph from "../assets/graph.png"
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { TbDeviceMobileMessage } from "react-icons/tb";


const Ecommerce = () => {
  return (
    <div className="space-y-6 p-6">
      {/* Title row */}
      <div className="flex items-center justify-baseline ">
        <h1 className="text-xl font-semibold text-[#111827]">Overview</h1>
        <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151] flex items-center gap-1 ml-[550px] ">
          Monthly
          <span className="text-xs">▼</span>
        </button>
      </div>

      {/* Top section: cards + right column */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-6">
        {/* LEFT: cards + chart */}
        <div className="space-y-6">
          {/* 3 cards row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Total profit"
              value="$82,373.21"
              change="+3.4%"
              changeColor="text-emerald-500"
            />
            <StatCard
              title="Total order"
              value="7,234"
              change="-2.8%"
              changeColor="text-red-500"
            />
            <StatCard
              title="Impression"
              value="3.1M"
              change="+4.6%"
              changeColor="text-emerald-500"
            />
          </div>

          {/* Chart box (sirf UI; baad me real chart lib use kar sakta hai) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="h-[260px] md:h-[320px] flex items-end">
              {/* fake line chart using gradient background; real project me chart.js/recharts use kar */}
              <div className="w-full h-full rounded-xl bg-gradient-to-t from-blue-100 via-blue-50 to-transparent relative overflow-hidden">
                <div>
                    <img src={linegraph} alt="" />
                </div>
                <div className="absolute inset-x-6 bottom-4 text-xs text-gray-400 flex justify-between">
                  <span>01 Jun</span>
                  <span>02 Jun</span>
                  <span>03 Jun</span>
                  <span>04 Jun</span>
                  <span>05 Jun</span>
                  <span>06 Jun</span>
                  <span>07 Jun</span>
                  <span>08 Jun</span>
                  <span>09 Jun</span>
                  <span>10 Jun</span>
                  <span>11 Jun</span>
                  <span>12 Jun</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[14px] shadow">
            <div className="">
            <h1 className="ml-4">Top contries</h1>
           </div>
           <div className="mt-[25px]">
            <div className="flex justify-between">
            <img src={graph} alt="" className="w-[500px] " />
            <div className="text-center mr-4">
                United Status 
            </div> 
            </div>
           </div>
          </div>
        </div>

        {/* RIGHT: sales target + top products */}
        <div className="space-y-6">
          {/* Sales target */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111827]">Sales target</h2>
              <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151] flex items-center gap-1 bg-gray-50">
                Monthly
                <span className="text-xs">▼</span>
              </button>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">
              1.3K <span className="text-sm text-gray-400">/ 1.8K Units</span>
            </p>
            <p className="mt-2 text-sm text-gray-400">Made this month year</p>

            {/* Circular progress placeholder */}
            <div className="mt-4 flex justify-around">
              <div className="relative w-28 h-28">
                <div className="w-full h-full rounded-full border-8 border-blue-100" />
                <div className="absolute inset-1 rounded-full border-8 border-blue-500 border-t-transparent rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-[#111827]">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top product list */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111827]">Top product</h2>
              <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151]">
                View all
              </button>
            </div>

            <div className="space-y-3">
              <TopProduct
                name="Maneki Neko Poster"
                sold="1249"
                change="+15.2%"
                changeColor="bg-emerald-100 text-emerald-600"
              />
              <TopProduct
                name="Echoes Necklace"
                sold="1145"
                change="+13.9%"
                changeColor="bg-emerald-100 text-emerald-600"
              />
              <TopProduct
                name="Spiky Ring"
                sold="1073"
                change="+9.5%"
                changeColor="bg-emerald-100 text-emerald-600"
              />
              <TopProduct
                name="Pastel Petals Poster"
                sold="1022"
                change="+2.3%"
                changeColor="bg-emerald-100 text-emerald-600"
              />
            </div>
          </div>
          {/* channel revenue */}
          <div className="p-4 bg-white shadow-xl rounded-2xl ">
            <div className="flex justify-between">
              <h1>Channel revenue</h1>
              <div> 
                <button className=" border-gray-200 w-[100px] rounded-[5px] bg-gray-100">Monthly</button>
              </div>
            </div>
            <div className="flex text-center items-center mt-5 ">
                <h1 className="text-[30px] font-bold mr-3">3.4%</h1>
                <span className="text-[12px] text-[#737373] w-[5px]">Growth Rate</span>
              </div>
              <div className="flex justify-around mt-7 text-[12px] font-bold">
                <span className=" border-t-3 border-t-blue-300 w-[70px] rounded-[2px]">28%</span>
                <span className=" border-t-3 border-t-green-300 w-[70px]">32%</span>
                <span className=" border-t-3 border-t-orange-200 w-[70px]">40%</span>
              </div>
              <div className=" text-center items-center mt-4 bg-gray-100 rounded-[12px] p-4">
                <div className="flex justify-around mt-3">
                   <IoCartOutline className="bg-blue-200 rounded-full h-8 w-8 p-2" /> 
                   <CiShop className="bg-green-300 rounded-full h-8 w-8 p-2" /> 
                   <TbDeviceMobileMessage className="bg-orange-200 rounded-full h-8 w-8 p-2" /> 
                </div>
                <div className="flex justify-around  ">
               <div className="mt-4">
                <h1 className="text-[#171717] font-medium">$2.9k</h1>
                <p className="text-[10px] text-[#737373]">Online store</p>
               </div>
               <div className="mt-4">
                <h1 className="text-[#171717] font-medium">$2.9k</h1>
                <p className="text-[10px] text-[#737373]">Physical store</p>
               </div>
               <div className="mt-4">
                <h1 className="text-[#171717] font-medium">$2.9k</h1>
                <p className="text-[10px] text-[#737373]">Social store</p>
               </div>
               </div>
              </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-[1200px] rounded-4xl shadow-2xs p-5">
        <div className="flex justify-between">
        <h3 className="font-medium text-[20px]">Recent orders</h3> 
        <button className="border border-gray-300 rounded-[5px] w-[100px]">View Orders</button>
        </div>
        <div className="text-center items-center text-[14px] justify-center">
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span>order</span>
            <span>Status</span>
            <span>Date</span>
            <span>Customer</span>
            <span>Amount spent</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-green-700 font-bold text-[14px]">Paid</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-orange-400 font-bold text-[14px]">pending</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-green-700 font-bold text-[14px]">paid</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-green-700 font-bold text-[14px]">paid</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-orange-400 font-bold text-[14px]">Pending</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-red-500 font-bold text-[14px] items-center">Failed</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="inter text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        <div className="flex justify-around mt-10 text-[12px] text-[#737373]">
            <span className="font-medium">#92627</span>
            <span className="text-green-700 font-bold text-[14px]">Paid</span>
            <span>09/07/2025</span>
            <span>Tara Flecher </span>
            <span className="text-[#171717] text-[14px] font-bold">$279.00</span>
        </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, changeColor }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="mt-2 text-2xl font-semibold text-[#111827]">{value}</p>
    <p className={`mt-1 text-xs font-medium ${changeColor}`}>
      {change} <span className="text-gray-400 font-normal">from last month</span>
    </p>
  </div>
  
);

const TopProduct = ({ name, sold, change, changeColor }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gray-100" />
      <div>
        <p className="text-sm font-medium text-[#111827]">{name}</p>
        <p className="text-xs text-gray-400">Sold: {sold}</p>
      </div>
    </div>
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${changeColor}`}
    >
      {change}
    </span>
  </div>

);


export default Ecommerce;
