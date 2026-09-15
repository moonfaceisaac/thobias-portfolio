import BlockHeader from "./BlockHeader";
import SectionBody from "./SectionBody";
import SectionImageBody from "./SectionImageBody";
import type { ContentBlock } from "@/data/portfolioData";
// import type { PortfolioSection. } from "@/data/portfolioData";

// interface SectionRendererProps {
//   block: ContentBlock;
// }

export default function SectionRenderer({ block }: { block: ContentBlock }) {
  const hasBody = !!block.details?.length;
  const hasImages = !!block.images?.length;
  const sideBySide = hasBody && hasImages;

  return (
    <div className="mb-8 last:mb-0">
      <BlockHeader title={block.title} />

      {sideBySide ? (
        <div className="flex flex-col sm:flex-row gap-6 sm:items-start">
          <div className="w-full sm:flex-1 min-w-0">
            <SectionBody details={block.details} />
          </div>
          <div className="w-full h-full sm:flex-1 min-w-0 ">
            <SectionImageBody images={block.images!} />
          </div>
        </div>
      ) : (
        <div>
          <SectionBody details={block.details} />
          <SectionImageBody images={block.images!} />
        </div>
      )}
    </div>
  );
}
