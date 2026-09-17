'use client';

import React from 'react';
import { Navbar } from '@/components/legal/Navbar';
import { Footer } from '@/components/legal/Footer';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function PrivacidadPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-36 pb-24">
            <Navbar />
            <div className="container max-w-4xl">
                <AnimatedSection animation="slide-in-up">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-8 gold-text-gradient uppercase tracking-widest">Política de Privacidad</h1>
                    <div className="prose prose-invert max-w-none text-slate-400 font-light leading-relaxed space-y-6 text-sm tracking-widest uppercase">
                        <p>
                            Representación Legal Popayán (RLP.sas) se compromete a proteger la privacidad de sus usuarios. Los datos personales recolectados a través de WhatsApp o cualquier otro medio serán tratados de acuerdo con nuestra política de tratamiento de datos personales.
                        </p>
                        <p>
                            Finalidad del tratamiento: Sus datos serán utilizados para contactarlo, agendar citas y proporcionar información sobre nuestros servicios legales.
                        </p>
                        <p>
                            Derechos del titular: Usted tiene derecho a conocer, actualizar, rectificar y suprimir su información personal en cualquier momento escribiendo a defensa@rlp.sas.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
            <Footer />
        </main>
    );
}

