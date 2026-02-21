'use client';

import React from 'react';
import { Quote as QuoteIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { LogoSeparator } from './LogoSeparator';

const testimonials = [
    {
        quote: "Nos enfrentábamos a múltiples procesos por presunto daño fiscal. El panorama parecía cerrado. La estrategia jurídica identificó inconsistencias técnicas en los hallazgos y los procesos fueron archivados en su totalidad. Actuar temprano marcó la diferencia.",
        author: "Entidad pública territorial",
        context: "Cuando el proceso ya está en marcha",
        insight: "Si actúas temprano, hay margen."
    },
    {
        quote: "Una auditoría generó posibles implicaciones penales, fiscales y disciplinarias. La intervención fue inmediata. Se controvirtieron los informes preliminares y se eliminó la incidencia sancionatoria antes de que avanzara el proceso.",
        author: "Administración municipal",
        context: "Riesgo penal y disciplinario simultáneo",
        insight: "El momento crítico es al inicio."
    },
    {
        quote: "Se inició un proceso sancionatorio por presunto incumplimiento. La estrategia jurídica permitió desmontar el sustento técnico y lograr el archivo del proceso antes de que escalara.",
        author: "Entidad territorial",
        context: "Proceso Sancionatorio que parecía inevitable",
        insight: "Lo que parece inevitable puede no serlo."
    },
    {
        quote: "En un proceso por presunta colusión, la intervención estratégica permitió reducir significativamente la sanción impuesta y estructurar acciones para controvertir la decisión.",
        author: "Empresa privada",
        context: "Investigación por presunta colusión",
        insight: "Incluso cuando ya hay sanción, todavía hay movimientos posibles."
    },
    {
        quote: "Frente a una imputación por presunto delito contra la administración pública, la defensa técnica desvirtuó los cargos y se obtuvo una decisión favorable. La estrategia fue precisa desde la audiencia inicial.",
        author: "Funcionario público",
        context: "Imputación Penal",
        insight: "La audiencia inicial es decisiva."
    },
    {
        quote: "Se formularon cargos disciplinarios de alta gravedad. La defensa identificó inconsistencias en la imputación y logró una decisión absolutoria.",
        author: "Exdirectivo entidad pública",
        context: "Proceso Disciplinario Grave",
        insight: "No toda imputación está bien estructurada."
    },
    {
        quote: "Durante una investigación se impusieron medidas que afectaban nuestra operación. La intervención permitió revocar la medida y recuperar los bienes antes de que el daño fuera irreversible.",
        author: "Empresa cliente",
        context: "Revocatoria de Medidas y Recuperación de Bienes",
        insight: "Actuar rápido evita daño permanente."
    },
    {
        quote: "En una investigación penal militar, la defensa demostró la atipicidad del hecho y el proceso fue archivado.",
        author: "Miembro de fuerza pública",
        context: "Investigación Penal Militar",
        insight: "No toda conducta investigada constituye delito."
    }
];

export const Testimonials = () => {
    return (
        <section className="py-0 bg-black border-t border-primary/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-primary font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Casos de Éxito</span>
                    <h2 className="text-4xl md:text-6xl font-bold font-headline text-white leading-tight">
                        Resultados que <br /><span className="gold-text-gradient italic">Respaldan la Estrategia</span>
                    </h2>
                </div>

                <LogoSeparator />

                <div className="max-w-7xl mx-auto px-6 md:px-16">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {testimonials.map((t, idx) => (
                                <CarouselItem key={idx} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className="bg-secondary/20 border-primary/10 rounded-none h-full flex flex-col hover:border-primary/40 transition-all duration-500 overflow-hidden group">
                                            <CardContent className="p-10 flex flex-col h-full bg-gradient-to-br from-white/[0.02] to-transparent">
                                                <div className="mb-8">
                                                    <QuoteIcon className="h-6 w-6 text-primary/30 group-hover:text-primary/60 transition-colors" />
                                                </div>

                                                <div className="mb-6">
                                                    <span className="text-primary font-bold text-[10px] uppercase tracking-[0.4em] block border-b border-primary/20 pb-2 w-fit">
                                                        {t.context}
                                                    </span>
                                                </div>

                                                <div className="grow">
                                                    <p className="text-slate-200 text-base md:text-[17px] font-light leading-relaxed mb-10">
                                                        "{t.quote}"
                                                    </p>
                                                </div>

                                                <div className="pt-8 border-t border-white/10 mt-auto">
                                                    <p className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-3">
                                                        {t.author}
                                                    </p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-[1px] w-6 bg-primary/40"></div>
                                                        <p className="text-primary font-bold text-[9px] uppercase tracking-[0.15em] italic">
                                                            {t.insight}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden xl:flex -left-16 border-primary/20 text-primary hover:bg-primary/10 bg-transparent rounded-none h-12 w-12" />
                        <CarouselNext className="hidden xl:flex -right-16 border-primary/20 text-primary hover:bg-primary/10 bg-transparent rounded-none h-12 w-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
