'use server';
/**
 * @fileOverview An AI-powered chatbot flow that answers common legal questions.
 *
 * - interactiveLegalFAQChatbot - A function that handles answering legal questions.
 * - InteractiveLegalFAQChatbotInput - The input type for the interactiveLegalFAQChatbot function.
 * - InteractiveLegalFAQChatbotOutput - The return type for the interactiveLegalFAQChatbot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const InteractiveLegalFAQChatbotInputSchema = z.object({
  question: z.string().describe('The legal question from the client.'),
});
export type InteractiveLegalFAQChatbotInput = z.infer<typeof InteractiveLegalFAQChatbotInputSchema>;

const InteractiveLegalFAQChatbotOutputSchema = z.object({
  answer: z
    .string()
    .describe(
      'The chatbot\'s general legal information answer. Must include a disclaimer not to treat the answer as legal advice.'
    ),
});
export type InteractiveLegalFAQChatbotOutput = z.infer<typeof InteractiveLegalFAQChatbotOutputSchema>;

export async function interactiveLegalFAQChatbot(
  input: InteractiveLegalFAQChatbotInput
): Promise<InteractiveLegalFAQChatbotOutput> {
  return interactiveLegalFAQChatbotFlow(input);
}

const interactiveLegalFAQChatbotPrompt = ai.definePrompt({
  name: 'interactiveLegalFAQChatbotPrompt',
  input: { schema: InteractiveLegalFAQChatbotInputSchema },
  output: { schema: InteractiveLegalFAQChatbotOutputSchema },
  prompt: `You are an AI legal assistant designed to provide general information about legal topics. Your goal is to answer common legal questions based on publicly available knowledge.

IMPORTANT: You must not provide specific legal advice, legal interpretations, or recommendations regarding individual cases. Always advise the user to consult with a qualified legal professional for personalized advice.

Answer the following question concisely and informatively. After providing the answer, include a disclaimer stating that this information is for general knowledge only and not legal advice, and that they should consult a legal professional for specific guidance.

Question: {{{question}}}`,
});

const interactiveLegalFAQChatbotFlow = ai.defineFlow(
  {
    name: 'interactiveLegalFAQChatbotFlow',
    inputSchema: InteractiveLegalFAQChatbotInputSchema,
    outputSchema: InteractiveLegalFAQChatbotOutputSchema,
  },
  async (input) => {
    const { output } = await interactiveLegalFAQChatbotPrompt(input);
    return output!;
  }
);
