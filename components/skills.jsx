"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { BlurFade } from "@/components/ui/blur-fade";

export function Skills() {
  const allSkills = [
    ...skillsData.frontend,
    ...skillsData.backend,
    ...skillsData.database,
    ...skillsData.tools,
  ];

  return (
    <section id="skills" className="space-y-4 pt-2">
      <BlurFade delay={0.65}>
        <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
          Skills
        </h2>
      </BlurFade>

      <BlurFade delay={0.7}>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {allSkills.map((skill, index) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-default px-3 py-1 rounded-lg border border-neutral-200/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:text-neutral-950 dark:hover:text-white shadow-[0_1px_4px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}