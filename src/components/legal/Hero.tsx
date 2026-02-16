import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-statue');

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Herencia Legal'}
          fill
          className="object-cover grayscale brightness-[0.2] contrast-[1.1]"
          priority
          data-ai-hint="lady justice"
        />
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block mb-10 overflow-hidden">
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.5em] block mb-2">Defensa de Autoridad • Popayán</span>
            <div className="h-[1px] w-full gold-foil-gradient"></div>
          </div>
          
          <h1 className="text-5xl md:text-8xl leading-[1.1] mb-12 text-white font-bold italic font-headline">
            Justicia de <br/>
            <span className="gold-text-gradient not-italic">Fundamentos</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-14 leading-relaxed max-w-2xl font-light">
            Conectamos la maestría jurídica moderna con los principios milenarios de la defensa. Blindamos su libertad bajo la solidez inquebrantable de la tradición legal clásica.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a className="gold-foil-gradient text-background px-12 py-6 font-bold text-xs uppercase tracking-[0.3em] hover:brightness-110 transition-all flex items-center justify-center gap-4 shadow-xl shadow-primary/20" href="#contacto">
              Desplegar Defensa
            </a>
            <a className="border border-white/30 text-white px-12 py-6 font-bold text-xs uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-4" href="#defensa">
              Nuestros Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
