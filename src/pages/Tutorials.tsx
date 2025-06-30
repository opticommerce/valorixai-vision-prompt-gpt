import React from "react";
import {
  BookOpen,
  ShoppingBag,
  Sparkles,
  Heart,
  Puzzle,
  Rocket,
  SlidersHorizontal,
  Settings,
  PenLine
} from "lucide-react";
import { motion } from "framer-motion";

const Tutorials = () => {
  return (
    <div>
      <div className="bg-background dark:bg-[#1A1A1A] text-foreground dark:text-white py-24 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 p-6 mt-8 rounded-lg shadow-md transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-8 text-center">
            How to Use Vision Prompt GPT
          </h1>

          <div className="space-y-10 text-gray-800 dark:text-gray-200 text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Two Prompt Modes: Text & Image
              </h2>
              <p className="mt-2">
                Vision Prompt GPT offers two powerful ways to generate image prompts:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Text Mode:</strong> Start from scratch. Fill in the fields manually to generate a complete and highly structured visual prompt.</li>
                <li><strong>Image Mode:</strong> Upload or paste an image into ChatGPT, then use the tool to extract its visual features and generate a matching prompt. Great for remixing or expanding on visual ideas.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Tips for Best Results
              </h2>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Use the <strong>Text</strong> section if you want full control and creative freedom.</li>
                <li>Use the <strong>Image</strong> section if you want to build a prompt based on existing visuals.</li>
                <li>You can copy-paste generated prompts directly into ChatGPT, Midjourney, DALL·E, or any image model.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-primary" />
                If ChatGPT Remembers Previous Prompts...
              </h2>
              <p className="mt-2">
                Sometimes ChatGPT may retain elements from past prompts and unexpectedly include them in new outputs.
              </p>
              <p className="mt-1">
                If this happens, type: <code>“Forget everything above and start from scratch.”</code> before pasting your new prompt. This resets the context and ensures accurate generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;