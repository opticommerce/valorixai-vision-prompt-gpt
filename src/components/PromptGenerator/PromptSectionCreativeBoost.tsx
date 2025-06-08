import React from "react";
import ReactSelect from "react-select";
import {
  Sparkles,
  Eye,
  Sun,
  Droplets,
  Globe2,
} from "lucide-react";
import TooltipInfo from "@/components/PromptGenerator/TooltipInfo";
import { PromptFormData } from "@/types/prompt";
import { FullDecisionTree } from "@/utils/decisionTreeLogic";

type FieldConfig = {
  label: string;
  fieldType: "multi-select" | "select" | "text";
  options?: string[];
};

type Props = {
  formData: PromptFormData;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof PromptFormData, value: string | string[]) => void;
  fields: Record<string, FieldConfig>;
};

const categoryMeta: Record<string, { icon: JSX.Element; title: string }> = {
  surrealEffects: {
    icon: <Eye className="w-4 h-4 text-primary" />,
    title: "Surreal Effects",
  },
  specialLights: {
    icon: <Sun className="w-4 h-4 text-primary" />,
    title: "Lights & Special FX",
  },
  rareTextures: {
    icon: <Droplets className="w-4 h-4 text-primary" />,
    title: "Rare Textures",
  },
  historicalEra: {
    icon: <Globe2 className="w-4 h-4 text-primary" />,
    title: "Historical Era",
  },
};

const tooltipContent: Record<string, string> = {
  surrealEffects: "Add surreal, dream-like distortions to the scene.",
  specialLights: "Apply rare and dramatic lighting styles.",
  rareTextures: "Overlay unique textures like ice, glass, or metal.",
  historicalEra: "Set the time period or historical context for the image.",
};

const PromptSectionCreativeBoost: React.FC<Props> = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  fields,
}) => {
  const filteredFields = Object.entries(fields).filter(
    ([key]) => key !== "extraElements" && key !== "additionalElements"
  );

  return (
    <div className="space-y-4 sm:space-y-8">
      <section className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white font-inter flex items-center gap-2 mb-2 sm:mb-5">
          <Sparkles className="w-4 h-4 text-primary" />
          Creative Boost
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Add creative effects or rare styles to make your prompt stand out. All fields are optional.</p>
        <div className="space-y-4 sm:space-y-6">
          {filteredFields.map(([categoryKey, config]) => {
            const isMulti = config.fieldType === "multi-select";
            const selectedValue = formData[categoryKey as keyof PromptFormData];
            const value = isMulti
              ? Array.isArray(selectedValue)
                ? selectedValue.map((v) => ({ value: v, label: v }))
                : []
              : typeof selectedValue === "string"
                ? { value: selectedValue, label: selectedValue }
                : null;
            return (
              <div
                key={categoryKey}
                className="relative z-50 space-y-1.5 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3 transition-all duration-200"
              >
                <label className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-gray-800 dark:text-white font-inter mb-0.5">
                  {categoryMeta[categoryKey]?.icon}
                  {categoryMeta[categoryKey]?.title}
                  <TooltipInfo text={tooltipContent[categoryKey]} />
                </label>
                <ReactSelect
                  options={config.options?.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                  value={value}
                  isMulti={isMulti}
                  onChange={(selected) => {
                    const values = isMulti
                      ? Array.isArray(selected)
                        ? selected.map((opt) => opt.value)
                        : []
                      : !Array.isArray(selected) && selected && "value" in selected
                      ? selected.value
                      : "";
                    handleSelectChange(categoryKey as keyof PromptFormData, values);
                  }}
                  menuPortalTarget={typeof window !== 'undefined' ? document.body : null}
                  menuPosition="absolute"
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                  }}
                  classNames={{
                    control: () =>
                      "bg-[#F5F5F5] dark:bg-[#2E2E2E] border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-inter text-black dark:text-white hover:bg-primary/10 hover:shadow-sm transition-all duration-200 placeholder:text-gray-400 dark:placeholder:text-gray-400",
                    option: (state) =>
                      state.isSelected
                        ? "bg-primary text-white text-sm sm:text-base font-inter cursor-pointer px-3 py-2"
                        : "text-sm sm:text-base font-inter text-black dark:text-white hover:bg-primary/10 cursor-pointer px-3 py-2",
                    menu: () =>
                      "z-[40] bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 mt-1 rounded-md shadow-lg",
                    input: () => "text-sm sm:text-base text-black dark:text-white font-inter placeholder:text-gray-400 dark:placeholder:text-gray-400",
                    singleValue: () => "text-sm sm:text-base font-inter text-black dark:text-white",
                    multiValue: () =>
                      "bg-primary/20 text-primary rounded-md px-2 py-1 text-sm sm:text-base font-inter",
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PromptSectionCreativeBoost;
