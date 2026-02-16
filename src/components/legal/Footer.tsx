import React from 'react';
import { MapPin, PhoneCall, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground/40 py-40 border-t border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] ancient-texture pointer-events-none"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="font-headline text-3xl font-bold text-white tracking-[0.2em] block uppercase">RLP.sas</span>
              <span className="text-[11px] font-bold text-primary tracking-[0.5em] uppercase mt-2 block">Popayán • Eternal Justice Design</span>
            </div>
            <p className="text-sm leading-loose mb-12 font-light max-w-md">
              Firma boutique especializada en la defensa técnica ante el poder punitivo del Estado. Excelencia analítica arraigada en los fundamentos eternos del Derecho.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-10 text-[11px] uppercase tracking-[0.4em]">Ubicación</h4>
            <ul className="space-y-8 text-[12px] font-light uppercase tracking-widest">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary h-5 w-5" />
                <span>Centro Histórico, <br/>Popayán, Colombia</span>
              </li>
              <li className="flex items-center gap-4">
                <PhoneCall className="text-primary h-5 w-5" />
                <span>Urgencias 24/7</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary h-5 w-5" />
                <span>contacto@rlp.sas</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white font-bold mb-10 text-[11px] uppercase tracking-[0.4em]">Áreas de Práctica</h4>
            <ul className="grid grid-cols-1 gap-6 text-[12px] font-light uppercase tracking-widest">
              <li><a className="hover:text-primary border-l border-white/10 pl-4 transition-all" href="#defensa">Defensa Penal Técnica</a></li>
              <li><a className="hover:text-primary border-l border-white/10 pl-4 transition-all" href="#compliance">Compliance Sancionatorio</a></li>
              <li><a className="hover:text-primary border-l border-white/10 pl-4 transition-all" href="#defensa">Recursos de Casación</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.5em]">
          <p>© 2024 RLP.sas Popayán. Justicia de Autoridad.</p>
          <div className="flex gap-14 mt-8 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">Privacidad</a>
            <a className="hover:text-primary transition-colors" href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
