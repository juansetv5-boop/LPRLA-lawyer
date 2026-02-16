
'use client';

import React from 'react';

export const Quote = () => {
  return (
    <section className="py-48 bg-black relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-fixed bg-center opacity-5 grayscale"></div>
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <blockquote className="text-4xl md:text-6xl font-headline italic text-white leading-tight mb-16">
          "El problema no es la investigación. El problema es enfrentarla <span className="gold-text-gradient not-italic">tarde o mal asesorado.</span>"
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="h-px w-24 gold-metallic-gradient mb-8"></div>
          <p className="text-white font-bold tracking-[0.5em] uppercase text-xs mb-2">Robinson Luna</p>
          <p className="text-primary text-[10px] tracking-[0.6em] uppercase font-semibold">Director • RLP.sas</p>
        </div>
      </div>
    </section>
  );
};
