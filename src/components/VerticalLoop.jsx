'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const VerticalLoop = ({ items, speed = 1, direction = 1, className = '' }) => {
  const [elements, setElements] = useState([]);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const requestRef = useRef();
  const progressRef = useRef(0);

  // Duplicate items for seamless looping
  useEffect(() => {
    setElements([...items, ...items]);
  }, [items]);

  useEffect(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const container = containerRef.current;
    
    // Calculate total height and set container height
    // Use a fixed height that's 3x the item height to show more content
    const itemHeight = content.children[0]?.offsetHeight || 0;
    const totalHeight = itemHeight * items.length;
    // Set container height to show 2.5 items at once (item + half of the next/previous)
    container.style.height = `${itemHeight * 2.5}px`;
    
    // Set initial position
    gsap.set(content, { y: 0 });
    
    // Animation function
    const animate = () => {
      progressRef.current += 0.1 * speed * direction;
      const y = -1 * (progressRef.current % totalHeight);
      gsap.set(content, { y });
      requestRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    requestRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const onHover = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };

    const onHoverEnd = () => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    };

    container.addEventListener('mouseenter', onHover);
    container.addEventListener('mouseleave', onHoverEnd);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestRef.current);
      container.removeEventListener('mouseenter', onHover);
      container.removeEventListener('mouseleave', onHoverEnd);
    };
  }, [elements, speed, direction]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Top fade gradient - increased height for smoother fade */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#0A192F] via-[#0A192F] via-30% to-transparent z-10 pointer-events-none"></div>
      
      {/* Scrollable content */}
      <div ref={contentRef} className="py-4">
        {elements.map((item, index) => (
          <div key={index} className="py-3">
            {item}
          </div>
        ))}
      </div>
      
      {/* Bottom fade gradient - increased height for smoother fade */}
      <div className="absolute rounded-lg bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0A192F] via-[#0A192F] via-30% to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default VerticalLoop;
