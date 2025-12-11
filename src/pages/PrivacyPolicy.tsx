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
          ValorixAI Vision Prompt GPT ("the Tool") values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What We Collect</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          When you register or log in, we collect your email address and password via Firebase Authentication. We also store your prompt usage count and subscription status (e.g., Pro access) in Firebase Firestore. If you purchase access through Gumroad, we process your email via a secure webhook connection to activate your Pro account.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          We use your information to provide and manage access to features, including prompt generation limits for free users and unlimited access for Pro users. Your email may also be used for optional newsletter updates if you opt in via our landing page.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Storage & Security</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          All data is stored securely in Firebase and is never sold or shared with third parties. Only authorized systems process your data to deliver product functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Analytics</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          This app currently does not use tracking cookies or analytics tools. We may add anonymous usage statistics in the future to improve the product.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          You can request to delete your account or data at any time by contacting us. If you are subscribed to our mailing list, you can unsubscribe from any email footer link.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-300">
          For privacy-related concerns, you can reach us at: support@valorixai.com
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
