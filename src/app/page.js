'use client';

import Image from "next/image";
import dynamic from 'next/dynamic';
import ProjectCard from "@/components/ProjectCard";
import TextType from '../components/TextType';
import Magnet from '@/components/Magnet';

// Dynamically import LogoLoop with no SSR to avoid window is not defined errors
const LogoLoop = dynamic(() => import('@/components/LogoLoop'), {
  ssr: false,
  loading: () => <div className="h-24 flex items-center justify-center text-sm text-gray-400">Loading skills...</div>
});
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase, 
  FaGitAlt, 
  FaCode,
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFilePdf 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiCodeigniter,
  SiGmail
} from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

export default function Home() {
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
                  Hi, I'm July
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
                A 2nd year IT student and aspiring developer. I create simple yet effective web applications tailored to your needs. Let's connect if you're building something I can contribute to.
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
                    className="cursor-target w-full block text-center px-6 py-3 rounded-lg font-medium border border-[var(--border)] hover:bg-white/5 transition-all duration-300"
                    href="/JULY_RESUME.pdf"
                    download="JULY_RESUME.pdf"
                  >
                    Download CV
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

          {/* Projects Section */}
          <section 
            className="mt-16 md:mt-24 w-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">Recent Projects</h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce solution with real-time inventory and payment processing."
                imageSrc="/images/OMS.png"
                tags={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]}
                link="https://youtu.be/BIB1Lw2sjYA?si=4dFenrQW9K_34m9m"
              />
              <ProjectCard
                title="Motorparts Ecommerce"
                description="An e-commerce platform for auto parts with inventory management and order processing."
                imageSrc="/images/motor-parts-oms.png"
                tags={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]}
                link="https://youtu.be/3TweOMU8Jys?si=_rQnhGZ0vaeUdGLz"
              />
              <ProjectCard
                title="Car Rental Platform"
                description="A complete car rental system with booking management and admin dashboard."
                imageSrc="/images/car-rental.png"
                tags={["PHP", "MySQL", "Tailwind"]}
                link="https://youtu.be/RvHK7aLQJ00?si=FC5ke7mbfIks2a14"
              />
            </div>
          </section>

          {/* Skills Section */}
          <section 
            className="mt-16 md:mt-24 w-full mb-12"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
            
            <div className="relative">
              <LogoLoop
                logos={[
                  { node: <FaHtml5 className="w-10 h-10 text-orange-500" />, title: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                  { node: <FaCss3Alt className="w-10 h-10 text-blue-500" />, title: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                  { node: <FaJs className="w-10 h-10 text-yellow-400" />, title: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                  { node: <FaReact className="w-10 h-10 text-cyan-400" />, title: 'React', href: 'https://reactjs.org/' },
                  { node: <SiNextdotjs className="w-10 h-10 text-white" />, title: 'Next.js', href: 'https://nextjs.org/' },
                  { node: <FaNodeJs className="w-10 h-10 text-green-500" />, title: 'Node.js', href: 'https://nodejs.org/' },
                  { node: <FaPhp className="w-10 h-10 text-indigo-400" />, title: 'PHP', href: 'https://www.php.net/' },
                  { node: <FaDatabase className="w-10 h-10 text-blue-400" />, title: 'MySQL', href: 'https://www.mysql.com/' },
                  { node: <SiMongodb className="w-10 h-10 text-green-500" />, title: 'MongoDB', href: 'https://www.mongodb.com/' },
                  { node: <SiTailwindcss className="w-10 h-10 text-cyan-400" />, title: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
                  { node: <SiCodeigniter className="w-10 h-10 text-orange-500" />, title: 'CodeIgniter 4', href: 'https://codeigniter.com/' },
                  { node: <FaGitAlt className="w-10 h-10 text-orange-600" />, title: 'Git', href: 'https://git-scm.com/' },
                ]}
                speed={10}
                logoHeight={60}
                gap={48}
                pauseOnHover={true}
                scaleOnHover={true}
                fadeOut={true}
                fadeOutColor="#0A192F"
                className="-mx-4 md:-mx-8"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
