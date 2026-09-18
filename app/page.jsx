import Home from '@/components/pages/Home';
import { loadHomeCms } from '@/lib/loadCms';

export const revalidate = 60;

/**
 * ISR page: CMS is baked into the static HTML. Client navigations reuse that
 * payload and do not remount Home with a null seed (that flicker was caused
 * by a Suspense fallback of <Home initialCms={null} />).
 */
export default async function HomePage() {
  const initialCms = await loadHomeCms();
  return <Home initialCms={initialCms} />;
}
