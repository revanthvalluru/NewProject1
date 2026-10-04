import React from 'react';
import { TopBar } from '../components/layout/TopBar';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ScrollProgress } from '../components/animation/ScrollProgress';
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Tula's International School | The Modern Gurukul, Dehradun",
  description: "Premier co-educational residential boarding school in Dehradun, Uttarakhand. Blending ancient Gurukul values with modern CBSE academics, world-class sports academy, and pastoral boarding."
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-slate-800 antialiased selection:bg-[#c59b27] selection:text-white">
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
