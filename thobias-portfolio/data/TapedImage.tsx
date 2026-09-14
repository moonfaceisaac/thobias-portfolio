"use client";

import Image from "next/image";
import tapeSvg from "@/assets/svg/tape.svg"; // adjust path
import type { StaticImageData } from "next/image";


interface TapedImageProps {
  src: string | StaticImageData;
  alt: string;
  ratio?: number; // width / height, defaults to 4/3
  className?: string; // for width control from parent
}

export default function TapedImage({
  src,
  alt,
  ratio = 4 / 3,
  className = "",
}: TapedImageProps) {
  return (
    <div className={`relative ${className}`} style={{ aspectRatio: ratio }}>
      {/* Photo */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-sm shadow-md"
      />

      {/* Tape — top-left */}
      <Image
        src={tapeSvg}
        alt=""
        className="absolute top-0 left-0 w-[18%] -translate-x-1/4 -translate-y-1/3 -rotate-12 pointer-events-none"
      />

      {/* Tape — bottom-right (flipped horizontally so it reads as a different piece) */}
      <Image
        src={tapeSvg}
        alt=""
        className="absolute bottom-0 right-0 w-[18%] translate-x-1/4 translate-y-1/3 rotate-12 -scale-x-100 pointer-events-none"
      />
    </div>
  );
}
