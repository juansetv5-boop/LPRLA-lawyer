import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Abogados en Popayán | Defensa Penal, Disciplinaria y Compliance | RLP.sas',
  description: 'Abogados penalistas en Popayán, Cauca. Defensa penal estratégica, procesos disciplinarios, responsabilidad fiscal y compliance corporativo. Consulta urgente 24/7. RLP.sas.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Abogados en Popayán | Defensa Penal, Disciplinaria y Compliance | RLP.sas',
    description: 'Abogados penalistas en Popayán, Cauca. Defensa penal estratégica, procesos disciplinarios, responsabilidad fiscal y compliance corporativo. Consulta urgente 24/7. RLP.sas.',
    url: 'https://rlpcompliance.com',
  },
};
import { Navbar } from '@/components/legal/Navbar';
import { Hero } from '@/components/legal/Hero';
import { Services } from '@/components/legal/Services';
import { Compliance } from '@/components/legal/Compliance';
import { Testimonials } from '@/components/legal/Testimonials';
import { Methodology } from '@/components/legal/Methodology';
import { Quote } from '@/components/legal/Quote';
import { LeadForm } from '@/components/legal/LeadForm';
import { Footer } from '@/components/legal/Footer';
import { HomeJsonLd } from '@/components/seo/HomeJsonLd';

export default function Home() {
  return (
    <main role="main" aria-label="Página principal de RLP.sas Abogados en Popayán" className="bg-black min-h-screen">
      <HomeJsonLd />
      <Navbar />
      <Hero />
      <Services />
      <Compliance />
      <Methodology />
      <Testimonials />
      <Quote />
      <LeadForm />
      <Footer />
    </main>
  );
}
