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
        <h1 className="text-3xl font-bold mb-6 text-center">What is Vision Prompt GPT?</h1>

        <p className="text-lg mb-8 text-center">
          Vision Prompt GPT is your creative companion for generating <strong>high-quality, cinematic image prompts</strong> for tools like ChatGPT with vision. Whether you start from scratch or from an image, it helps you craft stunning, AI-optimized visual instructions.
        </p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Why Use Vision Prompt GPT?
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Say goodbye to generic AI prompts and guesswork</li>
              <li>Generate rich, structured image prompts in seconds</li>
              <li>Explore both random and image-based generation modes</li>
              <li>One-time purchase — no API keys or subscriptions needed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <ListChecks className="w-5 h-5 text-primary" />
              What It Can Do
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Guide you through a powerful, modular prompt builder</li>
              <li>Help you define visual style, mood, lighting, and composition</li>
              <li>Let you attach reference images to inspire new generations</li>
              <li>Give you full creative control — or surprise you with a random idea</li>
              <li>Offer multiple levels of customization and refinement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Built for Creators Like You
            </h2>
            <p>
              Whether you're an artist, designer, marketer, or visionary — Vision Prompt GPT helps you <strong>unlock your imagination</strong> and craft powerful image prompts with clarity and purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-1">
              <li>Choose to start from a blank prompt or an attached image</li>
              <li>Fill in visual attributes: subject, style, mood, lighting, and more</li>
              <li>Click “Generate Prompt” and copy your result</li>
              <li>Paste into ChatGPT or any vision-enabled AI to create stunning images</li>
            </ol>
          </section>
        </div>

        <p className="text-sm text-muted-foreground italic mt-10 mb-6">
          *Vision Prompt GPT is an independent tool and is not affiliated with OpenAI, ChatGPT, or other third-party AI platforms. Images shown are for illustrative purposes only.
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
