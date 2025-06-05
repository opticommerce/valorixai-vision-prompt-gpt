import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, PenLine, Image as ImageIcon } from "lucide-react";
import { FullDecisionTree } from "@/utils/decisionTreeLogic";
import { ExtendedFormData } from "@/types/prompt";
import PromptSectionBasic from "./PromptSectionBasic";
import PromptSectionAdvanced from "./PromptSectionAdvanced";
import PromptSectionCreativeBoost from "./PromptSectionCreativeBoost";
import PromptSectionBasicFromImage from "./PromptSectionBasicFromImage";
import PromptSectionAdvancedFromImage from "./PromptSectionAdvancedFromImage";
import PromptSectionCreativeBoostFromImage from "./PromptSectionCreativeBoostFromImage";
import { generatePrompt } from "@/utils/generatePrompt";
import { generatePromptFromImage } from "@/utils/generatePromptFromImage";
import { Label } from "@/components/ui/label";
import generateRandomPromptData from "@/utils/generateRandomPromptData";
import mergeWithExistingFormData from "@/utils/mergeWithExistingFormData";

import PromptOutput from "./PromptOutput";

interface Props {
  fields: FullDecisionTree;
  formData: ExtendedFormData;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string | number, value: string) => void;
  generatedPrompt: string;
  setGeneratedPrompt: React.Dispatch<React.SetStateAction<string>>;
  setFormData: React.Dispatch<React.SetStateAction<ExtendedFormData>>;
  onRandomPrompt?: () => void;
}

function fillRequiredFields<T extends object>(obj: T, required: string[]): T {
  const filled = { ...obj };
  for (const key of required) {
    if (filled[key] === undefined) {
      filled[key] = "";
    }
  }
  return filled;
}

const PromptBuilder = ({
  fields,
  formData,
  errors,
  handleChange,
  handleSelectChange,
  generatedPrompt,
  setGeneratedPrompt,
  setFormData,
  onRandomPrompt,
}: Props) => {
  const [mode, setMode] = React.useState<"text" | "image">("text");
  // Experience level selector logic (inline, not a separate component)
  const experienceLevels = [
    { key: "beginner", label: "Beginner" },
    { key: "intermediate", label: "Intermediate" },
    { key: "expert", label: "Expert" },
  ];

  const handleRandomPromptClick = () => {
    const randomData = generateRandomPromptData(mode);

    setFormData((prev) => {
      const merged = mergeWithExistingFormData(prev, randomData);
      // Fill required fields for type safety
      const required = [
        "subject", "visualStyle", "composition", "lighting", "mood", "colorPalette", "context", "format", "experienceLevel"
      ];
      const complete = fillRequiredFields(merged, required) as ExtendedFormData;
      const prompt =
        mode === "text"
          ? generatePrompt(complete)
          : generatePromptFromImage(complete);
      setGeneratedPrompt(prompt);
      return complete;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6 flex flex-col gap-4 sm:gap-6 font-inter">
      {/* Unified Settings Card */}
      <div className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm px-3 sm:px-4 md:px-6 py-4 sm:py-5">
        {/* Prompt Configuration */}
        <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-secondary dark:text-white mb-3 sm:mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          Prompt Configuration
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button
            onClick={() => setMode("text")}
            className={`w-full py-2 sm:py-2.5 rounded-md border text-sm sm:text-base transition-all duration-200 ease-in-out transform ${
              mode === "text"
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white dark:bg-[#2A2A2A] text-primary border-gray-300 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-primary/20"
            }`}
          >
            <div className="flex items-center gap-2 justify-center">
              <PenLine className="w-4 h-4" />
              Text Prompt
            </div>
          </button>
          <button
            onClick={() => setMode("image")}
            className={`w-full py-2 sm:py-2.5 rounded-md border text-sm sm:text-base transition-all duration-200 ease-in-out transform ${
              mode === "image"
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white dark:bg-[#2A2A2A] text-primary border-gray-300 dark:border-gray-600 hover:bg-primary/10 dark:hover:bg-primary/20"
            }`}
          >
            <div className="flex items-center gap-2 justify-center">
              <ImageIcon className="w-4 h-4" />
              Image Prompt
            </div>
          </button>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-3 sm:mt-4 pt-3 sm:pt-4">
          {/* Prompt Experience Level */}
          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-secondary dark:text-white mb-1.5 sm:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            Prompt Experience Level
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {experienceLevels.map((level) => (
              <button
                key={level.key}
                type="button"
                onClick={() => handleSelectChange("experienceLevel", level.key)}
                className={`w-full py-2 sm:py-2.5 rounded-md border text-sm sm:text-base transition-all duration-200 ease-in-out ${
                  formData.experienceLevel === level.key
                    ? "bg-primary text-white border-primary shadow"
                    : "text-primary border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10 dark:hover:bg-primary/20"
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-3 sm:mt-4 pt-3 sm:pt-4">
          {/* Select Prompt Sections */}
          <div className="flex items-center gap-2 text-base sm:text-lg font-semibold text-secondary dark:text-white mb-1.5 sm:mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            Select Prompt Sections
            <span className="text-xs text-gray-400 dark:text-gray-400 font-normal">(optional)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-0.5 sm:pt-1">
            <button
              type="button"
              className={`w-full py-1.5 sm:py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
                formData.showAdvanced
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10 dark:hover:bg-primary/20"
              }`}
              onClick={() =>
                handleChange({
                  target: {
                    name: "showAdvanced",
                    value: !formData.showAdvanced,
                  },
                } as any)
              }
            >
              Advanced Prompt Controls
            </button>
            <button
              type="button"
              className={`w-full py-1.5 sm:py-2 rounded-md border text-sm sm:text-base transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
                formData.showCreativeBoost
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10 dark:hover:bg-primary/20"
              }`}
              onClick={() =>
                handleChange({
                  target: {
                    name: "showCreativeBoost",
                    value: !formData.showCreativeBoost,
                  },
                } as any)
              }
            >
              Creative Boost
            </button>
          </div>
        </div>
      </div>
      {/* Main prompt sections */}
      <div className="space-y-5 sm:space-y-8">
        {mode === "text" ? (
          <>
            <PromptSectionBasic
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              fields={fields.basic}
            />
            {formData.showAdvanced && (
              <PromptSectionAdvanced
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                fields={fields.advanced}
              />
            )}
            {formData.showCreativeBoost && (
              <PromptSectionCreativeBoost
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                fields={fields.creativeBoost}
              />
            )}
          </>
        ) : (
          <>
            <PromptSectionBasicFromImage
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
            />
            {formData.showAdvanced && (
              <PromptSectionAdvancedFromImage
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
            )}
            {formData.showCreativeBoost && (
              <PromptSectionCreativeBoostFromImage
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
              />
            )}
          </>
        )}
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col mt-3 sm:mt-4">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97, rotate: -1 }}
          onClick={() => {
            const prompt =
              mode === "text"
                ? generatePrompt(formData)
                : generatePromptFromImage(formData);
            setGeneratedPrompt(prompt);
          }}
          className="w-full mt-6 sm:mt-8 bg-primary hover:bg-primary/90 text-white font-semibold py-3 sm:py-4 rounded-full text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Brain className="w-5 h-5 text-white group-hover:animate-pulse" />
          Generate Prompt
        </motion.button>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="w-full mt-3 sm:mt-4 bg-gray-200 hover:bg-gray-300 dark:bg-[#232323] dark:hover:bg-[#333] text-gray-700 dark:text-gray-200 font-medium py-2.5 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300"
        >
          Clear All Fields
        </button>
      </div>
    </div>
  );
};

export default PromptBuilder;
