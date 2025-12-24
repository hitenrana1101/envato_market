import React from "react";
import pdf_img from "../assets/pdf_image.png";
import gallery from "../assets/gallery.png";
import figma from "../assets/figma_pdf.png";
import folder from "../assets/folder.png";
import ppt from "../assets/ppt_img.png";
import notepad from "../assets/notepad.png";

const Projects_Attechments = () => {
  return (
    <div className="w-full">
      <h4 className="text-[20px] font-bold p-3">Recently added</h4>

      {/* ROW 1 */}
      <div className="p-4 flex flex-wrap gap-5">
        {/* CARD */}
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={pdf_img} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Tech design.pdf</h4>
            <p className="text-[12px] text-gray-500">2.2 MB</p>
          </div>
        </div>

        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={gallery} alt="" className="w-[35px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Modern_Laputa.jpg</h4>
            <p className="text-[12px] text-gray-500">139.2 kB</p>
          </div>
        </div>

        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={figma} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Network_Diagram.fig</h4>
            <p className="text-[12px] text-gray-500">123.5 kB</p>
          </div>
        </div>

        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={folder} alt="" className="w-[26.23px] h-[25px] mt-2" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Project_Files</h4>
            <p className="text-[12px] text-gray-500">21.8 MB</p>
          </div>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="p-4 flex flex-wrap gap-5">
        {/* CARD */}
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={gallery} alt="" className="w-[35px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Gradient_store.jpg</h4>
            <p className="text-[12px] text-gray-500">157.9 kB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={pdf_img} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Annual_Report.pdf</h4>
            <p className="text-[12px] text-gray-500">1.7 MB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={folder} alt="" className="w-[26.23px] h-[25px] mt-2" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Documents</h4>
            <p className="text-[12px] text-gray-500">10.5 MB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={pdf_img} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Budget_Report.pdf</h4>
            <p className="text-[12px] text-gray-500">1.7 MB</p>
          </div>
        </div>
      </div>

      {/* ROW 3 */}
      <div className="p-4 flex flex-wrap gap-5">
        {/* CARD */}
        <div
          className="border flex border-gray-200
                     w-full sm:w-[250.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={ppt} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">
              Marketing_Strategy.pptx
            </h4>
            <p className="text-[12px] text-gray-500">2.2 MB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={gallery} alt="" className="w-[35px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Lone_bear.jpg</h4>
            <p className="text-[12px] text-gray-500">1.7 MB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[235.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={notepad} alt="" className="w-[26.23px] h-[35px]" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Meeting_Minutes.docx</h4>
            <p className="text-[12px] text-gray-500">789.2 kB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={folder} alt="" className="w-[25px] h-[25px] mt-2" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Team_Resources</h4>
            <p className="text-[12px] text-gray-500">783.1 kB</p>
          </div>
        </div>
      </div>

      {/* ROW 4 */}
      <div className="p-4 flex flex-wrap gap-5">
        {/* CARD */}
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={folder} alt="" className="w-[25px] h-[25px] mt-2" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Client_Data</h4>
            <p className="text-[12px] text-gray-500">5.4 MB</p>
          </div>
        </div>
        <div
          className="border flex border-gray-200
                     w-full sm:w-[212.34px] h-[65.6px] p-4 rounded-[12px] bg-white
                     transition
                     hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]"
        >
          <img src={folder} alt="" className="w-[25px] h-[25px] mt-2" />
          <div className="ml-3">
            <h4 className="text-[14px] font-bold">Backup_Files</h4>
            <p className="text-[12px] text-gray-500">2.5 MB</p>
          </div>
        </div>
      </div>

      {/* Others files */}
      <div className="mt-5">
        <div className="text-[20px] text-[#171717] font-bold">
          <h3>Others files</h3>
        </div>

        {/* Desktop/tablet: original table */}
        <div className="hidden md:block">
          <div className="flex mt-7 text-[12px] text-[#737373] font-semibold justify-around">
            <h4 className="mr-40">FILE</h4>
            <h4>SIZE</h4>
            <h4>UPLOAD DATE</h4>
            <h4>LAST MODIFIED</h4>
            <h4>UPLOADED BY</h4>
          </div>

          <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={gallery} alt="" className="h-[30px] w-[30px]" />
              <h4 className="text-[14px] text-[#171717]">
                Financial_Report.xlsx
              </h4>
            </div>
            <h4>1.5 MB</h4>
            <h4>07 Aug 2024</h4>
            <h4 className="mr-2">07 Aug 2024</h4>
            <h4 className="text-[#171717]">Jackie Soto</h4>
          </div>

          <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={ppt} alt="" className="h-[30px] w-[25px]" />
              <h4 className="text-[14px] text-[#171717]">
                Project_Presentation.pptx
              </h4>
            </div>
            <h4>3.1 MB</h4>
            <h4>24 Aug 2024</h4>
            <h4 className="mr-2">24 Aug 2024</h4>
            <h4 className="text-[#171717]">Arlene Pierce</h4>
          </div>

          <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={notepad} alt="" className="h-[30px] w-[25px]" />
              <h4 className="text-[14px] text-[#171717]">
                Project_Summary.docx
              </h4>
            </div>
            <h4>987.7 kB</h4>
            <h4>29 Oct 2024</h4>
            <h4 className="mr-2">29 Oct 2024</h4>
            <h4 className="text-[#171717]">Steve Sutton</h4>
          </div>

          <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={gallery} alt="" className="h-[30px] w-[30px]" />
              <h4 className="text-[14px] text-[#171717]">
                Colorful_donunt.jpg
              </h4>
            </div>
            <h4>216.8 kB</h4>
            <h4>11 Dec 2024</h4>
            <h4 className="mr-2">11 Dec 2024</h4>
            <h4 className="text-[#171717]">Angelina Gotelli</h4>
          </div>

          <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={notepad} alt="" className="h-[30px] w-[25px]" />
              <h4 className="text-[14px] text-[#171717]">
                Research_Paper.docx
              </h4>
            </div>
            <h4>987.7 kB</h4>
            <h4>23 Jan 2025</h4>
            <h4 className="mr-2">23 Jan 2025</h4>
            <h4 className="text-[#171717]">Shannon Baker</h4>
          </div>

          <div className="flex mt-7 mb-6 text-[14px] text-[#737373] font-semibold justify-around">
            <div className="items-center flex gap-2">
              <img src={figma} alt="" className="h-[30px] w-[25px]" />
              <h4 className="text-[14px] text-[#171717]">
                Architecture_Diagram.fig
              </h4>
            </div>
            <h4>456.8 kB</h4>
            <h4>11 Dec 2024</h4>
            <h4 className="mr-2">11 Dec 2024</h4>
            <h4 className="text-[#171717]">Angelina Gotelli</h4>
          </div>
        </div>

        {/* Mobile/tablet: same table as horizontal slider */}
        <div className="md:hidden mt-4">
          <div className="overflow-x-auto pb-3">
            <div className="min-w-[720px]">
              <div className="flex text-[12px] text-[#737373] font-semibold justify-around">
                <h4 className="mr-40">FILE</h4>
                <h4>SIZE</h4>
                <h4>UPLOAD DATE</h4>
                <h4>LAST MODIFIED</h4>
                <h4>UPLOADED BY</h4>
              </div>

              <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={gallery} alt="" className="h-[30px] w-[30px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Financial_Report.xlsx
                  </h4>
                </div>
                <h4>1.5 MB</h4>
                <h4>07 Aug 2024</h4>
                <h4 className="mr-2">07 Aug 2024</h4>
                <h4 className="text-[#171717]">Jackie Soto</h4>
              </div>

              <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={ppt} alt="" className="h-[30px] w-[25px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Project_Presentation.pptx
                  </h4>
                </div>
                <h4>3.1 MB</h4>
                <h4>24 Aug 2024</h4>
                <h4 className="mr-2">24 Aug 2024</h4>
                <h4 className="text-[#171717]">Arlene Pierce</h4>
              </div>

              <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={notepad} alt="" className="h-[30px] w-[25px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Project_Summary.docx
                  </h4>
                </div>
                <h4>987.7 kB</h4>
                <h4>29 Oct 2024</h4>
                <h4 className="mr-2">29 Oct 2024</h4>
                <h4 className="text-[#171717]">Steve Sutton</h4>
              </div>

              <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={gallery} alt="" className="h-[30px] w-[30px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Colorful_donunt.jpg
                  </h4>
                </div>
                <h4>216.8 kB</h4>
                <h4>11 Dec 2024</h4>
                <h4 className="mr-2">11 Dec 2024</h4>
                <h4 className="text-[#171717]">Angelina Gotelli</h4>
              </div>

              <div className="flex mt-7 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={notepad} alt="" className="h-[30px] w-[25px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Research_Paper.docx
                  </h4>
                </div>
                <h4>987.7 kB</h4>
                <h4>23 Jan 2025</h4>
                <h4 className="mr-2">23 Jan 2025</h4>
                <h4 className="text-[#171717]">Shannon Baker</h4>
              </div>

              <div className="flex mt-7 mb-6 text-[14px] text-[#737373] font-semibold justify-around">
                <div className="items-center flex gap-2">
                  <img src={figma} alt="" className="h-[30px] w-[25px]" />
                  <h4 className="text-[14px] text-[#171717]">
                    Architecture_Diagram.fig
                  </h4>
                </div>
                <h4>456.8 kB</h4>
                <h4>11 Dec 2024</h4>
                <h4 className="mr-2">11 Dec 2024</h4>
                <h4 className="text-[#171717]">Angelina Gotelli</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_Attechments;
