import React, { useState, useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const fallbackImage =
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80";

  const total = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Gesture Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-surface/50 transition-colors duration-300 relative overflow-hidden">
      {/* Background Subtle Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-accent/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-mono font-semibold tracking-widest text-accent uppercase mb-2 flex items-center justify-center gap-2">
            <Sparkles size={16} /> MY WORK
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-text mb-3 tracking-tight">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto">
            Engineering scalable web architectures with pixel-perfect precision.
          </p>
        </div>

        {/* 3D Coverflow Stage with Touch Support */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full py-6 sm:py-10 flex items-center justify-center min-h-[460px] sm:min-h-[520px] [perspective:1000px] sm:[perspective:1200px] touch-pan-y"
        >
          <div className="relative w-full max-w-5xl h-[420px] sm:h-[460px] flex items-center justify-center">
            {projects.map((project, index) => {
              let offset = index - currentIndex;

              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 2;

              if (!isVisible) return null;

              // Responsive Spacing & Angle Calcs
              const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
              const translateX = offset * (isMobile ? 180 : 260); 
              const translateZ = isActive ? 0 : -160 - Math.abs(offset) * 40;
              const rotateY = offset < 0 ? (isMobile ? 25 : 35) : offset > 0 ? (isMobile ? -25 : -35) : 0;
              const scale = isActive ? 1 : isMobile ? 0.8 : 0.85;
              const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.2;
              const zIndex = 10 - Math.abs(offset);

              return (
                <div
                  key={project.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    willChange: "transform, opacity",
                  }}
                  className={`absolute w-[290px] sm:w-[380px] h-[400px] sm:h-[440px] rounded-3xl border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer select-none bg-surface p-5 sm:p-6 shadow-xl flex flex-col justify-between ${
                    isActive
                      ? "border-accent shadow-2xl shadow-accent/15"
                      : "border-border/80 hover:border-accent/40"
                  }`}
                >
                  {/* Top Image & Status Tag */}
                  <div>
                    <div className="relative h-36 sm:h-44 w-full overflow-hidden rounded-2xl bg-border/20 mb-3 sm:mb-4 border border-border/40">
                      <img
                        src={project.image || fallbackImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                      {isActive && (
                        <span className="absolute top-3 right-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold bg-surface/90 text-accent border border-accent/30 shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" /> FEATURED
                        </span>
                      )}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-text mb-1 sm:mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 leading-relaxed mb-2 sm:mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack & Links (Bottom Section) */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Tech Badges (FIXED: Saari technologies dikhenge ab) */}
                    <div className="flex flex-wrap gap-1 max-h-14 overflow-y-auto custom-scrollbar">
                      {(project.stack || ["React", "CSS"]).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-accent-soft text-accent border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 sm:pt-3 border-t border-border flex items-center justify-between gap-2 sm:gap-3 text-xs font-semibold">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => !isActive && e.preventDefault()}
                          className="flex-1 text-center text-accent hover:text-white hover:bg-accent flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl bg-accent-soft border border-accent/30 transition-all"
                        >
                          Live <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="flex-1 text-center text-text-muted opacity-50">Demo N/A</span>
                      )}

                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => !isActive && e.preventDefault()}
                          className="flex-1 text-center text-text hover:text-accent flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 sm:px-3 rounded-xl bg-surface border border-border transition-all"
                        >
                          Code <Github size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <button
            onClick={handlePrev}
            className="p-2.5 sm:p-3 rounded-xl border border-border bg-surface text-text hover:text-accent hover:border-accent transition-all shadow-sm active:scale-95"
            aria-label="Previous Project"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-6 sm:w-8 h-2 sm:h-2.5 bg-accent"
                    : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 sm:p-3 rounded-xl border border-border bg-surface text-text hover:text-accent hover:border-accent transition-all shadow-sm active:scale-95"
            aria-label="Next Project"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}