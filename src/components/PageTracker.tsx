"use client";

import { useEffect } from "react";
import { track, type TrackEvent, type TrackParams } from "@/lib/tracking";

/** Registers page context (page_type, vehicle…) for every click event and optionally fires a view event once per mount. */
export function PageTracker({ context, event }: { context: TrackParams; event?: TrackEvent }) {
  const key = JSON.stringify(context);
  useEffect(() => {
    window.__kinovaPage = JSON.parse(key);
    if (event) track(event);
  }, [key, event]);
  return null;
}
