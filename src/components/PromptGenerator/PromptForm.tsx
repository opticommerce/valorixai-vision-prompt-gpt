// ⚠️ Questo componente è attualmente disattivato.
// Viene mantenuto nel progetto per eventuale riuso o riferimento futuro.

import React, { useState } from "react";
import { generatePrompt } from "../../utils/generatePrompt";
import { Button } from "../ui/button";
import { Hammer, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { ExtendedFormData } from "@/types/prompt";

/*
interface PromptFormProps {
  onGeneratePrompt?: (formData: ExtendedFormData) => void;
}

const PromptForm = ({ onGeneratePrompt = () => {} }: PromptFormProps) => {
  const [formData, setFormData] = useState<ExtendedFormData>({
    subject: "",
    visualStyle: "",
    composition: "",
    lighting: "",
    mood: "",
    colorPalette: "",
    context: "",
    format: "",
    experienceLevel: "",
    generatedPrompt: undefined,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ExtendedFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof ExtendedFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name: keyof ExtendedFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ExtendedFormData, string>> = {};

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.experienceLevel) newErrors.experienceLevel = "Experience level is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const finalFormData = { ...formData } as ExtendedFormData;

      console.log("Submitting with formData:", finalFormData);

      const generatedPrompt = generatePrompt(finalFormData);

      console.log("Generated prompt output:", generatedPrompt);

      onGeneratePrompt({ ...finalFormData, generatedPrompt });
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, generatedPrompt: undefined }));
      }, 3000);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-0 sm:px-0 lg:px-0">
      <div className="w-full p-10 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md text-secondary dark:text-white">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary dark:text-white font-inter flex items-center justify-center gap-2">
        <Hammer className="h-6 w-6 text-primary" />
        Build Your Text Input
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-secondary dark:text-white">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="visualStyle" className="block text-sm font-medium text-secondary dark:text-white">
              Visual Style
            </label>
            <input
              type="text"
              name="visualStyle"
              id="visualStyle"
              value={formData.visualStyle}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="composition" className="block text-sm font-medium text-secondary dark:text-white">
              Composition
            </label>
            <input
              type="text"
              name="composition"
              id="composition"
              value={formData.composition}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="lighting" className="block text-sm font-medium text-secondary dark:text-white">
              Lighting
            </label>
            <input
              type="text"
              name="lighting"
              id="lighting"
              value={formData.lighting}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="mood" className="block text-sm font-medium text-secondary dark:text-white">
              Mood
            </label>
            <input
              type="text"
              name="mood"
              id="mood"
              value={formData.mood}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="colorPalette" className="block text-sm font-medium text-secondary dark:text-white">
              Color Palette
            </label>
            <input
              type="text"
              name="colorPalette"
              id="colorPalette"
              value={formData.colorPalette}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="context" className="block text-sm font-medium text-secondary dark:text-white">
              Context
            </label>
            <input
              type="text"
              name="context"
              id="context"
              value={formData.context}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="format" className="block text-sm font-medium text-secondary dark:text-white">
              Format
            </label>
            <input
              type="text"
              name="format"
              id="format"
              value={formData.format}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-secondary dark:text-white">
              Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={(e) => handleSelectChange("experienceLevel", e.target.value)}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-[#2A2A2A] dark:border-gray-600 dark:text-white ${
                errors.experienceLevel ? "border-red-500" : ""
              }`}
            >
              <option value="">Select experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.experienceLevel && <p className="mt-1 text-xs text-red-500">{errors.experienceLevel}</p>}
          </div>
        </div>

        {formData.generatedPrompt && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-primary text-center font-semibold mb-4"
          >
            ✅ Prompt generated successfully!
          </motion.div>
        )}

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.06,
            boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
          }}
          whileTap={{
            scale: 0.95,
            rotate: -1,
          }}
          className="w-full mt-8 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-full text-base shadow-lg transition-all duration-300 font-inter flex items-center justify-center gap-2 group relative overflow-hidden"
        >
          <Brain className="w-5 h-5 text-white group-hover:animate-pulse" />
          <span>Generate Prompt</span>
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>

        <button
          type="button"
          onClick={() => {
            setFormData({
              subject: "",
              visualStyle: "",
              composition: "",
              lighting: "",
              mood: "",
              colorPalette: "",
              context: "",
              format: "",
              experienceLevel: "",
              generatedPrompt: undefined,
            });
          }}
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-full text-sm transition-all duration-300 font-inter"
        >
          Clear All Fields
        </button>
      </form>
      </div>
    </section>
  );
};

export default PromptForm;
*/