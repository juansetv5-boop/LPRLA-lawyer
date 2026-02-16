'use client';

import React from 'react';
import { Gavel, Landmark, ShieldAlert } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/573127930898?text=Hola%20RLP.sas,%20necesito%20informaci%C3%B3n%20sobre%20estrategia%20de%20defensa%20especializada.";

const cards = [
  { 
    title: "Defensa Penal Estratégica", 
    desc: "Control inmediato de imputaciones y movimientos tempranos ante la Fiscalía.", 
    icon: <ShieldAlert className="h-8 w-8 text-primary" />
  },
  { 
    title: "Defensa Disciplinaria", 
    desc: "Actuación técnica frente a investigaciones que cuestan el cargo y la reputación.", 
    icon: <Landmark className="h-8 w-8 text-primary" />
  },
  { 
    title: "Responsabilidad Fiscal", 
    desc: "Blindaje patrimonial ante hallazgos de entes de control territorial y nacional.", 
    icon: <Gavel className="h-8 w-8 text-primary" />
  }
];

export const Services = () => {
  return (
    <section className="py-32 bg-black" id="defensa">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Especialidades de Alto Riesgo</span>
          <h2 className="text-5xl font-bold font-headline text-white">Defensa Penal: <br /><span className="gold-text-gradient">Cuando el Riesgo es Real</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <a 
              key={idx} 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-12 bg-secondary/30 border border-primary/10 hover:border-primary/40 transition-all duration-500 overflow-hidden block"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 transform group-hover:scale-110 transition-transform">
                {React.cloneElement(card.icon as React.ReactElement, { className: 'h-32 w-32' })}
              </div>
              <div className="mb-8">{card.icon}</div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-white group-hover:text-primary transition-colors">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light">{card.desc}</p>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary/60 font-bold group-hover:text-primary transition-colors">
                Ver Estrategia <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
