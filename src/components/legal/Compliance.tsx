import React from 'react';
import { Verified, Gavel } from 'lucide-react';

export const Compliance = () => {
  return (
    <section className="py-48 bg-card relative border-y border-primary/10" id="compliance">
      <div className="absolute inset-0 opacity-[0.02] ancient-texture pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">Prevención de Riesgos</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight font-bold font-headline">Compliance & <br/><span className="italic text-white/80">Gestión de Riesgos</span></h2>
            <p className="text-foreground/60 font-light leading-relaxed mb-12 max-w-xl">
              Anticipamos y neutralizamos riesgos corporativos. Diseñamos estructuras de cumplimiento normativo (Compliance) que actúan como un escudo ante el aparato sancionatorio del Estado.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <Verified className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <h4 className="text-white uppercase tracking-widest text-sm mb-2 font-bold">Auditoría Preventiva</h4>
                  <p className="text-foreground/40 text-xs leading-relaxed">Blindaje en procesos de contratación y gestión de recursos públicos.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Gavel className="text-primary h-6 w-6 shrink-0" />
                <div>
                  <h4 className="text-white uppercase tracking-widest text-sm mb-2 font-bold">Defensa Administrativa</h4>
                  <p className="text-foreground/40 text-xs leading-relaxed">Litigio especializado ante superintendencias y organismos reguladores.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 gold-foil-gradient opacity-10 blur-2xl"></div>
            <div className="relative gold-border-subtle p-12 bg-background aspect-video flex flex-col justify-center">
              <h3 className="text-3xl mb-8 gold-text-gradient font-headline font-bold">Entes de Control</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-2 font-bold">Disciplinario</span>
                  <p className="text-foreground/50 text-xs">Defensa ante la PGN y personerías.</p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-2 font-bold">Fiscal</span>
                  <p className="text-foreground/50 text-xs">Gestión ante CGR y procesos coactivos.</p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-2 font-bold">Penal</span>
                  <p className="text-foreground/50 text-xs">Asistencia inmediata ante la FGN.</p>
                </div>
                <div className="border-l border-primary/30 pl-6">
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-2 font-bold">Policivo</span>
                  <p className="text-foreground/50 text-xs">Justicia administrativa y policiva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
