import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import PromptBuilder from "./PromptBuilder";
import { Search, Clock, TrendingUp } from "lucide-react";

const Home = () => {
  const scrollToPromptBuilder = () => {
    const promptBuilderElement = document.getElementById("prompt-builder");
    if (promptBuilderElement) {
      promptBuilderElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-etsy-beige font-inter">
      {/* Navbar */}
      <Navbar
        logoText="Etsy Prompt Builder"
        ctaText="Try Now"
        ctaLink="#prompt-builder"
      />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection
          title="Create SEO-Optimized Etsy Listings in Seconds"
          subtitle="Our AI-powered tool helps Etsy sellers generate compelling product descriptions that rank higher and convert better."
          ctaText="Build Your Prompt"
          onCtaClick={scrollToPromptBuilder}
        />
        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 text-secondary font-inter">
              Why Use Our Etsy Prompt Builder?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-etsy-orange/20 rounded-full flex items-center justify-center mb-5">
                  <Search className="text-etsy-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  SEO Optimization
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  Generate descriptions with keywords that help your products
                  rank higher in Etsy search results.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-etsy-orange/20 rounded-full flex items-center justify-center mb-5">
                  <Clock className="text-etsy-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  Time Saving
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  Create professional product descriptions in seconds instead of
                  spending hours writing them yourself.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="w-14 h-14 bg-etsy-orange/20 rounded-full flex items-center justify-center mb-5">
                  <TrendingUp className="text-etsy-orange" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  Higher Conversions
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  Compelling descriptions that highlight benefits and features
                  to convert browsers into buyers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-etsy-beige/70">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 text-secondary font-inter">
              What Etsy Sellers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-5">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah"
                    className="w-14 h-14 rounded-full mr-4 border-2 border-etsy-orange/20"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary">Sarah J.</h4>
                    <p className="text-sm text-secondary/60">
                      Jewelry Designer
                    </p>
                  </div>
                </div>
                <p className="text-secondary/80 leading-relaxed mb-5">
                  "This tool has completely transformed how I create listings.
                  My products are now ranking higher and I've seen a 30%
                  increase in sales!"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#E67E22"
                      stroke="#E67E22"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-5">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="Michael"
                    className="w-14 h-14 rounded-full mr-4 border-2 border-etsy-orange/20"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary">Michael T.</h4>
                    <p className="text-sm text-secondary/60">
                      Vintage Collector
                    </p>
                  </div>
                </div>
                <p className="text-secondary/80 leading-relaxed mb-5">
                  "I was struggling to describe my vintage items in a way that
                  stood out. This prompt builder gives me professional
                  descriptions every time."
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#E67E22"
                      stroke="#E67E22"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className="flex items-center mb-5">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
                    alt="Emily"
                    className="w-14 h-14 rounded-full mr-4 border-2 border-etsy-orange/20"
                  />
                  <div>
                    <h4 className="font-semibold text-secondary">Emily R.</h4>
                    <p className="text-sm text-secondary/60">Handmade Crafts</p>
                  </div>
                </div>
                <p className="text-secondary/80 leading-relaxed mb-5">
                  "As someone who isn't great with words, this tool is a
                  lifesaver. Now my product descriptions sound professional and
                  attract more customers."
                </p>
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#E67E22"
                      stroke="#E67E22"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#e5e7eb"
                    stroke="#d1d5db"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Prompt Builder Section */}
        <section id="prompt-builder" className="py-20">
          <PromptBuilder className="px-4" />
        </section>
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14 text-secondary font-inter">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  How does the Etsy Prompt Builder work?
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  Our tool uses advanced AI to generate SEO-optimized product
                  descriptions based on the information you provide about your
                  product, including name, category, materials, and preferred
                  tone.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  Is this tool free to use?
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  We offer both free and premium plans. The free plan allows you
                  to generate a limited number of descriptions per month, while
                  premium plans offer unlimited generations and additional
                  features.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-etsy-beige/50 p-8 rounded-xl shadow-soft">
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  Can I edit the generated descriptions?
                </h3>
                <p className="text-secondary/80 leading-relaxed">
                  Absolutely! The generated descriptions are starting points
                  that you can customize to better fit your brand voice and
                  product specifics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-xl mb-4">Etsy Prompt Builder</h3>
            <p className="text-white/80">
              The ultimate tool for Etsy sellers to create SEO-optimized product
              descriptions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#prompt-builder"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Prompt Builder
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 hover:text-etsy-orange transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/20 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} Etsy Prompt Builder. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
