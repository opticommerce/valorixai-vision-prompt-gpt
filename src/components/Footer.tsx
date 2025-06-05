import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  console.log("✅ Footer renderizzato");
  return (
    <footer className="bg-secondary dark:bg-[#1A1A1A] text-white py-12 px-4 border-t-2 border-gray-200 dark:border-white/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-2">ValorixAI Vision Prompt GPT</h2>
          <p className="text-sm text-gray-400 dark:text-gray-300">
            A powerful AI-driven tool to craft high-quality prompts for product listings.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
            <li><Link to="/prompt-builder" className="hover:underline">Prompt Builder</Link></li>
            <li><Link to="/examples" className="hover:underline">Examples</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/help-center" className="hover:underline">Help Center</Link></li>
            <li><Link to="/tutorials" className="hover:underline">Tutorials</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 text-center pt-6">
        <p className="text-sm text-gray-400 dark:text-gray-300">
          © {new Date().getFullYear()} ValorixAI Vision Prompt GPT. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400 dark:text-gray-300">
          This tool is not affiliated with, endorsed by, or sponsored by OpenAI or ChatGPT. ChatGPT® is a registered trademark of OpenAI. This product is independently developed to work with ChatGPT for enhancing image prompt generation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
