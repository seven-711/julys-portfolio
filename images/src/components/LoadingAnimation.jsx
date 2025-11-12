'use client';

import { useEffect, useState, useRef } from 'react';

const LoadingText = ({ progress }) => {
  const phrases = [
    'UI/UX Designer...',
    'Web Developer...',
    'Adaptable...',
    'Creative...'
  ];
  
  const currentPhrase = phrases[Math.min(
    Math.floor(progress / (100 / phrases.length)),
    phrases.length - 1
  )];

  return (
    <div className="relative inline-block overflow-hidden h-8">
      <div className="animate-fadeInOut">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:200%] animate-gradient">
          {currentPhrase}
        </span>
      </div>
    </div>
  );
};

const CubeFace = ({ color, className = '' }) => (
  <div 
    className={`absolute w-full h-full flex items-center justify-center ${className}`}
    style={{
      background: `linear-gradient(135deg, ${color}00 0%, ${color}33 50%, ${color}00 100%)`,
      border: `1px solid ${color}66`,
      backfaceVisibility: 'hidden',
    }}
  />
);

export default function LoadingAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const cubeRef = useRef(null);

  useEffect(() => {
  const duration = 3000; // 3 seconds total
  const fadeOutDuration = 300;
  const animationDuration = duration - fadeOutDuration;
  const startTime = performance.now(); // ✅ same time base as RAF
  let animationFrame;

  const animate = (time) => {
    const elapsed = time - startTime; // ✅ both from performance.now()
    const progress = Math.min(elapsed / animationDuration, 1);

    setProgress(progress * 100);

    if (cubeRef.current) {
      const rotation = progress * 360 * 2;
      cubeRef.current.style.transform = `rotateX(${rotation}deg) rotateY(${rotation * 0.7}deg) rotateZ(${rotation * 0.3}deg)`;
    }

    if (elapsed < animationDuration) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      setShowContent(true);
      setTimeout(() => {
        onComplete();
      }, fadeOutDuration);
    }
  };

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}, [onComplete]);


  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070F2B] transition-all duration-1000 ${showContent ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
        .animate-fadeInOut {
          animation: fadeInOut 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="relative w-32 h-32 mb-8 perspective-1000">
        <div 
          ref={cubeRef}
          className="relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 ease-out"
          style={{
            transform: 'rotateX(0) rotateY(0) rotateZ(0)'
          }}
        >
          <CubeFace color="#40ffaa" className="transform-rotate-y-0" />
          <CubeFace color="#4079ff" className="transform-rotate-y-180" />
          <CubeFace color="#40ffaa" className="transform-rotate-x-90" />
          <CubeFace color="#4079ff" className="transform-rotate-x-270" />
          <CubeFace color="#40ffaa" className="transform-rotate-y-90" />
          <CubeFace color="#4079ff" className="transform-rotate-y-270" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] opacity-20 blur-2xl -z-10 animate-pulse" />
      </div>
      
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:200%] animate-gradient">
          July Franz Claridad
        </h2>
        
        <LoadingText progress={progress} />
        
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden mt-4">
          <div 
            className="h-full bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-[length:200%] transition-all duration-300 ease-out animate-gradient"
            style={{ 
              width: `${progress}%`,
              boxShadow: '0 0 15px rgba(64, 255, 170, 0.5)'
            }}
          />
        </div>
        
        <div className="text-sm text-gray-400 mt-2">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
}
