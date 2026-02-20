'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/573127930898?text=Hola%20RLP.sas,%20requiero%20asesor%C3%ADa%20legal%20especializada%20con%20urgencia.";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md min-h-20 border-b border-primary/20' : 'bg-transparent min-h-28'} flex items-center`}>
      <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Scale className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <div className="flex flex-col gap-0.5 md:gap-1">
            <span className="font-headline text-lg md:text-2xl font-bold text-white tracking-widest uppercase leading-none">RLP.sas</span>
            <span className="text-[7px] md:text-[9px] font-bold text-primary tracking-[0.4em] md:tracking-[0.5em] uppercase">Justicia de Autoridad</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-12 font-bold text-[10px] uppercase tracking-[0.3em] text-slate-400">
          {/* Unwanted links removed per request */}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="gold-metallic-gradient text-black rounded-none h-10 md:h-12 px-4 md:px-8 text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-primary/10 hover:brightness-110 border-none outline-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consulta Urgente</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
