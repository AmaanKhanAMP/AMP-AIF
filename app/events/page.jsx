import Events from '@/components/pages/Events';
import { loadEventsCms } from '@/lib/loadCms';

/**
 * Seed Events CMS on the server so Upcoming Events is in the first HTML
 * paint. Client revalidates after mount; server fetch is time-bounded.
 */
export default async function EventsPage() {
  const initialCms = await loadEventsCms();
  return <Events initialCms={initialCms} />;
}
