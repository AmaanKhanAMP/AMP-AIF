"use client";

import { useEffect } from "react";
import { loadEventsCmsClient, loadHomeCmsClient } from "@/lib/contentApi";
import { peekEventsCms, peekHomeCms } from "@/lib/cmsClientCache";

/**
 * Warms Home/Events CMS snapshots while the user is on any route so the
 * first soft navigation into Home/Events can paint from cache (no flicker).
 * Skips work when a snapshot already exists (pages still revalidate on mount).
 */
export default function CmsWarmup() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const tasks = [];
        if (!peekHomeCms()) tasks.push(loadHomeCmsClient());
        if (!peekEventsCms()) tasks.push(loadEventsCmsClient());
        if (tasks.length) await Promise.all(tasks);
      } catch {
        // ignore — route-level fetch is authoritative
      }
      if (cancelled) return;
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
