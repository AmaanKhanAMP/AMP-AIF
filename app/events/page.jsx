import Events from '@/components/pages/Events';
import { loadEventsCms } from '@/lib/loadCms';

/** Short ISR + allow Data Cache under the force-dynamic root layout. */
export const revalidate = 60;
export const fetchCache = 'default-cache';

export default async function EventsPage() {
  const cms = await loadEventsCms();
  return <Events {...cms} />;
}
