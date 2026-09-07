import Home from '@/components/pages/Home';

/**
 * Soft navigation must not await CMS on the server.
 * Visibility is resolved in the client Home tree after mount.
 */
export default function HomePage() {
  return <Home />;
}
