import React from 'react'
import apex_graph from '../assets/apex_graph.png'
import { TbUsers } from "react-icons/tb";
import { BiCoinStack } from "react-icons/bi";

const Analytic = () => {
    return (
        <div className='bg-white'>
            <div className='flex justify-between p-4 '>
                <div className=''>
                    <h1 className='text-[20px] font-bold'>Analytic overview</h1>
                    <p className='text-[#737373] text-[14px]' >Explore the metrics to understand trends and drive.</p>
                </div>
                <div className='flex gap-3'>
                    <h3 className='text-[#737373] text-[14px] mt-1'>Show by:</h3>
                    <div className='border-none bg-[#F5F5F5]  h-fit text-[14px] font-medium text-[#262626] p-1 mr-5 '>
                        <select name="Monthly" id="" className='border-none'>
                            <option value="monthly">Monthly</option>
                            <option value="weekly">Weekly</option>
                            <option value="yearly">Yearly</option>
                        </select>

                    </div>
                </div>
            </div>
            {/* web analytic */}
            <div className='flex'>
            <div className='w-[869.5px] border border-gray-200 shadow p-5 rounded-[10px]'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-[20px] text-[#171717]'>Web analytic</h3>
                    <div className='flex gap-6'>
                        <p>Natural</p>
                        <p>Referral</p>
                        <p>Direct</p>
                    </div>
                </div>
                <div className='flex gap-8 mt-8'>
                    <div>
                        <h3 className='text-[#737373] '>Page views</h3>
                        <h4 className='text-[#171717] font-bold text-[24px]'>$32,124  <span className='text-[#10b981] text-[14px]'>+4.2%</span></h4>
                    </div>
                    <div>
                        <h3 className='text-[#737373] '>Avg. Time on page</h3>
                        <h4 className='text-[#171717] ml-[1px] font-bold text-[24px]'>3m 16s <span className='text-[#ff6a55] text-[14px]'>-0.2%</span></h4>
                    </div>
                </div>
                <div><img src={apex_graph} alt="" className='mt-5' /></div>
            </div>
            <div className='border rounded-[14px] w-[278.9px] border-gray-200 shadow h-[160px] p-[20px] ml-5'>
            <div className='flex justify-between '> 
                <h4 className='text-[#737373] text-[16px]'>Visitor</h4>
                <div className='h-[48px] bg-[#FFD6A7] rounded-full w-[48px] flex justify-center items-center'>
                <TbUsers className='h-[24px] w-[24px]' />
                </div>
                </div>
                <div className='mt-4 mb-8'>
                    <h4 className='font-bold text-[24px]'>149,328</h4>
                    <p className='text-[#737373] text-[14px]'><span className='text-[#10b981] font-bold'>+5.2%</span>vs last month</p>
                </div>
               <div className='border border-gray-200 rounded-[14px] w-[278.9px] shadow h-[160px] p-[20px]'>
                <div className='flex justify-between'>
                <h4 className='text-[#737373] text-[16px]'>Conversion rate</h4>
                <div className='h-[48px] bg-[#A4F4CF] rounded-full w-[48px] flex justify-center items-center'>
                 <BiCoinStack />
                </div>
               </div>
               <div className='mt-4 mb-8'>
                    <h4 className='font-bold text-[24px]'>6.8%</h4>
                    <p className='text-[#737373] text-[14px]'><span className='text-[#ff6a55] font-bold'>-1.8%</span>vs last month</p>
                </div>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Analytic