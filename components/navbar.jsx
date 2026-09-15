"use client";

import Link from "next/link";
import { Home, Code2, Briefcase, GraduationCap, FolderGit2, Trophy } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_ITEMS = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: Code2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Hackathons", href: "#hackathons", icon: Trophy },
];

export function Navbar() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Main Dock"
      className="fixed bottom-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4"
    >
      <div className="pointer-events-auto">
        <Dock
          iconMagnification={56}
          iconDistance={115}
          className="border border-white/60 dark:border-white/10 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
        >
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <DockIcon
                key={item.name}
                className="bg-neutral-100/90 dark:bg-neutral-900/90 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-neutral-200/50 dark:border-neutral-800/80 group relative shadow-sm"
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  aria-label={item.name}
                  className="size-full flex items-center justify-center"
                >
                  <Icon className="h-4 w-4" />
                </Link>

                {/* Floating Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-[10px] font-semibold opacity-0 pointer-events-none group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg whitespace-nowrap border border-white/10 dark:border-black/10">
                  {item.name}
                </span>
              </DockIcon>
            );
          })}

          <div className="h-5 w-[1px] bg-neutral-200 dark:bg-neutral-800 my-auto mx-1" />

          <DockIcon className="bg-neutral-100/90 dark:bg-neutral-900/90 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800/80 shadow-sm">
            <ThemeToggle className="border-none bg-transparent shadow-none" />
          </DockIcon>
        </Dock>
      </div>
    </nav>
  );
}