'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/10 pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-4 mb-8 hover:opacity-80 transition-opacity cursor-pointer">
              <Image
                src="/logo-divider.png"
                alt="RLP.sas Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain brightness-0 invert opacity-80"
              />
              <div className="flex flex-col">
                <span className="font-headline text-3xl font-bold text-white tracking-widest uppercase">RLP.sas</span>
                <span className="text-[11px] font-bold text-primary tracking-[0.6em] uppercase mt-2">Popayán • Colombia</span>
              </div>
            </Link>
            <p className="text-slate-500 max-w-md leading-relaxed font-light italic">
              "Defensa con criterio. Sin improvisación." <br />
              Firma especializada en el blindaje de funcionarios y particulares frente al poder sancionatorio del Estado.
            </p>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Contacto</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest text-slate-400">
              <li>Centro Histórico, Popayán</li>
              <li className="text-white font-bold">+57 316 850 5478</li>
              <li>robinsonluna@rlpcompliance.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Seguridad Jurídica</h4>
            <div className="flex items-center gap-3 text-slate-500 mb-6">
              <ShieldCheck className="h-10 w-10 opacity-20" />
              <span className="text-[10px] uppercase leading-relaxed">Protección de datos bajo secreto profesional legal.</span>
            </div>
            <p className="text-[9px] text-slate-600 uppercase tracking-widest leading-relaxed border-l border-primary/20 pl-4">
              Al navegar en este sitio web, usted acepta el tratamiento de sus datos personales conforme a nuestra política de privacidad y el secreto profesional legal.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] text-slate-600 font-bold">
          <p>© {new Date().getFullYear()} Representación Legal Popayán. Todos los derechos reservados.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</a>
            <a href="/privacidad" className="hover:text-primary transition-colors">Privacidad</a>
          </div>
        </div>
      </div>

      {/* Decorative Large Text */}
      <div className="absolute bottom-[-10%] right-[-5%] text-[20vw] font-headline font-bold text-white/[0.02] leading-none pointer-events-none select-none">
        RLP
      </div>
    </footer>
  );
};
