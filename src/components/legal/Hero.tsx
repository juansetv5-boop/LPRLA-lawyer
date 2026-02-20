'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldAlert, TrendingUp } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/573127930898?text=Hola%20RLP.sas,%20requiero%20asesor%C3%ADa%20legal%20especializada%20con%20urgencia.";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 grayscale brightness-50"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-primary/30 bg-primary/5">
            <ShieldAlert className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              Defensa Penal y Sancionatoria • Actuación Inmediata
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold font-headline mb-8 leading-[1.1] md:leading-[0.95] tracking-authority text-white">
            Cuando el Estado Actúa, <br />
            <span className="gold-text-gradient italic">Cada Movimiento Cuenta</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
            Una citación, una auditoría o una imputación mal manejada puede definir todo el proceso. Aquí no se improvisa: se analiza rápido, se identifica la grieta y se actúa con estrategia.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button asChild className="gold-metallic-gradient text-black font-bold h-14 md:h-16 px-6 md:px-10 rounded-none border-none shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-transform animate-gold-shine text-[10px] md:text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Evaluar Mi Caso Ahora</a>
            </Button>
            <Button asChild variant="outline" className="h-14 md:h-16 px-6 md:px-10 rounded-none border-white/20 text-white hover:bg-white/5 font-bold uppercase tracking-widest text-[10px] md:text-xs">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Estoy Bajo Investigación <TrendingUp className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Chess Element */}
      <div className="absolute right-[-10%] bottom-[-5%] opacity-10 pointer-events-none hidden lg:block">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 5L20 95H80L50 5Z" stroke="currentColor" strokeWidth="0.2" className="text-primary" />
        </svg>
      </div>
    </section>
  );
};
