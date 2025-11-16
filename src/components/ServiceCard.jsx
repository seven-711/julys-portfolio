'use client';

import { useState } from 'react';

const ServiceCard = ({ title, description, icon: Icon, longDescription = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mobile touch handler: toggles expanded view
  const handleToggle = () => {
    if (window.innerWidth < 768) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className="relative bg-[#112240] rounded-xl border border-gray-800 overflow-hidden h-full transition-all duration-700 hover:border-cyan-500/30 min-h-[220px]"
      onMouseEnter={() => window.innerWidth >= 768 && setIsHovered(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsHovered(false)}
      onClick={handleToggle}
    >
      {/* Animated Border */}
      <div
        className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none z-0"
        style={{
          background: 'linear-gradient(45deg, transparent 50%, #092c64ff 50%)',
          backgroundSize: '2200% 2200%',
          backgroundPosition: isHovered ? '0% 0%' : '100% 100%',
          transition: 'background-position 1s ease, border-color 0.3s ease',
          borderColor: isHovered ? 'rgba(14, 165, 233, 0.3)' : 'transparent',
        }}
      />

      {/* Default (Front) Content */}
      <div
        className={`relative z-10 md:p-8 h-full flex flex-col items-center justify-center text-center md:items-start md:text-left transition-all duration-700 ${
          isHovered ? 'opacity-0 md:opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
          {Icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed px-6">{description}</p>
        </div>
      </div>

      {/* Hover/Expanded Overlay */}
      <div
        className={`absolute inset-0 p-3 transition-all duration-700 z-10 flex flex-col ${
          isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(to left bottom, #112240 0%, #1e3a8a 100%)',
          clipPath: isHovered
            ? 'circle(150% at top right)'
            : 'circle(0% at top right)',
        }}
      >
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {longDescription || description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-700/50">
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
