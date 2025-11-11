'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import TiltedCard from '@/components/TiltedCard';
import QualitiesShowcase from '@/components/QualitiesShowcase';
import VerticalLogoLoop from '@/components/VerticalLogoLoop';
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaPhp 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiMongodb, SiTailwindcss, SiCodeigniter 
} from 'react-icons/si';
import Plasma from '@/components/Plasma';
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
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden">
        {/* Plasma Background */}
        <div className="absolute inset-0 z-0">
          <Plasma 
            color="#3B82F6"
            speed={0.6}
            direction="forward"
            scale={1.1}
            opacity={0.15}
            mouseInteractive={true}
            className="mix-blend-screen"
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[80vw] h-[80vw] bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full mix-blend-soft-light filter blur-3xl animate-float"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[80vw] h-[80vw] bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full mix-blend-soft-light filter blur-3xl animate-float animation-delay-2000 z-10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image */}
            <div className="relative group">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Main profile image with TiltedCard and matching gradient */}
                <div className="relative w-full h-full md:-mt-24">
                  <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    {/* Gradient background with same dimensions as TiltedCard */}
                    <div className="absolute inset-0 w-[80%] h-[70%] md:left-0 md:right-0 md:mx-auto">
                      <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-[#112240] to-[#1e3a8a] rounded-3xl opacity-40 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#112240] to-[#1e3a8a] rounded-3xl opacity-80 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                    </div>
                    
                    <div className="relative w-full h-full flex items-center justify-center">
                      <TiltedCard
                        imageSrc="/images/my-profile.jpg"
                        altText="July Franz Claridad"
                        containerHeight="70%"
                        containerWidth="80%"
                        scaleOnHover={1.03}
                        rotateAmplitude={8}
                        showTooltip={false}
                        showMobileWarning={false}
                        className="w-full h-full rounded-2xl overflow-hidden border-4 border-white/10 bg-gray-800/50 backdrop-blur-sm"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob z-9999"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 z-9999"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-white w-full h-full flex flex-col">
              {/* Qualities Showcase - Main Content */}
              <AnimatePresence>
                <motion.div 
                  className="flex-1 flex flex-col h-[600px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1] // Custom easing for smooth animation
                    } 
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -20,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    } 
                  }}
                >
                  <QualitiesShowcase />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Tech Stack */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">My Toolkit</h2>
              <div className="relative h-full -mb-15 rounded-2xl p-6 overflow-visible" style={{ '--fade-color': '#ffff' }}>
                <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[var(--fade-color)] via-[var(--fade-color)] via-30% to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-16 md:bottom-24 left-0 right-0 h-28 bg-gradient-to-t from-[var(--fade-color)] via-[var(--fade-color)] via-30% to-transparent z-10 pointer-events-none"></div>
                <VerticalLogoLoop
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
                  itemHeight={180}
                  gap={15}
                  fadeOutColor="#F9FAFB"
                  className="h-[500px]"
                  renderItem={(item, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 h-full"
                      style={{
                        borderLeft: `4px solid ${item.borderColor}`,
                        background: item.gradient,
                        color: 'white'
                      }}
                    >
                      <div className="mb-3">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.subtitle}</p>
                    </div>
                  )}
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
              
              {/* My Mission Section */}
              <div className="bg-gradient-to-br from-[#0A192F] to-[#4079ff] mt-12 p-8 rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl flex flex-col items-center justify-center text-center">
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-lg font-medium bg-indigo-100 text-indigo-800">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    My Purpose
                  </span>
                </div>
                <p className="text-white max-w-md mx-auto">
                  I am dedicated to creating exceptional digital experiences that make a difference. 
                  I combine creativity with technical expertise to deliver solutions that 
                  help businesses thrive in the digital world.
                </p>
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