import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad y tratamiento de datos personales de RLP.sas, firma de abogados en Popayán. Conforme a la Ley 1581 de 2012.',
  alternates: {
    canonical: '/privacidad',
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
