"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function SpotlightBackground() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    function handleMouseMove({ clientX, clientY }) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            550px circle at ${mouseX}px ${mouseY}px,
            rgba(99, 102, 241, 0.07),
            transparent 80%
          )
        `,
      }}
    />
  );
}