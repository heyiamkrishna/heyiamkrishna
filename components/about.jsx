import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section id="about" className="space-y-3 pt-4">
      <BlurFade delay={0.35}>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          About
        </h2>
      </BlurFade>

      <BlurFade delay={0.4}>
        <p className="text-sm sm:text-[15px] text-slate-700 dark:text-zinc-300 leading-relaxed">
          I am a developer focused on engineering full-stack web applications and fluid digital interfaces. I build modern systems using{" "}
          <span className="underline underline-offset-4 decoration-slate-400 dark:decoration-zinc-500 text-slate-950 dark:text-white font-semibold">
            Next.js, React, PHP, MySQL, and modern backend services
          </span>
          , with a strong focus on{" "}
          <span className="underline underline-offset-4 decoration-slate-400 dark:decoration-zinc-500 text-slate-950 dark:text-white font-semibold">
            clean architecture, motion physics, and user experience
          </span>
          .
        </p>
      </BlurFade>
    </section>
  );
}