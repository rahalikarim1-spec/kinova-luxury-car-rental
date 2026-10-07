import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, focusable: false };

export const WhatsAppIcon = (p: P) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M20.5 3.5A11.8 11.8 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.59 5.93L.1 24l6.4-1.68a11.8 11.8 0 0 0 5.54 1.4h.01c6.54 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.4-8.38ZM12.05 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.8 1 1.01-3.7-.23-.38a9.8 9.8 0 0 1-1.5-5.2c0-5.43 4.42-9.84 9.86-9.84 2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 0 1 2.88 6.96c0 5.43-4.42 9.86-9.81 9.86Zm5.4-7.36c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);
export const PhoneIcon = (p: P) => (<svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>);
export const ArrowIcon = (p: P) => (<svg {...base} className={`rtl:-scale-x-100 ${p.className ?? ""}`} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ChevronDown = (p: P) => (<svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>);
export const ChevronLeft = (p: P) => (<svg {...base} className={`rtl:-scale-x-100 ${p.className ?? ""}`} {...p}><path d="m15 18-6-6 6-6" /></svg>);
export const ChevronRight = (p: P) => (<svg {...base} className={`rtl:-scale-x-100 ${p.className ?? ""}`} {...p}><path d="m9 18 6-6-6-6" /></svg>);
export const MenuIcon = (p: P) => (<svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
export const CloseIcon = (p: P) => (<svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const CalendarIcon = (p: P) => (<svg {...base} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>);
export const CheckIcon = (p: P) => (<svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>);
export const MailIcon = (p: P) => (<svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
export const PinIcon = (p: P) => (<svg {...base} {...p}><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>);
export const GlobeIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>);
export const AlertIcon = (p: P) => (<svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 8v5M12 16.5v.01" /></svg>);
