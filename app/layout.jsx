import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import { ChatWidget } from '@/chatbot';
import { loadSiteShellCms } from '@/lib/loadCms';
import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'AMP India Foundation',
  description:
    'AMP India Foundation — empowering communities through education, employment, mentorship, healthcare, and skill development.',
};

export default async function RootLayout({ children }) {
  const shell = await loadSiteShellCms();

  return (
    <html lang="en">
      <body>
        <Navbar
          settings={shell.navbarSettings}
          items={shell.navbarItems}
        />
        <main style={{ minHeight: '80vh' }}>{children}</main>
        <Footer
          settings={shell.footerSettings}
          links={shell.footerLinks}
          focusItems={shell.footerFocus}
        />
        <ChatWidget />
        <BackToTop />
      </body>
    </html>
  );
}
