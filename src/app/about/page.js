import BlurText from "@/components/BlurText";
import ContactButton from "@/components/ContactButton";

export default function About(){
  return (
    <div className="container space-y-6">
      <BlurText
        text="About Me"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl font-bold"
      />                  
      <div className="glassmorphism p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
          transition-all duration-500 ease-in-out
          hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
          hover:border-white/20
          group/intro">
        <p className="text-[var(--muted)] group-hover/intro:text-[var(--text)] transition-colors duration-300">
          I am{" "}
          <span
            className="bg-clip-text text-transparent font-bold animate-gradient custom-class hover:opacity-90 transition-opacity"
            style={{
              backgroundImage: "linear-gradient(90deg, #40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animationDuration: "3s",
            }}
          >
            July Franz Claridad
          </span>
          , a 2nd-year IT student and aspiring web developer. I am currently enrolled at
          Capitol University and I am passionate about creating user-friendly web
          applications.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-3">
            <div className="space-y-4">
              <div className="space-y-8">
                {/* Goals Section */}
                <div className="glassmorphism p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                    transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:border-white/20 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#40ffaa] to-[#4079ff] rounded-full"></div>
                    <BlurText
                      text="My Goals"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl font-bold"
                    />
                  </div>
                  <p className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-300 pl-5 border-l-2 border-white/10">
                    I aim to become a full‑stack developer who builds fast, accessible products that solve real problems.
                    <span className="block mt-2 text-sm text-[var(--muted)]">Short term: strengthen fundamentals and ship more projects. Long term: lead impactful, user‑centric initiatives.</span>
                  </p>
                </div>

                {/* Values Section */}
                <div className="glassmorphism p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                    transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:border-white/20 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#ff40aa] to-[#ff8f40] rounded-full"></div>
                    <BlurText
                      text="My Values"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl font-bold"
                    />
                  </div>
                  <p className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-300 pl-5 border-l-2 border-white/10">
                    Clarity over complexity. Small, consistent improvements. Communicate early. Measure, learn, iterate.
                    <span className="block mt-2 text-sm text-[var(--muted)]">I value clean code, helpful documentation, and respecting users' time.</span>
                  </p>
                </div>

                {/* Building Section */}
                <div className="glassmorphism p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                    transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:border-white/20 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#4079ff] to-[#aa40ff] rounded-full"></div>
                    <BlurText
                      text="What I Enjoy Building"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl font-bold"
                    />
                  </div>
                  <p className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-300 pl-5 border-l-2 border-white/10">
                    Interfaces that feel snappy and intuitive—dashboards, tools, and small apps that make workflows smoother.
                    <span className="block mt-2 text-sm text-[var(--muted)]">I enjoy turning rough ideas into polished experiences.</span>
                  </p>
                </div>

                {/* Learning Section */}
                <div className="glassmorphism p-6 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                    transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] hover:border-white/20 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-[#40ffaa] to-[#40ffeb] rounded-full"></div>
                    <BlurText
                      text="What I'm Learning"
                      delay={150}
                      animateBy="words"
                      direction="top"
                      className="text-xl font-bold"
                    />
                  </div>
                  <p className="text-[var(--muted)] group-hover:text-[var(--text)] transition-colors duration-300 pl-5 border-l-2 border-white/10">
                    Deepening my knowledge of React/Next.js, TypeScript, and modern CSS.
                    <span className="block mt-2 text-sm text-[var(--muted)]">Exploring backend fundamentals, REST APIs, and database design to become more versatile across the stack.</span>
                  </p>
                </div>
              </div>

              
              <section className="mb-8">
                <BlurText
                  text="Contact Me" 
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl font-bold mb-4"  
                />
                <div className="glassmorphism p-6 rounded-2xl backdrop-blur-lg border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
                  transition-all duration-500 ease-in-out
                  hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
                  hover:border-white/20
                  hover:scale-[1.02]
                  hover:backdrop-blur-xl
                  group/card">
                <p className="text-[var(--text)] text-sm leading-relaxed">
                  <span className="block mb-3 group-hover/card:translate-x-1 transition-transform duration-300">I’m open to internship opportunities, collaborations, and feedback on my projects.</span>
                  <span className="block group-hover/card:translate-x-1 transition-transform duration-300 delay-75">Let’s connect if you’re building something I can contribute to.</span>
                </p>
                <ContactButton />
              </div>
              </section>
            </div>
        </div>
        </div>
        <div>
          <BlurText
                  text="Education" 
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl font-bold mb-4" 
                />
          <div className="glassmorphism p-6 rounded-2xl mb-8 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
              transition-all duration-300 ease-in-out
              hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
              hover:border-white/20
              group/edu">
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-[var(--text)] text-sm leading-relaxed">
                  <span className="font-medium">Capitol University</span>
                  <span className="block text-[var(--muted)] text-xs mt-1">Bachelor of Science in Information Technology</span>
                  <span className="inline-block bg-white/10 text-white/80 text-xs px-2 py-0.5 rounded-full mt-2 group-hover/edu:bg-white/20 transition-colors">
                    2024 - Present
                  </span>
                </p>
              </div>
            </div>
          </div>
          <BlurText
                  text="Certifications" 
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-2xl font-bold" 
                />
          <div className="space-y-4 mt-6">
            <div className="glassmorphism p-5 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-in-out
                hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
                hover:border-white/20
                group/cert">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[var(--text)] text-sm">
                    <span className="font-medium">Google DevFest Participant</span>
                    <span className="block text-[var(--muted)] text-xs mt-0.5">Google • 2024</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-5 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-in-out
                hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
                hover:border-white/20
                group/cert">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[var(--text)] text-sm">
                    <span className="font-medium">Cryptocurrency and Blockchain Web3 Seminar</span>
                    <span className="block text-[var(--muted)] text-xs mt-0.5">DICT • 2025</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="glassmorphism p-5 rounded-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all duration-300 ease-in-out
                hover:shadow-[0_8px_60px_rgba(255,255,255,0.1)]
                hover:border-white/20
                group/cert">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-[var(--text)] text-sm">
                    <span className="font-medium">Multimedia Arts Service Award</span>
                    <span className="block text-[var(--muted)] text-xs mt-0.5">Liceo de Cagayan University • 2024</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
