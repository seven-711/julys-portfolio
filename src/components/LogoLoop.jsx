'use client';

import { useEffect, useRef } from 'react';

export default function LogoLoop({ 
  logos, 
  speed = 60, 
  direction = 'left',
  logoHeight = 40,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = '#0f172a',
  ariaLabel = 'Technologies',
  className = ''
}) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    if (!logos?.length) return;

    const container = containerRef.current;
    const scroller = scrollerRef.current;
    
    // Duplicate logos for seamless looping
    const content = scroller.innerHTML;
    scroller.innerHTML = content + content;

    let animationFrame;
    let position = 0;
    const speedPx = direction === 'left' ? -1 : 1;

    const animate = () => {
      if (!isPaused.current) {
        position += speedPx;
        if (Math.abs(position) >= scroller.scrollWidth / 2) {
          position = 0;
        }
        scroller.style.transform = `translateX(${position}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    // Pause on hover if enabled
    const handleMouseEnter = () => pauseOnHover && (isPaused.current = true);
    const handleMouseLeave = () => pauseOnHover && (isPaused.current = false);

    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animation);
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [logos, speed, direction, pauseOnHover]);

  if (!logos?.length) return null;

  return (
    <div 
      ref={containerRef}
      className={`relative flex items-center ${className}`}
      style={{
        '--fade-color': fadeOutColor,
        height: `${logoHeight + 20}px`,
        overflow: 'hidden',
      }}
      aria-label={ariaLabel}
    >
      <div 
        ref={scrollerRef}
        className="flex items-center gap-[var(--gap)] w-max"
      >
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 flex items-center justify-center transition-transform ${
              scaleOnHover ? 'hover:scale-110' : ''
            }`}
            style={{
              height: `${logoHeight + 20}px`,
              minWidth: 'auto',
              width: 'auto',
              padding: '8px',
            }}
            title={logo.title || logo.alt}
          >
            {logo.node || (
              <img 
                src={logo.src} 
                alt={logo.alt || ''} 
                className="h-full w-auto object-contain"
              />
            )}
          </a>
        ))}
      </div>
      {fadeOut && (
        <>
          <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[var(--fade-color)] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[var(--fade-color)] to-transparent z-10 pointer-events-none" />
        </>
      )}
    </div>
  );
}
