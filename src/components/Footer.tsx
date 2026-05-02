import { Mail, Instagram, MessageCircle } from "lucide-react";
import { SITE, whatsappLink, emailLink } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="border-t border-hairline py-16 bg-background">
      <div className="container-luxe">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl">{SITE.name}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <p className="mt-4 text-sm text-ink-soft max-w-xs">
              {SITE.role} crafting premium websites for businesses that want to
              grow online.
            </p>
          </div>

          <div>
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink()}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(whatsappLink(), "_blank", "noopener,noreferrer");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-primary transition-colors cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp · {SITE.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={emailLink()}
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-primary transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(SITE.instagramUrl, "_blank", "noopener,noreferrer");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-ink-soft hover:text-primary transition-colors cursor-pointer"
                >
                  <Instagram className="h-4 w-4" />
                  @{SITE.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li>Business Websites</li>
              <li>Landing Pages</li>
              <li>Portfolio Websites</li>
              <li>Website Redesign</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with care · Designed for results.</p>
        </div>
      </div>
    </footer>
  );
};
