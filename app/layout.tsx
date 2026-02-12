import type { Metadata } from 'next';
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { MouseParticles } from '@/components/MouseParticles';
import { PageTransition } from '@/components/PageTransition';

const romanticFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-romantic',
  display: 'swap',
});

const bodyFont = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Notre Histoire',
  description: "Un voyage romantique pour la Saint-Valentin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${romanticFont.variable} ${bodyFont.variable} min-h-screen bg-cream text-wine antialiased`}
      >
        <MouseParticles />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
