'use client';

import { useRef } from 'react';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

const GestureGrid = ({ items, className = '' }) => {
  const gridRef = useRef(null);
  const gridItems = items || [];

  // Create spring animations for each item
  const [springs, api] = useSprings(gridItems.length, (index) => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    config: { tension: 300, friction: 30 },
  }));

  // Set up drag gesture
  const bind = useDrag(({ args: [index], active, movement: [mx, my] }) => {
    api.start((i) => {
      if (index !== i) return;
      return {
        x: active ? mx : 0,
        y: active ? my : 0,
        scale: active ? 1.1 : 1,
        immediate: (key) => active && key === 'x' || key === 'y',
      };
    });
  });

  // Handle click to open URL
  const handleClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      ref={gridRef}
      className={`w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 ${className}`}
    >
      {springs.map((style, i) => {
        const item = gridItems[i];
        return (
          <animated.div
            {...bind(i)}
            key={i}
            style={style}
            onClick={() => handleClick(item.url)}
            className="relative cursor-pointer touch-none"
          >
            <div className="p-2 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 border border-white/10 flex items-center justify-center bg-transparent">
                {item.icon ? (
                  <div className="text-3xl">
                    {item.icon}
                  </div>
                ) : null}
              </div>
              <div className="w-full text-white font-sans">
                <h3 className="m-0 text-sm font-semibold truncate w-full">{item.title}</h3>
                <p className="m-0 text-xs opacity-85 truncate w-full">{item.subtitle}</p>
              </div>
            </div>
          </animated.div>
        );
      })}
    </div>
  );
};

export default GestureGrid;
