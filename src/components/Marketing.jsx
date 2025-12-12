import React from 'react'
import { CiBag1 } from "react-icons/ci";
import bargraph from "../assets/bar_graph.png"
import lead_score from "../assets/lead_score.png"

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
    <div className='p-6'>

      {/* ========= KPI SUMMARY BOX ========= */}
      <div className='bg-white border border-gray-300 rounded-[12px] h-[277.99px] w-[1165.2px] ml-5'>
        <div>
          <h2 className='text-[20px] text-[#171717] font-bold ml-3 p-3 '>Kpi summary</h2>
        </div>

        <div className='flex justify-around mt-5'>
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className='bg-[#ffccd3] w-[48px] h-[48px] rounded-full flex justify-center items-center'>
                <CiBag1 className='w-[24px] h-[24px]' />
              </div>
              <p className='text-[#737373] mt-8'>
                {i === 1 && "Total marketing spend"}
                {i === 2 && "ROI"}
                {i === 3 && "Conversion rates"}
                {i === 4 && "Total leads"}
              </p>
              <h2 className='text-[24px] font-bold'>
                {i === 1 && "$192,817"}
                {i === 2 && "270%"}
                {i === 3 && "4.5%"}
                {i === 4 && "1,289"}
              </h2>
              <p className='text-[#737373]'>
                <span className='text-[#10b981] font-medium'>
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
      <div className='flex'>
        <div className=' bg-white w-[770px] h-[577px] border border-gray-300 shadow rounded-[12px] p-7 m-6'>
          <div className='flex justify-between'>
            <h2 className='text-[20px] text-[#171717]'>Ads performance</h2>
            <div className='bg-[#f5f5f5] p-2 rounded-[12px] text-[#737373] '>
              <button className='mr-3 text-[#171717] font-bold shadow bg-white rounded-[8px] p-1'>All</button>
              <button className='mr-3 text-[#737373] font-medium'>Campaign</button>
              <button className='text-[#737373] font-medium'>Email</button>
            </div>
          </div>

          <div>
            <img src={bargraph} alt="" />
          </div>
        </div>

        <div className='bg-white border border-gray-300 rounded-[12px] mt-6 h-[578.99px] p-4 shadow'>
          <h3 className='text-[20px] font-bold'>Lead performance score</h3>

          <img src={lead_score} alt="" />

          {[
            { no: 1, label: "Lead Volume", color: "bg-[#10b981]", value: "78%" },
            { no: 2, label: "Conversion Rate", color: "bg-[#f59e0b]", value: "57%" },
            { no: 3, label: "Lead Quality", color: "bg-[#FF6A55]", value: "26%" },
            { no: 4, label: "Response Time", color: "bg-[#10b981]", value: "76%" },
            { no: 5, label: "Cost per Lead", color: "bg-[#f59e0b]", value: "42%" },
          ].map((item) => (
            <div key={item.no} className='flex mt-4 gap-3'>
              <p className='border rounded-full w-[24px] h-[24px] flex justify-center items-center font-bold'>{item.no}</p>
              <h3>{item.label}</h3>
              <p className='flex-grow border-b border-dotted ml-2'></p>
              <p className={`${item.color} text-white rounded-[12px] w-[38px] flex justify-center`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========= CAMPAIGNS HEADER ========= */}
      <div className=' w-[1165px] bg-white shadow border border-gray-300 p-4 rounded-[10px] ml-6'>
        <div className='flex justify-between '>
        <h4 className='text-[20px] font-medium '>Campaigns</h4>
        <button className='bg-[#ffffff] hover:text-blue-400 hover:border hover:border-blue-400 border border-gray-300 p-2 rounded-[12px] font-medium text-[#52525D]'>
          Create campaign
        </button>
      </div>

      {/* ========= CAMPAIGN TABLE ========= */}
      <div className="  shadow rounded-[12px] mt-4 ml-6 p-4 w-[1110px]">
        <table className="min-w-full border-collapse  ">
          <thead>
            <tr className="text-gray-600 border-b ">
              <th className="py-4 text-left">Campaign</th>
              <th className="text-left">Status</th>
              <th className="text-left">Budget</th>
              <th className="text-left">Conversions</th>
              <th className="text-left">Start</th>
              <th className="text-left">End</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((item, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-4 flex items-center gap-3 ">
                  {/* Toggle */}
                  <label className="relative inline-flex cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      defaultChecked={item.toggle}
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                  </label>

                  {/* Icon */}
                  <span className="text-xl">{item.icon}</span>

                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.type}</div>
                  </div>
                </td>

                <td>
                  <span className={`px-3 py-1 rounded-full text-sm ${item.statusColor}`}>
                    {item.status}
                  </span>
                </td>

                <td>{item.budget}</td>
                <td>{item.conversions}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Marketing
