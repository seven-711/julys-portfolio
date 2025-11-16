'use client';

import AnimatedList from '@/components/AnimatedList';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si';
import TextType from '@/components/TextType';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import FadeContent from '@/components/FadeContent';
import Link from 'next/link';
import TiltedCard from '@/components/TiltedCard';
import QualitiesShowcase from '@/components/QualitiesShowcase';
import Aurora from '@/components/Aurora';

// Dynamic imports for components that use browser APIs
const CardSwap = dynamic(() => import('@/components/CardSwap'), { 
  ssr: false,
  loading: () => null 
});

// Import Card from CardSwap
import { Card } from '@/components/CardSwap';
import VerticalStepper, { Step } from '@/components/Stepper';

// Dynamically import GradualBlur with no SSR to avoid window is not defined errors
const GradualBlur = dynamic(() => import('@/components/GradualBlur'), {
  ssr: false,
  loading: () => null
});

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle manual navigation
  const goToCard = (index) => {
    setActiveIndex(index);
    // Reset the auto-rotate timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 5000);
    }
  };
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden py-10">
        {/* Plasma Background */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#0ea5e9", "#7c3aed", "#0ea5e9"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.4}
            className="mix-blend-screen opacity-80"
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[80vw] h-[80vw] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full mix-blend-soft-light filter blur-3xl animate-float animation-delay-2000 z-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <div className="relative md:-mt-15 group flex items-center justify-center w-full">
              <div className="relative w-[450px] h-[450px] md:w-[450px] md:h-[450px] mx-auto">
                <TiltedCard
                  imageSrc="/images/my-profile.jpg"
                  altText="July Franz Claridad"
                  containerHeight="100%"
                  containerWidth="100%"
                  scaleOnHover={1.03}
                  rotateAmplitude={5}
                  showTooltip={false}
                  showMobileWarning={false}
                  className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 bg-gray-800/50 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-white space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold text-white">
                  I AM AVAILABLE FOR 
                  <TextType 
                    text={[' UI/UX DESIGN', ' WEB DESIGN']} 
                    className="text-2xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                    typingSpeed={70}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                  /> PROJECTS.
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Passionate UI/UX designer with a keen eye for creating intuitive and beautiful digital experiences. 
                  I combine design thinking with user research to deliver solutions that not only look great but 
                  also solve real user problems effectively.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="glass-card p-2 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-cyan-400">5+</div>
                    <div className="text-sm text-gray-300 mt-2">Projects Done</div>
                  </div>
                  <div className="glass-card p-2 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-cyan-400">3+</div>
                    <div className="text-sm text-gray-300 mt-2">Happy Clients</div>
                  </div>
                  <div className="glass-card p-2 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-cyan-400">1+</div>
                    <div className="text-sm text-gray-300 mt-2">Years Experience</div>
                  </div>
                </div>

                <Link 
                  href="/contact"
                  className="inline-block mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  GET IN TOUCH
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Horizontal Qualities Showcase */}
          <div>
            <QualitiesShowcase/>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Tech Stack */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">My Toolkit: Modern Website Requires Modern Tools</h2>
              <div className="h-[500px]">
                <AnimatedList
                  items={[
                    {
                      icon: <FaHtml5 className="w-12 h-12" style={{ color: '#E34F26' }} />,
                      title: 'HTML5',
                      subtitle: 'Web Development',
                      borderColor: '#E34F26',
                      gradient: 'linear-gradient(145deg, #E34F26, #000)'
                    },
                    {
                      icon: <FaCss3Alt className="w-12 h-12" style={{ color: '#1572B6' }} />,
                      title: 'CSS3',
                      subtitle: 'Styling',
                      borderColor: '#1572B6',
                      gradient: 'linear-gradient(145deg, #1572B6, #000)'
                    },
                    {
                      icon: <FaJs className="w-12 h-12" style={{ color: '#F7DF1E' }} />,
                      title: 'JavaScript',
                      subtitle: 'Programming Language',
                      borderColor: '#F7DF1E',
                      gradient: 'linear-gradient(145deg, #F7DF1E, #000)'
                    },
                    {
                      icon: <FaReact className="w-12 h-12" style={{ color: '#61DAFB' }} />,
                      title: 'React',
                      subtitle: 'Frontend Library',
                      borderColor: '#61DAFB',
                      gradient: 'linear-gradient(145deg, #61DAFB, #000)'
                    },
                    {
                      icon: <SiNextdotjs className="w-12 h-12" style={{ color: '#000000' }} />,
                      title: 'Next.js',
                      subtitle: 'React Framework',
                      borderColor: '#000000',
                      gradient: 'linear-gradient(145deg, #000000, #333)'
                    },
                    {
                      icon: <FaNodeJs className="w-12 h-12" style={{ color: '#339933' }} />,
                      title: 'Node.js',
                      subtitle: 'Runtime Environment',
                      borderColor: '#339933',
                      gradient: 'linear-gradient(145deg, #339933, #000)'
                    },
                    {
                      icon: <SiMongodb className="w-12 h-12" style={{ color: '#47A248' }} />,
                      title: 'MongoDB',
                      subtitle: 'NoSQL Database',
                      borderColor: '#47A248',
                      gradient: 'linear-gradient(145deg, #47A248, #000)'
                    },
                    {
                      icon: <SiTailwindcss className="w-12 h-12" style={{ color: '#38B2AC' }} />,
                      title: 'Tailwind CSS',
                      subtitle: 'Utility-first CSS',
                      borderColor: '#38B2AC',
                      gradient: 'linear-gradient(145deg, #38B2AC, #000)'
                    }
                  ]}
                  speed={0.5}
                  className="h-full"
                />
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
              <div className="space-y-1 mb-8 text-center lg:text-left">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Core Expertise
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Technical Skills
                </h2>
              </div>
              
              <div className="space-y-6 mt-8">
                {[
                  { name: 'Web Development', level: '90%', color: 'bg-indigo-600' },
                  { name: 'UI/UX Design', level: '85%', color: 'bg-purple-600' },
                  { name: 'React & Next.js', level: '60%', color: 'bg-blue-600' },
                  { name: 'Responsive Design', level: '92%', color: 'bg-cyan-600' },
                ].map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                      <span>{skill.name}</span>
                      <span className="text-gray-500">{skill.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`} 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mission, Vision & Values Carousel */}
              <div className="mt-12 relative">
                <div className="relative h-[300px] md:h-[350px]">
                  {/* My Purpose Card */}
                  <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                    active={activeIndex === 0}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#0A192F] to-[#4079ff] p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm md:text-base font-medium bg-indigo-100 text-indigo-800 group-hover:bg-white group-hover:text-indigo-900 transition-all duration-300">
                            My Purpose
                          </span>
                        </div>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                          I am dedicated to creating exceptional digital experiences that make a difference. 
                          I combine creativity with technical expertise to deliver solutions that 
                          help businesses thrive in the digital world.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* My Vision Card */}
                  <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                    active={activeIndex === 1}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#1a365d] to-[#2c5282] p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm md:text-base font-medium bg-blue-100 text-blue-800 group-hover:bg-white group-hover:text-blue-900 transition-all duration-300">
                            My Vision
                          </span>
                        </div>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                          To push the boundaries of digital innovation, creating seamless experiences 
                          that not only meet user needs but anticipate them, setting new standards 
                          for design and functionality in the digital landscape.
                        </p>
                      </div>
                    </div>
                  </FadeContent>

                  {/* My Values Card */}
                  <FadeContent 
                    blur={true} 
                    duration={1000} 
                    easing="ease-out" 
                    initialOpacity={0}
                    active={activeIndex === 2}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-[#2d3748] to-[#4a5568] p-6 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm md:text-base font-medium bg-gray-100 text-gray-800 group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                            My Values
                          </span>
                        </div>
                        <ul className="text-white/90 text-sm md:text-base space-y-2 flex-grow">
                          <li className="flex items-start">
                            <span className="text-cyan-300 mr-2">•</span>
                            <span>User-Centric Design</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyan-300 mr-2">•</span>
                            <span>Innovation & Creativity</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyan-300 mr-2">•</span>
                            <span>Continuous Learning</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-cyan-300 mr-2">•</span>
                            <span>Collaboration & Teamwork</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </FadeContent>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {[0, 1, 2].map((dot) => (
                    <button 
                      key={dot}
                      onClick={() => goToCard(dot)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === dot ? 'w-6 bg-cyan-400' : 'bg-gray-400/30 hover:bg-cyan-400'
                      }`}
                      aria-label={`Go to slide ${dot + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <VerticalStepper>
            {/* DevFest Participation & Certifications */}
            <Step>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="mt-8 lg:mt-0">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">DevFest 2024</h2>
                  <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                    I actively engage in tech communities and events to expand my knowledge and network with fellow learners. My participation in these events has been instrumental in my continuous learning journey.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">DevFest 2024 Attendee</h3>
                      <p className="text-blue-400">Google Developer Group Cagayan de Oro • 2024</p>
                      <p className="text-gray-300 mt-2">
                        Participated in this annual developer festival featuring expert talks, hands-on workshops, and networking opportunities with industry leaders in web and mobile development.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[600px]">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                  >
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/DF1.jpeg" 
                          alt="Certification 1" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/DF2.jpeg" 
                          alt="Certification 2" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/DF3.jpeg" 
                          alt="Certification 3" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/DF4.jpeg" 
                          alt="Certification 4" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </Step>

            {/* Step 2: Experience */}
            <Step>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="mt-8 lg:mt-0">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">DICT Tech Seminar</h2>
                  <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                    I actively participate in tech seminars and workshops to stay updated with the latest industry trends and enhance my skills.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">DICT Tech Seminar Attendee</h3>
                      <p className="text-blue-400">Department of Information and Communications Technology • 2025</p>
                      <p className="text-gray-300 mt-2">
                        Attended an insightful seminar organized by DICT, focusing on the latest technological advancements and digital transformation initiatives in the country.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[600px]">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                  >
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/bitskwela1.jpg" 
                          alt="Bitskwela Team" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/bitskwela2.jpeg" 
                          alt="Bitskwela Office" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/bitskwela3.jpeg" 
                          alt="Bitskwela Event" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/bitskwela4.jpeg" 
                          alt="Bitskwela Team Building" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </Step>

            {/* Step 3: RAI Workshop */}
            <Step>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="mt-8 lg:mt-0">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Rise AI & Drone Expo</h2>
                  <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                    Played a key role in facilitating a major technology expo focused on AI and drone innovations at Cagayan de Oro, bringing together industry experts and enthusiasts.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Rise AI & Drone Expo Facilitator</h3>
                      <p className="text-blue-400">September 30, 2024</p>
                      <p className="text-gray-300 mt-2">
                        Facilitated engaging workshops on AI and drone applications, guiding participants through hands-on demonstrations and practical use cases. Assisted in coordinating event logistics, managing participant inquiries, and ensuring smooth operations throughout the expo. Played a key role in creating an inclusive environment that encouraged knowledge sharing and networking among tech enthusiasts and professionals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px] sm:h-[600px] -mt-6 sm:mt-0">
                  <CardSwap
                    cardDistance={60}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={true}
                  >
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/RAI1.jpeg" 
                          alt="RAI Workshop Session" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/RAI2.jpeg" 
                          alt="RAI Workshop Group" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/RAI3.jpeg" 
                          alt="RAI Workshop Activities" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                    <Card className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image 
                          src="/images/RAI4.jpeg" 
                          alt="RAI Workshop Certificate" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </Card>
                  </CardSwap>
                </div>
              </div>
            </Step>
          </VerticalStepper>
        </div>
      </section>

      {/* Add Gradual Blur Effect */}
      <div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-50">
        <GradualBlur
          position="bottom"
          height="8rem"
          strength={3}
          divCount={8}
          curve="bezier"
          exponential={true}
          opacity={0.9}
        />
      </div>
    </div>
  );
}
