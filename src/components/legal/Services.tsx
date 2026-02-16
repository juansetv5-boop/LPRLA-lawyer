import React from 'react';
import { Shield, Landmark, Scale } from 'lucide-react';

const services = [
  {
    title: "Justicia Penal",
    description: "Estrategia técnica y argumentativa basada en el rigor dogmático penal más avanzado.",
    icon: <Scale className="text-primary h-12 w-12" />,
    image: "https://picsum.photos/seed/crime/600/800"
  },
  {
    title: "Derecho Disciplinario",
    description: "Protección técnica para funcionarios de alto nivel ante órganos de control y vigilancia.",
    icon: <Landmark className="text-primary h-12 w-12" />,
    image: "https://picsum.photos/seed/admin/600/800"
  },
  {
    title: "Responsabilidad Fiscal",
    description: "Defensa patrimonial frente a procesos coactivos y hallazgos de entes territoriales.",
    icon: <Shield className="text-primary h-12 w-12" />,
    image: "https://picsum.photos/seed/fiscal/600/800"
  }
];

export const Services = () => {
  return (
    <section className="py-48 bg-background relative overflow-hidden" id="defensa">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none ancient-texture"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.6em] mb-4">Especialidad de Élite</span>
          <h2 className="text-4xl md:text-5xl mb-8 font-bold font-headline">Áreas de Práctica</h2>
          <div className="h-px w-32 gold-foil-gradient"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="relative group overflow-hidden gold-border-subtle bg-card aspect-[4/5] flex flex-col justify-end p-12 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-30 transition-opacity duration-700 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
              <div className="relative z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl mb-4 gold-text-gradient font-headline font-bold">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
