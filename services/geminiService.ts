
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client exclusively with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askLegalAssistant = async (prompt: string): Promise<string> => {
  try {
    // Call generateContent directly on ai.models with the appropriate model for complex tasks.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are an AI assistant for Lawpedia, a nonprofit legal education platform in Hong Kong. 
        Your goal is to explain legal concepts in simple, accessible English (or Chinese if asked) to students and the general public.
        Focus on Hong Kong's legal system (Common Law, Basic Law).
        CRITICAL: Always start with a disclaimer that you are an AI and not a lawyer, and your responses are for educational purposes only, not legal advice.
        Keep answers concise, structured with bullet points where appropriate, and encouraging.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Extract the generated text from the response object's .text property.
    return response.text || "I'm sorry, I couldn't generate a response. Please try asking in a different way.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Could not connect to the legal assistant. Please check your connection or try again later.";
  }
};
