// Reliable external link opener that works inside iframes (preview/sandbox)
// and on mobile + desktop. Uses a real anchor click with target="_blank".
export const openExternal = (url: string) => {
  try {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    // Some browsers require the element to be in the DOM
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch {
    // Fallback
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

// mailto / tel / whatsapp protocol links — open in same tab works best
export const openProtocol = (url: string) => {
  try {
    window.location.href = url;
  } catch {
    window.open(url, "_blank");
  }
};
