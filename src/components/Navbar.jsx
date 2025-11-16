'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSuitcase } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 10);
      
      // Only apply shrink effect on mobile
      if (isMobile) {
        setShrunk(currentScroll > 200);
      } else {
        // On desktop, just update the scrolled state for background change
        setShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className={`w-full transition-all duration-500 ${scrolled ? 'px-4 md:px-8' : 'px-0'}`}>
        <header 
          className={`bg-[#0A192F] transition-all duration-500 ${
            scrolled 
              ? 'max-w-[350px] mx-auto rounded-lg py-2 px-6 mt-4 shadow-lg border border-[#1E3A8A]/50' 
              : 'w-full py-4 border-b border-[#1E3A8A]/30'
          }`}
        >
          <div className="w-full">
            <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center w-full">
            <div className="flex-1">
              <Link 
                href="/" 
                className={`inline-flex items-center space-x-2 group ${!scrolled ? 'pl-8' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-label="Home"
              >
                <FaSuitcase className="text-[#40ffaa] text-xl md:text-2xl transition-all duration-300 group-hover:rotate-12" />
              </Link>
            </div>

            {/* Desktop Menu Button - Only shows when scrolled */}
            <div className={`-mr-10 z-50 hidden ${scrolled ? 'md:block' : 'md:hidden'}`}>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen(prev => !prev);
                }}
                className="p-2 text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu Button - Always visible on mobile, hidden on desktop */}
            <div className="md:hidden">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen(prev => !prev);
                }}
                className={`p-2 text-white focus:outline-none ${scrolled ? '-mr-3' : 'mr-3'}`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>


          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center space-x-2 pr-8 transition-all duration-300 ${
            scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap ${
                  pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Contact Me
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
          }`}
        >
          <div className="flex flex-col space-y-2 px-6 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-3 rounded-lg text-lg font-semibold transition-colors px-8${
                  pathname === link.path
                    ? 'text-white bg-white/10'
                    : 'text-[var(--muted)] hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="px-4 py-3 text-center text-lg font-semibold text-white bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-lg hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  </div>
</div>
);
}
