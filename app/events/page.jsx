import Events from '@/components/pages/Events';
import { loadEventsCms } from '@/lib/loadCms';

export const revalidate = 60;

/**
 * ISR page: Upcoming Events is in the static HTML. No Suspense null-seed
 * remount, so the section cannot flash away during client navigation.
 */
export default async function EventsPage() {
  const initialCms = await loadEventsCms();
  return <Events initialCms={initialCms} />;
}
