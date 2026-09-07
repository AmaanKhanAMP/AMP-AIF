import Home from '@/components/pages/Home';

/** Home must not await CMS here — that blocked soft navigation to `/`. */
export default function HomePage() {
  return <Home />;
}
