import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/personal";
import { BlurFade } from "@/components/ui/blur-fade";

export function Contact() {
  return (
    <section id="contact" className="pt-6 pb-12">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-md mx-auto">
        <BlurFade delay={1.1}>
          <div className="inline-block rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 px-3 py-1 text-xs font-semibold tracking-wide shadow-sm">
            Contact
          </div>
        </BlurFade>

        <BlurFade delay={1.15}>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-neutral-950 dark:text-white">
            Get in Touch
          </h2>
        </BlurFade>

        <BlurFade delay={1.2}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Want to chat? Have a project in mind or an exciting role? Feel free to reach out directly.
          </p>
        </BlurFade>

        <BlurFade delay={1.25}>
          <Link
            href={`mailto:${personalData.contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md mt-2"
          >
            <Mail className="h-4 w-4" />
            Send an Email
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}