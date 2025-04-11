import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const HeroSection = ({
  title = "AI Prompt Generator to Boost Product Visibility & Sales",
  subtitle = "Boost product visibility, attract more buyers, and dominate creative marketplaces with smarter, AI-crafted prompts.",
  ctaText = "Start Building",
  onCtaClick,
}: HeroSectionProps) => {
  return (
    <div className="relative w-full bg-gray-100 dark:bg-[#1E1E1E] py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white mb-12 font-inter"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg md:text-xl text-secondary dark:text-gray-300 mb-12 max-w-3xl mx-auto font-inter leading-relaxed"
        >
          {subtitle}
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
            }}
            whileTap={{
              scale: 0.95,
              rotate: -1,
            }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 font-inter flex items-center justify-center mx-auto group relative overflow-hidden"
            onClick={onCtaClick ? onCtaClick : () => (window.location.href = '/prompt-builder')}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/70 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full blur-sm z-[-1]" />
            <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
              {ctaText}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
