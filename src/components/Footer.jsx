import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface/50 text-text px-6 pt-16 pb-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-tight text-text">
              {profile.name || "Portfolio"}<span className="text-accent">.</span>
            </h3>
            <p className="text-text-muted text-sm leading-relaxed max-w-sm">
              Full-Stack Developer crafting clean, scalable, and user-centric web architectures with pixel-perfect design.
            </p>
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 text-accent text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for new work & collaborations
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-text-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials Column */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-text-muted mb-4">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 text-sm text-text-muted hover:text-accent transition-colors"
              >
                <Mail size={16} /> Send Email
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {year} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent hover:bg-accent-soft transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}