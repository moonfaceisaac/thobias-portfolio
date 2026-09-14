// SectionBody.tsx
export default function SectionBody({ details }: { details?: string[] }) {
  if (!details?.length) return null;

  return (
    <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#332E2B]">
      {details.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
