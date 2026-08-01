"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

/**
 * Loads Hide/Show visibility for a website section.
 * Fail-open: if the API is unreachable, treat the section as visible.
 *
 * @param {string} sectionName e.g. "upcoming_events"
 * @returns {{ isVisible: boolean, loading: boolean }}
 */
export default function useSectionVisibility(sectionName) {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/sections/${sectionName}/visibility`,
          { cache: "no-store" }
        );
        if (!res.ok) {
          if (!cancelled) {
            setIsVisible(true);
            setLoading(false);
          }
          return;
        }
        const json = await res.json();
        if (cancelled) return;
        if (json?.success && typeof json?.data?.is_visible === "boolean") {
          setIsVisible(json.data.is_visible);
        } else {
          setIsVisible(true);
        }
      } catch {
        if (!cancelled) setIsVisible(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sectionName]);

  return { isVisible, loading };
}
