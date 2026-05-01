import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform duration-300 animate-fade-in"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-20" />
    </a>
  );
};
