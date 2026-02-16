import React from 'react';
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/90 backdrop-blur-xl border-b border-primary/10 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span className="font-headline text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase">Lex Digitalis</span>
            <span className="text-[9px] font-medium text-primary tracking-[0.5em] uppercase mt-1">Eternal Justice • Popayán</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 font-medium text-[10px] uppercase tracking-[0.3em] text-white/60">
          <a className="hover:text-primary transition-colors" href="#defensa">Especialidades</a>
          <a className="hover:text-primary transition-colors" href="#compliance">Cumplimiento</a>
          <a className="hover:text-primary transition-colors" href="#estrategia">Táctica</a>
          <a className="hover:text-primary transition-colors" href="#contacto">Contacto</a>
        </nav>

        <Button asChild className="gold-foil-gradient text-background rounded-none border-none px-8 py-6 text-[10px] font-bold uppercase tracking-[0.25em] transition-transform active:scale-95 shadow-lg shadow-primary/10">
          <a href="#contacto">Evaluación Técnica</a>
        </Button>
      </div>
    </header>
  );
};
