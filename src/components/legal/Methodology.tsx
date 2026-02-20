
'use client';

import React, { useEffect, useRef, useState } from 'react';

const phases = [
  { id: "01", title: "Lectura Rápida del Riesgo", desc: "Identificación de vulnerabilidades en el primer contacto con el ente de control." },
  { id: "02", title: "Control de Daños", desc: "Medidas urgentes para blindar la información y la posición procesal." },
  { id: "03", title: "Movimiento Estratégico", desc: "Despliegue de argumentos técnicos para neutralizar la acción punitiva." },
  { id: "04", title: "Defensa Técnica", desc: "Sustentación de alto nivel ante tribunales o despachos administrativos." }
];

export const Methodology = () => {
  return (
    <section className="py-32 bg-black overflow-hidden" id="metodologia">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">El Tablero de Control</span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-12 leading-tight">
              La Defensa No Es Reacción. <br />
              <span className="gold-text-gradient">Es Anticipación.</span>
            </h2>
            <p className="text-slate-400 font-light text-lg mb-12 max-w-md">
              Cada fase de nuestro método está diseñada para recuperar la iniciativa en el proceso legal.
            </p>
          </div>

          <div className="space-y-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10"></div>
            {phases.map((phase) => (
              <div
                key={phase.id}
                className="phase-item relative pl-20"
              >
                <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center border border-primary bg-primary text-black">
                  <span className="text-sm font-bold">{phase.id}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary">
                  {phase.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
