import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import TextType from './TextType';

export default function Home(){
  return (
    <div className="container grid md:grid-cols-2 place-items-center gap-6 min-h-[56vh]">
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2">Hi I'm July</h1>
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
        <p className="text-[var(--muted)] max-w-prose mb-4">A 2nd year IT student and aspiring developer. I create simple yet effective web applications tailored to your needs. Let's connect if you're building something I can contribute to. Click <a href="/projects" className="font-bold hover:underline transition-all duration-800">here</a> for more details of my work. </p>
        <div className="flex gap-3">
          <a className="btn" href="/projects">View Projects</a>
          <a className="btn-secondary" href="/about">About Me</a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image className="rounded-full border border-[var(--border)]" src="/images/my-profile.jpg" alt="My portrait" width={240} height={240} />
      </div>

      <section className="md:col-span-2 w-full pt-4">
  <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <ProjectCard
      title="E-commerce Platform"
      description="A full-stack e-commerce solution with real-time inventory and payment processing."
      imageSrc="/images/OMS.png"
      tags={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]}
      link="https://youtu.be/BIB1Lw2sjYA?si=4dFenrQW9K_34m9m"
    />
    <ProjectCard
      title="Motorparts Ecommerce Platform"
      description="A collaborative task management tool with drag-and-drop interface and team features."
      imageSrc="/images/motor-parts-oms.png"
      tags={["PHP", "MySQL", "Tailwind", "CodeIgniter 4"]}
      link="https://youtu.be/3TweOMU8Jys?si=_rQnhGZ0vaeUdGLz"
    />
    <ProjectCard
      title="Car Rental Platform"
      description="A modern portfolio website with smooth animations and dark mode support."
      imageSrc="/images/car-rental.png"
      tags={["PHP", "MySQL", "Tailwind"]}
      link="https://youtu.be/RvHK7aLQJ00?si=FC5ke7mbfIks2a14"
    />
  </div>
</section>

      <section className="md:col-span-2 w-full">
        <h2 className="text-2xl font-bold mb-3">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {['HTML','CSS / Tailwind','JavaScript','React','Node','UI/UX', 'PHP', 'MySQL', 'CodeIgniter 4'].map(s=> (
            <li key={s} className="px-3 py-2 rounded-full border border-[var(--border)] bg-white/5">{s}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
