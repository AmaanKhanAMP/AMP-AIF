import Events from '@/components/pages/Events';

/** Events must not await CMS here — that blocked soft navigation to `/events`. */
export default function EventsPage() {
  return <Events />;
}
