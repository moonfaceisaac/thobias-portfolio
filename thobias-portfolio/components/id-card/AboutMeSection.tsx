"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import aboutMeSvg from "../../assets/svg/about-me2.svg";
import idCardSvg from "../../assets/svg/id-card-final-4.svg";
import paperclipSvg from "../../assets/svg/paperclip-clipped.svg";
import paperclipUnclipSvg from "../../assets/svg/paperclip-unclipped.svg";
import cardTexture from "../../assets/textures/card-texture.png";
import thobiasPic from "../../assets/svg/thobiaspic.svg";
import businessCard from "../../assets/svg/business-card-no-logo-final.svg";

import SocialLogo from "./SocialLogo";

// Business Cards
// Contact Logos
import linkedinSVG from "../../assets/svg/linkedin-final.svg";
import githubSVG from "../../assets/svg/github-logo-final.svg";
import emailSVG from "../../assets/svg/email-open-final.svg";
import instagramSVG from "../../assets/svg/instagram-final.svg";

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
      className="relative w-full max-w-[500px] mx-auto mb-45"
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
            className="absolute z-50 cursor-pointer hover:scale-105 transition-transform"
            initial={false}
            animate={
              isUnclipped
                ? { x: 150, y: -160, rotate: 35, scale: 2 }
                : { x: -75, y: -135, rotate: 0, scale: 2 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            title = { isUnclipped ? "Click to clip" : "Click to unclip"}
          >
            {/* Inner: idle wiggle */}
            <motion.div
              animate={
                isUnclipped
                  ? { rotate: [0, 0, 0] } // no wiggle while unclipped
                  : { rotate: [0, -12, 2, -12, 1, 0] } // wiggle while clipped
              }
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            >
              <Image
                src={ isUnclipped? paperclipUnclipSvg : paperclipSvg}
                alt="Paperclip"
                width={15}
                height={65}
                className="drop-shadow-md"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Thobias photo */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-40 cursor-pointer"
            initial={false}
            animate={
              isUnclipped
                ? { x: -120, y: -283, scale: 1 }
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
            className="absolute z-30 cursor-pointer drop-shadow-2xl"
            initial={false}
            animate={
              isUnclipped
                ? { x: 0, y: -235, scale: 1 }
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

          {/* BUSINESS CARD */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-20 cursor-pointer drop-shadow-2xl"
            initial={false}
            animate={
              isUnclipped
                ? { x: 0, y: 100, scale: 1 }
                : { x: 0, y: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            <div className="relative z-10 w-[500px] h-[520px]">
              <Image
                src={businessCard}
                alt="Thobias business card"
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
              {/* GITHUB */}
              <SocialLogo
                href="https://github.com/moonfaceisaac"
                src={githubSVG}
                alt="Github"
                label="Github profile"
                className="translate-y-69 translate-x-10"
                isUnclipped={isUnclipped}
              />
              {/* LINKEDIN */}
              <SocialLogo
                href="https://www.linkedin.com/in/thobias-zandisko-panjaitan-437452225"
                src={linkedinSVG}
                alt="LinkedIn"
                label="LinkedIn profile"
                className="translate-y-78 translate-x-10"
                isUnclipped={isUnclipped}
              />
              {/* EMAIL */}
              <SocialLogo
                href="thoxir058@gmail.com"
                src={emailSVG}
                alt="Email"
                label="Email Address"
                className="translate-y-86 translate-x-10"
                isUnclipped={isUnclipped}
              />
              {/* INSTAGRAM */}
              <SocialLogo
                href="https://www.instagram.com/thobtobitob"
                src={instagramSVG}
                alt="Instagram"
                label="Instagram Profile"
                className="translate-y-94 translate-x-10"
                isUnclipped={isUnclipped}
              />{" "}
            </div>
          </motion.div>

          {/* About Me Sheet */}
          <motion.div
            onClick={onToggleUnclip}
            className="absolute z-10 cursor-pointer drop-shadow-xl"
            initial={false}
            animate={
              isUnclipped
                ? { x: 0, y: 440, opacity: 1 }
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
