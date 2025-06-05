import React from "react";
import { LifeBuoy, Settings, Upload, Tag, Repeat, ShieldCheck } from "lucide-react";

const HelpCenter = () => {
  return (
    <div className="bg-background dark:bg-[#1A1A1A] min-h-screen pt-32 pb-12 transition-colors duration-300">
      <div className="bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 max-w-4xl mx-auto transition-colors duration-300">
        <div className="flex justify-center mb-6 mt-2">
          <LifeBuoy className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>

        <div className="space-y-10 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Getting Started: How does Vision Prompt GPT work?
            </h2>
            <p>
              Vision Prompt GPT lets you create visual prompts for AI image generation. Choose between <strong>"Prompt from Text"</strong> for custom-made prompts, or <strong>"Prompt from Image"</strong> to analyze an uploaded image and transform it into a detailed prompt. Paste the generated prompt into ChatGPT to create powerful images — no prompt-engineering skills needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              How do I use an image to generate a prompt?
            </h2>
            <p>
              Upload your image into ChatGPT and then activate the <strong>"Prompt from Image"</strong> mode in Vision Prompt GPT. The tool will analyze the visual features and generate a stylistically coherent and creative prompt you can reuse or customize.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" />
              Can I use these prompts in commercial projects?
            </h2>
            <p>
              Yes — once generated, prompts are yours to use in any commercial context: marketing visuals, personal projects, digital products, and more.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Repeat className="w-5 h-5 text-primary" />
              Can I reuse or modify prompts?
            </h2>
            <p>
              Absolutely. Prompts are flexible by design. You can regenerate, edit, or remix them as needed to fit your evolving creative ideas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Do I need an account or subscription?
            </h2>
            <p>
              No login is required. Vision Prompt GPT is a one-time purchase that gives you private access. No ongoing fees, no account creation needed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <LifeBuoy className="w-5 h-5 text-primary" />
              Still need help?
            </h2>
            <p>
              If you experience issues or have questions, reach out using the support contact form. We’re here to help you get the most from your visual prompts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
