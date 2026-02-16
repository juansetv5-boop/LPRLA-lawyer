
'use client';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldCheck, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  whatsapp: z.string().min(10, "Ingrese un número válido"),
  caseType: z.string().min(5, "Breve descripción de su situación"),
});

export const LeadForm = () => {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      caseType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!firestore) return;
    setIsSubmitting(true);

    try {
      await addDoc(collection(firestore, 'leads'), {
        ...values,
        status: 'new',
        createdAt: serverTimestamp(),
      });

      toast({
        title: "ABOGADO NOTIFICADO - PRIORIDAD ALTA",
        description: "Su caso ha sido ingresado al sistema de respuesta inmediata. Le contactaremos en breve.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de Conexión",
        description: "No se pudo enviar la solicitud. Por favor contacte al +57 300 000 0000",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-black border-t border-primary/10" id="contacto">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-bold font-headline mb-8 text-white">
              Si Ya Hay Investigación, <br />
              <span className="text-primary italic">El Tiempo Corre</span>
            </h2>
            <p className="text-slate-400 mb-12 text-lg font-light leading-relaxed">
              No permita que la incertidumbre dicte su futuro legal. Nuestra mesa de control está operativa para casos de alta complejidad.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <Clock className="h-6 w-6" />
                <span className="font-bold tracking-widest text-xs uppercase">Respuesta en menos de 60 minutos</span>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-xs uppercase tracking-widest">Confidencialidad Absoluta</span>
              </div>
            </div>
          </div>

          <div className="p-10 bg-secondary/50 border border-primary/20 relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest text-primary font-bold">Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Escriba su nombre" {...field} className="bg-black/50 border-white/10 rounded-none h-14 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest text-primary font-bold">WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="+57 3..." {...field} className="bg-black/50 border-white/10 rounded-none h-14 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="caseType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[10px] uppercase tracking-widest text-primary font-bold">Situación Legal</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ej: Citación de Fiscalía, Proceso Disciplinario..." {...field} className="bg-black/50 border-white/10 rounded-none min-h-[100px] focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isSubmitting} className="w-full gold-metallic-gradient text-black font-bold h-16 rounded-none text-xs uppercase tracking-[0.3em]">
                  {isSubmitting ? "Notificando..." : "Desplegar Defensa Técnica"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
