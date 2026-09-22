import { Briefcase, GraduationCap } from "lucide-react";
import { timeline } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-elevated/40">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-mono text-text-muted mb-3">04 / experience</p>
        <h2 className="font-display font-semibold text-3xl text-text mb-12">
          Where I've been
        </h2>

        <ol className="relative border-l border-border ml-3">
          {timeline.map((item) => {
            const Icon = item.type === "work" ? Briefcase : GraduationCap;
            return (
              <li key={item.id} className="mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[15px] flex items-center justify-center w-7 h-7 rounded-full bg-accent-soft border border-border text-accent">
                  <Icon size={14} />
                </span>
                <div className="rounded-lg border border-border bg-surface p-5 hover:border-accent/50 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-medium text-text">{item.title}</h3>
                    <span className="text-xs font-mono text-text-muted">{item.period}</span>
                  </div>
                  <p className="text-sm text-accent mb-2">{item.org}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
