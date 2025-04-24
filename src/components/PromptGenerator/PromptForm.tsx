import React, { useState } from "react";
import { generatePrompt } from "../../utils/generatePrompt";
import { Button } from "../ui/button";
import { Hammer, SlidersHorizontal, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PromptFormData } from "@/types/prompt";

// Componenti modulari
import PromptSectionBasic from "./PromptSectionBasic";
import PromptSectionAdvanced from "./PromptSectionAdvanced";
import PromptSectionStorytelling from "./PromptSectionStorytelling";
import PromptModulesSelector from "./PromptModulesSelector";

interface PromptFormProps {
  onGeneratePrompt?: (formData: PromptFormData) => void;
}

const PromptForm = ({ onGeneratePrompt = () => {} }: PromptFormProps) => {
  const [formData, setFormData] = useState<PromptFormData>({
    productName: "",
    productType: "",
    category: "",
    customCategory: "",
    materials: "",
    customMaterial: "",
    tone: "",
    color: "",
    occasion: "",
    customOccasion: "",
    specialFeatures: [],
    seoFocus: "",
    experienceLevel: "intermediate",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof PromptFormData, string>>>({});
  
  const [showStorytelling, setShowStorytelling] = useState(false);
  const [showOptional, setShowOptional] = useState(false);
  const [showAddons, setShowAddons] = useState(false);

  const categories = {
    physical: [
      "jewelry_accessories",
      "fashion_clothing",
      "home_decor",
      "art_craft_supplies",
      "weddings_parties",
      "toys_entertainment",
      "vintage_collectibles",
      "beauty_personal_care",
      "stationery_customization",
      "other",
    ],
    digital: [
      "printable_art",
      "wall_art",
      "planners_journals",
      "logos_branding",
      "other",
    ],
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof PromptFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name: keyof PromptFormData, value: string) => {
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };
      if (name === "productType") {
        updatedData.category = "";
      }
      return updatedData;
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSpecialFeaturesChange = (feature: string) => {
    setFormData((prev) => {
      const features = prev.specialFeatures.includes(feature)
        ? prev.specialFeatures.filter((f) => f !== feature)
        : [...prev.specialFeatures, feature];
      return { ...prev, specialFeatures: features };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PromptFormData, string>> = {};

    if (!formData.productName.trim()) newErrors.productName = "Product name is required";
    if (!formData.experienceLevel) newErrors.experienceLevel = "Experience level is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (formData.category === "other" && !formData.customCategory?.trim()) {
      newErrors.customCategory = "Custom category is required";
    }
    if (formData.productType === "physical" && !formData.materials.trim()) {
      newErrors.materials = "Materials are required";
    }
    if (!formData.tone) newErrors.tone = "Tone preference is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const finalFormData = { ...formData } as PromptFormData;
      finalFormData.category =
        formData.category === "other" && formData.customCategory
          ? formData.customCategory
          : formData.category;
      if (formData.productType === "digital") finalFormData.materials = "";

      // Ensure "Giftable" is preserved correctly in special features
      if (!finalFormData.specialFeatures.includes("Giftable") && formData.specialFeatures.includes("Giftable")) {
        finalFormData.specialFeatures.push("Giftable");
      }
      
      console.log("Submitting with formData:", formData);
      
      const generatedPrompt = generatePrompt(finalFormData);
      
      console.log("Generated prompt output:", generatedPrompt);
      
      onGeneratePrompt({ ...finalFormData, generatedPrompt });
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, generatedPrompt: undefined }));
      }, 3000);
    }
  };

  return (
    <div className="w-full max-w-3xl p-10 bg-white dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md text-secondary dark:text-white">
      
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary dark:text-white font-inter flex items-center justify-center gap-2">
        <Hammer className="h-6 w-6 text-primary" />
        Build Your AI-Enhanced Product Prompt
      </h2>

      <div className="mb-6 border border-gray-200 dark:border-gray-600 rounded-xl p-6 relative overflow-visible">
        <h3 className="text-base sm:text-lg font-semibold mb-2 text-secondary dark:text-white flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          Select Prompt Sections
          <span className="ml-1 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-primary cursor-pointer peer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute top-full mt-2 left-0 w-64 text-xs text-white bg-gray-800 px-3 py-2 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-100 z-[100] pointer-events-none">
              Activate or deactivate optional sections to expand your prompt with extra context and guidance.
            </span>
          </span>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Choose which optional prompt sections to include.
        </p>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className={`w-40 py-2 rounded-md border text-sm font-medium transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
              showStorytelling ? 'bg-primary text-white border-primary' : 'text-primary border-gray-300 hover:bg-primary/10'
            }`}
            onClick={() => setShowStorytelling(prev => !prev)}
          >
            Storytelling
          </button>
          <button
            type="button"
            className={`w-40 py-2 rounded-md border text-sm font-medium transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
              showOptional ? 'bg-primary text-white border-primary' : 'text-primary border-gray-300 hover:bg-primary/10'
            }`}
            onClick={() => setShowOptional(prev => !prev)}
          >
            Optional
          </button>
          <button
            type="button"
            className={`w-40 py-2 rounded-md border text-sm font-medium transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
              showAddons ? 'bg-primary text-white border-primary' : 'text-primary border-gray-300 hover:bg-primary/10'
            }`}
            onClick={() => setShowAddons(prev => !prev)}
          >
            Extra Power
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <PromptSectionBasic
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          categories={categories[formData.productType as "physical" | "digital"] || []}
          categoryPlaceholder="Select the category"
        />

        <AnimatePresence mode="wait">
          {showOptional && (
            <motion.div
              layout
              key="optional"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PromptSectionAdvanced
                formData={formData}
                handleChange={handleChange}
                handleSelectChange={handleSelectChange}
                toggleFeature={handleSpecialFeaturesChange}
                isVisible={showOptional}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showStorytelling && (
            <motion.div
              layout
              key="storytelling"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PromptSectionStorytelling
                formData={formData}
                handleChange={handleChange}
                isVisible={showStorytelling}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showAddons && (
            <motion.div
              layout
              key="addons"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <PromptModulesSelector
                formData={formData}
                toggleModule={(mod) => {
                  const updated = formData.modules?.includes(mod)
                    ? (formData.modules || []).filter((m) => m !== mod)
                    : [...(formData.modules || []), mod];
                  setFormData({ ...formData, modules: updated });
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

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
              productName: "",
              productType: "",
              category: "",
              customCategory: "",
              materials: "",
              customMaterial: "",
              tone: "",
              color: "",
              occasion: "",
              customOccasion: "",
              specialFeatures: [],
              seoFocus: "",
              experienceLevel: "intermediate",
              modules: [],
              generatedPrompt: undefined,
            });
          }}
          className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 rounded-full text-sm transition-all duration-300 font-inter"
        >
          Clear All Fields
        </button>
      </form>
    </div>
  );
};

export default PromptForm;