"use client";

import { motion } from "framer-motion";

export function AmbientOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Primary Violet / Indigo Fluid Orb */}
      <motion.div
        animate={{
          x: ["-8vw", "22vw", "4vw", "-8vw"],
          y: ["-6vh", "22vh", "6vh", "-6vh"],
          scale: [1, 1.18, 0.92, 1],
          rotate: [0, 45, -30, 0],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/4 h-[380px] w-[380px] sm:h-[540px] sm:w-[540px]bg-gradient-to-bl from-teal-400/25 via-emerald-300/20 to-cyan-300/20 dark:from-teal-500/20 dark:via-emerald-500/15 dark:to-cyan-600/10 blur-[100px] will-change-transform"
      />

      {/* Secondary Emerald / Mint Liquid Glow (Using emerald-400) */}
      <motion.div
        animate={{
          x: ["24vw", "-12vw", "12vw", "24vw"],
          y: ["20vh", "-4vh", "38vh", "20vh"],
          scale: [0.92, 1.14, 0.98, 0.92],
          rotate: [0, -60, 40, 0],
          borderRadius: [
            "40% 60% 60% 40% / 60% 30% 70% 40%",
            "60% 40% 40% 60% / 40% 70% 30% 60%",
            "40% 60% 60% 40% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-12 h-[340px] w-[340px] sm:h-[500px] sm:w-[500px] bg-gradient-to-bl from-teal-400/25 via-emerald-300/20 to-cyan-300/20 dark:from-teal-500/20 dark:via-emerald-500/15 dark:to-cyan-600/10 blur-[110px] will-change-transform"
      />

      {/* Tertiary Cyan / Emerald Breeze */}
      <motion.div
        animate={{
          x: ["6vw", "-18vw", "16vw", "6vw"],
          y: ["42vh", "12vh", "52vh", "42vh"],
          scale: [1, 0.88, 1.15, 1],
          rotate: [0, 50, -45, 0],
          borderRadius: [
            "50% 50% 35% 65% / 35% 65% 50% 50%",
            "65% 35% 50% 50% / 50% 35% 65% 50%",
            "50% 50% 35% 65% / 35% 65% 50% 50%",
          ],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-12 h-[320px] w-[320px] sm:h-[480px] sm:w-[480px]  bg-gradient-to-r from-emerald-300/25 via-teal-200/20 to-emerald-400/15 dark:from-emerald-500/20 dark:via-teal-600/10 dark:to-emerald-700/10 blur-[95px] will-change-transform"
      />

      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.06),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(0,0,0,0))]" />
    </div>
  );
}