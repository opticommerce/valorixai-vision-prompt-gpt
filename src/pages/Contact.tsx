import React from "react";
import { MailIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-[#1A1A1A] px-6 py-12 pt-32 transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#2E2E2E] text-gray-800 dark:text-gray-200 p-6 mt-6 rounded-lg shadow-md transition-colors duration-300">
        <div className="flex justify-center mb-4">
          <MailIcon className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          If you have any questions, suggestions, or feedback, we’d love to hear from you.
          You can reach us at <a href="mailto:valorixai@gmail.com" className="text-primary underline">valorixai@gmail.com</a>. We’ll be adding our social channels soon!
        </p>
      </div>
    </div>
  );
}

export default Contact;
