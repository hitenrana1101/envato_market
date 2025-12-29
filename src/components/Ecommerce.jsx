import React from "react";
import { Chart as Chartjs } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import linegraph from "../assets/produce_monthly.webp";
import graph from "../assets/graph.png";
import { IoCartOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { TbDeviceMobileMessage } from "react-icons/tb";

// Country Item Component
const CountryItem = ({ flag, name, percentage, barWidth, barColor }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-xl flex-shrink-0">
      {flag}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-sm font-medium text-[#111827]">{name}</p>
        <span className="text-sm font-semibold text-[#111827] ml-4">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
        <div 
          className={`h-full ${barColor} rounded-full transition-all duration-300`}
          style={{ width: barWidth }}
        />
      </div>
    </div>
  </div>
);

// Order Card Component - For Mobile/Tablet
const OrderCard = ({ orderId, status, statusColor, date, customer, amount }) => (
  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:shadow-md transition">
    <div className="flex justify-between items-start mb-3">
      <div>
        <p className="text-xs text-gray-500 mb-1">Order ID</p>
        <p className="font-semibold text-sm text-[#111827]">{orderId}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
        {status}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-3 mb-3">
      <div>
        <p className="text-xs text-gray-500 mb-1">Date</p>
        <p className="text-sm text-[#111827] font-medium">{date}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">Amount</p>
        <p className="text-sm text-[#111827] font-bold">{amount}</p>
      </div>
    </div>

    <div>
      <p className="text-xs text-gray-500 mb-1">Customer</p>
      <p className="text-sm text-[#111827] font-medium">{customer}</p>
    </div>
  </div>
);

const Ecommerce = () => {
  return (
    <div className="space-y-6 p-6">
      {/* MAIN GRID: LEFT OVERVIEW CARD + RIGHT SIDEBAR */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-6">
        {/* LEFT: FULL OVERVIEW WHITE CARD WITH TOP COUNTRIES INSIDE */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-[#111827]">Overview</h1>
            <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151] flex items-center gap-1">
              Monthly <span className="text-xs">▼</span>
            </button>
          </div>

          {/* 3 stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <StatCard title="Total profit" value="$82,373.21" change="+3.4%" changeColor="text-emerald-500" />
            <StatCard title="Total order" value="7,234" change="-2.8%" changeColor="text-red-500" />
            <StatCard title="Impression" value="3.1M" change="+4.6%" changeColor="text-emerald-500" />
          </div>

          {/* Line chart box */}
          <div className="rounded-2xl border border-gray-100 p-4 md:p-6 mb-6">
            <div className="h-[260px] md:h-[320px] flex items-end">
              <div className="w-full h-full rounded-xl bg-gradient-to-t from-blue-100 via-blue-50 to-transparent relative overflow-hidden">
                <img src={linegraph} alt="Line chart" className="w-full h-full object-contain" />
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

          {/* TOP COUNTRIES */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#111827]">Top countries</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src={graph} alt="World map" className="w-full max-w-[350px] h-auto object-contain opacity-30" />
              </div>

              <div className="space-y-4">
                <CountryItem flag="🇺🇸" name="United States" percentage="38.61" barWidth="77%" barColor="bg-blue-500" />
                <CountryItem flag="🇧🇷" name="Brazil" percentage="32.79" barWidth="66%" barColor="bg-blue-500" />
                <CountryItem flag="🇮🇳" name="India" percentage="26.42" barWidth="53%" barColor="bg-blue-500" />
                <CountryItem flag="🇬🇧" name="United Kingdom" percentage="17.42" barWidth="35%" barColor="bg-blue-500" />
                <CountryItem flag="🇹🇷" name="Turkey" percentage="12.85" barWidth="26%" barColor="bg-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* Sales target */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111827]">Sales target</h2>
              <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151] flex items-center gap-1 bg-gray-50">
                Monthly <span className="text-xs">▼</span>
              </button>
            </div>
            <p className="text-2xl font-semibold text-[#111827]">
              1.3K <span className="text-sm text-gray-400">/ 1.8K Units</span>
            </p>
            <p className="mt-2 text-sm text-gray-400">Made this month year</p>

            <div className="mt-4 flex justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                  <circle cx="64" cy="64" r="56" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="351.86" strokeDashoffset="88" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#111827]">75%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top product list */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-[#111827]">Top product</h2>
              <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151]">View all</button>
            </div>

            <div className="space-y-3">
              <TopProduct name="Maneki Neko Poster" sold="1249" change="+15.2%" changeColor="bg-emerald-100 text-emerald-600" />
              <TopProduct name="Echoes Necklace" sold="1145" change="+13.9%" changeColor="bg-emerald-100 text-emerald-600" />
              <TopProduct name="Spiky Ring" sold="1073" change="+9.5%" changeColor="bg-emerald-100 text-emerald-600" />
              <TopProduct name="Pastel Petals Poster" sold="1022" change="+2.3%" changeColor="bg-emerald-100 text-emerald-600" />
            </div>
          </div>

          {/* Channel revenue */}
          <div className="p-4 bg-white shadow-sm border border-gray-100 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-[#111827]">Channel revenue</h2>
              <button className="px-3 py-1.5 rounded-lg border text-sm text-[#374151] bg-gray-50">
                Monthly <span className="text-xs">▼</span>
              </button>
            </div>

            <div className="mb-4">
              <div className="text-3xl font-bold text-[#111827] mb-1">3.4%</div>
              <p className="text-xs text-gray-500">Growth Rate</p>
            </div>

            <div className="flex justify-between mb-2 text-xs font-semibold">
              <span>28%</span>
              <span>32%</span>
              <span>40%</span>
            </div>

            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-1 bg-blue-200 rounded-full" />
              <div className="flex-1 h-1 bg-green-300 rounded-full" />
              <div className="flex-1 h-1 bg-orange-200 rounded-full" />
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <IoCartOutline className="text-blue-600 text-xl" />
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CiShop className="text-green-600 text-xl" />
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <TbDeviceMobileMessage className="text-orange-600 text-xl" />
                </div>
              </div>

              <div className="flex justify-between text-center">
                <div>
                  <p className="font-semibold text-[#111827]">$2.9K</p>
                  <p className="text-xs text-gray-500">Online store</p>
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">$2.6K</p>
                  <p className="text-xs text-gray-500">Physical store</p>
                </div>
                <div>
                  <p className="font-semibold text-[#111827]">$2.1K</p>
                  <p className="text-xs text-gray-500">Social Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS - RESPONSIVE */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">Recent orders</h3>
          <button className="border border-gray-300 rounded-lg px-4 py-1.5 text-sm hover:bg-gray-50">
            View Orders
          </button>
        </div>

        {/* Desktop: Table View */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-gray-500 border-b">
                <th className="text-left pb-3 font-medium">Order</th>
                <th className="text-left pb-3 font-medium">Status</th>
                <th className="text-left pb-3 font-medium">Date</th>
                <th className="text-left pb-3 font-medium">Customer</th>
                <th className="text-right pb-3 font-medium">Amount spent</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <OrderRow orderId="#92627" status="Paid" statusColor="text-green-600" date="09/07/2025" customer="Tara Fletcher" amount="$279.00" />
              <OrderRow orderId="#92628" status="Pending" statusColor="text-orange-500" date="09/07/2025" customer="John Doe" amount="$156.00" />
              <OrderRow orderId="#92629" status="Paid" statusColor="text-green-600" date="09/07/2025" customer="Jane Smith" amount="$423.00" />
              <OrderRow orderId="#92630" status="Paid" statusColor="text-green-600" date="09/07/2025" customer="Bob Wilson" amount="$189.00" />
              <OrderRow orderId="#92631" status="Pending" statusColor="text-orange-500" date="09/07/2025" customer="Alice Brown" amount="$312.00" />
              <OrderRow orderId="#92632" status="Failed" statusColor="text-red-500" date="09/07/2025" customer="Mike Davis" amount="$245.00" />
              <OrderRow orderId="#92633" status="Paid" statusColor="text-green-600" date="09/07/2025" customer="Sarah Miller" amount="$567.00" />
            </tbody>
          </table>
        </div>

        {/* Mobile/Tablet: Card View */}
        <div className="lg:hidden space-y-4">
          <OrderCard orderId="#92627" status="Paid" statusColor="bg-green-100 text-green-700" date="09/07/2025" customer="Tara Fletcher" amount="$279.00" />
          <OrderCard orderId="#92628" status="Pending" statusColor="bg-orange-100 text-orange-600" date="09/07/2025" customer="John Doe" amount="$156.00" />
          <OrderCard orderId="#92629" status="Paid" statusColor="bg-green-100 text-green-700" date="09/07/2025" customer="Jane Smith" amount="$423.00" />
          <OrderCard orderId="#92630" status="Paid" statusColor="bg-green-100 text-green-700" date="09/07/2025" customer="Bob Wilson" amount="$189.00" />
          <OrderCard orderId="#92631" status="Pending" statusColor="bg-orange-100 text-orange-600" date="09/07/2025" customer="Alice Brown" amount="$312.00" />
          <OrderCard orderId="#92632" status="Failed" statusColor="bg-red-100 text-red-600" date="09/07/2025" customer="Mike Davis" amount="$245.00" />
          <OrderCard orderId="#92633" status="Paid" statusColor="bg-green-100 text-green-700" date="09/07/2025" customer="Sarah Miller" amount="$567.00" />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, changeColor }) => (
  <div className="bg-gray-50 rounded-xl p-4">
    <p className="text-xs text-gray-600 mb-1">{title}</p>
    <p className="text-2xl font-bold text-[#111827] mb-1">{value}</p>
    <p className={`text-xs font-medium ${changeColor}`}>
      {change} <span className="text-gray-400 font-normal">from last month</span>
    </p>
  </div>
);

const TopProduct = ({ name, sold, change, changeColor }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-gray-100" />
      <div>
        <p className="text-sm font-medium text-[#111827]">{name}</p>
        <p className="text-xs text-gray-500">Sold: {sold}</p>
      </div>
    </div>
    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${changeColor}`}>
      {change}
    </span>
  </div>
);

const OrderRow = ({ orderId, status, statusColor, date, customer, amount }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="py-4 text-gray-600 font-medium">{orderId}</td>
    <td className="py-4">
      <span className={`${statusColor} font-semibold`}>{status}</span>
    </td>
    <td className="py-4 text-gray-600">{date}</td>
    <td className="py-4 text-gray-600">{customer}</td>
    <td className="py-4 text-right font-semibold text-[#111827]">{amount}</td>
  </tr>
);

export default Ecommerce;