/**
 * Shown during App Router client navigations while the next route's
 * force-dynamic RSC payload (CMS fetches) is still resolving.
 * Without this, desktop clicks on slow routes (/home, /events) look dead
 * because the URL/content do not update for many seconds.
 */
export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-live="polite" aria-label="Loading page">
      <div className="route-loading-bar" />
    </div>
  );
}
