"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(99, 102, 241, 0.15)",
  ...props
}) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => setOpacity(1);
  const handleBlur = () => setOpacity(0);
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/50 dark:bg-neutral-950/60 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}