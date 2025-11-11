'use client';

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiCodeigniter, SiMysql } from 'react-icons/si';

const techIcons = {
  'PHP': { icon: <FaPhp className="w-6 h-6 text-[#777BB3]" />, color: 'border-[#777BB3]' },
  'MySQL': { icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />, color: 'border-[#4479A1]' },
  'Tailwind': { icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />, color: 'border-[#38BDF8]' },
  'CodeIgniter 4': { icon: <SiCodeigniter className="w-6 h-6 text-[#EF4223]" />, color: 'border-[#EF4223]' },
  'React': { icon: <FaReact className="w-6 h-6 text-[#61DAFB]" />, color: 'border-[#61DAFB]' },
  'Node.js': { icon: <FaNodeJs className="w-6 h-6 text-[#8CC84B]" />, color: 'border-[#8CC84B]' },
  'MongoDB': { icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />, color: 'border-[#47A248]' },
  'Next.js': { icon: <SiNextdotjs className="w-6 h-6 text-white" />, color: 'border-white' },
  'HTML': { icon: <FaHtml5 className="w-6 h-6 text-[#E34F26]" />, color: 'border-[#E34F26]' },
  'CSS': { icon: <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />, color: 'border-[#1572B6]' },
  'JavaScript': { icon: <FaJs className="w-6 h-6 text-[#F7DF1E]" />, color: 'border-[#F7DF1E]' },
};

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const animationRef = useRef(null);
  const progressRef = useRef(0);
  const lastTimeRef = useRef(null);
  const totalWidthRef = useRef(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !seqWidth) return;

    // Get all the tech items
    itemsRef.current = Array.from(track.children);
    if (itemsRef.current.length === 0) return;

    // Calculate total width of all items including gaps
    totalWidthRef.current = Array.from(itemsRef.current).reduce(
      (total, item) => total + item.offsetWidth + 16, // 16px gap
      0
    );

    // If there's only one item, duplicate it to create a loop
    if (itemsRef.current.length === 1) {
      const clone = itemsRef.current[0].cloneNode(true);
      track.appendChild(clone);
      itemsRef.current = [itemsRef.current[0], clone];
    }

    const prefersReduced = 
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    let animationId;
    let lastTime;
    
    const animate = (currentTime) => {
      if (!lastTime) lastTime = currentTime;
      const deltaTime = Math.min((currentTime - lastTime) / 1000, 0.1); // Cap delta time for large gaps
      lastTime = currentTime;
      
      if (!(pauseOnHover && isHovered)) {
        progressRef.current += targetVelocity * deltaTime;
        
        // Reset position when scrolled one full width
        if (Math.abs(progressRef.current) >= totalWidthRef.current / 2) {
          progressRef.current = 0;
        }
      }
      
      // Apply smooth translation
      track.style.transform = `translate3d(${progressRef.current}px, 0, 0)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

export default function TechStackLoop({ 
  techStack, 
  className = '',
  speed = 100,
  direction = 'left',
  pauseOnHover = true,
  fadeOut = true,
  scaleOnHover = true
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    // Use a fixed speed for consistent animation
    const baseSpeed = 50; // pixels per second
    return direction === 'left' ? -baseSpeed : baseSpeed;
  }, [direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [techStack]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
  }, [pauseOnHover]);

  const renderTechItem = useCallback((tech, index, isClone = false) => {
    const techData = techIcons[tech] || { icon: null, color: 'border-gray-400' };
    return (
      <div 
        key={`${isClone ? 'clone-' : ''}${index}`}
        className={cx(
          'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full',
          'bg-white/5 backdrop-blur-sm border-2 p-2',
          techData.color,
          'transition-all duration-300 ease-out',
          scaleOnHover && 'hover:scale-110 hover:shadow-lg hover:shadow-white/10'
        )}
        title={tech}
      >
        {techData.icon || tech.charAt(0).toUpperCase()}
      </div>
    );
  }, [scaleOnHover]);

  const techLists = useMemo(() => {
    // Create two identical sets of items for seamless looping
    const items = [
      ...techStack.map((tech, i) => renderTechItem(tech, i, false)),
      ...techStack.map((tech, i) => renderTechItem(tech, i, true)) // Clones for looping
    ];
    
    return (
      <div 
        ref={seqRef}
        className="flex items-center gap-4"
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          willChange: 'transform'
        }}
      >
        {items}
      </div>
    );
  }, [techStack, renderTechItem]);

  return (
    <div 
      ref={containerRef}
      className={cx(
        'relative overflow-hidden group',
        'py-2',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={trackRef}
        className={cx(
          'flex w-max will-change-transform select-none',
          'motion-reduce:transform-none',
          'gap-4' // Add consistent gap between items
        )}
      >
        {techLists}
      </div>
    </div>
  );
}
