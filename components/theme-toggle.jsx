"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle({ className = "" }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`h-9 w-9 rounded-full border border-neutral-200/60 dark:border-neutral-800 ${className}`} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`relative h-9 w-9 rounded-full flex items-center justify-center border border-neutral-200/80 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white shadow-sm overflow-hidden transition-colors ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}