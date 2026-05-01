import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = ({ onStart }: { onStart: () => void }) => {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
    >
      {/* Soft radial wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
        <div className="absolute inset-0 bg-[var(--gradient-radial)]" />
      </div>

      <div className="container-luxe">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <span className="eyebrow">
              <span className="h-px w-8 bg-ink/30" />
              Freelance Web Developer · Available
            </span>
          </div>

          <h1 className="display mt-8 text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] text-balance animate-fade-up">
            Premium websites that{" "}
            <em className="not-italic text-primary font-normal">grow</em>{" "}
            your business.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg text-ink-soft text-pretty animate-fade-up delay-200">
            I create modern, responsive, high-converting websites that help
            businesses attract customers, build trust, and stand out online.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="primary" size="xl" onClick={onStart}>
              Start Your Project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button
              variant="ghostLine"
              size="xl"
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-soft animate-fade-up delay-400">
            <span>Fast Delivery</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>Mobile Responsive</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>SEO Ready</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>Business Focused</span>
          </div>
        </div>
      </div>
    </section>
  );
};
