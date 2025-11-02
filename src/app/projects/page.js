"use client";

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Order Management System",
    description: "A comprehensive web app for gift sellers to manage products, orders, and inventory in one platform, eliminating the need for spreadsheets and social media management.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "CodeIgniter 4", "XAMPP"],
    image: "/images/OMS.png",
    demo: "https://youtu.be/BIB1Lw2sjYA?si=4dFenrQW9K_34m9m",
    github: "#"
  },
  {
    title: "Motorparts Order Management System",
    description: "Streamlined platform for motorparts sellers to efficiently track inventory, process orders, and manage their business operations from a single dashboard.",
    tags: ["PHP", "MySQL", "Tailwind CSS", "CodeIgniter 4", "XAMPP"],
    image: "/images/motor-parts-oms.png",
    demo: "https://youtu.be/3TweOMU8Jys?si=_rQnhGZ0vaeUdGLz",
    github: "#"
  },
  {
    title: "Car Rental Management System",
    description: "End-to-end solution for car rental businesses to manage their fleet, bookings, and customer interactions with an intuitive interface and powerful features.",
    tags: ["PHP", "MySQL", "CSS", "XAMPP"],
    image: "/images/car-rental.png",
    demo: "https://youtu.be/RvHK7aLQJ00?si=FC5ke7mbfIks2a14",
    github: "#"
  }
];

export default function Projects() {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#40ffaa] to-[#4079ff] mb-4 py-1 leading-tight">
          My Projects
        </h1>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve specific problems and improve user experiences.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-full"
          >
            <div className="glassmorphism h-full rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_32px_rgba(31,38,135,0.2)]">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 flex translate-y-4 justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <FiGithub size={16} />
                    Code
                  </a>
                </div>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-[var(--muted)]">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-[var(--muted)] backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}