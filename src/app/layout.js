'use client';
import "./globals.css";
import { Roboto_Flex } from 'next/font/google';
import DotGrid from '@/components/DotGrid';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";
import Particles from "@/components/Particles";
import { useState } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import TargetCursor from '@/components/TargetCursor';

// Initialize Roboto Flex font
const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-flex'
});

// Client component
export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body className={`${robotoFlex.variable} font-sans bg-fixed bg-cover bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0a192f] relative`} style={{ backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        {/* Custom Cursor */}
        <TargetCursor 
          targetSelector=".cursor-target, a, button"
          spinDuration={2}
          hideDefaultCursor={true}
        />
        
        {/* DotGrid Background */}
        <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -10 }}>
          <DotGrid
            dotSize={10}
            gap={15}
            opacity={0.1}
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        
        {isLoading && <LoadingAnimation onComplete={() => setIsLoading(false)} />}
        
        <AOSProvider>
          <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </AOSProvider>
      </body>
    </html>
  );
}
