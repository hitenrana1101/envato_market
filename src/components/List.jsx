import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { AiOutlineFileProtect } from "react-icons/ai";

const List = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      {/* desktop pe 1160 ke aas‑paas width, mobile pe full */}
      <div className="w-full max-w-[1160px]">
        {/* Header – same spacing as original */}
        <div className="flex items-center justify-between px-7 py-6">
          <h3 className="text-[24px] font-bold">Projects</h3>
          <button
            className="bg-blue-500 text-white font-bold hover:bg-blue-400 px-4 py-3 rounded-[11px] text-[14px] whitespace-nowrap"
          >
            Create project
          </button>
        </div>

        {/* Favorite section */}
        <div className="px-7 sm:px-8">
          <h3 className="text-[20px] font-bold">Favorite</h3>

          {/* Desktop: same 4 cards row with gap, mobile: wrap */}
          <div className="mt-2 flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="border border-gray-200 w-full sm:w-[272px] rounded-[12px] h-[214px] mt-4">
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
            <div className="border shadow border-gray-200 w-full sm:w-[272px] rounded-[12px] h-[220px] mt-4">
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
            <div className="border shadow border-gray-200 w-full sm:w-[272px] rounded-[12px] h-[214px] mt-4">
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
            <div className="border shadow border-gray-200 w-full sm:w-[272px] rounded-[12px] h-[214px] mt-4">
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

        {/* Other Projects section – desktop UI same, sirf mobile pe stack */}
        <div className="mt-7">
          <div className="px-8">
            <h3 className="text-[20px] font-bold">Other projects</h3>
          </div>

          {[
            {
              title: "Evo SaaS API",
              sub: "Backend Services",
              ratio: "13 / 15",
              color: "bg-[#10b981]",
              width: "87%",
              pct: "87%",
            },
            {
              title: "Posiflex Web",
              sub: "Frontend Web Application",
              ratio: "9 / 18",
              color: "bg-[#FFB900]",
              width: "50%",
              pct: "50%",
            },
            {
              title: "FoksMart APP",
              sub: "Mobile Application",
              ratio: "19 / 26",
              color: "bg-[#FFB900]",
              width: "67%",
              pct: "67%",
            },
            {
              title: "FlowBuzz SEO",
              sub: "Marketing",
              ratio: "19 / 26",
              color: "bg-[#10b981]",
              width: "88%",
              pct: "88%",
            },
            {
              title: "Mind Blast APP",
              sub: "Mobile Application",
              ratio: "31 / 74",
              color: "bg-[#FFB900]",
              width: "42%",
              pct: "42%",
            },
          ].map((row, i) => (
            <div
              key={i}
              className="mt-4 mx-4 sm:mx-8 border border-gray-200 rounded-xl px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Left: title + subtitle */}
              <div className="min-w-[220px]">
                <h3 className="text-[16px] font-bold">{row.title}</h3>
                <p className="text-[#737373] text-sm">{row.sub}</p>
              </div>

              {/* Tasks count */}
              <div className="flex items-center text-[#737373] text-[12px] font-semibold border px-2 py-1 border-gray-300 rounded-[12px]">
                <AiOutlineFileProtect className="mr-1" />
                <p>{row.ratio}</p>
              </div>

              {/* Progress bar + percentage */}
              <div className="flex-1 flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${row.color}`}
                    style={{ width: row.width }}
                  ></div>
                </div>
                <span className="font-semibold text-sm">{row.pct}</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
