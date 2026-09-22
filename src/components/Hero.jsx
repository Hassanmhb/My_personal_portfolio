import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowRight, MessageSquare } from "lucide-react";
import { profile, socials } from "../data/portfolioData";
import profileImg from "../img/abc.jpeg"; // Relative path to your image

const iconMap = { Github, Linkedin, Mail };

// Typing animation texts
const typingTexts = [
  "Clean UIs & Scalable Web Applications.",
  "High-Performance Web Solutions.",
  "Full Stack Web Applications.",
  "Seamless User Experiences."
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    let typingSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 2000; // Poora text type hone ke baad 2 sec hold
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 300; // Delete hone ke baad next start karne se pehle chota pause
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 px-6 overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Decorative Glow Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-accent-soft text-[11px] font-mono text-signal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
              </span>
              <span>{profile.status || "Available for freelance & opportunities"}</span>
            </div>

            {/* Heading & Typing Subtitle */}
            <div className="space-y-3">
              <span className="block text-xs font-mono font-semibold tracking-widest text-accent uppercase">
                Full Stack Developer
              </span>

              {/* Name set to Muhammad Hassan Baig */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-text tracking-tight leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-500 to-purple-600">
                  Muhammad Hassan Baig
                </span>
              </h1>

              {/* Dynamic Typing Animation Subtitle (Fixed Overflow & Wrapping) */}
              <div className="text-base sm:text-xl font-semibold text-text-muted min-h-[56px] sm:min-h-[32px] leading-snug">
                <span>I build </span>
                <span className="text-accent font-bold">
                  {typingTexts[textIndex].substring(0, charIndex)}
                </span>
                <span className="inline-block w-[2px] h-[1em] bg-accent ml-1 translate-y-[2px] animate-pulse" />
              </div>
            </div>

            {/* Tagline & Bio */}
            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-xl">
              Aspiring Software Engineer & Full Stack Specialist | Transforming complex business requirements into high-performance, real-time web applications. Expert in React, Node.js, and modern web tools with a focus on writing clean, maintainable code.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-accent hover:opacity-90 shadow-md shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-text bg-surface hover:bg-border/40 border border-border transition-all duration-300"
              >
                <span>View Projects</span>
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-text-muted hover:text-text transition-colors"
                  title="Download Resume"
                >
                  <Download size={15} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Dynamic Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="p-2.5 rounded-xl border border-border text-text-muted hover:text-accent hover:border-accent hover:bg-accent-soft/20 transition-all duration-300"
                  >
                    {Icon && <Icon size={16} />}
                  </a>
                );
              })}

              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  title="WhatsApp"
                  className="p-2.5 rounded-xl border border-border text-text-muted hover:text-emerald-500 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <MessageSquare size={16} />
                </a>
              )}
            </div>

          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-25 transform rotate-2 scale-95"
                style={{ background: "linear-gradient(135deg, var(--accent), #8b5cf6)" }}
              />

              <div className="relative rounded-2xl bg-surface overflow-hidden border border-border/80 shadow-xl">
                <img
                  src={profileImg}
                  alt="Muhammad Hassan Baig"
                  className="w-full h-[320px] sm:h-[380px] object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}