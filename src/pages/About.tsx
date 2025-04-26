import React from "react";
import { Lightbulb, ListChecks, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-[#1A1A1A] px-6 py-12 pt-32 transition-colors duration-300">
      <div className="bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 max-w-4xl mx-auto transition-colors duration-300">
        <div className="flex justify-center mb-6">
          <Lightbulb className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">What is ValorixAI Listing Assistant?</h1>

        <p className="text-lg mb-8 text-center">
          ValorixAI Listing Assistant is your AI-powered assistant for building <strong>high-converting, SEO-ready product prompts</strong> — designed especially for platforms like Etsy, Shopify, and Creative Market.
        </p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Why You Need It
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No more blank page stress or boring templates</li>
              <li>Perfectly structured prompts tailored for AI tools like ChatGPT</li>
              <li>Improves discoverability with smart SEO and long-tail keywords</li>
              <li>One-time purchase — no subscriptions, no API keys</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <ListChecks className="w-5 h-5 text-primary" />
              What It Can Do
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Guide you step-by-step with intuitive sections</li>
              <li>Help you define tone, style, features, and inspiration</li>
              <li>Enable advanced SEO and storytelling options</li>
              <li>Adapt to your skill level: Beginner, Intermediate, or Expert</li>
              <li>Refine your prompt by choosing the right Target Audience</li>
              <li>Highlight Giftable features to boost appeal during holidays or special occasions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Built for Creators Like You
            </h2>
            <p>
              Whether you're selling digital art, printable planners, handmade jewelry, or Canva templates —
              this tool helps you <strong>describe, differentiate, and sell</strong> your products faster.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Fill in product details (name, category, tone, etc.)</li>
              <li>Select optional prompt modules and writing level</li>
              <li>Click “Generate Prompt” and copy your output</li>
              <li>Paste it into ChatGPT or any AI assistant</li>
            </ol>
          </section>
        </div>

        <p className="text-sm text-muted-foreground italic mt-10 mb-6">
          *ValorixAI Listing Assistant is not affiliated with Etsy, Inc. Brand names are used for illustrative purposes only.
        </p>

        <div className="text-center mt-8">
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
  );
}

export default About;
