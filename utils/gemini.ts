import axios from "axios";
import { prompt } from "../utils/prompt";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const cleanJsonBlock = (text: string): string => {
  const match = text.match(/\{[\s\S]*?\}/);
  return match ? match[0] : "";
};

export const extractData = async (rawText: string) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const body = {
    contents: [
      {
        parts: [{ text: prompt(rawText) }],
      },
    ],
  };

  try {
    const res = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const content = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const cleanJson = cleanJsonBlock(content);
    return JSON.parse(cleanJson);
  } catch (e: any) {
    console.error("Failed to parse Gemini response:", e);
    throw new Error("Smart Paste failed: " + (e.response?.data || e.message));
  }
};
