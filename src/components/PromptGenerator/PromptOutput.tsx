import React, { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Copy, CheckCircle, ClipboardEdit } from "lucide-react";
import { motion } from "framer-motion";

interface PromptOutputProps {
  generatedPrompt?: string;
  isLoading?: boolean;
}

const PromptOutput = ({
  generatedPrompt,
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
        setTimeout(() => {
          setCopied(false);
        }, 2000);
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
    <div className="sticky top-20">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative w-full h-full bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-md hover:shadow-lg flex flex-col border border-border dark:border-gray-700 transition-all duration-300"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold text-[#222] dark:text-white font-inter flex items-center gap-2">
            <ClipboardEdit size={22} className="text-brand" />
            Your Optimized Prompt
          </h2>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleCopyToClipboard}
            className="flex items-center gap-2 rounded-full bg-brand text-white hover:bg-brand/90 transition-all duration-300 px-5 py-2 text-base font-inter shadow-md group relative overflow-hidden disabled:opacity-50"
            disabled={!generatedPrompt || isLoading}
          >
            {copied ? (
              <CheckCircle size={18} className="group-hover:animate-pulse" />
            ) : (
              <Copy size={18} className="group-hover:animate-pulse" />
            )}
            <span>{copied ? "Copied!" : "Copy"}</span>
            <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </div>

        <div className="min-h-[200px] max-h-[400px] rounded-lg p-6 overflow-y-auto border border-border dark:border-gray-700 shadow-md bg-backgroundSection dark:bg-[#121212]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-secondary/60 font-inter">
                Generating prompt...
              </div>
            </div>
          ) : generatedPrompt ? (
            <motion.div
              key={generatedPrompt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-secondary dark:text-gray-200 whitespace-pre-wrap font-inter leading-relaxed"
            >
              {generatedPrompt}
            </motion.div>
          ) : (
            <p className="text-secondary/60 italic text-center font-inter">
              Your generated prompt will appear here
            </p>
          )}
        </div>

        <div className="mt-5 text-sm text-muted-foreground dark:text-gray-400 font-inter">
          <p>
            Use this prompt to generate engaging product listings that boost visibility and attract buyers.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PromptOutput;
