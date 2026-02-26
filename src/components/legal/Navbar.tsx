'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/573168505478?text=Hola%20RLP.sas,%20llego%20desde%20el%20sitio%20web%20y%20me%20gustar%C3%ADa%20programar%20una%20consulta%20legal%20especializada.";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md min-h-20 border-b border-primary/20' : 'bg-transparent min-h-28'} flex items-center`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-start gap-4 md:gap-8">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <Image
            src="/logo-divider.png"
            alt="RLP.sas Logo"
            width={56}
            height={56}
            className="h-10 w-10 md:h-14 md:w-14 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="flex flex-col gap-0.5 md:gap-1">
            <span className="font-headline text-lg md:text-2xl font-bold text-white tracking-widest uppercase leading-none">RLP.sas</span>
            <span className="text-[8px] md:text-[11px] font-bold text-primary tracking-[0.4em] md:tracking-[0.5em]">Oficina de Apoyo, Asesoramiento Jurídico y Compliance</span>
          </div>
        </Link>

        <div className="flex items-center">
          <Button asChild className="gold-metallic-gradient text-black rounded-none h-10 md:h-12 px-4 md:px-8 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/10 hover:brightness-110 border-none outline-none">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Consulta Urgente</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};
