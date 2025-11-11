'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ quote, author, role, className = '' }) {
  return (
    <motion.div 
      className={`relative p-8 bg-[#0f172a] rounded-lg border border-white/10 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative z-10">
        <p className="text-lg text-white/90 mb-6 leading-relaxed">"{quote}"</p>
        
        <div className="flex items-center mt-8">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            {author.charAt(0)}
          </div>
          <div className="ml-4">
            <p className="text-white font-medium">{author}</p>
            <p className="text-sm text-white/60">{role}</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-6xl text-white/5 font-serif">"</div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tl-full"></div>
    </motion.div>
  );
}
