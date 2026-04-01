import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Md. Mohimanul Islam — Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN, Next.js, TypeScript & WordPress. 5+ years of freelancing experience.',
  keywords: ['Full Stack Developer', 'MERN', 'Next.js', 'TypeScript', 'WordPress', 'Bangladesh'],
  openGraph: {
    title: 'Md. Mohimanul Islam — Full Stack Developer',
    description: 'Full Stack Developer | MERN · Next.js · TypeScript · WordPress',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        {children}
      </body>
    </html>
  );
}
