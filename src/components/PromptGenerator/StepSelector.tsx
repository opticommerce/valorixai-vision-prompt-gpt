import React from "react";
import { motion } from "framer-motion";

const StepSelector = () => {
  return (
    <motion.div
      className="p-6 border rounded-xl bg-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-blue-500 text-2xl"
        >
          🔍
        </motion.div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Customize Your Prompt
        </h2>
      </div>
      {/* Select the options below to tailor your AI prompt experience. */}
    </motion.div>
  );
};

export default StepSelector;