'use client';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSProvider from "@/components/AOSProvider";
import Particles from "@/components/Particles";
import { useState } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import TargetCursor from '@/components/TargetCursor';

// Client component
export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-[#070F2B] via-[#070F2B] to-[#070F2B] relative">
        {/* Custom Cursor */}
        <TargetCursor 
          targetSelector=".cursor-target, a, button"
          spinDuration={2}
          hideDefaultCursor={true}
        />
        
        {/* Animated Particles Background */}
        <Particles
          particleColors={['#40ffaa', '#4079ff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={2}
          sizeRandomness={0.8}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
        
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
