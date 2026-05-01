import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, emailLink } from "@/config/site";

export const CTA = ({ onStart }: { onStart: () => void }) => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-ink p-10 md:p-20 text-center">
          {/* Decorative glow */}
          <div
            aria-hidden
            className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-background/70">
              <span className="h-px w-8 bg-background/30" />
              Let's build
            </span>

            <h2 className="display mt-8 text-4xl md:text-6xl lg:text-7xl text-background text-balance max-w-3xl mx-auto">
              Ready to <em className="not-italic text-primary-glow font-normal">grow</em> your business online?
            </h2>

            <p className="mt-8 max-w-xl mx-auto text-background/70 text-base md:text-lg">
              Let's build a premium website that attracts more customers, builds
              trust, and helps your business grow faster.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild variant="ghostLine" size="xl" className="text-background border-background/30 hover:bg-background hover:text-ink">
                <a href={emailLink()}>
                  <Mail className="h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>

            <button
              onClick={onStart}
              className="mt-10 inline-flex items-center gap-2 text-sm text-background/80 hover:text-background transition-colors group"
            >
              Or fill out the project form
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
