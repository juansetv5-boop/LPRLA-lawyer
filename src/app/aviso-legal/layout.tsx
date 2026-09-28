import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de RLP.sas, firma de abogados en Popayán, Cauca. Información sobre el uso del sitio web y limitaciones de responsabilidad conforme a la ley colombiana.',
  alternates: {
    canonical: '/aviso-legal',
  },
};

export default function AvisoLegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
