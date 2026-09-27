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
        'relative w-10 sm:w-13 h-24 sm:h-28 text-white font-changa text-xs sm:text-base tracking-wide transition-all duration-200 select-none cursor-pointer flex items-center justify-center',
        'rounded-r-md shadow-md hover:brightness-110 focus:outline-none',
        isActive ? 'z-30 translate-x-2 shadow-xl ring-1 ring-inset ring-white/40' : 'z-10 opacity-90 hover:opacity-100 hover:translate-x-1'
      )}
    >
      <span className="-rotate-90 whitespace-nowrap origin-center">
        {label}
      </span>
    </button>
  );
}