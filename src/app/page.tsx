
import React from 'react';
import { Navbar } from '@/components/legal/Navbar';
import { Hero } from '@/components/legal/Hero';
import { Services } from '@/components/legal/Services';
import { Methodology } from '@/components/legal/Methodology';
import { Quote } from '@/components/legal/Quote';
import { LeadForm } from '@/components/legal/LeadForm';
import { Footer } from '@/components/legal/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Methodology />
      <Quote />
      <LeadForm />
      <Footer />
    </main>
  );
}
