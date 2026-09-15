import { GraduationCap } from "lucide-react";
import { educationData } from "@/data/education";
import { BlurFade } from "@/components/ui/blur-fade";

export function Education() {
  return (
    <section id="education" className="space-y-4 pt-4">
      <BlurFade delay={0.55}>
        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Education
        </h2>
      </BlurFade>

      <div className="flex flex-col gap-y-3 pt-1">
        {educationData.map((item, index) => (
          <BlurFade key={`${item.institution}-${index}`} delay={0.6 + index * 0.05}>
            <div className="group relative flex items-start gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-slate-300 dark:hover:border-white/20 hover:bg-white/90 dark:hover:bg-white/[0.06] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.03)] transition-all duration-300 overflow-hidden">
              
              {/* Specular Inner Glare Line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-slate-300/40 dark:via-white/20 to-transparent" />

              {/* Circular Glass Badge */}
              <div className="relative h-11 w-11 shrink-0 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/[0.07] backdrop-blur-lg shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                <GraduationCap className="h-5 w-5 text-slate-700 dark:text-neutral-200" />
              </div>

              {/* Text Layout */}
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.institution}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      {item.degree}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500 dark:text-zinc-400 shrink-0">
                    {item.period}
                  </span>
                </div>
              </div>

            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}