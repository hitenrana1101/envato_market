import React from "react";
import { FaRegCompass } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FcGallery } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";

const AiChat = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex justify-center">
      {/* OUTER WRAPPER – ALWAYS CENTERED */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row px-4 sm:px-8 py-4 gap-4">
        {/* LEFT MAIN CARD */}
        <div className="flex-1 flex justify-center">
          <div className="m-4 lg:m-4 p-6 sm:p-10 lg:p-12 rounded-2xl lg:h-[480px] shadow w-full max-w-[800px] bg-white">
            <h3 className="text-[28px] sm:text-[36px] lg:text-[48px]">
              Hello,there
            </h3>
            <h4 className="text-[20px] sm:text-[28px] lg:text-[36px]">
              How can i help you today?
            </h4>

            {/* CARDS – SAME DESIGN, RESPONSIVE LAYOUT */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:gap-3">
              <div className="bg-[#f5f5f5] w-full lg:w-[200px] h-[192px] p-[20px] rounded-[9px] mt-3 lg:mt-0">
                <h4 className="mb-[60px] text-sm sm:text-base">
                  Help me sound like an expert for an upcoming trip
                </h4>
                <FaRegCompass />
              </div>
              <div className="bg-[#f5f5f5] w-full lg:w-[200px] h-[192px] p-[20px] rounded-[9px] mt-3 lg:mt-0">
                <h4 className="mb-[60px] text-sm sm:text-base">
                  Outline an logical sales pitch for a new product
                </h4>
                <FaRegCompass />
              </div>
              <div className="bg-[#f5f5f5] w-full lg:w-[200px] h-[192px] p-[20px] rounded-[9px] mt-3 lg:mt-0">
                <h4 className="mb-[60px] text-sm sm:text-base">
                  Help me get organized with a list of 10 tips
                </h4>
                <FaRegCompass />
              </div>
              <div className="bg-[#f5f5f5] w-full lg:w-[200px] h-[192px] p-[20px] rounded-[9px] mt-3 lg:mt-0">
                <h4 className="mb-[37px] text-sm sm:text-base">
                  Write code for a specific task, including edge cases
                </h4>
                <FaRegCompass />
              </div>
            </div>

            {/* INPUT – SAME LOOK, RESPONSIVE WIDTH */}
            <div className="mt-4 flex items-center justify-between ">
              <div className="flex items-center justify-center flex-1">
                <FcGallery />
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  className="focus:outline-none focus:border-transparent w-full lg:w-[700px] bg-transparent"
                />
              </div>
              <div className="bg-blue-500 w-[32px] h-[32px] sm:w-[32px] sm:h-[32px] hover:bg-blue-400 rounded-full flex justify-center items-center -translate-x-4">
                <FaArrowRightLong className="rounded-full text-white items-center" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-[250px] flex justify-center">
          <div className="bg-white lg:h-[480px] mt-2 lg:mt-4 shadow rounded-2xl w-full max-w-[250px] flex flex-col">
            <div className="text-center flex justify-center items-center mt-5 px-2">
              <IoIosSearch />
              <input
                type="text"
                placeholder="Search chat"
                className="w-full focus:outline-none focus:border-transparent text-[12px] font-medium ml-1"
              />
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="items-center p-3 ml-4 mt-2">
                <h3 className="text-[14px] font-medium ">camera outfit</h3>
                <p className="text-[10px] text-[#737373]">
                  i have a photoshoot tomorrow.Can...
                </p>
              </div>
              <div className="items-center p-3 ml-4 ">
                <h3 className="text-[14px] font-medium ">Vacation planning</h3>
                <p className="text-[10px] text-[#737373]">
                  i have a photoshoot tomorrow.Can...
                </p>
              </div>
              <div className="items-center p-3 ml-4">
                <h3 className="text-[14px] font-medium ">camera outfit</h3>
                <p className="text-[10px] text-[#737373]">
                  i have a photoshoot tomorrow.Can...
                </p>
              </div>
              <div className="items-center p-3 ml-4 ">
                <h3 className="text-[14px] font-medium ">camera outfit</h3>
                <p className="text-[10px] text-[#737373]">
                  i have a photoshoot tomorrow.Can...
                </p>
              </div>
              <div className="items-center p-3 ml-4 mt-2">
                <h3 className="text-[14px] font-medium ">camera outfit</h3>
                <p className="text-[10px] text-[#737373]">
                  i have a photoshoot tomorrow.Can...
                </p>
              </div>
            </div>

            <div className="bg-blue-500 text-white font-medium w-[90%] max-w-[210px] hover:bg-blue-400 text-center mx-auto rounded-[10px] p-2 mt-6 mb-4">
              <h3 className="text-[14px]">New chat</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
