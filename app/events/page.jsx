import Events from '@/components/pages/Events';

/**
 * Soft navigation must not await CMS on the server.
 * Visibility is resolved in the client Events tree after mount.
 */
export default function EventsPage() {
  return <Events />;
}
