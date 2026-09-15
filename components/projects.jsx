"use client";

import Link from "next/link";
import { Globe, Code2, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function Projects() {
  return (
    <section id="projects" className="space-y-6 pt-6">
      {/* Centered Section Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-2.5">
        <BlurFade delay={0.65}>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 px-3 py-1 text-[11px] font-medium tracking-wide shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Featured Work
          </div>
        </BlurFade>

        <BlurFade delay={0.7}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tighter text-neutral-950 dark:text-white">
            Check out my latest work
          </h2>
        </BlurFade>

        <BlurFade delay={0.75}>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-[490px]">
            Focused applications built with clean architecture, interactive animations, and modern stacks.
          </p>
        </BlurFade>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        {projectsData.map((project, index) => (
          <BlurFade key={project.title} delay={0.8 + index * 0.05}>
            <SpotlightCard className="h-full flex flex-col justify-between group hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700">
              
              {/* Browser-Style Preview Header */}
              <div className="h-40 w-full bg-neutral-100/80 dark:bg-neutral-900/70 border-b border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between p-3 relative overflow-hidden">
                {/* 3 Window Dots */}
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>

                {/* Central Monogram / Title Badge */}
                <div className="self-center my-auto rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/80 px-4 py-2 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <span className="font-mono text-xs font-bold tracking-wider text-neutral-800 dark:text-neutral-200 uppercase">
                    {project.title}
                  </span>
                </div>

                <div className="h-2 w-full" />
              </div>

              {/* Card Details */}
              <div className="p-4 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-neutral-900 dark:text-white tracking-tight flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-neutral-400" />
                  </h3>
                  
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-900/90 text-[10px] font-mono font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-900">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all shadow-sm"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Website
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-all"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      Source
                    </Link>
                  )}
                </div>
              </div>

            </SpotlightCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}