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
            Welcome to <strong>Valorix Prompt Seller</strong>. By using this tool, you agree to the following Terms of Service.
            Please read them carefully. If you disagree with any part of these terms, you must not use the tool.
          </p>

          <h2 className="text-xl font-semibold mt-4">1. Tool Usage</h2>
          <p>
            You are granted a <strong>non-exclusive</strong>, <strong>non-transferable</strong> license to use this tool for creating AI prompts
            to support your own product listings. You may use the generated content for personal or commercial purposes.
          </p>

          <h2 className="text-xl font-semibold mt-4">2. License and Intellectual Property</h2>
          <p>
            You own the rights to the content you generate. However, <strong>you may not resell, redistribute, or repackage</strong> the tool itself,
            its components, source code, or access credentials.
          </p>

          <h2 className="text-xl font-semibold mt-4">3. Access and Credentials</h2>
          <p>
            Access to the tool is granted via a private link and password. <strong>Do not share access</strong> with others unless explicitly allowed.
            Unauthorized sharing may result in access being revoked.
          </p>

          <h2 className="text-xl font-semibold mt-4">4. No Guarantees or Warranties</h2>
          <p>
            While the tool is designed to improve your productivity and content quality, we do not guarantee specific outcomes,
            business success, or performance. Use it at your own discretion.
          </p>

          <h2 className="text-xl font-semibold mt-4">5. Updates and Changes</h2>
          <p>
            These terms may be updated at any time. Continued use of the tool implies acceptance of the current terms and any changes made.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-8">
            *This product is not affiliated with, endorsed by, or officially connected with Etsy, Inc. or any other mentioned platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
