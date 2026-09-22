import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const filteredNavLinks = navLinks.filter(
    (link) => link.label.toLowerCase() !== "experience"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    filteredNavLinks.forEach((link) => {
      const sectionId = link.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.replace("#", "");
    setActiveSection(targetId);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border/70 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-12">
        {/* Brand Logo - Fixed Code */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0"
        >
          {profile.logo ? (
            <img 
              src={profile.logo} 
              alt={profile.name} 
              className="h-14 w-auto object-contain max-h-14" 
            />
          ) : (
            <span className="font-display font-bold text-2xl tracking-tight text-text">
              {profile.avatarInitials || "HB"}
            </span>
          )}
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1.5 bg-surface/50 p-2 rounded-full border border-border/50 backdrop-blur-md shadow-inner">
          {filteredNavLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative z-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 block ${
                    isActive
                      ? "text-accent"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {link.label}
                </a>

                {isActive && (
                  <span className="absolute inset-0 bg-accent-soft/30 border border-accent/30 rounded-full transition-all duration-300 animate-in fade-in zoom-in-95" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-3 rounded-full border border-border text-text-muted hover:text-accent hover:border-accent hover:bg-accent-soft/20 transition-all duration-200"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-3 rounded-full border border-border text-text hover:border-accent transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="md:hidden bg-bg-elevated/95 backdrop-blur-lg border-b border-border px-6 py-6">
          <ul className="flex flex-col gap-2.5">
            {filteredNavLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between text-base py-2.5 px-4 rounded-xl font-medium transition-all ${
                      isActive
                        ? "text-accent bg-accent-soft/20 font-semibold"
                        : "text-text-muted hover:text-text hover:bg-border/20"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}