import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export const Quote = () => {
  return (
    <section className="py-48 bg-card border-y border-primary/10 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05]">
        <img 
          alt="Atmospheric classical architecture" 
          className="w-full h-full object-cover grayscale" 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative">
        <QuoteIcon className="text-primary/10 h-48 w-48 absolute left-1/2 -top-24 -translate-x-1/2 pointer-events-none select-none" />
        <div className="relative z-10">
          <blockquote className="text-3xl md:text-5xl font-headline text-white italic leading-[1.4] mb-16 font-light">
            "La defensa no es una opción, es la piedra angular de la civilización. Protegemos el derecho a la justicia con la misma fuerza que los antiguos erigieron sus templos."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="h-px w-20 gold-foil-gradient mb-6"></div>
            <p className="font-bold text-white tracking-[0.4em] uppercase text-xs mb-2">Director de Litigio</p>
            <p className="text-primary text-[10px] tracking-[0.6em] uppercase font-semibold">RLP.sas Popayán</p>
          </div>
        </div>
      </div>
    </section>
  );
};
