// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PortfolioSection } from "@/data/portfolioData";

// interface DocumentSheetProps {
//   section: PortfolioSection;
// }

// export default function DocumentSheet({ section }: DocumentSheetProps) {
//   const [activeSubTab, setActiveSubTab] = useState<string>(
//     section.subTabs ? section.subTabs[0].id : "",
//   );

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={section.id}
//         initial={{ opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -15 }}
//         transition={{ duration: 0.25 }}
//         className="relative w-full max-w-4xl mx-auto bg-[#FFF9E6] text-[#2D2825] p-6 sm:p-10 rounded-sm shadow-2xl border border-[#E6D5B8] min-h-[480px]"
//       >
//         {/* Binder Ring Holes on the Left Margin */}
//         <div className="absolute left-3 sm:left-5 top-6 bottom-6 flex flex-col justify-between py-2 pointer-events-none">
//           {Array.from({ length: 12 }).map((_, i) => (
//             <div
//               key={i}
//               className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#3D322C] shadow-inner"
//               style={{ backgroundColor: section.color }}
//             />
//           ))}
//         </div>

//         {/* Main Document Content Area */}
//         <div className="pl-8 sm:pl-12 pr-2">
//           {/* Header & Date Section */}
//           <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-[#3D322C]/20 pb-4 mb-6">
//             <div>
//               <h3 className="font-bold text-xl sm:text-2xl tracking-wider text-[#1A1817]">
//                 {section.title}
//               </h3>
//             </div>
//             <div className="mt-2 sm:mt-0 text-xs sm:text-sm text-[#5C524C] font-mono text-left sm:text-right">
//               <p>
//                 <span className="font-bold">Date:</span> {section.date}
//               </p>
//               <p>
//                 <span className="font-bold">Prodi:</span> {section.prodi}
//               </p>
//               <p className="truncate max-w-[200px]">
//                 <span className="font-bold">Tags:</span>{" "}
//                 {section.tags.join(", ")}
//               </p>
//             </div>
//           </div>

//           {/* Top Attachment Placeholder */}
//           <div className="mb-6 flex items-start gap-4">
//             <div className="w-24 h-20 sm:w-32 sm:h-24 bg-[#E2D8C3] border border-[#C5B8A0] rounded flex items-center justify-center text-xs text-[#7A6E63] font-mono">
//               Attachment:
//             </div>
//           </div>

//           {/* Details Section */}
//           <div className="space-y-4">
//             <h4 className="font-bold text-sm tracking-widest text-[#3D322C] uppercase border-b border-[#3D322C]/10 pb-1">
//               DETAILS
//             </h4>
//             <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#332E2B]">
//               {section.details.map((paragraph, index) => (
//                 <p key={index}>{paragraph}</p>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Image Placeholders */}
//           <div className="mt-8 grid grid-cols-2 gap-4">
//             <div className="h-20 sm:h-24 bg-[#E2D8C3] border border-[#C5B8A0] rounded flex items-center justify-center text-xs text-[#7A6E63] font-mono">
//               Preview 1
//             </div>
//             <div className="h-20 sm:h-24 bg-[#E2D8C3] border border-[#C5B8A0] rounded flex items-center justify-center text-xs text-[#7A6E63] font-mono">
//               Preview 2
//             </div>
//           </div>
//         </div>

//         {/* Right Sticky Sub-Tabs (Used for Projects view like in Wireframe 14) */}
//         {section.subTabs && (
//           <div className="absolute -right-3 sm:-right-24 top-12 flex flex-col gap-2 z-30">
//             {section.subTabs.map((subTab) => (
//               <button
//                 key={subTab.id}
//                 onClick={() => setActiveSubTab(subTab.id)}
//                 className={`px-2 sm:px-3 py-1.5 text-[10px] sm:text-xs font-mono rounded-r border-t border-r border-b shadow-md transition-all ${
//                   activeSubTab === subTab.id
//                     ? "bg-[#FFFFFF] text-black font-bold -translate-x-1"
//                     : "bg-[#DCD4C0] text-[#5C524C] hover:bg-white"
//                 }`}
//               >
//                 {subTab.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </motion.div>
//     </AnimatePresence>
//   );
// }
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioSection, ProjectItem } from "@/data/portfolioData";

interface DocumentSheetProps {
  section: PortfolioSection;
}

export default function DocumentSheet({ section }: DocumentSheetProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section.id + (selectedProject ? selectedProject.id : "list")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full"
      >
        1. COLORED FOLDER SHEET BACKING (Sits behind at z-0)
        <div
          className="absolute -mr-4 -inset-3 top-0 -right-4 -bottom-4 -left-4  rounded-l-md shadow-2xl z-10 border-l border-y border-white/20"
          style={{ backgroundColor: section.color }}
        />

        {/* 2. BEIGE NOTEBOOK PAPER SHEET (Sits on top at z-10) */}
        <div className="relative z-10 w-full bg-[#FFF9E6] text-[#2D2825] p-6 sm:p-8 rounded-sm shadow-xl border border-[#E6D5B8] min-h-[480px]">
          {/* Left Margin Ring-Binder Holes */}
          <div className="absolute left-2 sm:left-4 top-4 bottom-4 flex flex-col justify-between py-2 pointer-events-none">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full shadow-inner"
                style={{ backgroundColor: section.color }}
              />
            ))}
          </div>

          {/* Inner Notebook Content */}
          <div className="pl-6 sm:pl-10 pr-2">
            {/* PROJECT TAB - LIST OR DETAIL VIEW */}
            {section.id === "project" ? (
              !selectedProject ? (
                // Project List View
                <div>
                  <h3 className="font-bold text-center text-xl sm:text-2xl tracking-widest text-[#1A1817] border-b-2 border-[#3D322C]/30 pb-3 mb-8">
                    PROJECT LIST
                  </h3>
                  <div className="space-y-6 text-center py-4">
                    {section.projects?.map((proj) => (
                      <div key={proj.id}>
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="font-serif text-base sm:text-lg font-bold text-[#2D2825] hover:text-[#27AA5E] underline decoration-dotted transition-colors cursor-pointer"
                        >
                          {proj.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Individual Project Detail View
                <div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-mono font-bold text-[#27AA5E] hover:underline mb-4 inline-block cursor-pointer"
                  >
                    ← Back to Project List
                  </button>
                  <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-[#3D322C]/20 pb-3 mb-4">
                    <h3 className="font-bold text-lg sm:text-xl text-[#1A1817]">
                      {selectedProject.title}
                    </h3>
                    <div className="text-xs text-[#5C524C] font-mono mt-1 sm:mt-0">
                      <p>Date: {selectedProject.date}</p>
                      <p>Tags: {selectedProject.tags.join(", ")}</p>
                    </div>
                  </div>
                  <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#332E2B] my-4">
                    {selectedProject.details.map((par, idx) => (
                      <p key={idx}>{par}</p>
                    ))}
                  </div>
                </div>
              )
            ) : (
              // STANDARD TABS VIEW (Education, Experience, Skills, Hobbies)
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-[#3D322C]/20 pb-3 mb-4">
                  <h3 className="font-bold text-lg sm:text-xl tracking-wider text-[#1A1817]">
                    {section.title}
                  </h3>
                  {section.date && (
                    <div className="text-xs text-[#5C524C] font-mono mt-1 sm:mt-0">
                      <p>
                        <span className="font-bold">Date:</span> {section.date}
                      </p>
                      {section.prodi && (
                        <p>
                          <span className="font-bold">Prodi:</span>{" "}
                          {section.prodi}
                        </p>
                      )}
                      {section.tags && (
                        <p>
                          <span className="font-bold">Tags:</span>{" "}
                          {section.tags.join(", ")}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="my-4">
                  <div className="w-24 h-16 bg-[#E2D8C3] border border-[#C5B8A0] rounded flex items-center justify-center text-[10px] text-[#7A6E63] font-mono mb-4">
                    Attachment:
                  </div>
                  <h4 className="font-bold text-xs tracking-widest text-[#3D322C] uppercase border-b border-[#3D322C]/10 pb-1 mb-3">
                    DETAILS
                  </h4>
                  <div className="space-y-3 font-serif text-sm leading-relaxed text-[#332E2B]">
                    {section.details?.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
