import React, { useState } from "react";
import PromptForm, { PromptFormData } from "./PromptForm";
import PromptOutput from "./PromptOutput";

interface PromptBuilderProps {
  className?: string;
}

const PromptBuilder = ({ className = "" }: PromptBuilderProps) => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGeneratePrompt = (formData: PromptFormData) => {
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Generate a sample prompt based on the form data
      const prompt = `**${formData.productName}** - Perfect for your Etsy Shop!

🌟 **Product Description:**
Beautiful ${formData.productName.toLowerCase()} crafted with ${formData.materials}. This ${formData.category} item is perfect for anyone looking to add a unique touch to their collection.

✨ **Key Features:**
- Handmade with care using premium ${formData.materials}
- One-of-a-kind design that stands out
- Perfect gift for special occasions
- Sustainable and eco-friendly materials

🛍️ **Why Customers Love It:**
Customers appreciate the attention to detail and quality craftsmanship that goes into each ${formData.productName.toLowerCase()}. The ${formData.tone} style appeals to discerning buyers looking for authentic handmade items.

📦 **Shipping & Care:**
Ships within 1-3 business days. Carefully packaged to ensure safe delivery. Easy care instructions included.`;

      setGeneratedPrompt(prompt);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className={`bg-etsy-beige py-16 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl font-inter">
            Etsy Prompt Builder
          </h2>
          <p className="mt-4 text-lg text-secondary/80 max-w-2xl mx-auto font-inter">
            Create SEO-optimized product descriptions for your Etsy listings in
            seconds
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 justify-center items-stretch">
          <div className="w-full lg:w-1/2 flex justify-center">
            <PromptForm onGeneratePrompt={handleGeneratePrompt} />
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
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
