"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PortfolioSection, ProjectItem } from "@/data/portfolioData";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import TabHeader from "@/data/TabHeader";
import SectionRenderer from "@/data/SectionRenderer";

// images
import mecEvents1 from "../../assets/screenshots/mec-events-1.jpg";
import mecComp1 from "../../assets/screenshots/mec-comp-1.jpg";
import mecComp2 from "../../assets/screenshots/mec-comp-2.jpg";
import mecComp3 from "../../assets/screenshots/mec-comp-3.jpg";
import mecComp4 from "../../assets/screenshots/mec-comp-4.jpg";
import mecComp5 from "../../assets/screenshots/mec-comp-5.jpg";
import gradCeremony from "../../assets/screenshots/graduation-ceremony-3.jpg";
import gradCeremony2 from "../../assets/screenshots/graduation-ceremony-1.jpg";

import tape from "../../assets/svg/tape.svg";

interface DocumentSheetProps {
  section: PortfolioSection;
}

export default function DocumentSheet({ section }: DocumentSheetProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={section.id + (selectedProject ? selectedProject.id : "list")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="relative w-full mt-15 flex min-h-[800px]"
      >
        {/* 1. COLORED FOLDER SHEET BACKING (Sits behind at z-0) */}
        <div
          className="absolute flex-1 -mr-4  -inset-3 -top-10 -right-4 -bottom-4 -left-4  rounded-l-md shadow-2xl z-10 border-l border-y border-white/20"
          style={{ backgroundColor: section.color }}
        />
        {/* 2. BEIGE NOTEBOOK PAPER SHEET (Sits on top at z-10) */}
        <div className="relative z-10 w-full bg-[#FFF9E6] text-[#2D2825] p-6 sm:p-8 rounded-sm shadow-xl border border-[#E6D5B8]">
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
                    {selectedProject.blocks?.map((block, i) => (
                      <SectionRenderer key={block.id ?? i} block={block} />
                    ))}
                  </div>
                </div>
              )
            ) : (
              <>
                <TabHeader
                  title={section.title}
                  date={section.date}
                  prodi={section.prodi}
                  tags={section.tags}
                />
                {section.blocks?.map((block, i) => (
                  <SectionRenderer key={block.id ?? i} block={block} />
                ))}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
