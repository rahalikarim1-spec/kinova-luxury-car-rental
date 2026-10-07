"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseIcon, MenuIcon } from "./Icons";

/** Must match the breakpoint where the desktop nav takes over (Tailwind `xl`). */
const DESKTOP_QUERY = "(min-width: 1280px)";
const FOCUSABLE = "a[href], button:not([disabled]), summary, input, select, textarea, [tabindex]:not([tabindex='-1'])";

const isVisible = (el: HTMLElement) =>
  typeof el.checkVisibility === "function" ? el.checkVisibility({ checkVisibilityCSS: true } as CheckVisibilityOptions) : el.getClientRects().length > 0;

/**
 * Mobile navigation drawer.
 *
 * WHY A PORTAL: the site header uses `backdrop-filter: blur()`. Any ancestor with backdrop-filter / filter / transform
 * becomes the containing block for `position: fixed` descendants, so a fixed drawer rendered inside <header> was sized and
 * clipped to the 68px header instead of the viewport. The drawer is therefore rendered with createPortal directly under
 * <body>, fully independent from the header's stacking/containing context. The nav content is still server-rendered and
 * passed in as `children`.
 */
export function MobileMenu({ openLabel, closeLabel, menuLabel, children }: { openLabel: string; closeLabel: string; menuLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => {
    setOpen(false);
    // Restore focus after the dialog unmounts (also covers Escape / overlay / link clicks).
    requestAnimationFrame(() => buttonRef.current?.focus({ preventScroll: true }));
  }, []);

  // Route change (link click) → make sure the drawer is closed.
  useEffect(() => setOpen(false), [pathname]);

  // Crossing into the desktop layout closes the drawer (resize / rotate / split-screen).
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => mq.matches && setOpen(false);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open]);

  // Scroll lock (iOS-safe: pins the body and restores the exact scroll position) + inert background + focus management.
  useEffect(() => {
    if (!open) return;
    const { body, documentElement: html } = document;
    const scrollY = window.scrollY;
    const saved = { position: body.style.position, top: body.style.top, width: body.style.width, overflow: body.style.overflow, htmlOverflow: html.style.overflow };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    // Everything behind the drawer (header, page, footer, sticky CTA…) becomes inert: no focus, no screen-reader access.
    const root = rootRef.current;
    const inerted: { el: HTMLElement; was: boolean }[] = [];
    for (const child of Array.from(body.children) as HTMLElement[]) {
      if (child === root || child.tagName === "SCRIPT") continue;
      inerted.push({ el: child, was: child.inert });
      child.inert = true;
    }

    const panel = panelRef.current;
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(isVisible);
    focusables()[0]?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      const active = document.activeElement;
      if (!panel?.contains(active)) { e.preventDefault(); first.focus(); }
      else if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      for (const { el, was } of inerted) el.inert = was;
      body.style.position = saved.position;
      body.style.top = saved.top;
      body.style.width = saved.width;
      body.style.overflow = saved.overflow;
      html.style.overflow = saved.htmlOverflow;
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" as ScrollBehavior });
    };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-12 shrink-0 items-center justify-center rounded-sm border border-line text-white hover:border-white/40 xl:hidden"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={open ? "mobile-menu" : undefined}
        aria-label={openLabel}
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="size-6" />
      </button>

      {open &&
        createPortal(
          <div ref={rootRef} className="fixed inset-0 z-[60] xl:hidden" data-mobile-menu-root>
            {/* Backdrop: visible beside the panel on wider phones/tablets; click closes. */}
            <div aria-hidden className="absolute inset-0 bg-black/70" onClick={close} />
            <div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={menuLabel}
              className="relative ms-auto flex h-dvh w-full max-w-full flex-col overflow-y-auto overflow-x-hidden overscroll-contain bg-ink sm:max-w-md sm:border-s sm:border-line"
              onClick={(e) => { if ((e.target as HTMLElement).closest("a")) close(); }}
            >
              <div className="sticky top-0 z-10 flex h-[4.25rem] shrink-0 items-center justify-end bg-ink px-4">
                <button type="button" className="inline-flex size-12 items-center justify-center rounded-sm border border-white/30 bg-surface text-white hover:border-white" aria-label={closeLabel} onClick={close}>
                  <CloseIcon className="size-6" />
                </button>
              </div>
              <div className="min-w-0 flex-1 px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))]">{children}</div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
