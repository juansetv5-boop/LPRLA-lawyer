"use client";

import React, { useState } from 'react';
import { interactiveLegalFAQChatbot } from '@/ai/flows/interactive-legal-faq-chatbot-flow';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Scale } from "lucide-react";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Bienvenido a la mesa de asistencia virtual de Lex Digitalis. ¿En qué tema jurídico general puedo informarle hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const result = await interactiveLegalFAQChatbot({ question: userMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Lo siento, ha ocurrido un error técnico. Por favor, intente de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-48 bg-card border-y border-primary/10" id="chatbot">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <Bot className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-headline font-bold mb-4">Asistente Virtual IA</h2>
          <p className="text-foreground/60 font-light">Resuelva dudas jurídicas generales de manera inmediata.</p>
        </div>

        <div className="bg-background gold-border-subtle overflow-hidden flex flex-col h-[500px]">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`h-10 w-10 shrink-0 flex items-center justify-center border ${msg.role === 'user' ? 'border-foreground/20' : 'border-primary/20'}`}>
                  {msg.role === 'user' ? <User className="h-5 w-5" /> : <Scale className="h-5 w-5 text-primary" />}
                </div>
                <div className={`max-w-[80%] p-4 text-sm font-light leading-relaxed ${msg.role === 'user' ? 'bg-secondary text-right' : 'bg-background border border-primary/10'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4 animate-pulse">
                <div className="h-10 w-10 bg-secondary"></div>
                <div className="h-20 w-3/4 bg-secondary"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-primary/10 flex gap-4 bg-secondary/30">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escriba su pregunta legal aquí..."
              className="bg-transparent border-primary/20 focus-visible:ring-primary rounded-none h-14"
            />
            <Button type="submit" disabled={isLoading} className="gold-foil-gradient text-background h-14 w-14 rounded-none border-none">
              <Send className="h-6 w-6" />
            </Button>
          </form>
        </div>
        <p className="mt-4 text-[10px] text-center text-foreground/40 uppercase tracking-widest">
          Asistente impulsado por inteligencia artificial. No sustituye la asesoría profesional personalizada.
        </p>
      </div>
    </section>
  );
};
