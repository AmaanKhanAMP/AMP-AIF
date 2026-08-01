import Events from '@/components/pages/Events';
import { loadEventsCms } from '@/lib/loadCms';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
  const cms = await loadEventsCms();
  return <Events {...cms} />;
}
