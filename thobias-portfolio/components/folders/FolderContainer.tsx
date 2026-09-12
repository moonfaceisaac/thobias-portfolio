"use client";

import React, { useState } from "react";
import Image from "next/image";
import FolderTab from "./FolderTab";
import DocumentSheet from "../documents/DocumentSheet";
import AboutMeSection from "../id-card/AboutMeSection";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

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

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-6">
      {/* Desktop: Side-by-Side (Dossier Left, ID Right) | Mobile: Stacked */}
      <div className="flex flex-col md:flex-row items-start justify-start gap-8">
        <div className="w-full md:w-[38%] flex justify-center">
          <AboutMeSection
            isUnclipped={isUnclipped}
            onToggleUnclip={() => setIsUnclipped((prev) => !prev)}
          />
        </div>
        {/* DOSSIER SECTION (Takes larger width on desktop) */}
        <div className="w-full md:w-[60%] max-w-[800px] relative flex items-start ">
          {/* Vertical Folder Body */}
          <div className="relative z-20 flex-1 bg-[#FF894A] p-4 sm:p-6 h-[800px] rounded-l-md shadow-2xl overflow-hidden border-l border-y border-white/20">
            {/* Map Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay">
              <Image
                src={folderTexture}
                alt="Folder texture"
                fill
                className="object-cover"
              />
            </div>
            {/*Folder */}
            {/* <div className="relative z-20 flex-1 bg-[#FF894A] p-4 sm:p-6 min-h-[600px] rounded-l-md shadow-3xl overflow-hidden border-l border-y border-white/20"></div> */}

            {/* Folder Cover / Closed State */}
            {!activeTabId ? (
              <div
                onClick={() => setActiveTabId("education")}
                className="relative min-h-full w-full flex flex-col justify-between items-center pt-6 cursor-pointer"
              >
                {/* Stamp */}
                <div className="relative min-h-[100px] min-w-full sm:w-64 h-16 sm:h-20">
                  <Image
                    src={stampSvg}
                    alt="Not Confidential Stamp"
                    fill
                    className="object-contain -rotate-3"
                  />
                </div>
                <div className="text-white/80 font-mono text-xs sm:text-sm pb-4">
                  [ Click any tab on the right to open file dossier ]
                </div>
              </div>
            ) : (
              /* Inner Document Sheet when folder is opened */
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <button
                    onClick={() => setActiveTabId(null)}
                    className="text-xs font-mono text-white/90 hover:text-white underline cursor-pointer"
                  >
                    ← Close Dossier Cover
                  </button>
                </div>
                {activeSection && <DocumentSheet section={activeSection} />}
              </div>
            )}
          </div>
            {/* Right Vertical Tabs (Navbar) */}
          <div className="flex flex-col gap-2 pt-20 -ml-3 z-10">
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
