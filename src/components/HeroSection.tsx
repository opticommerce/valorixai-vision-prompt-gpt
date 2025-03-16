import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Create SEO-Optimized Etsy Listings in Seconds",
  subtitle = "Our AI-powered tool helps Etsy sellers generate compelling product descriptions that rank higher and convert better.",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="w-full bg-etsy-beige py-24 px-4 md:px-8 lg:px-16 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 font-inter">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-secondary/80 mb-10 max-w-3xl mx-auto font-inter leading-relaxed">
          {subtitle}
        </p>
        <Button
          size="lg"
          className="bg-etsy-orange hover:bg-etsy-brightOrange text-white px-10 py-6 rounded-full text-lg font-medium shadow-medium transition-all duration-300 font-inter"
          onClick={onCtaClick}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
