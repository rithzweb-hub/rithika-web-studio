import { Check, Sparkles, Zap, Smartphone, TrendingUp, Heart } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Premium aesthetic", text: "Editorial, agency-quality design crafted detail by detail." },
  { icon: Zap, title: "Fast delivery", text: "Built efficiently without compromising quality." },
  { icon: Smartphone, title: "Fully responsive", text: "Looks beautiful on every device — phone, tablet, desktop." },
  { icon: TrendingUp, title: "Conversion focused", text: "Designed to turn visitors into leads and customers." },
  { icon: Check, title: "SEO ready", text: "Search-friendly structure built in from day one." },
  { icon: Heart, title: "Personal care", text: "Direct communication, no agency middlemen, real ownership." },
];

export const WhyMe = () => {
  return (
    <section className="py-24 md:py-36 border-t border-hairline">
      <div className="container-luxe">
        <div className="max-w-3xl mb-16">
          <span className="eyebrow">
            <span className="h-px w-8 bg-ink/30" />
            Why work with me
          </span>
          <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl text-balance">
            A partner who actually <em className="not-italic text-primary font-normal">cares</em> about your business.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-background p-8 md:p-10 hover:bg-primary-soft/40 transition-colors duration-500 group"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-soft text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-ink">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
