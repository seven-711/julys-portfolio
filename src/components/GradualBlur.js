'use client';

import { useRef, useEffect, useState } from 'react';

const GradualBlur = ({
  position = 'bottom',
  height = '6rem',
  strength = 2,
  divCount = 5,
  curve = 'bezier',
  exponential = true,
  opacity = 1,
  className = ''
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Simple curve functions
  const curveFunctions = {
    linear: p => p,
    bezier: p => p * p * (3 - 2 * p),
    'ease-in': p => p * p,
    'ease-out': p => 1 - Math.pow(1 - p, 2),
    'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
  };

  // Get gradient direction based on position
  const getGradientDirection = (pos) => {
    const directions = {
      top: 'to top',
      bottom: 'to bottom',
      left: 'to left',
      right: 'to right'
    };
    return directions[pos] || 'to bottom';
  };

  // Generate blur divs
  const generateBlurDivs = () => {
    const divs = [];
    const increment = 100 / divCount;
    const curveFunc = curveFunctions[curve] || curveFunctions.linear;

    for (let i = 1; i <= divCount; i++) {
      let progress = i / divCount;
      progress = curveFunc(progress);

      let blurValue;
      if (exponential) {
        blurValue = Math.pow(2, progress * 4) * 0.0625 * strength;
      } else {
        blurValue = 0.0625 * (progress * divCount + 1) * strength;
      }

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const direction = getGradientDirection(position);

      const divStyle = {
        maskImage: `linear-gradient(${direction}, ${gradient})`,
        WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
        backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
        opacity: opacity
      };

      divs.push(
        <div 
          key={i} 
          className="absolute inset-0" 
          style={divStyle}
        />
      );
    }

    return divs;
  };

  // Container style
  const containerStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 1000,
    ...(position === 'top' || position === 'bottom' ? {
      height: height,
      width: '100%',
      [position]: 0,
      left: 0,
      right: 0
    } : {
      width: height,
      height: '100%',
      [position]: 0,
      top: 0,
      bottom: 0
    })
  };

  return (
    <div 
      ref={containerRef}
      className={`gradual-blur ${className}`}
      style={containerStyle}
    >
      <div className="relative w-full h-full">
        {isVisible && generateBlurDivs()}
      </div>
    </div>
  );
};

export default GradualBlur;
