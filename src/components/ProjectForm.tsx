import { useState } from "react";
import { z } from "zod";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { APPS_SCRIPT_URL } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  business_name: z.string().trim().max(100).optional().or(z.literal("")),
  whatsapp: z.string().trim().min(7, "Enter a valid WhatsApp number").max(20),
  business_description: z.string().trim().max(1000).optional().or(z.literal("")),
  primary_offering: z.string().trim().max(300).optional().or(z.literal("")),
  website_goal: z.string().min(1, "Please choose a goal"),
  primary_action: z.string().min(1, "Please choose a primary action"),
  has_logo_content: z.string().min(1, "Please choose Yes or No"),
  reference_websites: z.string().trim().max(500).optional().or(z.literal("")),
  pages_needed: z.array(z.string()).min(1, "Select at least one page"),
  timeline: z.string().min(1, "Please choose a timeline"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

const RADIO_GOAL = [
  "Generate Leads (Collect contact information)",
  "Drive Calls (Increase phone inquiries)",
  "Direct Sales (E-commerce transactions)",
];
const RADIO_ACTION = ["WhatsApp Message", "Direct Call", "Fill Contact Form"];
const RADIO_LOGO = ["Yes", "No"];
const RADIO_TIMELINE = [
  "2–3 days (Urgent)",
  "1 week",
  "Flexible (No immediate deadline)",
];
const PAGES = [
  "Home Page",
  "Services/Products Page",
  "Contact Page",
  "About Us/Team Page",
  "Gallery/Portfolio",
  "Landing Page (Single Promotional Page)",
];

type Props = { open: boolean; onClose: () => void };

export const ProjectForm = ({ open, onClose }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pages, setPages] = useState<string[]>([]);

  if (!open) return null;

  const togglePage = (p: string) =>
    setPages((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") || ""),
      business_name: String(fd.get("business_name") || ""),
      whatsapp: String(fd.get("whatsapp") || ""),
      business_description: String(fd.get("business_description") || ""),
      primary_offering: String(fd.get("primary_offering") || ""),
      website_goal: String(fd.get("website_goal") || ""),
      primary_action: String(fd.get("primary_action") || ""),
      has_logo_content: String(fd.get("has_logo_content") || ""),
      reference_websites: String(fd.get("reference_websites") || ""),
      pages_needed: pages,
      timeline: String(fd.get("timeline") || ""),
      notes: String(fd.get("notes") || ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Please fill all required fields");
      return;
    }

    setSubmitting(true);
    try {
      // Apps Script Web Apps require no-cors / form-encoded body to avoid CORS preflight.
      const body = new URLSearchParams();
      Object.entries(parsed.data).forEach(([k, v]) => {
        body.append(k, Array.isArray(v) ? v.join(", ") : String(v ?? ""));
      });
      body.append("submitted_at", new Date().toISOString());

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      setSuccess(true);
      toast.success("Thank you! Your message has been sent successfully.");
      form.reset();
      setPages([]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-ink/60 backdrop-blur-sm overflow-y-auto p-0 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-background md:rounded-3xl shadow-[var(--shadow-lg)] my-0 md:my-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur md:rounded-t-3xl border-b border-hairline px-6 md:px-10 py-5 flex items-center justify-between">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h3 className="display text-2xl md:text-3xl mt-1">
              Start your <em className="not-italic text-primary font-normal">project.</em>
            </h3>
          </div>
          <button
            onClick={onClose}
            className="h-10 w-10 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {success ? (
          <div className="px-6 md:px-10 py-16 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary-soft flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h4 className="display text-3xl mt-6">Thank you!</h4>
            <p className="mt-3 text-ink-soft max-w-sm mx-auto">
              Your project details have been sent successfully. I'll get back to
              you on WhatsApp or email within 24 hours.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="mt-8"
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 md:px-10 py-8 space-y-7">
            <p className="text-sm text-ink-soft">
              Tell me about your business and I'll recommend the best website
              solution for your goals.
            </p>

            <Field label="What's your name?" required>
              <Input name="name" required maxLength={100} placeholder="Your full name" />
            </Field>

            <Field label="What's your business name?">
              <Input name="business_name" maxLength={100} placeholder="Business / brand name" />
            </Field>

            <Field label="What's your WhatsApp number?" required>
              <Input
                name="whatsapp"
                required
                type="tel"
                maxLength={20}
                placeholder="+91 XXXXX XXXXX"
              />
            </Field>

            <Field label="What does your business do? (Brief description)">
              <Textarea
                name="business_description"
                maxLength={1000}
                rows={3}
                placeholder="Tell me about your business..."
              />
            </Field>

            <Field label="What service or product do you primarily offer?">
              <Input
                name="primary_offering"
                maxLength={300}
                placeholder="e.g. Personal training, dine-in restaurant, online courses..."
              />
            </Field>

            <RadioGroup
              label="What is the main goal of your website?"
              name="website_goal"
              options={RADIO_GOAL}
              required
            />

            <RadioGroup
              label="What primary action should users take on your website?"
              name="primary_action"
              options={RADIO_ACTION}
              required
            />

            <RadioGroup
              label="Do you have a logo and content (text, images) ready?"
              name="has_logo_content"
              options={RADIO_LOGO}
              required
            />

            <Field label="Any reference websites you like? (Paste link)">
              <Input
                name="reference_websites"
                maxLength={500}
                placeholder="https://..."
              />
            </Field>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-ink">
                Which pages do you need for your website?{" "}
                <span className="text-primary">*</span>
              </Label>
              <div className="grid sm:grid-cols-2 gap-2">
                {PAGES.map((p) => {
                  const active = pages.includes(p);
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePage(p)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        active
                          ? "border-primary bg-primary-soft text-primary"
                          : "border-hairline hover:border-ink/40 text-ink-soft"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            <RadioGroup
              label="When do you need the website done?"
              name="timeline"
              options={RADIO_TIMELINE}
              required
            />

            <Field label="Anything else you want to mention?">
              <Textarea
                name="notes"
                maxLength={1000}
                rows={3}
                placeholder="Special requests, ideas, deadlines..."
              />
            </Field>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
              <p className="text-xs text-ink-soft text-center mt-4">
                Your details are sent securely. I'll reply within 24 hours.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label className="text-sm font-medium text-ink">
      {label} {required && <span className="text-primary">*</span>}
    </Label>
    {children}
  </div>
);

const RadioGroup = ({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) => (
  <div className="space-y-3">
    <Label className="text-sm font-medium text-ink">
      {label} {required && <span className="text-primary">*</span>}
    </Label>
    <div className="space-y-2">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-hairline hover:border-ink/40 cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary-soft"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            required={required}
            className="h-4 w-4 accent-primary"
          />
          <span className="text-sm text-ink">{opt}</span>
        </label>
      ))}
    </div>
  </div>
);
