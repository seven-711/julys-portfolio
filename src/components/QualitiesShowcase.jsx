"use client";

import { useMemo, useState } from 'react';
import { gsap } from 'gsap';
import PixelTransition from './PixelTransition';
import VerticalLogoLoop from './VerticalLogoLoop';

// Helper function to convert Tailwind gradient classes to CSS gradient values
const getComputedGradient = (gradientClass) => {
  // Map Tailwind gradient classes to actual colors
  const gradientMap = {
    'from-amber-500 to-pink-500': '#ec4899', // pink-500
    'from-emerald-500 to-cyan-500': '#06b6d4', // cyan-500
    'from-violet-500 to-purple-600': '#9333ea', // purple-600
    'from-blue-500 to-indigo-600': '#4f46e5', // indigo-600
    'from-yellow-400 to-orange-500': '#f97316', // orange-500
    'from-green-500 to-teal-500': '#14b8a6' // teal-500
  };
  
  return gradientMap[gradientClass] || '#3b82f6'; // default to blue-500
};

const qualities = [
  {
    title: "Tenacious",
    description: "I approach every challenge with unwavering determination, seeing projects through to completion no matter the obstacles. My persistence in problem-solving ensures that I find solutions where others might give up.",
    icon: "💪",
    color: "from-amber-500 to-pink-500"
  },
  {
    title: "Determined",
    description: "With a strong sense of purpose, I set clear goals and work tirelessly to achieve them. My determination drives me to continuously improve and push beyond my limits in every project I undertake.",
    icon: "🎯",
    color: "from-emerald-500 to-cyan-500",
    font: "font-bold"
  },
  {
    title: "Problem-Solver",
    description: "I thrive on dissecting complex issues and finding elegant, efficient solutions. My analytical mindset allows me to break down problems and implement creative solutions that drive results.",
    icon: "🧩",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Adaptable",
    description: "In an ever-changing world, I embrace new challenges and adapt quickly to evolving situations. My flexibility allows me to adjust my approach and find success in various environments and circumstances.",
    icon: "🌱",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Curious",
    description: "I have an insatiable curiosity that drives me to continuously learn and explore new ideas. This passion for knowledge helps me stay innovative and bring fresh perspectives to every project.",
    icon: "🔍",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "Collaborative",
    description: "I believe in the power of teamwork and actively contribute to creating a positive, productive environment. My strong communication skills and open-minded approach help me work effectively with diverse teams.",
    icon: "🤝",
    color: "from-green-500 to-teal-500"
  }
];

const QualityItem = ({ quality, isActive, onHover, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative w-full h-64 rounded-2xl overflow-hidden group ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
        {/* Animated gradient overlay */}
        <div 
          className={`absolute inset-0 -z-10 transition-all duration-700 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: `linear-gradient(135deg, transparent 0%, ${getComputedGradient(quality.color)} 100%)`,
            clipPath: isHovered ? 'circle(150% at 0% 0%)' : 'circle(0% at 0% 0%)',
            transition: 'clip-path 0.7s ease-out, opacity 0.3s ease-out',
          }}
        />

        {/* Front Side (Icon + Title) */}
        <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full h-full p-6 flex flex-col items-center justify-center">
            <h4 className={`text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 ${quality.font || ''}`}>
              {quality.title}
            </h4>
          </div>
        </div>
        
        {/* Back Side (Description) */}
        <div className={`absolute inset-0 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full p-6 flex items-center justify-center relative">
            <p className="text-sm leading-relaxed text-center text-gray-200 relative z-10">
              <span className="absolute -left-3 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></span>
              <span className="relative text-md text-start pl-4 block font-poppins">
                {quality.description}
              </span>
            </p>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl"></div>
          </div>
        </div>
        
        {/* Static background gradient */}
        <div className={`absolute inset-0 -z-20 bg-gradient-to-br ${quality.color} opacity-20`}></div>
      </div>
  );
};

export default function QualitiesShowcase() {
  // Duplicate the qualities array to create a seamless loop
  const duplicatedQualities = useMemo(() => [...qualities, ...qualities], []);

  return (
    <div className="w-full overflow-hidden py-8">
      <div className="relative">
        {/* Scrolling container */}
        <div className="flex space-x-6 animate-horizontal-scroll">
          {duplicatedQualities.map((quality, index) => (
            <div key={`${quality.title}-${index}`} className="flex-shrink-0 w-80">
              <QualityItem
                quality={quality}
                isActive={false}
                onHover={() => {}}
                className="h-64 w-full"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient fade effect on the right side */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0A192F] to-transparent pointer-events-none"></div>
        
        {/* Gradient fade effect on the left side */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0A192F] to-transparent pointer-events-none"></div>
      </div>
      
      {/* Add custom animation keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * ${qualities.length}));
          }
        }
        .animate-horizontal-scroll {
          display: flex;
          width: calc(250px * ${qualities.length * 2});
          animation: scroll 40s linear infinite;
        }
        .animate-horizontal-scroll:hover {
          animation-play-state: paused;
        }
        /* Hide scrollbar but allow scrolling */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
