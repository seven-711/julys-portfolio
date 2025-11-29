'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import ProjectCard from "@/components/ProjectCard";
import TextType from '../components/TextType';
import Magnet from '@/components/Magnet';
import ServiceCard from '@/components/ServiceCard';

// Dynamically import LogoLoop with no SSR to avoid window is not defined errors
const LogoLoop = dynamic(() => import('@/components/LogoLoop'), {
  ssr: false,
  loading: () => <div className="h-24 flex items-center justify-center text-sm text-gray-400">Loading skills...</div>
});

// Import SimpleWordLoop component
const SimpleWordLoop = dynamic(() => import('@/components/SimpleWordLoop'), {
  ssr: false,
  loading: () => null
});
import { FaInstagram, FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaProjectDiagram, FaSmile, FaExternalLinkAlt } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiCodeigniter, SiGmail, SiMysql } from 'react-icons/si';
import TestimonialCard from '@/components/TestimonialCard';
import CountUp from '@/components/CountUp';
import PixelTransition from '@/components/PixelTransition';
import TechStackLoop from '@/components/TechStackLoop';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import VariableProximity from '@/components/VariableProximity';

// Dynamically import GestureGrid with no SSR
const GestureGrid = dynamic(() => import('../components/GestureGrid'), {
  ssr: false,
  loading: () => <div className="h-[200px] flex items-center justify-center">Loading skills...</div>
});

const TESTIMONIALS = [
  {
    quote: "Working with July was an absolute pleasure. Their attention to detail and problem-solving skills are top-notch.",
    author: "ISIAH EMMANUEL CLOA",
    role: "University Student",
    color: "blue"
  },
  {
    quote: "The quality of work delivered was exceptional. July consistently met deadlines and exceeded our expectations.",
    author: "ARVIN CATIG",
    role: "University Student",
    color: "purple"
  },
  {
    quote: "July's ability to understand complex requirements and turn them into elegant solutions is remarkable.",
    author: "JUDE TENIO",
    role: "University Student",
    color: "pink"
  },
  {
    quote: "July's communication and technical expertise made our project a huge success. Highly recommended!",
    author: "JASSEM RACMAN",
    role: "Univeristy Student",
    color: "green"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
  };
  const testimonialRef = useRef(null);
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 pt-32 pb-12 md:pt-40 md:pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="md:space-y-3 mb-6 md:mb-8">
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Hi, I'm July.
                </h1>
                <h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 w-full whitespace-nowrap overflow-visible"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  <div className="inline-block">
                    <TextType 
                      text={["Designer & Developer"]}
                      typingSpeed={55}
                      pauseDuration={1500}
                      showCursor={true}
                      cursorCharacter="|" 
                    />
                  </div>
                </h1>
              </div>
              <p 
                className="text-[var(--muted)] max-w-prose mb-6 -mt-5 mx-auto md:mx-0 text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Also a 2nd year IT student. I create simple yet effective web applications tailored to your needs. Let's connect if you're building something I can contribute to.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start w-full sm:w-auto"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <Magnet 
                  className="w-full sm:w-auto"
                  magnetStrength={4}
                  activeTransition="transform 0.2s ease-out"
                  inactiveTransition="transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                >
                  <a 
                    className="cursor-target w-full block text-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white hover:opacity-90 transition-all duration-300" 
                    href="/projects"
                  >
                    View Projects
                  </a>
                </Magnet>
                <Magnet 
                  className="w-full sm:w-auto"
                  magnetStrength={4}
                  activeTransition="transform 0.2s ease-out"
                  inactiveTransition="transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                >
                  <a 
                    className="cursor-target w-full block text-center px-6 py-3 rounded-lg font-medium bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 hover:shadow-xl hover:border-white/30 active:scale-95 transform transition-all duration-300"
                    href="/JULY_RESUME.pdf"
                    download="JULY_RESUME.pdf"
                  >
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Download CV
                    </span>
                  </a>
                </Magnet>
              </div>
            </div>
            <div 
              className="flex justify-center order-first md:order-last relative group"
              data-aos="fade-left"
              data-aos-delay="5000"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#40ffaa]/10 to-[#4079ff]/10 animate-[spin_20s_linear_infinite] blur-xl">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_40%,rgba(64,255,170,0.1)_41%,transparent_42%)] animate-[pulse_4s_ease-in-out_infinite]" style={{
                    backgroundSize: '40px 40px',
                    animationDelay: '0.3s'
                  }}></div>
                </div>
              </div>
              <div className="relative z-10 w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 group-hover:animate-siri-vibrate">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#40ffaa] to-[#4079ff] rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 bg-white/5 backdrop-blur-sm">
                  <Image 
                    className="w-full h-full object-cover" 
                    src="/images/my-profile.jpg" 
                    alt="My portrait" 
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </div>
            </div>
            <style jsx global>{`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.8;
                }
                50% {
                  transform: scale(1.2);
                  opacity: 0.4;
                }
              }
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
              
              @keyframes siri-vibrate {
                0%, 100% { transform: translateX(0) translateY(0) rotate(0deg); }
                10% { transform: translateX(-1px) translateY(-1px) rotate(-0.5deg); }
                20% { transform: translateX(1px) translateY(1px) rotate(0.5deg); }
                30% { transform: translateX(1px) translateY(-1px) rotate(0.5deg); }
                40% { transform: translateX(-1px) translateY(1px) rotate(-0.5deg); }
                50% { transform: translateX(0) translateY(0) rotate(0deg); }
              }
              
              .animate-siri-vibrate {
                animation: siri-vibrate 0.4s ease-in-out infinite;
                animation-play-state: running;
              }
            `}</style>
          </div>

          <div className="py-16 md:py-24 relative overflow-hidden md:mt-[20vh] sm:mt-[10vh]"
          data-aos="fade left"
          data-aos-delay="500"
          >
            <div className="container mx-auto px-4">
              <div className="relative flex items-center justify-center mb-16">
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                <h2 className="relative px-8 py-4 text-3xl md:text-4xl font-bold text-center text-white bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-full">
                  My <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <ServiceCard 
                  title="Web Development"
                  description="Custom websites with modern tech for optimal performance."
                  longDescription="Building responsive, high-performance websites using Next.js, React, and Tailwind CSS. Focused on clean code, fast load times, and great user experiences across all devices."
                  icon={
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }
                />

                <ServiceCard 
                  title="UI/UX Design"
                  description="Beautiful interfaces that enhance user engagement."
                  longDescription="Creating intuitive user experiences through thoughtful design. From wireframes to high-fidelity prototypes, I focus on usability, accessibility, and visual appeal."
                  icon={
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  }
                />

                <ServiceCard 
                  title="Mobile Development"
                  description="Cross-platform apps for iOS and Android."
                  longDescription="Building performant mobile applications using React Native. I create apps that feel native on both platforms while sharing a single codebase for efficiency."
                  icon={
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  }
                />

                <ServiceCard 
                  title="Full-Stack Development"
                  description="Complete solutions from front to back."
                  longDescription="End-to-end web application development with modern stacks. I handle everything from database design to API development and frontend implementation."
                  icon={
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />

                <ServiceCard 
                  title="SEO Optimization"
                  description="Improve visibility and search rankings."
                  longDescription="Comprehensive SEO strategies including technical optimization, content strategy, and performance improvements to help your site rank higher in search results."
                  icon={
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>

          <section className="mt-[26vh] py-16 md:py-24 relative overflow-hidden bg-transparent -translate-y-16" data-aos="fade-up" data-aos-delay="500">
            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0" />
            </div>
            
            <div className="container mx-auto relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Testimonial Card */}
                  <div className="w-full md:w-1/2">
                    <div className="relative p-6 bg-[#0f172a]/50 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg">
                      <div className="mb-4">
                        <div
                          ref={testimonialRef}
                          style={{ position: 'relative' }}
                          className="text-white/90"
                        >
                          <VariableProximity
                            label="Your project holds great importance to me. I approach every task with dedication, precision, and genuine passion—treating it as if it were my own. My goal is not only to meet your expectations but to exceed them, ensuring that every detail reflects quality, creativity, and care from start to finish."
                            className="variable-proximity-demo"
                            fromFontVariationSettings="'wght' 400, 'opsz' 9"
                            toFontVariationSettings="'wght' 1000, 'opsz' 40"
                            containerRef={testimonialRef}
                            radius={100}
                            falloff='linear'
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-end space-x-3">
                        <div className="text-right">
                          <p className="font-medium text-white">JULY FRANZ CLARIDAD</p>
                          <p className="text-sm text-white/60">Frontend Developer</p>
                        </div>
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                          <Image
                            src="/images/JULY-2nd profile.png"
                            alt="July Franz Claridad"
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email Button */}
                  <div className="w-full md:w-1/2">
                    <div className="relative w-full flex flex-col items-center">
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                        className="text-blue-200 mb-2 cursor-target"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-blue-900/30 rounded-full blur-sm animate-pulse"></div>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-12 w-12 relative z-10 text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.7)]" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={5} 
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </motion.div>
                      <a 
                        href="mailto:claridadjulyfranz@gmail.com" 
                        className="group w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-[#070F2B] hover:bg-[#0a183f] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <motion.div
                          animate={{
                            y: [0, -5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="text-blue-200 text-xl sm:text-2xl"
                        >
                          <FaEnvelope />
                        </motion.div>
                        <span
                          className="
                            bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100
                            group-hover:from-blue-100 group-hover:to-white
                            transition-all
                            text-sm    /* Mobile (default) */
                            sm:text-base /* Tablets */
                            lg:text-xl  /* Laptops and larger screens */
                            text-center
                          "
                        >
                          claridadjulyfranz@gmail.com
                        </span>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-6">
                      <a 
                        href="https://www.instagram.com/codex_machi1.0?igsh=bGJsMDdmdGljemR5" 
                        className="text-white/70 hover:text-white transition-colors group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram 
                          className="text-2xl group-hover:scale-110 transition-transform" 
                          style={{ color: '#E1306C' }}
                        />
                      </a>
                      <a 
                        href="https://github.com/seven-711" 
                        className="text-white/70 hover:text-white transition-colors group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub 
                          className="text-2xl group-hover:scale-110 transition-transform" 
                          style={{ color: '#F5F5F5' }}
                        />
                      </a>
                      <a 
                        href="https://www.facebook.com/profile.php?id=61581118792267" 
                        className="text-white/70 hover:text-white transition-colors group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook 
                          className="text-2xl group-hover:scale-110 transition-transform" 
                          style={{ color: '#1877F2' }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Animated background elements */}
            
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto">
                {/* Projects Count */}
                <motion.div 
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1.5 w-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg">
                        <CountUp from={0} to={5} duration={2.5} />
                        <motion.span 
                          className="inline-block ml-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            y: [0, -4, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1],
                            times: [0, 0.3, 0.5, 0.7, 1],
                            delay: 0.2
                          }}
                        >
                          +
                        </motion.span>
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg text-center font-medium tracking-wide bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Projects Completed
                    </p>
                  </div>
                </motion.div>

                {/* Clients Count */}
                <motion.div 
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1.5 w-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg">
                        <CountUp from={0} to={3} duration={2.5} delay={0.5} />
                        <motion.span 
                          className="inline-block ml-1 bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            y: [0, -4, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1],
                            times: [0, 0.3, 0.5, 0.7, 1],
                            delay: 0.4
                          }}
                        >
                          +
                        </motion.span>
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg text-center font-medium tracking-wide bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Satisfied Clients
                    </p>
                  </div>
                </motion.div>

                {/* Years Experience */}
                <motion.div 
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1.5 w-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-5xl md:text-5xl font-bold text-white drop-shadow-lg">
                        1
                        <motion.span
                          className="inline-block ml-1 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            y: [0, -4, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: [0.4, 0, 0.2, 1],
                            times: [0, 0.3, 0.5, 0.7, 1],
                            delay: 0.3
                          }}
                        >
                          +
                        </motion.span>
                      </h3>
                    </div>
                    <p className="text-gray-300 text-lg text-center font-medium tracking-wide bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Years Experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>



          {/* Projects Section */}
          <section className="mt-16 md:mt-24 w-full">
            <div className="w-full relative mb-8">
              <div className="relative flex items-center">
                <h2 className="text-2xl text-white md:text-3xl font-bold inline-block px-6 py-3 rounded-lg border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-aos="fade-right"
                data-aos-delay="500"
                >
                  Recent Projects
                </h2>
                <div className="hidden md:block flex-grow ml-4 h-px bg-white/20"
                data-aos="fade-right"
                data-aos-delay="400"
                ></div>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="500"
            >
              <div className="h-64">
                <PixelTransition
                  firstContent={
                    <img
                      src="/images/OMS.png"
                      alt="E-commerce Platform"
                      className="w-full h-full object-cover"
                    />
                  }
                  secondContent={
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-white">E-commerce Platform</h3>
                      <p className="text-gray-300 mb-4">A full-stack e-commerce solution with real-time inventory and payment processing.</p>
                      <div className="h-16 mb-4">
                        <TechStackLoop 
                          techStack={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]} 
                          className="h-full w-full overflow-visible"
                        />
                      </div>
                      {/* <a 
                        href="https://youtu.be/BIB1Lw2sjYA?si=4dFenrQW9K_34m9m" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Demo <FaExternalLinkAlt className="ml-1" />
                      </a> */}
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  className="w-full h-full rounded-lg overflow-hidden"
                />
              </div>

              <div className="h-64">
                <PixelTransition
                  firstContent={
                    <img
                      src="/images/motor-parts-oms.png"
                      alt="Motorparts Ecommerce"
                      className="w-full h-full object-cover"
                    />
                  }
                  secondContent={
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-white">Motorparts Ecommerce</h3>
                      <p className="text-gray-300 mb-4">An e-commerce platform for auto parts with inventory management and order processing.</p>
                      <div className="h-16 mb-4">
                        <TechStackLoop 
                          techStack={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]} 
                          className="h-full w-full overflow-visible"
                        />
                      </div>
                      {/* <a 
                        href="https://youtu.be/3TweOMU8Jys?si=_rQnhGZ0vaeUdGLz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Demo <FaExternalLinkAlt className="ml-1" />
                      </a> */}
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  className="w-full h-full rounded-lg overflow-hidden"
                />
              </div>

              <div className="h-64">
                <PixelTransition
                  firstContent={
                    <img
                      src="/images/car-rental.png"
                      alt="Car Rental Platform"
                      className="w-full h-full object-cover"
                    />
                  }
                  secondContent={
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-white">Car Rental Platform</h3>
                      <p className="text-gray-300 mb-4">A complete car rental system with booking management and admin dashboard.</p>
                      <div className="h-16 mb-4">
                        <TechStackLoop 
                          techStack={["PHP", "MySQL", "Tailwind"]} 
                          className="h-full w-full overflow-visible"
                        />
                      </div>
                      {/* <a 
                        href="https://youtu.be/RvHK7aLQJ00?si=FC5ke7mbfIks2a14" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Demo <FaExternalLinkAlt className="ml-1" />
                      </a> */}
                    </div>
                  }
                  gridSize={10}
                  pixelColor="#ffffff"
                  once={false}
                  animationStepDuration={0.4}
                  className="w-full h-full rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section 
            className="mt-16 md:mt-24 w-full mb-12 relative"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="w-full relative mb-8">
              <div className="relative flex items-center justify-end">
                <div className="hidden md:block flex-grow mr-4 h-px bg-white/20"></div>
                <h2 className="text-2xl text-white md:text-3xl font-bold inline-block px-6 py-3 rounded-lg border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Skills & Technologies
                </h2>
              </div>
            </div>
            <div className="relative w-full">
              <GestureGrid 
                items={[
                  {
                    icon: <FaHtml5 className="w-12 h-12" style={{ color: '#E34F26' }} />,
                    title: 'HTML5',
                    subtitle: 'Web Development',
                    handle: '@html5',
                    borderColor: '#E34F26',
                    gradient: 'linear-gradient(145deg, #E34F26, #000)',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
                  },
                  {
                    icon: <FaCss3Alt className="w-12 h-12" style={{ color: '#1572B6' }} />,
                    title: 'CSS3',
                    subtitle: 'Styling',
                    handle: '@css3',
                    borderColor: '#1572B6',
                    gradient: 'linear-gradient(145deg, #1572B6, #000)',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
                  },
                  {
                    icon: <FaJs className="w-12 h-12" style={{ color: '#F7DF1E' }} />,
                    title: 'JavaScript',
                    subtitle: 'Programming Language',
                    handle: '@javascript',
                    borderColor: '#F7DF1E',
                    gradient: 'linear-gradient(145deg, #F7DF1E, #000)',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                  },
                  {
                    icon: <FaReact className="w-12 h-12" style={{ color: '#61DAFB' }} />,
                    title: 'React',
                    subtitle: 'Frontend Library',
                    handle: '@reactjs',
                    borderColor: '#61DAFB',
                    gradient: 'linear-gradient(145deg, #61DAFB, #000)',
                    url: 'https://reactjs.org/'
                  },
                  {
                    icon: <SiNextdotjs className="w-12 h-12" style={{ color: '#000000' }} />,
                    title: 'Next.js',
                    subtitle: 'React Framework',
                    handle: '@vercel',
                    borderColor: '#000000',
                    gradient: 'linear-gradient(145deg, #000000, #333)',
                    url: 'https://nextjs.org/'
                  },
                  {
                    icon: <FaNodeJs className="w-12 h-12" style={{ color: '#339933' }} />,
                    title: 'Node.js',
                    subtitle: 'Runtime Environment',
                    handle: '@nodejs',
                    borderColor: '#339933',
                    gradient: 'linear-gradient(145deg, #339933, #000)',
                    url: 'https://nodejs.org/'
                  },
                  {
                    icon: <FaPhp className="w-12 h-12" style={{ color: '#777BB4' }} />,
                    title: 'PHP',
                    subtitle: 'Server-side Scripting',
                    handle: '@php',
                    borderColor: '#777BB4',
                    gradient: 'linear-gradient(145deg, #777BB4, #000)',
                    url: 'https://www.php.net/'
                  },
                  {
                    icon: <FaDatabase className="w-12 h-12" style={{ color: '#4479A1' }} />,
                    title: 'MySQL',
                    subtitle: 'Database',
                    handle: '@mysql',
                    borderColor: '#4479A1',
                    gradient: 'linear-gradient(145deg, #4479A1, #000)',
                    url: 'https://www.mysql.com/'
                  },
                  {
                    icon: <SiMongodb className="w-12 h-12" style={{ color: '#47A248' }} />,
                    title: 'MongoDB',
                    subtitle: 'NoSQL Database',
                    handle: '@mongodb',
                    borderColor: '#47A248',
                    gradient: 'linear-gradient(145deg, #47A248, #000)',
                    url: 'https://www.mongodb.com/'
                  },
                  {
                    icon: <SiTailwindcss className="w-12 h-12" style={{ color: '#38B2AC' }} />,
                    title: 'Tailwind CSS',
                    subtitle: 'Utility-first CSS',
                    handle: '@tailwindcss',
                    borderColor: '#38B2AC',
                    gradient: 'linear-gradient(145deg, #38B2AC, #000)',
                    url: 'https://tailwindcss.com/'
                  },
                  {
                    icon: <SiCodeigniter className="w-12 h-12" style={{ color: '#EF4223' }} />,
                    title: 'CodeIgniter',
                    subtitle: 'PHP Framework',
                    handle: '@codeigniter',
                    borderColor: '#EF4223',
                    gradient: 'linear-gradient(145deg, #EF4223, #000)',
                    url: 'https://codeigniter.com/'
                  },
                  {
                    icon: <FaGitAlt className="w-12 h-12" style={{ color: '#F05032' }} />,
                    title: 'Git',
                    subtitle: 'Version Control',
                    handle: '@git',
                    borderColor: '#F05032',
                    gradient: 'linear-gradient(145deg, #F05032, #000)',
                    url: 'https://git-scm.com/'
                  }
                ]}
                radius={400}
                damping={0.5}
                fadeOut={0.7}
                ease="power3.out"
                className="mt-8"
              />
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16 md:py-24 relative overflow-hidden"  data-aos="fade-left" data-aos-delay="500">
            <div className="container mx-auto px-4">
              <div className="w-full relative mb-12">
                <div className="relative flex items-center">
                  <h2 className="text-2xl text-white md:text-4xl font-bold inline-block px-6 py-3 rounded-lg border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Testimonials
                  </h2>
                  <div className="hidden md:block flex-grow ml-4 h-px bg-white/20"></div>
                </div>
              </div>
              
              <div className="relative w-full min-h-[300px] flex items-center justify-center">
                <div className="absolute left-0 md:left-4 z-20 flex flex-col items-center space-y-1">
                  <button 
                    onClick={prevTestimonial}
                    className="glassmorphism p-2.5 rounded-full text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg border border-white/20 hover:border-white/30"
                    aria-label="Previous testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                
                <div className="w-full max-w-4xl mx-auto px-4">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentIndex}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-full">
                        <TestimonialCard
                          quote={TESTIMONIALS[currentIndex].quote}
                          author={TESTIMONIALS[currentIndex].author}
                          role={TESTIMONIALS[currentIndex].role}
                          className={`w-full h-full text-sm overflow-auto hover:shadow-lg hover:shadow-${TESTIMONIALS[currentIndex].color}-500/10 transition-all duration-300`}
                        />
                      </div>
                      
                      {/* Only show second card on desktop */}
                      <div className="hidden md:block w-full h-full">
                        <TestimonialCard
                          quote={TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length].quote}
                          author={TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length].author}
                          role={TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length].role}
                          className={`w-full h-full text-sm overflow-auto hover:shadow-lg hover:shadow-${TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length].color}-500/10 transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                <div className="absolute right-0 md:right-4 z-20 flex flex-col items-center space-y-1">
                  <button 
                    onClick={nextTestimonial}
                    className="glassmorphism p-2.5 rounded-full text-white transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg border border-white/20 hover:border-white/30"
                    aria-label="Next testimonial"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 mix-blend-overlay filter blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500 mix-blend-overlay filter blur-3xl"></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
