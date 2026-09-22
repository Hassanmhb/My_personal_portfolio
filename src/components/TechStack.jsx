import React, { useState, useMemo } from "react";
import { 
  Code2, 
  Server, 
  Wrench, 
  Search, 
  Sparkles, 
  Layers,
  X
} from "lucide-react";
import { skillGroups } from "../data/portfolioData";

const categoryIconMap = {
  All: Layers,
  Frontend: Code2,
  "Backend & Database": Server,
  "Tools & DevOps": Wrench,
};

// Accurate CDN Icons Mapping
const getSkillIcon = (name) => {
  if (!name) return "https://cdn.simpleicons.org/codefactor";
  
  const normalized = name.toLowerCase().trim();

  const iconMap = {
    // HTML / CSS
    "html": "https://cdn.simpleicons.org/html5",
    "html5": "https://cdn.simpleicons.org/html5",
    "css": "https://cdn.simpleicons.org/css3/1572B6",
    "css3": "https://cdn.simpleicons.org/css3/1572B6",
    "tailwind css": "https://cdn.simpleicons.org/tailwindcss",
    "tailwindcss": "https://cdn.simpleicons.org/tailwindcss",
    
    // JS / TS
    "javascript": "https://cdn.simpleicons.org/javascript",
    "javascript (es6+)": "https://cdn.simpleicons.org/javascript",
    "js": "https://cdn.simpleicons.org/javascript",
    "typescript": "https://cdn.simpleicons.org/typescript",
    "ts": "https://cdn.simpleicons.org/typescript",

    // Frameworks
    "react": "https://cdn.simpleicons.org/react",
    "react.js": "https://cdn.simpleicons.org/react",
    "reactjs": "https://cdn.simpleicons.org/react",
    "next": "https://cdn.simpleicons.org/nextdotjs",
    "next.js": "https://cdn.simpleicons.org/nextdotjs",
    "nextjs": "https://cdn.simpleicons.org/nextdotjs",

    // Backend
    "node": "https://cdn.simpleicons.org/nodedotjs",
    "node.js": "https://cdn.simpleicons.org/nodedotjs",
    "nodejs": "https://cdn.simpleicons.org/nodedotjs",
    "express": "https://cdn.simpleicons.org/express",
    "express.js": "https://cdn.simpleicons.org/express",
    "expressjs": "https://cdn.simpleicons.org/express",

    // Databases & Cloud
    "mongodb": "https://cdn.simpleicons.org/mongodb",
    "mongo db": "https://cdn.simpleicons.org/mongodb",
    "mongo": "https://cdn.simpleicons.org/mongodb",
    "postgresql": "https://cdn.simpleicons.org/postgresql",
    "postgres": "https://cdn.simpleicons.org/postgresql",
    "firebase": "https://cdn.simpleicons.org/firebase",

    // Tools & DevOps
    "postman": "https://cdn.simpleicons.org/postman",
    "git": "https://cdn.simpleicons.org/git",
    "github": "https://cdn.simpleicons.org/github",
    "docker": "https://cdn.simpleicons.org/docker",
    "vercel": "https://cdn.simpleicons.org/vercel"
  };

  if (iconMap[normalized]) return iconMap[normalized];

  for (const key in iconMap) {
    if (normalized.includes(key)) {
      return iconMap[key];
    }
  }

  return "https://cdn.simpleicons.org/codefactor";
};

// Monochrome icons filter for theme adaptation
const isMonochromeIcon = (name) => {
  const normalized = name.toLowerCase().trim();
  return ["express", "github", "next", "vercel"].some((tech) => normalized.includes(tech));
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => ["All", ...skillGroups.map((g) => g.category)], []);

  const filteredGroups = useMemo(() => {
    return skillGroups
      .map((group) => {
        if (activeCategory !== "All" && group.category !== activeCategory) {
          return null;
        }

        const filteredSkills = group.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
        );

        if (filteredSkills.length === 0) return null;

        return {
          ...group,
          skills: filteredSkills,
        };
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.skills.length, 0);
  }, [filteredGroups]);

  return (
    <section 
      id="skills" 
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-surface/40 overflow-hidden min-h-screen flex flex-col justify-center"
    >
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] -z-10" 
      />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-[11px] font-mono font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} className="animate-pulse text-accent" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-text tracking-tight mb-3">
            Tools & Engineering Stack
          </h2>

          <p className="text-text-muted text-xs sm:text-sm leading-relaxed">
            A curated showcase of technologies, databases, and DevOps tools I use to build scalable products.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8 bg-surface/80 p-2 rounded-xl border border-border/80 backdrop-blur-md shadow-sm">
          
          <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((category) => {
              const Icon = categoryIconMap[category] || Layers;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-accent text-white shadow-sm scale-[1.01]"
                      : "text-text-muted hover:text-text hover:bg-border/30"
                  }`}
                >
                  <Icon size={14} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-8 py-1.5 rounded-lg bg-bg/60 border border-border text-xs text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent/60 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text p-0.5 rounded-md"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {filteredGroups.length === 0 ? (
          <div className="text-center py-12 bg-surface/30 rounded-xl border border-border/50">
            <p className="text-text-muted text-sm font-medium mb-1">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="text-xs font-semibold text-accent hover:underline mt-1 cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredGroups.map((group) => {
              const GroupIcon = categoryIconMap[group.category] || Layers;

              return (
                <div key={group.category} className="space-y-3">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                        <GroupIcon size={15} />
                      </div>
                      <h3 className="text-base font-display font-bold text-text">
                        {group.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-text-muted">
                      {group.skills.length} {group.skills.length === 1 ? "tool" : "tools"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {group.skills.map((skill) => {
                      const needsInvert = isMonochromeIcon(skill.name);

                      return (
                        <div
                          key={skill.name}
                          className="group relative p-3.5 rounded-xl bg-surface/60 border border-border/80 hover:border-accent/40 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                              {/* Clean Icon Wrapper */}
                              <div className="w-9 h-9 rounded-lg bg-bg-elevated/80 border border-border/60 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                <img
                                  src={getSkillIcon(skill.name)}
                                  alt={skill.name}
                                  className={`w-full h-full object-contain transition-all duration-200 ${
                                    needsInvert ? "dark:invert" : ""
                                  }`}
                                  loading="lazy"
                                  onError={(e) => {
                                    e.target.src = "https://cdn.simpleicons.org/codefactor";
                                  }}
                                />
                              </div>

                              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                                {skill.badge || group.category.split(" ")[0]}
                              </span>
                            </div>

                            <h4 className="text-xs font-display font-semibold text-text group-hover:text-accent transition-colors truncate">
                              {skill.name}
                            </h4>
                            
                            <p className="text-[10px] text-text-muted mt-1 line-clamp-2 leading-tight">
                              {skill.desc || "Production ready integration"}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 pt-4 border-t border-border/40 text-center">
          <p className="text-[11px] text-text-muted font-mono">
            Total <span className="text-accent font-bold">{totalSkillsCount}</span> technologies configured.
          </p>
        </div>
      </div>
    </section>
  );
}