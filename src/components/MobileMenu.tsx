"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

/** Client shell only (open/close, scroll lock, Escape, focus handling). The nav content is server-rendered children. */
export function MobileMenu({ openLabel, closeLabel, children }: { openLabel: string; closeLabel: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => { setOpen(false); buttonRef.current?.focus(); }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button, summary") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open, close]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="inline-flex size-12 items-center justify-center rounded-sm border border-line text-white hover:border-white/40 xl:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={openLabel}
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="size-6" />
      </button>
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={openLabel}
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-ink xl:hidden"
          onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}
        >
          <div className="container-x flex h-[4.25rem] shrink-0 items-center justify-end">
            <button type="button" className="inline-flex size-12 items-center justify-center rounded-sm border border-line text-white" aria-label={closeLabel} onClick={close}>
              <CloseIcon className="size-6" />
            </button>
          </div>
          <div className="container-x flex-1 pb-10">{children}</div>
        </div>
      )}
    </>
  );
}
