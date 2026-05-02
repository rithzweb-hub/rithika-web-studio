// Central place to update contact details + Apps Script URL.
// Update APPS_SCRIPT_URL below after deploying your Google Apps Script Web App.

export const SITE = {
  name: "Rithika",
  role: "Freelance Web Developer",
  email: "rithzweb@gmail.com",
  whatsapp: "918870093264", // country code + number, no '+' or spaces
  whatsappDisplay: "+91 88700 93264",
  instagram: "rithzweb",
  instagramUrl: "https://www.instagram.com/rithzweb/",
};

export const whatsappLink = (msg = "Hi Rithika, I'd like to discuss a website project.") => {
  const query = `phone=${SITE.whatsapp}&text=${encodeURIComponent(msg)}`;
  const isMobile =
    typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return isMobile ? `whatsapp://send?${query}` : `https://web.whatsapp.com/send?${query}`;
};

export const emailLink = (subject = "Website Project Inquiry") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

// 🔧 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE 👇
// (Looks like: https://script.google.com/macros/s/AKfyc.../exec)
export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwdrNb4Z2hKXIuHdEHXChEcWsH-i5i_ZePvZm77erCNozvlFz4kd-t3tJCGy0iPAmnlkQ/exec";
