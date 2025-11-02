import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import TextType from '../components/TextType';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="md:space-y-3 mb-6 md:mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">Hi, I'm July</h1>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2 w-full">
                  <div className="inline-block min-w-[20ch] text-left">
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
              <p className="text-[var(--muted)] max-w-prose mb-6 -mt-6 mx-auto md:mx-0 text-sm md:text-base">
                A 2nd year IT student and aspiring developer. I create simple yet effective web applications tailored to your needs. Let's connect if you're building something I can contribute to.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white hover:opacity-90 transition-opacity" href="/projects">View Projects</a>
                <a className="w-full sm:w-auto text-center px-6 py-3 rounded-lg font-medium border border-[var(--border)] hover:bg-white/5 transition-colors" href="/about">About Me</a>
              </div>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 relative">
                <Image 
                  className="rounded-full border-4 border-[var(--border)]" 
                  src="/images/my-profile.jpg" 
                  alt="My portrait" 
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="mt-16 md:mt-24 w-full">
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
          <section className="mt-16 md:mt-24 w-full mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {[
                'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js',
                'Node.js', 'PHP', 'MySQL', 'MongoDB', 'Tailwind CSS',
                'CodeIgniter 4', 'Git', 'RESTful APIs', 'Responsive Design', 'UI/UX'
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm md:text-base rounded-full border border-[var(--border)] bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
