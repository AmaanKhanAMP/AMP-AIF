import Home from '@/components/pages/Home';
import { loadHomeCms } from '@/lib/loadCms';

/** Alias of `/` — same SSR CMS seed as the root page. */
export default async function HomeAliasPage() {
  const initialCms = await loadHomeCms();
  return <Home initialCms={initialCms} />;
}
