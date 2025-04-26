import React from "react";
import { ShieldCheckIcon } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-background dark:bg-[#1A1A1A] text-foreground dark:text-white px-6 py-12 pt-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 p-6 mt-8 rounded-lg shadow-md transition-colors duration-300">
        <div className="flex justify-center mb-4">
          <ShieldCheckIcon className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          ValorixAI Listing Assistant does not collect, store, or process any personal data. The tool runs entirely on your device (client-side), meaning all information you enter stays in your browser and is never transmitted to any server.
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          This prompt builder is designed to help sellers and creators on various marketplaces — including Shopify, Gumroad, Creative Market, and others — craft optimized AI prompts for product listings, descriptions, or campaigns.
        </p>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          No login is required. We do not use cookies, analytics, or tracking scripts. All usage is private, and you may use the generated prompts with any AI assistant you choose — including ChatGPT, Claude, Gemini, and others.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
