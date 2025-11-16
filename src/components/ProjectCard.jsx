// src/components/ProjectCard.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard({ title, description, videoSrc, imageSrc, tags, link }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-xl border border-[var(--border)] bg-[var(--panel)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[var(--brand)]/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video bg-black/5">
        <Link href={link} className="block w-full h-full" target="_blank" rel="noopener noreferrer">
          <Image
            src={imageSrc || `/images/${videoSrc}.jpg`}
            alt={title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            priority={false}
          />
        </Link>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-[var(--muted)] text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-[var(--border)] text-[var(--muted)] px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={link}
          className="text-[var(--brand)] hover:underline inline-flex items-center gap-1 group"
          aria-label={`View ${title} project`}
        >
          View Project
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}