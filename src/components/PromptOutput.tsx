import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy, CheckCircle } from "lucide-react";

interface PromptOutputProps {
  generatedPrompt?: string;
  isLoading?: boolean;
}

const PromptOutput = ({
  generatedPrompt = "This is a sample generated prompt for your Etsy listing. It includes keywords for SEO optimization, a compelling product description, and highlights the unique features of your handmade item. Perfect for attracting more customers to your shop!",
  isLoading = false,
}: PromptOutputProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    if (!generatedPrompt) return;

    navigator.clipboard
      .writeText(generatedPrompt)
      .then(() => {
        setCopied(true);
        toast({
          title: "Copied to clipboard",
          description: "The prompt has been copied to your clipboard.",
        });

        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        toast({
          variant: "destructive",
          title: "Failed to copy",
          description: "There was an error copying to clipboard.",
        });
      });
  };

  return (
    <div className="w-full h-full bg-white p-8 rounded-xl shadow-soft flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold text-secondary font-inter flex items-center gap-2">
          <span className="text-etsy-brightOrange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
              <path d="M9 9h1" />
              <path d="M9 13h6" />
              <path d="M9 17h6" />
            </svg>
          </span>
          Generated Prompt
        </h2>
        <Button
          onClick={handleCopyToClipboard}
          variant="outline"
          className="flex items-center gap-2 rounded-full border-etsy-orange text-etsy-orange hover:bg-etsy-orange/10 hover:text-etsy-orange transition-all duration-300 px-5 py-2 text-base"
          disabled={!generatedPrompt || isLoading}
        >
          {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>

      <div className="flex-grow bg-[#FAF3E0] rounded-lg p-5 overflow-auto border border-etsy-beige shadow-inner">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-pulse text-secondary/60 font-inter">
              Generating prompt...
            </div>
          </div>
        ) : generatedPrompt ? (
          <p className="text-secondary whitespace-pre-wrap font-inter leading-relaxed">
            {generatedPrompt}
          </p>
        ) : (
          <p className="text-secondary/60 italic text-center font-inter">
            Your generated prompt will appear here
          </p>
        )}
      </div>

      <div className="mt-5 text-sm text-secondary/70 font-inter">
        <p>
          Use this prompt in your Etsy listing description to improve visibility
          and sales.
        </p>
      </div>
    </div>
  );
};

export default PromptOutput;
