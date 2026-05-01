const skills = [
  "HTML", "CSS", "JavaScript", "Responsive Design", "SEO",
  "Landing Pages", "Business Websites", "Portfolio Sites", "Website Redesign",
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-hairline">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-ink/30" />
              About
            </span>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl text-balance">
              Websites built<br />with <em className="not-italic text-primary font-normal">purpose.</em>
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[17px] leading-relaxed text-ink-soft">
            <p>
              I'm <span className="text-ink font-medium">Rithika</span>, a
              freelance web developer focused on helping businesses build a
              strong online presence through premium website design and
              development.
            </p>
            <p>
              Every website I create is designed with strategy, clean user
              experience, mobile responsiveness, and conversion goals in mind —
              so your business looks professional and gets real results.
            </p>
            <p>
              Whether you need a business website, landing page, portfolio site,
              or redesign, I build websites that support your growth.
            </p>

            <div className="pt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-4 py-2 text-xs tracking-wide rounded-full border border-hairline text-ink-soft hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
