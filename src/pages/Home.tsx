import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { Search, Clock, TrendingUp, HelpCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navbar */}
      <Navbar
        logoText="ValorixAI Listing Assistant"
        ctaText="Start Building"
        ctaLink="/prompt-builder"
      />

      {/* Main Content */}
      <main className="pt-20 relative bg-[#F5F5F5] dark:bg-[#121212] pb-1">
        {/* Hero Section */}
        <HeroSection
          title="Boost Your Listings and Content with Smart Writing"
          subtitle="Boost product visibility, attract more buyers, and dominate marketplaces with smarter, structured text inputs."
          ctaText="Start Building"
          onCtaClick={() => window.location.href='/prompt-builder'}
        />
        
        {/* Features Section */}
        <section className="py-20 px-4 bg-backgroundAlt dark:bg-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 text-primaryText dark:text-white font-inter">
              What Makes ValorixAI Listing Assistant So Powerful?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                  <Search className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                  Smarter AI Prompts for Better Visibility
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  Craft keyword-rich prompts that guide AI tools to generate persuasive product descriptions for any type of shop.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                  Save Hours of Work
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  No more blank pages! Generate ready-to-use, personalized AI prompts in seconds — all based on your product details.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <div className="w-14 h-14 bg-primary/15 rounded-full flex items-center justify-center mb-5">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white">
                  Boost Conversions & Sales
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  Help your products stand out with prompts that drive clicks, inspire trust, and convert browsers into buyers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-backgroundAlt dark:bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 text-primaryText dark:text-white font-inter">
              FAQ
            </h2>

            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                  <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                  <span>How does the ValorixAI Listing Assistant work?</span>
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  The Listing Assistant creates optimized AI prompts to help you generate high-quality product descriptions using AI tools like ChatGPT, Claude, Gemini, and others. Simply input key details such as category, material, and style, and the tool will generate a structured prompt tailored to your needs. Each prompt is dynamically crafted based on your input, ensuring originality and variation every time, allowing you to refine and customize descriptions as needed.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                  <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                  <span>How can I get the best results with this tool?</span>
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  To maximize effectiveness, be as specific as possible when entering details. Choose the correct product category, highlight unique selling points, and experiment with different tones. This will ensure that when you use the prompt in an AI assistant, you receive highly relevant and engaging product descriptions.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                  <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                  <span>Can I edit the generated prompts?</span>
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  Absolutely! Each generated prompt is fully editable, allowing you to adjust the wording, refine the focus, or add specific keywords before using it in an AI assistant to create the final product description.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                  <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                  <span>Are there any limits on how many prompts I can generate?</span>
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  No, you can generate as many prompts as you like! Unlike other tools that have usage limits or require monthly subscriptions, ValorixAI Listing Assistant allows unlimited prompt creation with a single purchase.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-soft dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] dark:hover:shadow-[0_0_12px_rgba(132,204,22,0.35)] hover:scale-105 transform transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-semibold mb-3 text-primaryText dark:text-white flex items-center gap-2">
                  <HelpCircle className="text-primary w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]" />
                  <span>Will the generated prompts always be relevant?</span>
                </h3>
                <p className="text-secondaryText dark:text-gray-400 leading-relaxed">
                  Yes! The ValorixAI Listing Assistant is designed to generate high-quality prompts based on the details you provide. Each prompt is structured to ensure relevance and clarity, helping AI assistants create the most compelling product descriptions for your audience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
