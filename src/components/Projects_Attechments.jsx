import React from "react";
import pdf_img from "../assets/pdf_image.png";
import gallery from "../assets/gallery.png";
import figma from "../assets/figma_pdf.png";
import folder from "../assets/folder.png";
import ppt from "../assets/ppt_img.png";
import notepad from "../assets/notepad.png";

const Projects_Attechments = () => {
  // Data array for cards
  const recentFiles = [
    // Row 1
    [
      { img: pdf_img, name: "Tech design.pdf", size: "2.2 MB", imgClass: "w-[26.23px] h-[35px]" },
      { img: gallery, name: "Modern_Laputa.jpg", size: "139.2 kB", imgClass: "w-[35px] h-[35px]" },
      { img: figma, name: "Network_Diagram.fig", size: "123.5 kB", imgClass: "w-[26.23px] h-[35px]" },
      { img: folder, name: "Project_Files", size: "21.8 MB", imgClass: "w-[26.23px] h-[25px] mt-2" }
    ],
    // Row 2
    [
      { img: gallery, name: "Gradient_store.jpg", size: "157.9 kB", imgClass: "w-[35px] h-[35px]" },
      { img: pdf_img, name: "Annual_Report.pdf", size: "1.7 MB", imgClass: "w-[26.23px] h-[35px]" },
      { img: folder, name: "Documents", size: "10.5 MB", imgClass: "w-[26.23px] h-[25px] mt-2" },
      { img: pdf_img, name: "Budget_Report.pdf", size: "1.7 MB", imgClass: "w-[26.23px] h-[35px]" }
    ],
    // Row 3
    [
      { img: ppt, name: "Marketing_Strategy.pptx", size: "2.2 MB", imgClass: "w-[26.23px] h-[35px]", width: "sm:w-[250.34px]" },
      { img: gallery, name: "Lone_bear.jpg", size: "1.7 MB", imgClass: "w-[35px] h-[35px]" },
      { img: notepad, name: "Meeting_Minutes.docx", size: "789.2 kB", imgClass: "w-[26.23px] h-[35px]", width: "sm:w-[235.34px]" },
      { img: folder, name: "Team_Resources", size: "783.1 kB", imgClass: "w-[25px] h-[25px] mt-2" }
    ],
    // Row 4
    [
      { img: folder, name: "Client_Data", size: "5.4 MB", imgClass: "w-[25px] h-[25px] mt-2" },
      { img: folder, name: "Backup_Files", size: "2.5 MB", imgClass: "w-[25px] h-[25px] mt-2" }
    ]
  ];

  // Data for Others Files table
  const otherFiles = [
    { img: gallery, name: "Financial_Report.xlsx", size: "1.5 MB", uploadDate: "07 Aug 2024", modified: "07 Aug 2024", uploadedBy: "Jackie Soto", imgClass: "h-[30px] w-[30px]" },
    { img: ppt, name: "Project_Presentation.pptx", size: "3.1 MB", uploadDate: "24 Aug 2024", modified: "24 Aug 2024", uploadedBy: "Arlene Pierce", imgClass: "h-[30px] w-[25px]" },
    { img: notepad, name: "Project_Summary.docx", size: "987.7 kB", uploadDate: "29 Oct 2024", modified: "29 Oct 2024", uploadedBy: "Steve Sutton", imgClass: "h-[30px] w-[25px]" },
    { img: gallery, name: "Colorful_donunt.jpg", size: "216.8 kB", uploadDate: "11 Dec 2024", modified: "11 Dec 2024", uploadedBy: "Angelina Gotelli", imgClass: "h-[30px] w-[30px]" },
    { img: notepad, name: "Research_Paper.docx", size: "987.7 kB", uploadDate: "23 Jan 2025", modified: "23 Jan 2025", uploadedBy: "Shannon Baker", imgClass: "h-[30px] w-[25px]" },
    { img: figma, name: "Architecture_Diagram.fig", size: "456.8 kB", uploadDate: "11 Dec 2024", modified: "11 Dec 2024", uploadedBy: "Angelina Gotelli", imgClass: "h-[30px] w-[25px]" }
  ];

  return (
    <div className="w-full">
      <h4 className="text-xl font-bold p-3">Recently added</h4>

      {/* Recently Added Cards */}
      {recentFiles.map((row, rowIdx) => (
        <div key={rowIdx} className="p-4 flex flex-wrap gap-5">
          {row.map((file, idx) => (
            <div
              key={idx}
              className={`border flex border-gray-200
                         w-full ${file.width || 'sm:w-[212.34px]'} h-[65.6px] p-4 rounded-xl bg-white
                         transition hover:shadow-[0_6px_18px_rgba(0,0,0,0.15)]`}
            >
              <img src={file.img} alt="" className={file.imgClass} />
              <div className="ml-3">
                <h4 className="text-sm font-bold">{file.name}</h4>
                <p className="text-xs text-gray-500">{file.size}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Others Files Section */}
      <div className="mt-5 px-4">
        <h3 className="text-xl text-gray-900 font-bold mb-6">Others files</h3>

        {/* Desktop: Table View */}
        <div className="hidden lg:block">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 font-semibold border-b">
                  <th className="text-left pb-4 px-4">FILE</th>
                  <th className="text-left pb-4 px-4">SIZE</th>
                  <th className="text-left pb-4 px-4">UPLOAD DATE</th>
                  <th className="text-left pb-4 px-4">LAST MODIFIED</th>
                  <th className="text-left pb-4 px-4">UPLOADED BY</th>
                </tr>
              </thead>
              <tbody>
                {otherFiles.map((file, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50 transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <img src={file.img} alt="" className={file.imgClass} />
                        <span className="text-sm text-gray-900 font-medium">{file.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">{file.size}</td>
                    <td className="py-4 px-4 text-sm text-gray-500">{file.uploadDate}</td>
                    <td className="py-4 px-4 text-sm text-gray-500">{file.modified}</td>
                    <td className="py-4 px-4 text-sm text-gray-900 font-medium">{file.uploadedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tablet/Mobile: Card View */}
        <div className="lg:hidden space-y-4">
          {otherFiles.map((file, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <img src={file.img} alt="" className={file.imgClass} />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{file.name}</h4>
                  <p className="text-xs text-gray-500">{file.size}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-500 font-medium">Upload Date:</span>
                  <p className="text-gray-700 mt-1">{file.uploadDate}</p>
                </div>
                <div>
                  <span className="text-gray-500 font-medium">Modified:</span>
                  <p className="text-gray-700 mt-1">{file.modified}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 font-medium">Uploaded By:</span>
                  <p className="text-gray-900 font-semibold mt-1">{file.uploadedBy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects_Attechments;