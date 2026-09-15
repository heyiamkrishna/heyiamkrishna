import { BlurFade } from "@/components/ui/blur-fade";

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  tags = [],
  delay = 0,
}) {
  return (
    <BlurFade delay={delay}>
      <div className="relative pl-6 pb-8 last:pb-0 border-l border-neutral-200 dark:border-neutral-800">
        {/* Timeline Node */}
        <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-neutral-950 bg-neutral-900 dark:bg-neutral-100 shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:shadow-[0_0_8px_rgba(255,255,255,0.4)]" />

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </h3>
          <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
            {period}
          </span>
        </div>

        <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mt-0.5">
          {subtitle}
        </p>

        {description && (
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-[11px] font-mono text-neutral-600 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </BlurFade>
  );
}