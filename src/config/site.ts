// Central place to update contact details + Apps Script URL.
// Update APPS_SCRIPT_URL below after deploying your Google Apps Script Web App.

export const SITE = {
  name: "Rithika",
  role: "Freelance Web Developer",
  email: "rithzweb@gmail.com",
  whatsapp: "918870093264", // country code + number, no '+' or spaces
  whatsappDisplay: "+91 88700 93264",
  instagram: "rithzweb",
  instagramUrl: "https://instagram.com/rithzweb",
};

export const whatsappLink = (msg = "Hi Rithika, I'd like to discuss a website project.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const emailLink = (subject = "Website Project Inquiry") =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

// 🔧 PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE 👇
// (Looks like: https://script.google.com/macros/s/AKfyc.../exec)
export const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyq2itOh0J3yRIbVMe4NEx8BlKAe-j_TB0B7ex_uF2t98FV7WDX5jMULNp0g9VdEnwp2A/exec";
