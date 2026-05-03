import { ArrowUpRight } from "lucide-react";
import gymImg from "@/assets/project-gym.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";

const projects = [
  {
    n: "01",
    title: "Gym Website",
    tag: "Fitness · Lead Generation",
    description:
      "A modern fitness website designed to increase memberships...",
    image: gymImg,
    link: "https://ironforge-tau.vercel.app",
  },
  {
    n: "02",
    title: "Restaurant Website",
    tag: "Hospitality · Brand",
    description:
      "An elegant restaurant website...",
    image: restaurantImg,
    link: "https://mitty-flame.vercel.app/",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="work" className="py-24 md:py-36 border-t border-hairline bg-surface">
      <div className="container-luxe">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 md:mb-24">
          <div>
            <span className="eyebrow">
              <span className="h-px w-8 bg-ink/30" />
              Selected Work
            </span>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              Recent <em className="not-italic text-primary font-normal">projects.</em>
            </h2>
          </div>
          <p className="max-w-md text-ink-soft">
            A small, focused selection of recent client work — built for clarity,
            speed and conversion.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 group">
                <div className="relative overflow-hidden rounded-3xl bg-background border border-hairline shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-700">
                  <img
                    src={p.image}
                    alt={`${p.title} — premium website mockup`}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-ink-soft">
                  <span className="text-primary font-medium">{p.n}</span>
                  <span className="h-px w-8 bg-ink/20" />
                  <span>{p.tag}</span>
                </div>
                <h3 className="display mt-6 text-3xl md:text-4xl lg:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-6 text-ink-soft leading-relaxed">{p.description}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink border-b border-ink pb-1 hover:text-primary hover:border-primary transition-colors group"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
