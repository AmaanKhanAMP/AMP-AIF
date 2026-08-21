import Home from '@/components/pages/Home';
import { loadHomeCms } from '@/lib/loadCms';

/** Short ISR + allow Data Cache under the force-dynamic root layout. */
export const revalidate = 60;
export const fetchCache = 'default-cache';

export default async function HomeAliasPage() {
  const cms = await loadHomeCms();
  return <Home {...cms} />;
}
