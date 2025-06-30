import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import { useAuth } from "@/contexts/AuthContext";

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
  title = "Turn Imagination into Stunning Visual Prompts.",
  subtitle = "Built for creators, marketers, and visionaries — Vision Prompt GPT lets you craft cinematic, AI-optimized image prompts in seconds. No prompt engineering needed.",
  ctaText = "Start Building",
  onCtaClick,
}: HeroSectionProps) => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  const { user } = useAuth();

  useEffect(() => {
    // Wait for the title animation to finish (0.6s)
    const timer = setTimeout(() => setShowTypewriter(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Listen for class changes on <html> to detect theme switch
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    // Also listen for storage event in case theme is toggled in another tab
    const onStorage = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    window.addEventListener('storage', onStorage);
    return () => {
      observer.disconnect();
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return (
    <div className="relative w-full bg-gray-100 dark:bg-[#1E1E1E] min-h-[60vh] flex flex-col items-center justify-center py-20 md:py-28 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary dark:text-white mb-6 md:mb-10 font-inter w-full"
        >
          {title}
        </motion.h1>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="mb-10 md:mb-14 max-w-3xl w-full mx-auto min-h-[2.5em] flex items-center justify-center"
        >
          {showTypewriter ? (
            <Typewriter
              text={subtitle}
              typeSpeed={18}
              cursorColor="#70BF38"
              textStyle={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                width: '100%',
                display: 'inline-block',
                textAlign: 'center',
                color: isDark ? '#fff' : '#222',
              }}
              startDelay={0}
              hideCursorAfterText={false}
            />
          ) : (
            <span className="text-lg md:text-xl text-secondary dark:text-white font-inter leading-relaxed opacity-0 w-full inline-block text-center">{subtitle}</span>
          )}
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
              }}
              whileTap={{
                scale: 0.95,
                rotate: -1,
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 font-inter flex items-center justify-center group relative overflow-hidden"
              onClick={() => {
                if (user) {
                  window.location.href = "/prompt";
                } else {
                  window.location.href = "/login";
                }
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/70 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full blur-sm z-[-1]" />
              <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                {ctaText}
              </span>
            </motion.button>
            <a
              href="/examples"
              className="w-full sm:w-auto"
            >
              <button
                className="w-full sm:w-auto border border-primary text-primary dark:text-primary bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20 px-8 py-4 rounded-full text-lg font-semibold shadow transition-all duration-300 font-inter flex items-center justify-center"
                type="button"
              >
                View Examples
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
