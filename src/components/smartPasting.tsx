import { Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { prompt } from "../../utils/prompt";
import { useToast } from "@/components/ui/use-toast";

interface SmartPasteButtonProps {
  onDataExtracted: (data: any) => void;
  className?: string;
}

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const cleanJsonBlock = (text: string): string => {
  const match = text.match(/\{[\s\S]*?\}/);
  return match ? match[0] : "";
};

const extractData = async (rawText: string) => {
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

export const SmartPasteButton = ({
  onDataExtracted,
  className = "",
}: SmartPasteButtonProps) => {
  const { toast } = useToast();

  const handleSmartPaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const extractedData = await extractData(clipboardText);
      console.log("Extracted Data:", extractedData);

      if (Object.keys(extractedData).length > 0) {
        onDataExtracted(extractedData);
        toast({
          title: "Smart Paste successful",
          variant: "default",
        });
      } else {
        toast({
          title: "No recognizable data found.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Smart Paste failed:", err);
      toast({
        title: "Unable to extract data from clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleSmartPaste}
      className={`flex items-center space-x-2 ${className}`}
    >
      <Wand2 className="w-4 h-4" />
      <span>Smart Paste</span>
    </Button>
  );
};
