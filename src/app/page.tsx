
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
      <LogoSeparator />
      <Compliance />
      <LogoSeparator />
      <Methodology />
      <Testimonials />
      <LogoSeparator />
      <Quote />
      <LogoSeparator />
      <LeadForm />
      <Footer />
    </main>
  );
}
