import React from 'react'
import { FaRegCompass } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FcGallery } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";

const AiChat = () => {
  return (
    <div className='bg-[#F5F5F5] flex px-15'>
      <div className=' '>
        <div className='m-4 p-12 rounded-2xl h-[480px] shadow w-[900px] ml-[50px]  bg-white'>
          <h3 className='text-[48px]'>Hello,there</h3>
          <h4 className='text-[36px]'>How can i help you today?</h4>
          <div className='flex justify-between gap-3 mt-10'>
          <div className='bg-[#f5f5f5] w-[200px] h-[192px] p-[20px] rounded-[9px]'>
            <h4 className='mb-[60px]'>Help me sound like an expert for an upcoming trip</h4>
              <FaRegCompass />
          </div>
          <div className='bg-[#f5f5f5] w-[200px] h-[192px] p-[20px] rounded-[9px]'>
            <h4 className='mb-[60px]'>Help me sound like an expert for an upcoming trip</h4>
              <FaRegCompass />
          </div>
          <div className='bg-[#f5f5f5] w-[200px] h-[192px] p-[20px] rounded-[9px]'>
            <h4 className='mb-[60px]'>Help me sound like an expert for an upcoming trip</h4>
              <FaRegCompass />
          </div>
          <div className='bg-[#f5f5f5] w-[200px] h-[192px] p-[20px] rounded-[9px]'>
            <h4 className='mb-[60px]'>Help me sound like an expert for an upcoming trip</h4>
              <FaRegCompass className=''/>
          </div>
        </div>
        <div className=''>
          <div className='mt-4 flex items-center gap-3 justify-between '>
            <div className='flex items-center justify-center gap-3'>
            <FcGallery />
            <input type="text" placeholder='Enter a prompt here' className='focus:outline-none focus:border-transparent
            w-[700px]' />
            </div>
            <div className='bg-blue-500 w-[24px] h-[24px] hover:bg-blue-400 rounded-full flex justify-center items-center text-center '>
           <FaArrowRightLong className=' rounded-full text-white  items-center '/>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-[480px] mt-4 shadow rounded-2xl w-[250px]'>
        <div className='text-center flex justify-center items-center  mt-5'>
          <IoIosSearch className=''/>
         <input type="text" placeholder='Search chat' className='w-[190px] focus:outline-none focus:border-transparent text-[12px] 
         font-medium' />
         </div>
         <div className='items-center p-3 ml-4 mt-2'>
          <h3 className='text-[14px] font-medium '>camera outfit</h3>
          <p className='text-[10px] text-[#737373]'>i have a photoshoot tomorrow.Can...</p>
         </div>
          <div className='items-center p-3 ml-4 '>
          <h3 className='text-[14px] font-medium '>camera outfit</h3>
          <p className='text-[10px] text-[#737373]'>i have a photoshoot tomorrow.Can...</p>
         </div>
         <div className='items-center p-3 ml-4'>
          <h3 className='text-[14px] font-medium '>camera outfit</h3>
          <p className='text-[10px] text-[#737373]'>i have a photoshoot tomorrow.Can...</p>
         </div>
         <div className='items-center p-3 ml-4 '>
          <h3 className='text-[14px] font-medium '>camera outfit</h3>
          <p className='text-[10px] text-[#737373]'>i have a photoshoot tomorrow.Can...</p>
         </div>
         <div className='items-center p-3 ml-4 mt-2'>
          <h3 className='text-[14px] font-medium '>camera outfit</h3>
          <p className='text-[10px] text-[#737373]'>i have a photoshoot tomorrow.Can...</p>
         </div>
         <div className='bg-blue-500 text-white font-medium w-[210px] hover:bg-blue-400  text-center ml-5 rounded-[10px] p-2 mt-12'>
          <h3 className='text-[14px]'>New chat</h3>
         </div>
      </div>
    </div>
  )
}

export default AiChat