import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

export const metadata: Metadata = {
  title: {
    default: 'Abogados en Popayán | Defensa Penal y Compliance | RLP.sas',
    template: '%s | RLP.sas — Abogados en Popayán'
  },
  description: 'Firma de abogados en Popayán, Cauca. Especialistas en defensa penal, disciplinaria, responsabilidad fiscal y compliance. Atención inmediata. +57 316 850 5478.',
  keywords: ['abogados popayán', 'abogado penal popayán', 'abogado penalista popayán', 'defensa penal popayán', 'compliance popayán', 'abogados en popayán cauca', 'firma de abogados popayán', 'abogado disciplinario popayán', 'responsabilidad fiscal abogado', 'asesoría legal popayán', 'RLP.sas', 'Representación Legal Popayán'],
  authors: [{ name: 'RLP.sas — Representación Legal Popayán' }],
  creator: 'RLP.sas',
  publisher: 'RLP.sas — Representación Legal Popayán',
  metadataBase: new URL('https://rlpcompliance.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'RLP.sas — Abogados en Popayán',
    title: {
      default: 'Abogados en Popayán | Defensa Penal y Compliance | RLP.sas',
      template: '%s | RLP.sas — Abogados en Popayán'
    },
    description: 'Firma de abogados en Popayán, Cauca. Especialistas en defensa penal, disciplinaria, responsabilidad fiscal y compliance. Atención inmediata. +57 316 850 5478.',
    url: 'https://rlpcompliance.com'
  },
  twitter: { 
    card: 'summary_large_image',
    title: {
      default: 'Abogados en Popayán | Defensa Penal y Compliance | RLP.sas',
      template: '%s | RLP.sas — Abogados en Popayán'
    },
    description: 'Firma de abogados en Popayán, Cauca. Especialistas en defensa penal, disciplinaria, responsabilidad fiscal y compliance. Atención inmediata. +57 316 850 5478.'
  },
  robots: { 
    index: true, 
    follow: true, 
    googleBot: { 
      index: true, 
      follow: true, 
      'max-video-preview': -1, 
      'max-image-preview': 'large', 
      'max-snippet': -1 
    } 
  },
  verification: {},
  category: 'legal'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#BF953F" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        <FirebaseClientProvider>
          <FirebaseErrorListener />
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
