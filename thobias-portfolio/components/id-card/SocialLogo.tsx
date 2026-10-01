"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface SocialLogoProps {
  href: string;
  src: string | StaticImageData;
  alt: string;
  label: string;          // for accessibility (screen readers)
  className?: string;     // positioning classes (translate/position)
  isUnclippedx: boolean;
}

export default function SocialLogo({
  href,
  src,
  alt,
  label,
  className = "",
  isUnclippedx
}: SocialLogoProps) {
  // Resolve the URL for use as a CSS mask
  const maskUrl = typeof src === "string" ? src : src.src;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className={`absolute z-20 w-[7%] h-[7%] cursor-pointer transition-transform hover:scale-110 ${className} overflow-hidden`}
    >
      {/* Logo */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />

      {/* Shine sweep — masked to the logo shape */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.95) 50%, transparent 65%)",
        //   maskImage: `url(${maskUrl})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        //   WebkitMaskImage: `url(${maskUrl})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
        initial={{ x: "-50%" }}
        animate={isUnclippedx ? { x: "100%" } : { x: "-50%" }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />
    </a>
  );
}