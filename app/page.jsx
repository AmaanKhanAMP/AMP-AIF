import Home from '@/components/pages/Home';
import { loadHomeCms } from '@/lib/loadCms';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const cms = await loadHomeCms();
  return <Home {...cms} />;
}
