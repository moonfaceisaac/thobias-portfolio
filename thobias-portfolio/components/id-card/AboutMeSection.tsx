"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Imports from assets directory
import aboutMeSvg from "../../assets/svg/about-me2.svg"
import idCardSvg from "../../assets/svg/id-card.svg";
import paperclipSvg from "../../assets/svg/paperclip-clipped.svg";

interface AboutMeSectionProps {
  isUnclipped: boolean;
  onToggleUnclip: () => void;
}

export default function AboutMeSection({ isUnclipped, onToggleUnclip }: AboutMeSectionProps) {
  return (
    <div className="relative w-full max-w-[420px] mx-auto flex flex-col items-center">
      {/* Container holding the pinned stack */}
      <div className="relative w-full min-h-[615px] flex items-center justify-center pt-4">
        
        {/* Paperclip */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-30 cursor-pointer hover:scale-110 transition-transform"
          initial={false}
          animate={
            isUnclipped
              ? { x: 150, y: -160, rotate: 35, scale: 1.05 }
              : { x: -75, y: -235, rotate: 0, scale: 1 }
          }
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
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

        {/* Computing License ID Card */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-20 cursor-pointer drop-shadow-2xl"
          initial={false}
          animate={
            isUnclipped
              ? { x: 0, y: -130, scale: 1 }
              : { x: 0, y: -145, scale: 0.95 }
          }
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="relative w-[340px] sm:w-[500px] h-[320px] sm:h-[520px]">
            <Image
              src={idCardSvg}
              alt="Thobias Computing License ID Card"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* About Me Paper Sheet (about-me.svg) */}
        <motion.div
          onClick={onToggleUnclip}
          className="absolute z-10 cursor-pointer drop-shadow-xl"
          initial={false}
          animate={
            isUnclipped
              ? { x: 0, y: 100, opacity: 1 }
              : { x: 0, y: -145, opacity: 0.95 }
          }
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="relative w-[380px] sm:w-[540px] h-[360px] sm:h-[520px]">
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
