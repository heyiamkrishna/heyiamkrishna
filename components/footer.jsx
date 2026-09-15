import { personalData } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-8 pb-16 text-center text-xs text-neutral-500 dark:text-neutral-400 border-t border-neutral-200/60 dark:border-neutral-800/60 mt-12 space-y-1">
      <p>© {currentYear} {personalData.name}. All rights reserved.</p>
      <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
        Crafted with Next.js, Tailwind CSS & Framer Motion.
      </p>
    </footer>
  );
}