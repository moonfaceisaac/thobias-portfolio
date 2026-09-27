import type { Metadata } from 'next';
import { Caladea, Changa_One } from 'next/font/google';
import './globals.css';

const caladea = Caladea({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-caladea',
});

const changaOne = Changa_One({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-changa-one',
});

export const metadata: Metadata = {
  title: "Thobias' Portfolio",
  description: 'Personal Portfolio Archive & Dossier System',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${caladea.variable} ${changaOne.variable}`}>
      <body className="antialiased bg-[#252424] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
