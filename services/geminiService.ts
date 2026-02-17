
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTourSummary = async (tourTitle: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a compelling, poetic 3-sentence travel summary for a tour named "${tourTitle}". The summary should be in both English and Thai. Format as JSON with "en" and "th" keys.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            en: { type: Type.STRING },
            th: { type: Type.STRING }
          },
          required: ["en", "th"]
        }
      }
    });
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const chatWithAssistant = async (message: string, tourTitle: string) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a helpful travel assistant for "Thai Travel Catalog". You are currently helping a customer with the "${tourTitle}" tour. Be polite, enthusiastic, and provide accurate travel advice. Keep answers concise.`
      }
    });
    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later!";
  }
};
