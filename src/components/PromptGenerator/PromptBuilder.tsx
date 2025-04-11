import React, { useState } from "react";
import { generatePrompt } from "../../utils/generatePrompt";
import PromptForm from "./PromptForm";
import PromptOutput from "./PromptOutput";

interface PromptBuilderProps {
  className?: string;
}

const PromptBuilder = ({ className = "" }: PromptBuilderProps) => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGeneratePrompt = (formData: any) => {
    setIsLoading(true);

    setTimeout(() => {
      const prompt = generatePrompt({
        ...formData,
        productCategory: formData.category,
      });

      console.log("🧠 Prompt generato:", prompt); // Debug
      setGeneratedPrompt(prompt);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className={`bg-background dark:bg-[#121212] py-16 px-4 text-foreground dark:text-white ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-text dark:text-white sm:text-4xl font-inter">
            Create Your Custom AI Prompt
          </h2>
          <p className="mt-4 text-lg text-secondary-text dark:text-gray-300 max-w-2xl mx-auto font-inter">
            Create structured AI prompts to generate high-quality product listings effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="w-full">
            <PromptForm onGeneratePrompt={handleGeneratePrompt} />
          </div>
          <div className="w-full lg:sticky lg:top-20 h-fit">
            <PromptOutput
              generatedPrompt={generatedPrompt}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;
