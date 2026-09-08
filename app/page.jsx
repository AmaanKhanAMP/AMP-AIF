import Home from '@/components/pages/Home';
import { loadHomeCms } from '@/lib/loadCms';

/**
 * Seed Home CMS on the server so Upcoming Events / Hero are in the first
 * HTML paint (no empty→fetch→appear flicker). Client still revalidates
 * after mount. Fetches use a short timeout + revalidate so soft-nav cannot
 * hang indefinitely on a dead API.
 */
export default async function HomePage() {
  const initialCms = await loadHomeCms();
  return <Home initialCms={initialCms} />;
}
