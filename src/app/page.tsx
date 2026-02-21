
import React from 'react';
import { Navbar } from '@/components/legal/Navbar';
import { Hero } from '@/components/legal/Hero';
import { Services } from '@/components/legal/Services';
import { Compliance } from '@/components/legal/Compliance';
import { Testimonials } from '@/components/legal/Testimonials';
import { Methodology } from '@/components/legal/Methodology';
import { Quote } from '@/components/legal/Quote';
import { LeadForm } from '@/components/legal/LeadForm';
import { Footer } from '@/components/legal/Footer';
import { LogoSeparator } from '@/components/legal/LogoSeparator';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <LogoSeparator />
      <Services />
      <LogoSeparator src="/logo-divider-secondary.png" width="w-32" height="h-32" mdWidth="md:w-48" mdHeight="md:h-48" />
      <Compliance />
      <LogoSeparator src="/logo-divider-secondary.png" width="w-32" height="h-32" mdWidth="md:w-48" mdHeight="md:h-48" />
      <Methodology />
      <Testimonials />
      <LogoSeparator src="/logo-divider-secondary.png" width="w-32" height="h-32" mdWidth="md:w-48" mdHeight="md:h-48" />
      <Quote />
      <LogoSeparator src="/logo-divider-secondary.png" width="w-32" height="h-32" mdWidth="md:w-48" mdHeight="md:h-48" />
      <LeadForm />
      <Footer />
    </main>
  );
}
