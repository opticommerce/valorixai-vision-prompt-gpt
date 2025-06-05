import React from "react";
import { motion } from "framer-motion";

interface OutputDisplayProps {
  prompt: string;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ prompt }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#1E1E1E] dark:text-white shadow-md hover:shadow-lg transition-all duration-300"
    >
      <h2 className="text-xl font-bold mb-2">Generated Listing Text</h2>
      <p className="text-gray-800 dark:text-white">{prompt}</p>
    </motion.div>
  );
};

export default OutputDisplay;