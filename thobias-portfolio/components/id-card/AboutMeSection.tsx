// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useMediaQuery } from "@/hooks/useMediaQuery";

// // Imports from assets directory
// import aboutMeSvg from "../../assets/svg/about-me2.svg";
// import idCardSvg from "../../assets/svg/id-card.svg";
// import idCardSvg2 from "../../assets/svg/id-card-photoed.svg";
// import paperclipSvg from "../../assets/svg/paperclip-clipped.svg";
// import cardTexture from "../../assets/textures/card-texture.png";
// import cardTexture2 from "../../assets/textures/card-texture2.svg";
// import thobiasPic from "../../assets/svg/thobiaspic.svg";

// interface AboutMeSectionProps {
//   isUnclipped: boolean;
//   onToggleUnclip: () => void;
// }

// export default function AboutMeSection({
//   isUnclipped,
//   onToggleUnclip,
// }: AboutMeSectionProps) {
//   const isMobile = useMediaQuery("(max-width: 767px)");
//   return (
//     <div className="relative w-full min-w-[100px] max-w-[420px] mx-auto flex flex-col items-center">
//       {/* Container holding the pinned stack */}
//       <div
//         className={`relative w-full ${
//           isUnclipped ? "min-h-[750px]" : "min-h-[400px]"
//         } flex items-center justify-center pt-4 transition-[min-height] duration-500 ease-in-out`}
//       >
//         {/* Paperclip */}
//         <motion.div
//           onClick={onToggleUnclip}
//           className="absolute z-40 cursor-pointer hover:scale-110 transition-transform"
//           initial={false}
//           animate={
//             isUnclipped
//               ? { x: 150, y: -160, rotate: 35, scale:isMobile? 1.5 : 2 }
//               : { x: -75, y: isMobile ? -97 : -135, rotate: 0, scale:isMobile? 1.5 : 2 }
//           }
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           title="Click to unclip"
//         >
//           <Image
//             src={paperclipSvg}
//             alt="Paperclip"
//             width={15}
//             height={65}
//             className="drop-shadow-md"
//             priority
//           />
//         </motion.div>
//         <motion.div
//           onClick={onToggleUnclip}
//           className="absolute z-30 cursor-pointer"
//           initial={false}
//           animate={
//             isUnclipped
//               ?{x:isMobile? -84 : -120, y:isMobile? -163 :-180, scale:1}
//               :{x:isMobile? -84 : -120, y:isMobile? -33 :-50, scale:1}

//           }
//           transition={{type:"spring", stiffness:180, damping:22}}
//         >
//           <div className="relative w-[125px] sm:w-[180px] h-[105px] sm:h-[160px]">
//             <Image
//               src={thobiasPic}
//               alt="Thobias Image"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </motion.div>
//         {/* Computing License ID Card */}
//         <motion.div
//           onClick={onToggleUnclip}
//           className="absolute z-20 cursor-pointer drop-shadow-2xl"
//           initial={false}
//           animate={
//             isUnclipped
//               ? { x: 0, y: -130, scale: 1 }
//               : { x: 0, y: 0, scale: 1 }
//           }
//           transition={{ type: "spring", stiffness: 180, damping: 22 }}
//         >
//           <div className="relative w-[340px] sm:w-[500px] h-[320px] sm:h-[520px]">
//             <Image
//               src={idCardSvg}
//               alt="Thobias Computing License ID Card"
//               fill
//               className="object-contain"
//               priority
//             />
//               <div className="absolute inset-0 pointer-events-none opacity-100 mix-blend-overlay">
//               <Image
//                 src={cardTexture}
//                 alt="Folder texture"
//                 fill
//                 className="object-contain"
//               />
//               </div>

//           </div>

//         </motion.div>

//         {/* About Me Paper Sheet (about-me.svg) */}
//         <motion.div
//           onClick={onToggleUnclip}
//           className="absolute z-10 cursor-pointer drop-shadow-xl"
//           initial={false}
//           animate={
//             isUnclipped
//               ? { x: 0, y: isMobile ? 200 : 200, opacity: 1 }
//               : { x: 0, y: 0, opacity: 0.95 }
//           }
//           transition={{ type: "spring", stiffness: 180, damping: 22 }}
//         >
//           <div className="relative w-[380px] sm:w-[520px] h-[360px] sm:h-[500px]">
//             <Image
//               src={aboutMeSvg}
//               alt="About Me Document Sheet"
//               fill
//               className="object-contain"
//               priority
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import aboutMeSvg from "../../assets/svg/about-me2.svg";
import idCardSvg from "../../assets/svg/id-card.svg";
import paperclipSvg from "../../assets/svg/paperclip-clipped.svg";
import cardTexture from "../../assets/textures/card-texture.png";
import thobiasPic from "../../assets/svg/thobiaspic.svg";

// Design-space dimensions. Everything inside is authored at this size.
const DESIGN_W = 500;
const DESIGN_H_COLLAPSED = 400;
const DESIGN_H_UNCLIPPED = 750;

interface AboutMeSectionProps {
  isUnclipped: boolean;
  onToggleUnclip: () => void;
}

export default function AboutMeSection({
  isUnclipped,
  onToggleUnclip,
}: AboutMeSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();

    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const designH = isUnclipped ? DESIGN_H_UNCLIPPED : DESIGN_H_COLLAPSED;

  return (
    <div
      ref={wrapperRef}
      className="relative w-full max-w-[500px] mx-auto"
      style={{ height: designH * scale }}
    >
      {/* Design-space canvas — fixed size, scaled as a unit */}
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: DESIGN_W,
          height: designH,
          transform: `scale(${scale})`,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center pt-4">
          {/* Paperclip */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-40 cursor-pointer hover:scale-110 transition-transform"
            initial={false}
            animate={
              isUnclipped
                ? { x: 150, y: -160, rotate: 35, scale: 2 }
                : { x: -75, y: -135, rotate: 0, scale: 2 }
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

          {/* Thobias photo */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-30 cursor-pointer"
            initial={false}
            animate={
              isUnclipped
                ? { x: -120, y: -180, scale: 1 }
                : { x: -120, y: -50, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <div className="relative w-[180px] h-[160px]">
              <Image
                src={thobiasPic}
                alt="Thobias Image"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* ID Card */}
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
            <div className="relative w-[500px] h-[520px]">
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
                  alt="Card texture"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* About Me Sheet */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-10 cursor-pointer drop-shadow-xl"
            initial={false}
            animate={
              isUnclipped
                ? { x: 0, y: 200, opacity: 1 }
                : { x: 0, y: 0, opacity: 0.95 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <div className="relative w-[520px] h-[500px]">
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
    </div>
  );
}
