'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import PentagonDivider with no SSR
const PentagonDivider = dynamic(() => import('./PentagonDivider'), {
  ssr: false,
  loading: () => <span className="mx-2 md:mx-4 text-white/50">•</span>
});

export default function SimpleWordLoop({ 
  words = ["Tenacity", "Versatile", "Proactive", "Determined", "Goal-Driven", "Reliable"],
  className = '',
  textClassName = 'text-2xl md:text-4xl font-bold text-white',
  wrapperClassName = 'py-6 rounded-xl relative overflow-hidden',
  speed = 40,
  divider = '•',
  showDivider = true,
  blurEdges = true
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef();
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;
    
    // Store the original content
    const originalContent = content.innerHTML;
    
    // Create a wrapper to hold both original and cloned content
    container.innerHTML = '';
    
    // Create first instance
    const firstInstance = document.createElement('div');
    firstInstance.className = 'flex items-center';
    firstInstance.innerHTML = originalContent;
    
    // Create second instance (clone)
    const secondInstance = document.createElement('div');
    secondInstance.className = 'flex items-center';
    secondInstance.innerHTML = originalContent;
    
    // Append both instances
    container.appendChild(firstInstance);
    container.appendChild(secondInstance);
    
    // Set initial position
    let position = 0;
    const firstInstanceWidth = firstInstance.offsetWidth;
    
    const animate = () => {
      position -= 1;
      
      // Reset position when the first instance is completely off-screen
      if (position <= -firstInstanceWidth) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Handle window resize
    const handleResize = () => {
      // Recalculate width on resize
      const newWidth = firstInstance.offsetWidth;
      if (newWidth !== firstInstanceWidth) {
        position = 0;
        container.style.transform = 'translateX(0)';
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [words, speed]);

  return (
    <div className={`${wrapperClassName} ${className}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
      
      {/* Left fade */}
      {blurEdges && (
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, #070F2B 0%, rgba(7, 15, 43, 0) 100%)'
          }}
        />
      )}
      
      <div className="relative">
        <div 
          ref={containerRef}
          className="flex items-center whitespace-nowrap"
          style={{ willChange: 'transform' }}
        >
          <div 
            ref={contentRef}
            className="flex items-center"
            style={{ willChange: 'transform' }}
          >
            {words.map((word, index) => (
              <div key={index} className="flex items-center">
                {showDivider && index > 0 && (
                  <PentagonDivider size={8} color="rgba(255, 255, 255, 0.5)" rotationSpeed={0.5} />
                )}
                <span className={`${textClassName} px-2 md:px-4`}>
                  {word}
                </span>
                {showDivider && index === words.length - 1 && (
                  <PentagonDivider size={8} color="rgba(255, 255, 255, 0.5)" rotationSpeed={0.5} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right fade */}
      {blurEdges && (
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(270deg, #070F2B 0%, rgba(7, 15, 43, 0) 100%)'
          }}
        />
      )}
    </div>
  );
}
