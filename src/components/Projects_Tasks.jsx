import React from 'react'
import { MdCheckCircle } from "react-icons/md";
import img1 from "../assets/thumb-1.jpg"
import img2 from "../assets/thumb-2.jpg"
import img3 from "../assets/thumb-3.jpg"
const Projects_Tasks = () => {
  return (
    <div>
        <div>
            <div>
                <h4 className='font-bold text-[20px] p-2'>To Do</h4>
            </div>
            <div className='flex justify-between'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Unable to upload file</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#DBEAFE] h-[25px] w-[40px] p-1 rounded-[8px] items-center font-medium text-center'>Task</h4>
              <h4 className='bg-[#FFE4E6] h-[25px] w-[79px]  p-1 rounded-[8px] font-medium text-center'>Live issue</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-10'>August 05</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Table data incorrect</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FEF3C6] h-[25px] w-[38px]  p-1 rounded-[8px] font-medium text-center'>Bug</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[133px] mr-5'>July 11</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Fix broken UI</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#F3E8FF] h-[25px] w-[90px] p-1 rounded-[8px] items-center font-medium mr-10 text-center'>Low priority</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-10'>August 05</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
        </div>
        <div>
            <div>
                <h4 className='font-bold text-[20px] p-2 mt-12'>In Progress</h4>
            </div>
            <div className='flex justify-between'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Fix dashboard layout</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#DBEAFE] h-[25px] w-[40px] p-1 rounded-[8px] mr-25 items-center font-medium text-center'>Bug</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-10'>April 17</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>New design</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FEF3C6] h-[25px] w-[43px]  p-1 rounded-[8px] font-medium mr-6 text-center'>Task</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[133px] mr-5'>-</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Improve user experiences</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#F3E8FF] h-[25px] w-[90px] p-1 rounded-[8px] items-center font-medium  text-center'>Low priority</h4>
              <h4 className='bg-[#F3E8FF] h-[25px] w-[45px] p-1 rounded-[8px] items-center mr-10 font-medium text-center'>Task</h4>

              <h4 className='text-[#737373] font-medium text-[14px] p-1 '>May 20</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
        </div>
        {/* To review */}
        <div>
            <div>
                <h4 className='font-bold text-[20px] p-2 mt-12'>To Review</h4>
            </div>
            <div className='flex justify-between'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Update node environment</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#F3E8FF] h-[25px] w-[90px] p-1 rounded-[8px] mr-21 items-center font-medium text-center'>Low priority</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-6 mr-6'>-</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle />
             <h3 className='text-[14px] font-semibold'>Remove user data</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FFE4E6] h-[25px] w-[80px] p-1 rounded-[8px] mr-5 font-medium text-center'>Live issue</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[100px] mr-6'>-</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
        </div>
        <div>
            <div>
                <h4 className='font-bold text-[20px] p-2 mt-12'>Completed</h4>
            </div>
            <div className='flex justify-between'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle className='text-blue-700'/>
             <h3 className='text-[14px] font-semibold'>Ready to test</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#F3E8FF] h-[25px] w-[45px] p-1 rounded-[8px] mr-27 items-center font-medium text-center'>Task</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-6 '>April 04</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle className='text-blue-700'/>
             <h3 className='text-[14px] font-semibold'>Slow API connection</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FFE4E6] h-[25px] w-[40px] p-1 rounded-[8px] mr-5 font-medium text-center'>bug</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[100px] '>August 19</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle className='text-blue-700'/>
             <h3 className='text-[14px] font-semibold'>Login failed</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FFE4E6] h-[25px] w-[80px] p-1 rounded-[8px] mr-5 font-medium text-center'>Live issue</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[80px] '>May 06</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
            <div className='flex justify-between mt-4'>
            <div className='px-5 gap-4 flex items-center mt-4'>
             <MdCheckCircle className='text-blue-700'/>
             <h3 className='text-[14px] font-semibold'>Locale incorrect</h3>
            </div>
            <div className='flex gap-2 text-[12px] mt-3 '>
              <h4 className='bg-[#FFE4E6] h-[25px] w-[90px] p-1 rounded-[8px]  font-medium text-center'>Live Priority</h4>
              <h4 className='text-[#737373] font-medium text-[14px] p-1 ml-[75px]'>August 13</h4>
              <div className='flex w-[50px] ml-10'>
                <img src={img1} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img2} alt="" className='h-[25px] w-[25px] rounded-full'/>
                <img src={img3} alt="" className='h-[25px] w-[25px] rounded-full'/>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects_Tasks