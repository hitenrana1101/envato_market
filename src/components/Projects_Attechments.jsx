import React from 'react'
import pdf_img from "../assets/pdf_image.png"

const Projects_Attechments = () => {
  return (
    <div>
        <div>
            <div className=''>
                <h4 className='text-[20px] font-bold p-3'>Recently added</h4>
            </div>
            <div className='p-5' >
              <div className='border flex border-gray-200 w-[212px] w-[212.34px] h-[71.6px] p-5 rounded-[12px]'>
              <img src={pdf_img} alt="" className='w-[26.23px] h-[35px]' />
              <div className='ml-3'>
              <h4 className='text-[14px] font-bold'>Tech design.pdf</h4>
              <p className='text-[12px] text-gray-500'>2.2 MB</p>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Projects_Attechments