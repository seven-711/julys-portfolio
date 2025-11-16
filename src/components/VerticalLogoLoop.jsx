'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function VerticalLogoLoop({ 
  items, 
  speed = 2, 
  direction = 'down',
  itemHeight = 100,
  gap = 24,
  pauseOnHover = true,
  fadeOut = true,
  fadeOutColor = '#0a1930',
  className = '',
  renderItem = (item, index) => (
    <div 
      className="flex flex-col items-center justify-center w-full h-full"
    >
      {item}
    </div>
  )
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const isPaused = useRef(false);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    if (!items?.length) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    
    // Calculate total height and set container height
    const itemTotalHeight = itemHeight + gap;
    const totalHeight = itemTotalHeight * items.length;
    
    // Set container height to show 2.5 items at once
    container.style.height = `${itemHeight * 3}px`;
    
    // Set initial position
    gsap.set(scroller, { y: 0 });
    
    // Animation function
    const animate = () => {
      if (!isPaused.current) {
        positionRef.current += speed * (direction === 'down' ? 1 : -1);
        const y = -1 * (positionRef.current % totalHeight);
        gsap.set(scroller, { y });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover if enabled
    const handleMouseEnter = () => pauseOnHover && (isPaused.current = true);
    const handleMouseLeave = () => pauseOnHover && (isPaused.current = false);

    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [items, speed, direction, itemHeight, gap, pauseOnHover]);

  if (!items?.length) return null;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--fade-color': fadeOutColor,
      }}
    >
      {/* Top fade gradient */}
      
      
      {/* Scrollable content */}
      <div 
        ref={scrollerRef}
        className="w-full"
      >
        {[...items, ...items].map((item, index) => (
          <div 
            key={index} 
            className="w-full transition-all duration-300 hover:z-10"
            style={{
              height: `${itemHeight}px`,
              marginBottom: `${gap}px`,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
      
      {/* Bottom fade gradient */}
      
    </div>
  );
}
