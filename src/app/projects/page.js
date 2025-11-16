"use client";

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import TextType from '@/components/TextType';

const projects = [
  {
    title: "Order Management System",
    description: "A comprehensive web app for gift sellers to manage products, orders, and inventory in one platform, eliminating the need for spreadsheets and social media management.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "CodeIgniter 4", "XAMPP"],
    image: "/images/FOMS.png",
    demo: "https://youtu.be/BIB1Lw2sjYA?si=4dFenrQW9K_34m9m",
    github: "#"
  },
  {
    title: "Motorparts Order Management System",
    description: "Streamlined platform for motorparts sellers to efficiently track inventory, process orders, and manage their business operations from a single dashboard.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "CodeIgniter 4", "XAMPP"],
    image: "/images/MOMS.png",
    demo: "https://youtu.be/3TweOMU8Jys?si=_rQnhGZ0vaeUdGLz",
    github: "#"
  },
  {
    title: "Car Rental Management System",
    description: "End-to-end solution for car rental businesses to manage their fleet, bookings, and customer interactions with an intuitive interface and powerful features.",
    tags: ["PHP", "MySQL", "CSS", "XAMPP"],
    image: "/images/CRS.png",
    demo: "https://youtu.be/RvHK7aLQJ00?si=FC5ke7mbfIks2a14",
    github: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen">
  {/* Hero Project (First Project) */}
    {projects.length > 0 && (
      <section className="py-20 mt-10">
        <div className="container mx-auto px-4 sm:px-8">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Project Image - Left Side */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: '16/9' }}>
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details - Right Side */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{projects[0].title}</h2>
              
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {projects[0].description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={projects[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Demo
                </a>
                <a
                  href={projects[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FiGithub className="w-5 h-5 mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    )}

  {/* Other Projects */}
  <div className="container mx-auto px-4 sm:px-8 py-20 space-y-32">
    {projects.slice(1).map((project, index) => (
      <motion.article
        key={project.title}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 0 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Project Image - Alternates sides */}
        <div
          className={`relative w-full rounded-2xl overflow-hidden shadow-xl ${
            index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
          }`}
          style={{ aspectRatio: '16/9' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Project Details */}
        <div
          className={`space-y-6 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-sm font-medium bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FiGithub className="w-5 h-5 mr-2" />
              View Code
            </a>
          </div>
        </div>
      </motion.article>
    ))}
  </div>

    {/* Hook for potential clients */}
    <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark p-4 md:p-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 hidden md:block">
        <img 
          alt="A modern single-story house with wooden slat details and a manicured hedge." 
          className="w-[30vw] h-auto max-w-[400px] object-cover aspect-square rounded-3xl shadow-2xl" 
          src="images/FOMS.png"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden md:block">
        <img 
          alt="A contemporary two-story house with dark wood cladding and a glass balcony." 
          className="w-[30vw] h-auto max-w-[400px] object-cover aspect-square rounded-3xl shadow-2xl" 
          src="images/CRS.png"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto px-4">
        <div className="w-8 h-8 bg-heading-light dark:bg-heading-dark clip-path-star mb-8"></div>
        <h2 className="font-playfair italic font-medium text-4xl md:text-5xl lg:text-6xl text-heading-light dark:text-heading-dark leading-tight">
          Let's Transform Your {' '}
          <TextType 
            text={[
              {text: 'Digital Vision', className: 'bg-gradient-to-r from-cyan-400 to-blue-500'},
              {text: 'Online Presence', className: 'bg-gradient-to-r from-purple-400 to-pink-500'},
              {text: 'Brand Identity', className: 'bg-gradient-to-r from-orange-400 to-amber-500'}
            ]}
            typingSpeed={70}
            pauseDuration={2000}
            showCursor={true}
            className="font-bold bg-clip-text text-transparent"
          />
        </h2>
        <p className="mt-6 max-w-2xl text-text-light dark:text-text-dark text-lg md:text-xl leading-relaxed">
          I specialize in crafting <span className="font-medium">immersive digital experiences</span> that captivate audiences and drive real business growth. My approach combines cutting-edge technology with intuitive design to deliver <span className="font-medium">exceptional results</span> and <span className="font-medium">outstanding value</span>.
        </p>
        <div className="mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="contact" 
            className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-900 outline-white-900 border-[1.5px] text-white rounded-lg font-medium text-base hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-6 flex items-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 flex-shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>No project too big or small. Let's build something amazing together.</span>
        </p>
      </div>
      <style jsx global>{`
        .clip-path-star {
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
      `}</style>
    </section>
  </div>
  );
}