"use client";

import Link from "next/link";
import { Globe, Code2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({ project }) {
  const { title, description, technologies, github, live } = project;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-900/40 backdrop-blur-xl p-5 overflow-hidden shadow-sm hover:shadow-[0_12px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_40px_-15px_rgba(255,255,255,0.06)] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
    >
      {/* Subtle Top-Right Ambient Shine */}
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="font-semibold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight flex items-center gap-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {title}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0" />
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md border border-neutral-200/60 dark:border-neutral-800/80 bg-neutral-100/60 dark:bg-neutral-800/40 text-[10px] sm:text-[11px] font-mono text-neutral-600 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive CTAs */}
      <div className="flex items-center gap-2 mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            <Globe className="h-3.5 w-3.5" />
            Live
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-neutral-200/90 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 active:scale-95 transition-all"
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </Link>
        )}
      </div>
    </motion.div>
  );
}