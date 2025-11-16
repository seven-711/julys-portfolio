// src/components/ContactButton.jsx
"use client";

import { useRouter } from 'next/navigation';

export default function ContactButton() {
  const router = useRouter();
  
  return (
    <button 
      onClick={() => router.push('/contact')} 
      className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm font-medium 
        transition-all duration-300 border border-white/20 hover:border-white/30
        group-hover/card:bg-white/30 group-hover/card:shadow-lg group-hover/card:shadow-white/10"
    >
      Get in Touch
    </button>
  );
}