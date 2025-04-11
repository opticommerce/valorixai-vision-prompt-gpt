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
          <div className="flex justify-center mb-6 mt-4">
            <BookOpen className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-8 text-center">
            How to Use the Prompt Builder
          </h1>

          <div className="space-y-10 text-gray-800 dark:text-gray-200 text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                Step 1: Add Basic Product Info
              </h2>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><strong>Product Name:</strong> e.g., “Minimalist Wall Calendar 2025”</li>
                <li><strong>Product Type:</strong> Choose <em>physical</em> or <em>digital</em>. This changes the structure of the prompt.</li>
                <li><strong>Category:</strong> Pick the closest match. If unsure, choose “Other” and type your own.</li>
                <li><strong>Writing Style / Tone:</strong> Decide if the AI should write in a <em>professional</em>, <em>fun</em>, <em>poetic</em>, or <em>minimal</em> tone.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                Step 2: Choose Your Experience Level
              </h2>
              <p className="mt-2">
                Select how experienced you are with writing or product marketing. This adjusts the complexity and style of the prompt.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li><strong>Beginner:</strong> Simple language, lots of guidance.</li>
                <li><strong>Intermediate:</strong> Balanced — includes structure and SEO tips.</li>
                <li><strong>Expert:</strong> Professional-level structure, advanced formatting and strategy.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Step 3: Select Prompt Sections
              </h2>
              <p className="mt-2">
                Use the colored pills to turn sections on or off. You can customize your prompt based on what matters most.
              </p>
              <ul className="list-disc list-inside space-y-1 mt-1">
                <li><strong>Storytelling:</strong> Adds emotional context, customer pain points, and brand inspiration.</li>
                <li><strong>Optional Enhancements:</strong> Includes occasion, materials, and advanced SEO fields.</li>
                <li><strong>Add-ons for Extra Power:</strong> Enables advanced modules like Visual Description or Social Captions.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <PenLine className="w-5 h-5 text-primary" />
                Step 4: Fill In the Fields
              </h2>
              <p className="mt-2">
                Fill in all the visible fields — they appear depending on what sections you activated.
              </p>
              <p className="mt-2">
                New fields like <strong>Target Audience</strong> and <strong>Giftable</strong> help tailor the prompt even more. Define who the product is for, or mark it as suitable for gifting — these cues help the AI write persuasive copy that matches real buyer intent.
              </p>
              <p className="italic text-sm text-muted-foreground">
                Example: Under “Inspiration”, write something like “Inspired by vintage French botanical prints and nature walks.”
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Rocket className="w-5 h-5 text-primary" />
                Step 5: Generate Your Prompt
              </h2>
              <p className="mt-2">
                Click the green “Generate Prompt” button. The tool will format everything into a clean, professional AI prompt ready to copy.
              </p>
              <p className="mt-1">
                Paste it into ChatGPT, Claude, Gemini, or any other AI assistant you use.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <motion.a
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
              }}
              whileTap={{
                scale: 0.95,
                rotate: -1,
              }}
              href="/prompt-builder"
              className="inline-block px-6 py-3 bg-primary text-white rounded-full text-base font-medium shadow-md transition-all duration-300 font-inter mx-auto group relative overflow-hidden"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                Start Using the Tool
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorials;