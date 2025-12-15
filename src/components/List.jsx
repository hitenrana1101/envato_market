import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";

const List = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <div className="flex justify-between p-7">
          <h3 className="text-[24px] font-bold">Projects</h3>
          <button
            className="bg-blue-500 text-white font-bold hover:bg-blue-400 px-4 py-3 rounded-[11px]"
          >
            <a href="">Create project</a>
          </button>
        </div>

        {/* Favorite section */}
        <div className="px-8">
          <h3 className="text-[20px] font-bold">Favorite</h3>
          <div className="flex gap-8 flex-wrap">
            {/* Card 1 */}
            <div className="border border-gray-200 w-[272px] rounded-[12px] h-[214px] mt-4">
              <div className="flex justify-between p-5">
                <h3 className="text-[16px] font-bold">EVO SaaS</h3>
                <FaRegStar />
              </div>
              <div className="px-5">
                <p className="text-[#737373] text-[14px]">
                  Most of you are familiar with the virtues of a programmer
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 mt-8 w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#10b981] h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">80%</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-5">
                <div className="flex -space-x-2">
                  <div className="bg-red-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                  <div className="bg-blue-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                </div>
                <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
                  <AiOutlineFileProtect className="mr-1" />
                  <p>27 / 32</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border shadow border-gray-200 w-[272px] rounded-[12px] h-[220px] mt-4">
              <div className="flex justify-between p-5">
                <h3 className="text-[16px] font-bold">AIA Bill App</h3>
                <FaRegStar />
              </div>
              <div className="px-5 mt-5">
                <p className="text-[#737373] text-[14px]">
                  We are not shipping your machine!
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 mt-8 w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">45%</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-5">
                <div className="flex -space-x-2">
                  <div className="bg-red-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                  <div className="bg-blue-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                </div>
                <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
                  <AiOutlineFileProtect className="mr-1" />
                  <p>15 / 36</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border shadow border-gray-200 w-[272px] rounded-[12px] h-[214px] mt-4">
              <div className="flex justify-between p-5">
                <h3 className="text-[16px] font-bold">IOP Web</h3>
                <FaRegStar />
              </div>
              <div className="px-5">
                <p className="text-[#737373] text-[14px]">
                  There are two ways to write error-free programs; only the third one works.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 mt-3 w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#10b981] h-2 rounded-full"
                      style={{ width: "73%" }}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">73%</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-5">
                <div className="flex -space-x-2">
                  <div className="bg-red-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                  <div className="bg-blue-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                </div>
                <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
                  <AiOutlineFileProtect className="mr-1" />
                  <p>19 / 27</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="border shadow border-gray-200 w-[272px] rounded-[12px] h-[214px] mt-4">
              <div className="flex justify-between p-5">
                <h3 className="text-[16px] font-bold">Octonine POS</h3>
                <FaRegStar />
              </div>
              <div className="px-5">
                <p className="text-[#737373] text-[14px]">
                  Everything that can be invented has been invented.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 mt-8 w-64">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#ff6a55] h-2 rounded-full"
                      style={{ width: "21%" }}
                    ></div>
                  </div>
                  <span className="font-semibold text-sm">21%</span>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-5">
                <div className="flex -space-x-2">
                  <div className="bg-red-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                  <div className="bg-blue-600 h-[24px] w-[24px] rounded-full border-2 border-white" />
                </div>
                <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
                  <AiOutlineFileProtect className="mr-1" />
                  <p>23 / 78</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects section */}
        <div>
          <div className="px-8 mt-7">
            <h3 className="text-[20px] font-bold">Other projects</h3>
          </div>

          {/* Row 1 */}
          <div className="mt-4 mx-8 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
            {/* Left: title + subtitle */}
            <div className="min-w-[220px]">
              <h3 className="text-[16px] font-bold">Evo SaaS API</h3>
              <p className="text-[#737373] text-sm">Backend Services</p>
            </div>

            {/* Tasks count */}
            <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
              <AiOutlineFileProtect className="mr-1" />
              <p>13 / 15</p>
            </div>

            {/* Progress bar + percentage */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#10b981] h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <span className="font-semibold text-sm">87%</span>
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-400 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-blue-400 border-2 border-white" />
            </div>

            {/* Star */}
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegStar />
            </button>
          </div>
          <div className="mt-4 mx-8 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
            {/* Left: title + subtitle */}
            <div className="min-w-[220px]">
              <h3 className="text-[16px] font-bold">Posiflex Web</h3>
              <p className="text-[#737373] text-sm">Frontend Web Application</p>
            </div>

            {/* Tasks count */}
            <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
              <AiOutlineFileProtect className="mr-1" />
              <p>9 / 18</p>
            </div>

            {/* Progress bar + percentage */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FFB900] h-2 rounded-full"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <span className="font-semibold text-sm">50%</span>
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-400 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-blue-400 border-2 border-white" />
            </div>

            {/* Star */}
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegStar />
            </button>
          </div>
          <div className="mt-4 mx-8 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
            {/* Left: title + subtitle */}
            <div className="min-w-[220px]">
              <h3 className="text-[16px] font-bold">FoksMart APP</h3>
              <p className="text-[#737373] text-sm">Mobile Application</p>
            </div>

            {/* Tasks count */}
            <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
              <AiOutlineFileProtect className="mr-1" />
              <p>19 / 26</p>
            </div>

            {/* Progress bar + percentage */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FFB900] h-2 rounded-full"
                  style={{ width: "87%" }}
                ></div>
              </div>
              <span className="font-semibold text-sm">67%</span>
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-400 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-blue-400 border-2 border-white" />
            </div>

            {/* Star */}
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegStar />
            </button>
          </div>
          <div className="mt-4 mx-8 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
            {/* Left: title + subtitle */}
            <div className="min-w-[220px]">
              <h3 className="text-[16px] font-bold">FlowBuzz SEO</h3>
              <p className="text-[#737373] text-sm">Marketing</p>
            </div>

            {/* Tasks count */}
            <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
              <AiOutlineFileProtect className="mr-1" />
              <p>19 / 26</p>
            </div>

            {/* Progress bar + percentage */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#10b981] h-2 rounded-full"
                  style={{ width: "88%" }}
                ></div>
              </div>
              <span className="font-semibold text-sm">88%</span>
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-400 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-blue-400 border-2 border-white" />
            </div>

            {/* Star */}
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegStar />
            </button>
          </div>
          <div className="mt-4 mx-8 border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
            {/* Left: title + subtitle */}
            <div className="min-w-[220px]">
              <h3 className="text-[16px] font-bold">Mind Blast APP</h3>
              <p className="text-[#737373] text-sm">Mobile Application</p>
            </div>

            {/* Tasks count */}
            <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
              <AiOutlineFileProtect className="mr-1" />
              <p>31 / 74</p>
            </div>

            {/* Progress bar + percentage */}
            <div className="flex-1 flex items-center gap-3">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FFB900] h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
              <span className="font-semibold text-sm">42%</span>
            </div>

            {/* Avatars */}
            <div className="flex -space-x-2">
              <div className="h-7 w-7 rounded-full bg-red-400 border-2 border-white" />
              <div className="h-7 w-7 rounded-full bg-blue-400 border-2 border-white" />
            </div>

            {/* Star */}
            <button className="text-gray-400 hover:text-yellow-400">
              <FaRegStar />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
