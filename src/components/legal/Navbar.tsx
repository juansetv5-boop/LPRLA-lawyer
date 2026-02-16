
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md h-20 border-b border-primary/20' : 'bg-transparent h-28'}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-headline text-2xl font-bold text-white tracking-widest uppercase leading-none">RLP.sas</span>
            <span className="text-[9px] font-bold text-primary tracking-[0.5em] uppercase mt-1">Justicia de Autoridad</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400">
          <a href="#defensa" className="hover:text-primary transition-colors">Defensa</a>
          <a href="#metodologia" className="hover:text-primary transition-colors">Método</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </div>

        <Button asChild className="gold-metallic-gradient text-black rounded-none h-12 px-8 text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/10 hover:brightness-110">
          <a href="#contacto">Consulta Urgente</a>
        </Button>
      </div>
    </nav>
  );
};
