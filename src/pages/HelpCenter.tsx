import React from "react";
import { LifeBuoy, Settings, Upload, Tag, Repeat, ShieldCheck } from "lucide-react";

const HelpCenter = () => {
  return (
    <div className="bg-background dark:bg-[#1A1A1A] min-h-screen pt-32 pb-12 transition-colors duration-300">
      <div className="bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 max-w-4xl mx-auto transition-colors duration-300">
        <div className="flex justify-center mb-6 mt-2">
          <LifeBuoy className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Help Center</h1>

        <div className="space-y-10 text-base leading-relaxed text-gray-800 dark:text-gray-200">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              Getting Started: How does the Prompt Builder work?
            </h2>
            <p>
              Simply enter your product details, select optional sections like SEO tags or storytelling, and click <strong>“Generate Prompt”</strong>. 
              The tool will create a complete AI prompt — formatted and ready to paste into ChatGPT, Claude, or Gemini.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Can I use the prompts for Etsy, Creative Market, etc.?
            </h2>
            <p>
              Yes! The prompts are designed to help sellers create better listings on platforms like <strong>Etsy, Creative Market, Gumroad, Shopify</strong> and more.
              They generate SEO-ready titles, descriptions, and tags.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Tag className="w-5 h-5 text-primary" />
              What kind of products is this best for?
            </h2>
            <p>
              Valorix works great for <strong>digital goods</strong> like planners, templates, or printables — and also for <strong>physical products</strong> like jewelry, home decor, or art prints.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <Repeat className="w-5 h-5 text-primary" />
              Can I reuse prompts or save them?
            </h2>
            <p>
              Absolutely. You can tweak one prompt for similar items, or generate a fresh one for every product. 
              It’s flexible and built to save you time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Do I need an account or subscription?
            </h2>
            <p>
              No account required. You’ll receive access via a private link and password after purchase — no recurring fees, no signups.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white flex items-center gap-2">
              <LifeBuoy className="w-5 h-5 text-primary" />
              Need more help?
            </h2>
            <p>
              If you run into issues or need assistance, feel free to reach out through the contact form. 
              We’re here to make your prompt-building experience smooth and productive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
