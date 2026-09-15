"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 56;
const DEFAULT_DISTANCE = 120;

export function Dock({
  className,
  children,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  ...props
}) {
  const mouseX = useMotionValue(Infinity);

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      // Only inject props into actual React components, not plain DOM elements like <div>
      if (React.isValidElement(child) && typeof child.type !== "string") {
        return React.cloneElement(child, {
          mouseX,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      }
      return child;
    });
  };

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      {...props}
      className={cn(
        "mx-auto flex h-[58px] w-max items-center gap-2 rounded-full border border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {renderChildren()}
    </motion.div>
  );
}

export function DockIcon({
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);

  // Safely default to 0 if mouseX isn't passed
  const distanceCalc = useTransform(mouseX || new Proxy({}, { get: () => () => 0 }), (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return typeof val === "number" ? val - bounds.x - bounds.width / 2 : 0;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [38, magnification, 38]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  // Explicitly extract motion props so they never leak into the DOM node
  const {
    mouseX: _ignoredMouseX,
    magnification: _ignoredMag,
    distance: _ignoredDist,
    ...domProps
  } = props;

  return (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full transition-colors",
        className
      )}
      {...domProps}
    >
      {children}
    </motion.div>
  );
}