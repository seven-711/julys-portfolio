import React, { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const AnimatedList = ({ 
  items = [], 
  speed = 0.5, // Slower base speed for better control
  className = '',
  itemClassName = ''
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const animationFrame = useRef(null);
  const scrollPosition = useRef(0);
  const lastTimestamp = useRef(0);
  const itemHeight = 180; // Approximate height of each item including margin

  // Pre-calculate total height needed
  const totalHeight = items.length * itemHeight;

  const animate = useCallback((timestamp) => {
    if (!scrollerRef.current) return;

    // Calculate delta time for frame-rate independent animation
    const deltaTime = timestamp - (lastTimestamp.current || timestamp - 16);
    lastTimestamp.current = timestamp;

    // Update scroll position based on speed and delta time
    scrollPosition.current += (speed * deltaTime) / 16; // Normalize to 60fps

    // Reset position when we've scrolled one full set of items
    if (scrollPosition.current >= totalHeight) {
      scrollPosition.current = 0;
    }

    // Apply the transform
    scrollerRef.current.style.transform = `translateY(-${scrollPosition.current}px)`;

    // Request next frame
    animationFrame.current = requestAnimationFrame(animate);
  }, [speed, totalHeight]);

  useEffect(() => {
    if (items.length === 0) return;

    // Start the animation
    animationFrame.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [items.length, animate]);

  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`relative h-full overflow-hidden ${className}`} ref={containerRef}>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      
      <div 
        ref={scrollerRef}
        className="space-y-1"
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={`${index}-${item?.title || 'item'}`}
            className={`p-2 rounded-2xl shadow-lg ${itemClassName}`}
            style={{
              borderLeft: `4px solid ${item?.borderColor || '#000'}`,
              background: item?.gradient || 'linear-gradient(145deg, #000, #333)',
              color: 'white',
              height: `${itemHeight - 16}px`, // Account for gap
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="mb-3">
                {item?.icon || <div className="w-12 h-12" />}
              </div>
              <h3 className="text-xl font-bold mb-1">{item?.title || ''}</h3>
              <p className="text-sm text-white/80">{item?.subtitle || ''}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;