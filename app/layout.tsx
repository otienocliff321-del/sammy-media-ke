import './globals.css';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://sammymedia.ke'),
  title: {
    default: 'SAMMY MEDIA KE | Truth. Clarity. Impact.',
    template: '%s | SAMMY MEDIA KE',
  },
  description:
    'SAMMY MEDIA KE is Kenya’s premium news, television, radio, digital media and editorial platform.',
  keywords: ['news', 'Kenya', 'Africa', 'media', 'radio', 'television', 'podcasts'],
  openGraph: {
    title: 'SAMMY MEDIA KE',
    description: 'Truth. Clarity. Impact.',
    type: 'website',
    url: 'https://sammymedia.ke',
  },
  icons: {
    icon: '/assets/logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sammy-light text-sammy-black antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
