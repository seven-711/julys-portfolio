'use client';

import { useEffect, useRef } from 'react';

const PentagonDivider = ({ 
  size = 12, 
  color = '#00f0ff', 
  rotationSpeed = 1.5,
  glow = true
}) => {
  const pentagonRef = useRef(null);
  const animationRef = useRef();
  const rotation = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    const animate = (timestamp) => {
      if (!lastTime.current) lastTime.current = timestamp;
      const deltaTime = timestamp - lastTime.current;
      lastTime.current = timestamp;
      
      if (pentagonRef.current) {
        // Smooth rotation based on time for consistent speed
        rotation.current = (rotation.current + (rotationSpeed * deltaTime * 0.06)) % 360;
        pentagonRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [rotationSpeed]);

  // Pentagon SVG path
  const viewBox = `0 0 ${size * 2} ${size * 2}`;
  const points = [
    [size, 0],
    [size * 2, size * 0.7],
    [size * 1.6, size * 1.9],
    [size * 0.4, size * 1.9],
    [0, size * 0.7],
  ].map(([x, y]) => `${x},${y}`).join(' ');

  const neonBlue = '#00f0ff';
  const neonGlow = `0 0 8px ${neonBlue}, 0 0 16px ${neonBlue}`;
  
  return (
    <div className="flex items-center mx-2 md:mx-4">
      <div 
        ref={pentagonRef} 
        className="flex items-center justify-center"
        style={{
          transformOrigin: 'center',
          transition: 'transform 0.1s ease-out',
          willChange: 'transform',
          filter: glow ? `drop-shadow(0 0 2px ${neonBlue})` : 'none'
        }}
      >
        <svg 
          width={size} 
          height={size} 
          viewBox={viewBox}
          className="transition-transform duration-200"
        >
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0080ff" stopOpacity="0.9" />
            </linearGradient>
            {glow && (
              <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="glow" />
                <feComposite in="SourceGraphic" in2="glow" operator="over" />
              </filter>
            )}
          </defs>
          <polygon 
            points={points} 
            fill="url(#neonGradient)"
            stroke={neonBlue}
            strokeWidth="0.5"
            className="transition-all duration-200"
            style={{
              filter: glow ? 'url(#neonGlow)' : 'none',
              transformOrigin: 'center',
              transformBox: 'fill-box'
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default PentagonDivider;
