'use client';

import Header from '@/components/layout/header';
import FolderContainer from '@/components/folders/FolderContainer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start pb-12 bg-[#252424]">
      {/* Top Header */}
      <Header />

      {/* Main Dossier & ID Card Component */}
      <FolderContainer />
    </main>
  );
}
