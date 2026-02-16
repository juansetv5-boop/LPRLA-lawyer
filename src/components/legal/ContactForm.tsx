"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  subject: z.string().min(5, "El asunto debe ser más descriptivo"),
  message: z.string().min(10, "Por favor, detalle su caso"),
});

export const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    toast({
      title: "Solicitud Recibida",
      description: "Un especialista se pondrá en contacto con usted en menos de 24 horas.",
    });
    form.reset();
  };

  return (
    <section className="py-48 bg-background" id="contacto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">Canal de Comunicación</span>
            <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8">Hablemos de su <br/><span className="italic text-white/80">Estrategia</span></h2>
            <p className="text-foreground/60 font-light leading-relaxed mb-12 max-w-md">
              Complete el formulario para una evaluación técnica preliminar. Manejamos su información bajo los más estrictos estándares de confidencialidad profesional.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-px w-12 gold-foil-gradient"></div>
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-white">Urgencias 24/7</span>
              </div>
              <p className="text-2xl font-headline italic text-primary">+57 300 000 0000</p>
            </div>
          </div>

          <div className="gold-border-subtle p-8 md:p-12 bg-card/50 backdrop-blur-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest text-foreground/60">Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Escriba su nombre" {...field} className="bg-transparent border-b border-x-0 border-t-0 border-primary/20 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-all px-0" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-[10px] tracking-widest text-foreground/60">Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="usuario@correo.com" {...field} className="bg-transparent border-b border-x-0 border-t-0 border-primary/20 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-all px-0" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] tracking-widest text-foreground/60">Asunto Técnico</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Defensa Penal Especializada" {...field} className="bg-transparent border-b border-x-0 border-t-0 border-primary/20 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-all px-0" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] tracking-widest text-foreground/60">Detalles del Caso</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Breve descripción de su situación..." {...field} className="bg-transparent border-b border-x-0 border-t-0 border-primary/20 rounded-none focus-visible:ring-0 focus-visible:border-primary transition-all px-0 min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full gold-foil-gradient text-background rounded-none border-none py-8 font-bold text-xs uppercase tracking-[0.4em] shadow-xl shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all">
                  Enviar Requerimiento
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
