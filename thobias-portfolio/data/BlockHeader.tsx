export default function BlockHeader({ title }: { title?: string }) {
  if (!title) return null;
  return (
    <h4 className="font-bold text-sm sm:text-base tracking-widest text-[#3D322C] uppercase border-b border-[#3D322C]/15 pb-2 mb-3">
      {title}
    </h4>
  );
}