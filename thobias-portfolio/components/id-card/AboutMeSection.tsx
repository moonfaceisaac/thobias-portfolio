"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Imports from assets directory
import aboutMeSvg from "../../assets/svg/about-me2.svg";
import idCardSvg from "../../assets/svg/id-card.svg";
import idCardSvg2 from "../../assets/svg/id-card-photoed.svg";
import paperclipSvg from "../../assets/svg/paperclip-clipped.svg";
import cardTexture from "../../assets/textures/card-texture.png";
import cardTexture2 from "../../assets/textures/card-texture2.svg";
import thobiasPic from "../../assets/svg/thobiaspic.svg";

interface AboutMeSectionProps {
  isUnclipped: boolean;
  onToggleUnclip: () => void;
}

export default function AboutMeSection({
  isUnclipped,
  onToggleUnclip,
}: AboutMeSectionProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div className="relative w-full max-w-[420px] mx-auto flex flex-col items-center">
      {/* Container holding the pinned stack */}
      <div
        className={`relative w-full ${
          isUnclipped ? "min-h-[500px]" : "min-h-[300px]"
        } flex items-center justify-center pt-4 transition-[min-height] duration-500 ease-in-out`}
      >
        {/* Paperclip */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-40 cursor-pointer hover:scale-110 transition-transform"
          initial={false}
          animate={
            isUnclipped
              ? { x: 150, y: -160, rotate: 35, scale: 1.05 }
              : { x: -75, y: isMobile ? -105 : -150, rotate: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          title="Click to unclip"
        >
          <Image
            src={paperclipSvg}
            alt="Paperclip"
            width={15}
            height={65}
            className="drop-shadow-md"
            priority
          />
        </motion.div>

        Thobias Pic
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-30 cursor-pointer"
          initial={false}
          animate={
            isUnclipped
              ?{x:isMobile? -84 : -120, y:isMobile? -163 :-180, scale:1}
              :{x:isMobile? -84 : -120, y:isMobile? -33 :-50, scale:1}
              
          }
          transition={{type:"spring", stiffness:180, damping:22}}
        >
          <div className="relative w-[125px] sm:w-[180px] h-[105px] sm:h-[160px]">
            <Image
              src={thobiasPic}
              alt="Thobias Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
        {/* Computing License ID Card */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-20 cursor-pointer drop-shadow-2xl"
          initial={false}
          animate={
            isUnclipped
              ? { x: 0, y: -130, scale: 1 }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          <div className="relative w-[340px] sm:w-[500px] h-[320px] sm:h-[520px]">
            <Image
              src={idCardSvg}
              alt="Thobias Computing License ID Card"
              fill
              className="object-contain"
              priority
            />
              <div className="absolute inset-0 pointer-events-none opacity-100 mix-blend-overlay">
              <Image
                src={cardTexture}
                alt="Folder texture"
                fill
                className="object-contain"
              />
              </div>

          </div>
          
        </motion.div>

        {/* About Me Paper Sheet (about-me.svg) */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-10 cursor-pointer drop-shadow-xl"
          initial={false}
          animate={
            isUnclipped
              ? { x: 0, y: isMobile ? 120 : 200, opacity: 1 }
              : { x: 0, y: 0, opacity: 0.95 }
          }
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          <div className="relative w-[380px] sm:w-[520px] h-[360px] sm:h-[500px]">
            <Image
              src={aboutMeSvg}
              alt="About Me Document Sheet"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
