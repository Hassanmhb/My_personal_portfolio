import React from "react";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-bg-elevated/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-mono text-text-muted mb-2"></p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text relative inline-block">
            About Me
            <span className="block h-1 w-12 bg-accent rounded-full mx-auto mt-2"></span>
          </h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Who I Am */}
          <div className="md:col-span-7 rounded-2xl border border-border bg-surface p-8 shadow-sm flex flex-col justify-between hover:border-accent/40 transition-colors">
            <div>
              <h3 className="font-display font-semibold text-2xl text-text mb-4">
                Who I Am
              </h3>
              
              <div className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed">
                <p>
                  I’m a passionate <strong className="text-text font-medium">Full-Stack Web Developer</strong> dedicated to building high-performance, scalable, and modern web applications. I bridge the gap between intuitive user interfaces and robust server-side architectures.
                </p>
                <p>
                  My core stack includes <strong className="text-text font-medium">React, Next.js, Node.js, Express, and MongoDB</strong>. From designing responsive frontend layouts to setting up JWT authentication and REST APIs, I focus on writing clean, maintainable code.
                </p>
                <p>
                  Whether working on admin dashboards, e-commerce platforms, or web APIs, I thrive on solving complex technical problems and delivering reliable end-to-end solutions.
                </p>
              </div>
            </div>

            {/* Core Technical Highlights */}
            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-xs text-text font-medium">Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-xs text-text font-medium">REST API & Auth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-xs text-text font-medium">Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                <span className="text-xs text-text font-medium">Responsive UI Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Education & Qualifications */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-surface p-8 shadow-sm flex flex-col justify-between hover:border-accent/40 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </div>
                <h3 className="font-display font-semibold text-xl text-text">
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {/* DAE Technical Diploma */}
                <div className="relative pl-6 border-l-2 border-accent/30 space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent"></div>
                  <h4 className="font-semibold text-text text-base">
                    DAE - Diploma of Associate Engineer
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    Board of Technical Education
                  </p>
                  <p className="text-xs text-text-muted">Completed</p>
                </div>

                {/* Bootcamp / Certification */}
                <div className="relative pl-6 border-l-2 border-accent/30 space-y-1">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent"></div>
                  <h4 className="font-semibold text-text text-base">
                    Saylani Mass IT Training (SMIT)
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    Web & App Development Program
                  </p>
                  <p className="text-xs text-text-muted">
                    HTML, CSS, JavaScript, React, Node.js & MongoDB
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Availability Status */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
              <span className="text-xs text-text-muted">Status</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                Open for Opportunities
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}