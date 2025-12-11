import React from "react";
import { Scale } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-[#1A1A1A] px-6 py-12 pt-32 transition-colors duration-300">
      <div className="bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 max-w-4xl mx-auto transition-colors duration-300">
        <div className="flex justify-center mb-6 mt-2">
          <Scale className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

        <div className="space-y-6 text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
          <p>
            Welcome to <strong>ValorixAI Vision Prompt GPT</strong>. By accessing or using this application, you agree to the following Terms of Service. Please read them carefully.
            If you do not agree, you may not use the service.
          </p>

          <h2 className="text-xl font-semibold mt-4">1. Account Registration</h2>
          <p>
            To use the tool, you must create an account using your email and password. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.
          </p>

          <h2 className="text-xl font-semibold mt-4">2. Tool Usage</h2>
          <p>
            You are granted a <strong>non-exclusive</strong>, <strong>non-transferable</strong> license to use the tool for creating prompts
            to support your creative and AI-generation projects. Generated prompts may be used for personal or commercial purposes.
          </p>

          <h2 className="text-xl font-semibold mt-4">3. Subscription and Access</h2>
          <p>
            Free users are limited to a number of prompt generations. Users who purchase Pro access via Gumroad receive unlimited generation.
            Misuse, sharing of Pro access, or exploitation of the service may result in suspension.
          </p>

          <h2 className="text-xl font-semibold mt-4">4. Data and Privacy</h2>
          <p>
            We collect your email and prompt usage data via Firebase for the purpose of authentication and feature access. By using this tool, you consent to this data being stored securely and used according to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>

          <h2 className="text-xl font-semibold mt-4">5. Email Communication</h2>
          <p>
            By registering or opting in via landing pages, you may receive occasional product updates, resources, or offers. You can unsubscribe at any time via the link in any email.
          </p>

          <h2 className="text-xl font-semibold mt-4">6. Limitation of Liability</h2>
          <p>
            The tool is provided "as is" without warranty of any kind. We do not guarantee any specific outcome or result from using the tool. You use the service at your own risk.
          </p>

          <h2 className="text-xl font-semibold mt-4">7. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these terms at any time. Continued use of the service after changes constitutes acceptance of those changes.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-8">
            *This product is not affiliated with, endorsed by, or officially connected with OpenAI, Midjourney, DALL·E, or any other third-party AI providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
