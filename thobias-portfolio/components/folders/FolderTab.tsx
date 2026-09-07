// "use client";

// import React from "react";
// import { clsx } from "clsx";

// interface FolderTabProps {
//   id: string;
//   label: string;
//   color: string;
//   isActive: boolean;
//   onClick: () => void;
// }

// export default function FolderTab({
//   label,
//   color,
//   isActive,
//   onClick,
// }: FolderTabProps) {
//   return (
//     <button
//       onClick={onClick}
//       style={{ backgroundColor: color }}
//       className={clsx(
//         "relative flex-1 py-3 sm:py-4 text-center text-white font-changa text-sm sm:text-base md:text-[20px] transition-all duration-200 select-none cursor-pointer",
//         "tab-trapezoid hover:brightness-110 focus:outline-none",
//         isActive
//           ? "z-20 -translate-y-1 shadow-lg"
//           : "z-10 opacity-90 hover:opacity-100",
//       )}
//     >
//       <span className="drop-shadow-sm px-1 truncate block">{label}</span>
//     </button>
//   );
// }

'use client';

import { clsx } from 'clsx';

interface FolderTabProps {
  id: string;
  label: string;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FolderTab({ label, color, isActive, onClick }: FolderTabProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={clsx(
        'relative w-12 sm:w-14 h-24 sm:h-28 text-white font-changa text-xs sm:text-sm tracking-wide transition-all duration-200 select-none cursor-pointer flex items-center justify-center',
        'rounded-r-md shadow-md hover:brightness-110 focus:outline-none',
        isActive ? 'z-30 translate-x-2 shadow-xl border-y border-r border-white/40' : 'z-10 opacity-90 hover:opacity-100'
      )}
    >
      <span className="transform -rotate-90 whitespace-nowrap drop-shadow-sm font-bold">
        {label}
      </span>
    </button>
  );
}