interface TabHeaderProps {
  title: string;
  date?: string;
  prodi?: string;
  tags?: string[];
}

export default function TabHeader({
  title,
  date,
  prodi,
  tags,
}: TabHeaderProps) {
  const hasMeta = date || prodi || tags?.length;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start border-b-2 border-[#3D322C]/20 pb-3 mb-6">
      <h3 className="font-bold text-lg sm:text-xl tracking-wider text-[#1A1817]">
        {title}
      </h3>
      {hasMeta && (
        <div className="text-xs text-[#5C524C] font-mono mt-1 sm:mt-0">
          {date && (
            <p>
              <span className="font-bold">Date:</span> {date}
            </p>
          )}
          {prodi && (
            <p>
              <span className="font-bold">Prodi:</span> {prodi}
            </p>
          )}
          {tags?.length && (
            <p>
              <span className="font-bold">Tags:</span> {tags.join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
