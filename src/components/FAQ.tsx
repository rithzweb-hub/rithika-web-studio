import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most websites are completed based on project size and requirements. Simple landing pages can be ready in 2–3 days, while larger business sites may take 1–2 weeks.",
  },
  {
    q: "Do you create responsive websites?",
    a: "Yes — every website I build is fully optimized for mobile, tablet and desktop, with pixel-perfect attention to each breakpoint.",
  },
  {
    q: "Can you redesign old websites?",
    a: "Absolutely. I redesign outdated websites into modern, premium designs that load faster, look better and convert more visitors.",
  },
  {
    q: "How can I contact you?",
    a: "You can reach me through call, email or WhatsApp — whichever is easiest for you. Quick replies guaranteed.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-36 border-t border-hairline bg-surface">
      <div className="container-luxe">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="h-px w-8 bg-ink/30" />
              FAQ
            </span>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl text-balance">
              Frequently<br />asked <em className="not-italic text-primary font-normal">questions.</em>
            </h2>
            <p className="mt-6 text-ink-soft max-w-sm">
              Have something else in mind? Just send me a message — happy to help.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-hairline data-[state=open]:bg-background"
                >
                  <AccordionTrigger className="text-left py-6 text-lg font-medium text-ink hover:no-underline hover:text-primary [&[data-state=open]]:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
