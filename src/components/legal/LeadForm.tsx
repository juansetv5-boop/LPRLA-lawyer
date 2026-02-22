'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/573168505478?text=Hola%20RLP.sas,%20requiero%20atenci%C3%B3n%20jur%C3%ADdica%20prioritaria%20inmediata%20a%20trav%C3%A9s%20de%20su%20mesa%20de%20crisis.";

export const LeadForm = () => {
  return (
    <section className="pt-0 pb-32 bg-black border-t border-primary/10" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8 text-white leading-tight">
              Si Ya Hay Investigación, <br />
              <span className="text-primary italic">El Tiempo Corre</span>
            </h2>
            <p className="text-slate-400 mb-12 text-base md:text-lg font-light leading-relaxed">
              No permita que la incertidumbre dicte su futuro legal. Nuestra mesa de control está operativa para casos de alta complejidad en todo momento.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <Clock className="h-6 w-6" />
                <span className="font-bold tracking-widest text-[10px] md:text-xs uppercase">Respuesta en menos de 60 minutos</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-[10px] md:text-xs uppercase tracking-widest">Confidencialidad Absoluta bajo secreto profesional</span>
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 md:p-12 bg-secondary/30 border border-primary/20 relative group text-center flex flex-col items-center justify-center transition-all hover:border-primary/60 cursor-pointer overflow-hidden w-full"
          >
            {/* Overlay adjusted per request to fix responsiveness/interaction issues */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="mb-6 md:mb-10 relative z-10 w-full">
              <MessageCircle className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-4 md:mb-6 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-headline text-white mb-4 uppercase tracking-widest break-words px-2">
                Despliegue de Defensa Técnica
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-light max-w-xs mx-auto mb-6 md:mb-8 leading-relaxed">
                Haga clic en cualquier parte de este recuadro para iniciar comunicación directa con nuestra mesa de crisis.
              </p>
            </div>

            <Button className="w-full gold-metallic-gradient text-black font-bold h-16 md:h-20 rounded-none text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] border-none shadow-2xl shadow-primary/20 group-hover:scale-[1.02] transition-all pointer-events-none whitespace-normal md:whitespace-nowrap px-4">
              HABLAR CON UN ABOGADO AHORA
            </Button>

            <p className="mt-6 text-[9px] md:text-[10px] text-primary/60 uppercase tracking-widest font-bold relative z-10">
              Canal de atención prioritaria 24/7
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
