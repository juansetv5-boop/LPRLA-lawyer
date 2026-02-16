import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const team = [
  {
    name: "Dr. Alistair Vance",
    role: "Director de Litigio Penal",
    specialty: "Casación y Defensa Técnica",
    image: "https://picsum.photos/seed/attorney1/600/600"
  },
  {
    name: "Dra. Elena Sterling",
    role: "Socia Senior - Compliance",
    specialty: "Gestión de Riesgos Corporativos",
    image: "https://picsum.photos/seed/attorney2/600/600"
  }
];

export const Attorneys = () => {
  return (
    <section className="py-48 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.6em] mb-4">Nuestro Liderazgo</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline">Juristas de Autoridad</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((lawyer, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[3/4] overflow-hidden gold-border-subtle relative">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="mt-8 text-center md:text-left">
                <h3 className="text-2xl font-bold font-headline text-white mb-2">{lawyer.name}</h3>
                <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold mb-4">{lawyer.role}</p>
                <div className="h-px w-12 bg-primary/30 mb-4 mx-auto md:mx-0"></div>
                <p className="text-foreground/60 text-sm font-light italic">{lawyer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
