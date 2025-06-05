import React from "react";
import HeroSection from "../components/HeroSection";
import { Search, Clock, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const faqData = [
  {
    question: "What is Vision Prompt GPT?",
    answer:
      "Vision Prompt GPT is a tool designed to help you generate stunning AI-ready image prompts effortlessly. Whether you're starting from a blank idea or using an existing image, it guides you step-by-step to craft prompts optimized for ChatGPT's image generation capabilities.",
  },
  {
    question: "How do I use an image to generate a prompt?",
    answer:
      "You don't upload the image to this tool. Instead, upload or paste your image directly into ChatGPT, then use the 'Prompt from Image' mode in Vision Prompt GPT. It will help you describe the image's style, mood, and context — generating a refined prompt ready to transform that image with AI.",
  },
  {
    question: "Can I customize the generated prompts?",
    answer:
      "Absolutely. Every prompt generated can be edited and refined. You can tweak the wording, add or remove elements, or enhance specific parts of the prompt to better suit your vision.",
  },
  {
    question: "Are there limits to how many prompts I can generate?",
    answer:
      "No limits! Vision Prompt GPT offers unlimited prompt creation. Unlike subscription-based tools, you can use it freely without restrictions after a one-time purchase.",
  },
  {
    question: "Who is Vision Prompt GPT for?",
    answer:
      "It's built for creators, marketers, designers, and visionaries who want full control over the visual narrative. Whether you're a beginner or an expert, the tool helps bring your imagination to life with AI-generated visuals.",
  },
];

const Home = () => {
  // For each feature card, use a separate inView hook for staggered animation
  const [feature1Ref, feature1InView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [feature2Ref, feature2InView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [feature3Ref, feature3InView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        {/* Main Content */}
        <main className="pt-24 relative bg-[#F5F5F5] dark:bg-[#121212] pb-1">
          {/* Hero Section */}
          <HeroSection
            title="Turn Imagination into Stunning Visual Prompts."
            ctaText="Start Building"
            onCtaClick={() => window.location.href='/prompt-builder'}
          />
          {/* Features Section */}
          <section className="py-20 px-4 bg-backgroundAlt dark:bg-[#1A1A1A]">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-14 text-primaryText dark:text-white font-inter">
                What Makes Vision Prompt GPT So Powerful?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Feature 1 */}
                <motion.div
                  ref={feature1Ref}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={feature1InView ? "visible" : "hidden"}
                  className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  <Parallax translateY={[-20, 20]}>
                    <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                      <Search className="text-primary" size={24} />
                    </div>
                  </Parallax>
                  <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                    From Idea to Prompt in Seconds
                  </h3>
                  <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                    Generate detailed, high-impact image prompts from scratch. Simply describe your concept and let Vision Prompt GPT shape it into an AI-ready visual cue.
                  </p>
                </motion.div>
                {/* Feature 2 */}
                <motion.div
                  ref={feature2Ref}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={feature2InView ? "visible" : "hidden"}
                  className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  <Parallax translateY={[-20, 20]}>
                    <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                      <Clock className="text-primary" size={24} />
                    </div>
                  </Parallax>
                  <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                    Prompt from Any Image
                  </h3>
                  <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                    Generate a visual prompt by describing an image you've uploaded to ChatGPT. Perfect for transforming photos with AI while preserving their original mood, style, and essence.
                  </p>
                </motion.div>
                {/* Feature 3 */}
                <motion.div
                  ref={feature3Ref}
                  variants={fadeUpVariant}
                  initial="hidden"
                  animate={feature3InView ? "visible" : "hidden"}
                  className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  <Parallax translateY={[-20, 20]}>
                    <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                      <TrendingUp className="text-primary" size={24} />
                    </div>
                  </Parallax>
                  <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                    Designed for ChatGPT Image Tools
                  </h3>
                  <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                    Each prompt is crafted to work seamlessly with GPT-powered image generation, unlocking cinematic and stylistic visuals without manual tweaking.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
          {/* FAQ Section */}
          <section className="py-20 px-4 bg-backgroundAlt dark:bg-[#1A1A1A]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-14 text-primaryText dark:text-white font-inter">
                Frequently Asked Questions about Vision Prompt GPT
              </h2>
              <div className="space-y-8">
                {faqData.map((faq, i) => {
                  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
                  return (
                    <motion.div
                      key={i}
                      ref={ref}
                      variants={fadeUpVariant}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                        <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </ParallaxProvider>
  );
};

export default Home;
