"use client";

import { motion } from "framer-motion";

export function BlurFade({
  children,
  className = "",
  delay = 0,
  duration = 0.4,
  yOffset = 6,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}