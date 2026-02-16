import React from 'react';
import { Navbar } from '@/components/legal/Navbar';
import { Hero } from '@/components/legal/Hero';
import { Services } from '@/components/legal/Services';
import { Compliance } from '@/components/legal/Compliance';
import { Attorneys } from '@/components/legal/Attorneys';
import { Quote } from '@/components/legal/Quote';
import { ContactForm } from '@/components/legal/ContactForm';
import { Footer } from '@/components/legal/Footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Compliance />
      <Attorneys />
      <Quote />
      <ContactForm />
      <Footer />
    </main>
  );
}
