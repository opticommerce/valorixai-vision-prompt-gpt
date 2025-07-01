import React, { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { Copy, CheckCircle, ClipboardEdit, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface PromptOutputProps {
  prompt: string;
  isLoading?: boolean;
  handleRandomPromptClick?: () => void;
  promptCount: number;
  MAX_DEMO_PROMPTS: number;
  isPro: boolean;
  loadingUserData?: boolean;
  showLimitReached?: () => void;
}

const PromptOutput = ({
  prompt,
  isLoading = false,
  handleRandomPromptClick,
  promptCount,
  MAX_DEMO_PROMPTS,
  isPro,
  loadingUserData = false,
  showLimitReached,
}: PromptOutputProps) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    if (!prompt) return;

    navigator.clipboard
      .writeText(prompt)
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
    <div className="md:sticky md:top-24 md:self-start">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="relative w-full h-full bg-white dark:bg-[#1E1E1E] p-4 sm:p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg flex flex-col border border-border dark:border-gray-700 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-5 gap-3 sm:gap-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#222] dark:text-white flex items-center gap-2">
              <ClipboardEdit size={22} className="text-brand" />
              Your Optimized Text Input
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleCopyToClipboard}
            className="flex items-center gap-2 rounded-full bg-brand text-white hover:bg-brand/90 transition-all duration-300 px-4 sm:px-5 py-2 text-base shadow-md group relative overflow-hidden disabled:opacity-50"
            disabled={!prompt || isLoading}
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

        <div className="min-h-[160px] sm:min-h-[200px] max-h-[300px] sm:max-h-[400px] rounded-lg p-3 sm:p-6 overflow-y-auto border border-border dark:border-gray-700 shadow-md bg-backgroundSection dark:bg-[#121212]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-pulse text-secondary/60 font-inter">
                Generating prompt...
              </div>
            </div>
          ) : prompt ? (
            <motion.div
              key={prompt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-secondary dark:text-gray-200 whitespace-pre-wrap font-inter leading-relaxed"
            >
              {prompt}
            </motion.div>
          ) : (
            <p className="text-secondary/60 italic text-center font-inter">
              Your structured product text will appear here
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
          <div className="text-sm text-gray-700 dark:text-gray-200 font-inter font-medium rounded-full px-4 py-2 bg-primary/10 w-fit">
            {isPro ? "Unlimited prompts" : `${Math.max(0, MAX_DEMO_PROMPTS - promptCount)} prompts left`}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://your-gumroad-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary hover:bg-primary/90 text-white font-inter font-medium px-4 py-2 text-sm transition-all duration-300 shadow-md"
            >
              <CheckCircle size={16} className="text-white" />
              Unlock Unlimited
            </a>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (!isPro && promptCount >= MAX_DEMO_PROMPTS) {
                  setTimeout(() => showLimitReached?.(), 0);
                  return;
                }
                handleRandomPromptClick?.();
              }}
              className="flex items-center gap-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-4 py-2 text-sm font-inter font-medium shadow-md group relative overflow-hidden"
              type="button"
              disabled={loadingUserData}
            >
              <Sparkles size={18} className="group-hover:animate-pulse" />
              <span>Random Prompt</span>
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        </div>

        <div className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground dark:text-gray-400">
          <p>
            Use this optimized text across your preferred tools to craft high-quality product listings.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PromptOutput;
