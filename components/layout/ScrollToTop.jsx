"use client";

import { useEffect } from 'react';

/**
 * Forces the viewport to the top when a project page mounts.
 * Prevents leftover homepage scroll from landing on Featured Initiatives.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return null;
}
