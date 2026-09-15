"use client";

import Link from "next/link";
import { Mail, FileDown, MapPin, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/personal";
import { BlurFade } from "@/components/ui/blur-fade";

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="w-full space-y-6 pt-4 pb-2">
      <div className="flex items-start justify-between gap-6">
        
        {/* Left Info Column */}
        <div className="space-y-4 flex-1 min-w-0">
          
          {/* Pulsing Status Pill */}
          <BlurFade delay={0.05}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200/90 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-xs text-slate-800 dark:text-neutral-200 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">{personalData.availability}</span>
            </div>
          </BlurFade>

          {/* Headline with Text Shimmer */}
          <BlurFade delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 dark:text-white">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent animate-text-shimmer">
                {personalData.name}
              </span>{" "}
              👋
            </h1>
          </BlurFade>

          {/* Role & Location Badge */}
          <BlurFade delay={0.15}>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span className="font-semibold text-slate-900 dark:text-white">
                {personalData.role}
              </span>
              <span className="text-slate-400 dark:text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-slate-600 dark:text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                {personalData.location}
              </span>
            </div>
          </BlurFade>

          {/* Bio */}
          <BlurFade delay={0.2}>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-zinc-300 max-w-xl">
              {personalData.bio}
            </p>
          </BlurFade>

          {/* Action Buttons */}
          <BlurFade delay={0.25}>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => handleScroll("projects")}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-zinc-200 transition-all inline-flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
              >
                View Projects
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              
              <button
                type="button"
                onClick={() => handleScroll("contact")}
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all inline-flex items-center gap-1.5 active:scale-95 cursor-pointer shadow-sm"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact
              </button>

              <a
                href={personalData.contact.resume}
                download="Krishna_Resume.pdf"
                className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-all inline-flex items-center gap-1.5 active:scale-95 shadow-sm cursor-pointer"
              >
                <FileDown className="h-3.5 w-3.5" />
                Resume
              </a>
            </div>
          </BlurFade>

          {/* Social Links */}
          <BlurFade delay={0.3}>
            <div className="flex items-center gap-1.5 pt-1">
              <Link
                href={personalData.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white"
              >
                <GithubIcon className="h-4 w-4" />
              </Link>
              <Link
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-all text-slate-600 dark:text-zinc-300 hover:text-slate-950 dark:hover:text-white"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Link>
            </div>
          </BlurFade>
        </div>

        {/* Halo Glow Monogram Avatar */}
        <BlurFade delay={0.15}>
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500/30 to-teal-500/30 opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full border-2 border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900 overflow-hidden flex items-center justify-center font-mono font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white shadow-md">
              {personalData.initials}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}