'use client';

import React from 'react';
import { Navbar } from '@/components/legal/Navbar';
import { Footer } from '@/components/legal/Footer';

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold font-headline mb-8 gold-text-gradient uppercase tracking-widest">Aviso Legal</h1>
        <div className="prose prose-invert max-w-none text-slate-400 font-light leading-relaxed space-y-6 text-sm tracking-widest uppercase">
          <p>
            En cumplimiento de la Ley 1581 de 2012 y demás normas concordantes, Representación Legal Popayán (RLP.sas) informa que la información contenida en este sitio web tiene fines exclusivamente informativos y no constituye asesoría legal vinculante.
          </p>
          <p>
            El uso de este sitio web no establece una relación abogado-cliente. La comunicación a través de formularios o WhatsApp no garantiza la confidencialidad total hasta que se formalice el contrato de servicios profesionales.
          </p>
          <p>
            RLP.sas se reserva el derecho de modificar el contenido de este sitio en cualquier momento sin previo aviso.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
