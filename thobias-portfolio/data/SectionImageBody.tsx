import TapedImage from "./TapedImage";
import type { SectionImage } from "@/data/portfolioData";

interface SectionImageBodyProps {
  images: SectionImage[];
}

export default function SectionImageBody({ images }: SectionImageBodyProps) {
  if (!images?.length) return null;

  return (
    <div className="flex flex-row gap-4 justify-center flex-wrap">
      {images.map((img, i) => (
        <TapedImage
          key={i}
          src={img.src}
          alt={img.alt}
          ratio={img.ratio}
          className={images.length === 1 ? "w-full max-w-md" : "flex-1 min-w-0"}
        />
      ))}
    </div>
  );
}
