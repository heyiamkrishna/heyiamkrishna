"use client";

import * as React from "react";
import { ChevronRight, Laptop, Terminal } from "lucide-react";
import { experienceData } from "@/data/experience";
import { BlurFade } from "@/components/ui/blur-fade";

const ICONS = [
  <Laptop key="laptop" className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
  <Terminal key="terminal" className="h-5 w-5 text-neutral-800 dark:text-neutral-200" />,
];

export function Experience() {
  const [expandedIndex, setExpandedIndex] = React.useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="space-y-4 pt-2">
      <BlurFade delay={0.45}>
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Work Experience
        </h2>
      </BlurFade>

      <div className="flex flex-col gap-y-3 pt-1">
        {experienceData.map((item, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <BlurFade key={`${item.company}-${index}`} delay={0.5 + index * 0.05}>
              <div
                onClick={() => toggleExpand(index)}
                className="group relative flex items-start gap-4 p-3.5 rounded-2xl border border-white/60 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-white/90 dark:hover:border-white/20 hover:bg-white/60 dark:hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Specular Inner Glare Line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent" />

                {/* Circular Glass Emblem */}
                <div className="relative h-11 w-11 shrink-0 rounded-full border border-white/80 dark:border-white/15 bg-white/70 dark:bg-white/[0.07] backdrop-blur-lg shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:border-white dark:group-hover:border-white/30 transition-transform">
                  {ICONS[index % ICONS.length]}
                </div>

                {/* Content Container */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                        {item.company}
                      </h3>
                      <ChevronRight
                        className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-90 text-neutral-900 dark:text-white" : ""
                        }`}
                      />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 dark:text-zinc-400 shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-zinc-300 mt-0.5 font-medium">
                    {item.role}
                  </p>

                  {/* Expandable Description */}
                  {isExpanded && item.description && (
                    <div className="mt-2.5 text-xs text-neutral-600 dark:text-zinc-300 leading-relaxed border-t border-black/5 dark:border-white/10 pt-2.5 animate-fade-in">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}