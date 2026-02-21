'use client';

import React from 'react';
import { ShieldCheck, Search, Activity } from 'lucide-react';

export const Compliance = () => {
  return (
    <section className="py-0 bg-black border-t border-primary/10" id="compliance">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-4">
              Prevención y Control de Riesgo
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-8 text-white leading-tight">
              Compliance & <br />
              <span className="gold-text-gradient italic">Defensa Preventiva</span>
            </h2>
            <p className="text-slate-400 font-light text-lg mb-12 max-w-md leading-relaxed">
              No espero a que el proceso avance para reaccionar. <br />
              Diseñamos estructuras de cumplimiento y estrategias preventivas que reducen exposición penal y sancionatoria.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-10 bg-secondary/20 border border-primary/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-24 w-24 text-primary" />
              </div>
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Auditoría Preventiva</h4>
              <h3 className="text-2xl font-bold font-headline mb-4 text-white">Auditoría Estratégica</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Evaluación jurídica integral para detectar vulnerabilidades antes de que se conviertan en investigación.
              </p>
            </div>

            <div className="group p-10 bg-secondary/30 border-l-2 border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform text-white">
                <Activity className="h-24 w-24" />
              </div>
              <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Control Proactivo</h4>
              <h3 className="text-2xl font-bold font-headline mb-4 text-white">Mitigación de Riesgos</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Blindaje de procesos internos para evitar hallazgos que comprometan la estabilidad institucional o personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
