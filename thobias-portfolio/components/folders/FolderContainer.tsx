"use client";

import React, { useState } from "react";
import Image from "next/image";
import FolderTab from "./FolderTab";
import DocumentSheet from "../documents/DocumentSheet";
import AboutMeSection from "../id-card/AboutMeSection";
import { PORTFOLIO_DATA, PortfolioSection } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

import stampSvg from "../../assets/svg/not-confidential-stamp2.svg";
import folderTexture from "../../assets/textures/folder-map-texture.png";

const TABS = [
  { id: "education", label: "Education", color: "#6045C3" },
  { id: "experience", label: "Experience", color: "#CF3B3B" },
  { id: "project", label: "Project", color: "#27AA5E" },
  { id: "skills", label: "Skills", color: "#B84F98" },
  { id: "hobbies", label: "Hobbies", color: "#D0B753" },
];

export default function FolderContainer() {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);
  const [isUnclipped, setIsUnclipped] = useState<boolean>(false);

  const activeSection = activeTabId ? PORTFOLIO_DATA[activeTabId] : null;

  const [isClosing, setIsClosing] = useState(false);
  const [closingSection, setClosingSection] = useState<PortfolioSection | null>(
    null,
  );

  const closeDossier = () => {
    if (activeSection) setClosingSection(activeSection); // remember it
    setIsClosing(true);
    setActiveTabId(null);
  };

  const handleCoverEnterComplete = () => {
    if (isClosing) {
      setIsClosing(false);
      setClosingSection(null); // now safe to forget
    }
  };

  // Use closingSection while closing, otherwise activeSection
  const sectionToRender = activeSection ?? closingSection;
  const showSheet = !!activeTabId || isClosing;

  return (
    <div className="w-full  mx-auto px-4 py-6">
      {/* Desktop: Side-by-Side (Dossier Left, ID Right) | Mobile: Stacked */}
      {/* <div className="flex flex-col md:flex-row items-start justify-start gap-8"> */}
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full md:w-[35%] flex justify-center">
          {/* <div className="w-full md-flex-[2]"> */}
          <AboutMeSection
            isUnclipped={isUnclipped}
            onToggleUnclip={() => setIsUnclipped((prev) => !prev)}
          />
        </div>
        {/* DOSSIER SECTION (Takes larger width on desktop) */}
        <div className="relative z-0 h-[200px] w-full md:w-[65%] max-w-[1000px] flex flex-row items-start">
          {/* <div className="w-full md:flex-[3]"> */}
          {/* Vertical Folder Body */}

          {/*Folder */}
          {/* <div className="relative z-20 flex-1 bg-[#FF894A] p-4 sm:p-6 min-h-[600px] rounded-l-md shadow-3xl overflow-hidden border-l border-y border-white/20"></div> */}
          {/* Folder Cover / Closed State */}
          {/* <AnimatePresence>
              {activeTabId && (
                <motion.div
                  key="sheet"
                  className="relative z-0"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 1.0 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <button
                      onClick={() => setActiveTabId(null)}
                      className="text-xs font-mono text-white/90 hover:text-white underline cursor-pointer"
                    >
                      ← Close Dossier Cover
                    </button>
                  </div>
                  {activeSection && <DocumentSheet section={activeSection} />}
                </motion.div>
              )}
            </AnimatePresence> */}
          <div className="flex-1 min-h-full  z-20">
            {showSheet && sectionToRender && (
              <div className="relative z-0">
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={closeDossier}
                    className="text-xs font-mono text-white/90 hover:text-white underline cursor-pointer"
                  >
                    ← Close Dossier Cover
                  </button>
                </div>
                {/* {activeSection && <DocumentSheet section={activeSection} />} */}
                <DocumentSheet section={sectionToRender} />
              </div>
            )}

            {/* COVER — sits on top of the sheet, animates in/out */}
            <AnimatePresence initial={false}>
              {!activeTabId && (
                <motion.div
                  key="cover"
                  onClick={() => setActiveTabId("education")}
                  className="absolute mr-14 h-[1000px] -inset-3 -bottom-4 -left-4 z-0 flex flex-col min-h-screen justify-between items-center cursor-pointer"
                  style={{
                    transformOrigin: "left center",
                    backfaceVisibility: "hidden",
                  }}
                  initial={{ rotateY: -110, opacity: 1 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -110, opacity: 1 }}
                  transition={{ duration: 1.0, ease: [0.42, 0, 0.58, 1] }}
                  onAnimationComplete={handleCoverEnterComplete}
                >
                  <div className="absolute w-full h-[1000px] z-20 flex items-start">
                    <div
                      className="relative min-h-full flex-1 bg-[#FF894A] p-4 sm:p-6 h-screen min-w-full rounded-l-md shadow-2xl overflow-hidden border-l border-y border-white/20"
                      style={{ perspective: "2000px" }}
                    ></div>
                    {/* Map Texture Overlay */}
                    <div className="absolute inset-0 min-h-full pointer-events-none opacity-25 mix-blend-overlay">
                      <Image
                        src={folderTexture}
                        alt="Folder texture"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Stamp */}
                    <div className="absolute h-[1000px] flex w-full pt-10 pb-10 flex flex-col items-center justify-between">
                      {/* <div className="flex max-h-[200px] flex-1 w-[600px] min-w-[100px] flex-row"> */}
                      <div className="relative w-[60%] min-w-[200px] max-w-[600px] aspect-[3/1] z-30">
                        <Image
                          src={stampSvg}
                          alt="Not Confidential Stamp"
                          fill
                          className="object-contain -rotate-3"
                        />
                      </div>
                      <div className="relative z-30 text-white/80 font-mono text-xs sm:text-sm pb-4 ">
                        [ Click any tab on the right to open file dossier ]
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Right Vertical Tabs (Navbar) */}
          <div className="relative flex flex-col gap-2 pt-20 -ml-5  z-10">
            {TABS.map((tab) => (
              <FolderTab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                color={tab.color}
                isActive={activeTabId === tab.id}
                onClick={() => setActiveTabId(tab.id)}
              />
            ))}
          </div>
        </div>

        {/* ID CARD & ABOUT ME SECTION (Right side on desktop) */}
      </div>
    </div>
  );
}
