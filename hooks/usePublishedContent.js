"use client";

import { useEffect, useState } from "react";
import { fetchContentClient } from "@/lib/contentApi";

/**
 * Loads published CMS content.
 * - On API success (including empty list): use API data.
 * - On API failure: keep hardcoded fallback.
 *
 * Empty published list must NOT restore fallback — otherwise Unpublish
 * appears broken on the public site.
 */
export default function usePublishedContent(resource, fallback, mapFn) {
  const [items, setItems] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const result = await fetchContentClient(resource);
      if (cancelled) return;
      if (!result.ok) return; // network/API error → keep fallback
      try {
        setItems(result.data.map(mapFn));
      } catch {
        // mapping error → keep fallback
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [resource]); // eslint-disable-line react-hooks/exhaustive-deps

  return items;
}
