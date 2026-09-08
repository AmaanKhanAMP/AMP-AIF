import Events from '@/components/pages/Events';

/**
 * Soft-nav must not await the CMS API (Render latency blocked Vercel
 * navigations for up to ~4s). The client Events page paints immediately,
 * seeds from session cache when available, then loads CMS in the background.
 */
export default function EventsPage() {
  return <Events initialCms={null} />;
}
