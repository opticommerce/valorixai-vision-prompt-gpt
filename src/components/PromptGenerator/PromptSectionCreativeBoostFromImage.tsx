import React from "react";
import ReactSelect from "react-select";
import {
  Sparkles,
  Eye,
  Droplets,
  Globe2,
  Sun,
} from "lucide-react";
import TooltipInfo from "@/components/PromptGenerator/TooltipInfo";
import { PromptFormData } from "@/types/prompt";
import { decisionTree } from "@/utils/decisionTreeLogicFromImage";

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
};

const fields = decisionTree.creativeBoost;

const categoryMeta: Record<string, { icon: JSX.Element; title: string }> = {
  surrealEffects: {
    icon: <Eye className="w-4 h-4 text-primary" />,
    title: "Surreal Effects",
  },
  rareTextures: {
    icon: <Droplets className="w-4 h-4 text-primary" />,
    title: "Rare Textures",
  },
  atmosphericEffects: {
    icon: <Sparkles className="w-4 h-4 text-primary" />,
    title: "Atmospheric Effects",
  },
  narrativeElements: {
    icon: <Globe2 className="w-4 h-4 text-primary" />,
    title: "Narrative Elements",
  },
  emotionalTriggers: {
    icon: <Sun className="w-4 h-4 text-primary" />,
    title: "Emotional Triggers",
  },
  creativeMetaphor: {
    icon: <Droplets className="w-4 h-4 text-primary" />,
    title: "Creative Metaphor",
  },
};

const tooltipContent: Record<string, string> = {
  surrealEffects: "Dreamlike or bizarre alterations. E.g., morphing between objects, double exposure, floating elements.",
  rareTextures: "Unusual visual materials that enrich the look. E.g., velvet, neon snow, liquid metal, crumpled paper.",
  atmosphericEffects: "Ambient elements to set the mood. E.g., dense fog, sacred light, rain with lightning.",
  narrativeElements: "Evocative objects that imply a story. E.g., suspended portals, ancient masks, floating clocks.",
  emotionalTriggers: "Visual cues that evoke strong emotions. E.g., tension, wonder, melancholy, euphoria.",
  creativeMetaphor: "Poetic or symbolic ideas to express the scene. E.g., 'A dream folding in on itself', 'Nostalgia shaped by light'.",
};

const PromptSectionCreativeBoostFromImage: React.FC<Props> = ({
  formData,
  errors,
  handleChange,
  handleSelectChange,
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
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Add creative effects or rare styles to make your image prompt stand out. All fields are optional.</p>
        <div className="space-y-4 sm:space-y-6">
          {filteredFields.map(([categoryKey, config]) => {
            const isMulti = config.fieldType === "multi-select";
            const isText = config.fieldType === "text";
            const selectedValue = formData[categoryKey as keyof PromptFormData];
            if (isText) {
              return (
                <div
                  key={categoryKey}
                  className="relative z-30 space-y-1.5 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3"
                >
                  <label className="flex items-center gap-1.5 text-sm sm:text-base font-medium text-gray-800 dark:text-white font-inter mb-0.5">
                    {categoryMeta[categoryKey]?.icon}
                    {categoryMeta[categoryKey]?.title}
                    <TooltipInfo text={tooltipContent[categoryKey]} />
                  </label>
                  <textarea
                    className="w-full bg-[#F5F5F5] dark:bg-[#2E2E2E] border border-gray-300 dark:border-gray-600 text-sm font-inter text-black dark:text-white rounded-md px-3 py-2 resize-none hover:bg-primary/10 hover:shadow-sm transition-all duration-200"
                    value={typeof selectedValue === "string" ? selectedValue : ""}
                    onChange={handleChange}
                    name={categoryKey}
                    rows={3}
                  />
                </div>
              );
            }
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
                className="relative z-30 space-y-1.5 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 sm:px-4 sm:py-3"
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
                  menuPortalTarget={typeof window !== "undefined" ? document.body : null}
                  menuPosition="absolute"
                  styles={{
                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                  }}
                  classNames={{
                    control: () =>
                      "bg-[#F5F5F5] dark:bg-[#2E2E2E] border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-inter text-black dark:text-white hover:bg-primary/10 hover:shadow-sm transition-all duration-200",
                    option: (state) =>
                      state.isSelected
                        ? "bg-primary text-white text-sm sm:text-base font-inter cursor-pointer px-3 py-2"
                        : "text-sm sm:text-base font-inter text-black dark:text-white hover:bg-primary/10 cursor-pointer px-3 py-2",
                    menu: () =>
                      "z-[50] bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 mt-1 rounded-md shadow-lg",
                    input: () => "text-sm sm:text-base text-black dark:text-white font-inter",
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

export default PromptSectionCreativeBoostFromImage;
