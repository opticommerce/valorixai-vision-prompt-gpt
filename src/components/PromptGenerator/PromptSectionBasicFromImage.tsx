import { ExtendedFormData, PromptFormData } from "@/types/prompt";
import { decisionTree } from "@/utils/decisionTreeLogicFromImage";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ReactSelect from "react-select";
import { Info } from "lucide-react";
import { useEffect, useState } from "react";

type DecisionTreeNode = {
  label: string;
  fieldType: "text" | "select" | "multi-select";
  optional?: boolean;
  options?: string[];
};

type Props = {
  formData: ExtendedFormData;
  errors: Partial<Record<keyof ExtendedFormData, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: keyof ExtendedFormData, value: string | string[]) => void;
};

const hasCustomOtherInput = (fieldName: string, formData: ExtendedFormData) => {
  const fieldsWithOther = ["imageContent", "focalPoint"];
  return fieldsWithOther.includes(fieldName) && formData[fieldName as keyof ExtendedFormData] === "Other";
};


export default function PromptSectionBasicFromImage({
  formData,
  errors,
  handleChange,
  handleSelectChange,
}: Props) {
  const fields = decisionTree.basic;
  if (!fields || Object.keys(fields).length === 0) {
    return <p className="text-sm text-gray-400">No fields available.</p>;
  }

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] p-4 sm:p-6 shadow-md space-y-4 sm:space-y-6">
      <div className="flex items-center gap-2 mb-2 sm:mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l9 4.5-9 4.5-9-4.5L12 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l9 4.5 9-4.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l9 4.5 9-4.5" />
        </svg>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white font-inter">Content & Transformation</h3>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Describe the image and the transformation you want. Optional fields add nuance.</p>
      <div className="space-y-4 sm:space-y-6">
        {Object.entries(fields).map(([fieldName, config]) => (
          <div key={fieldName} className="space-y-1.5">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Label htmlFor={fieldName} className="text-secondary dark:text-white font-medium font-inter text-sm sm:text-base">
                {config.label} {config.optional && <span className="text-xs text-gray-400">(optional)</span>}
              </Label>
              {['imageContext','imageContent','focalPoint','transformationType','modificationLevel','imageEmotion','composition','lighting','mood','colorPalette','textureStyle','detailLevel'].includes(fieldName) && (
                <span className="relative group">
                  <Info className="w-4 h-4 text-primary cursor-pointer" />
                  <span className="absolute top-full left-0 mt-1 w-56 sm:w-64 text-xs text-white bg-gray-800 px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none">
                    {fieldName === 'imageContext' && 'Overall context of the image, e.g., location or setting.'}
                    {fieldName === 'imageContent' && 'What does the image show? Main subject or scene.'}
                    {fieldName === 'focalPoint' && 'Point of interest that draws attention.'}
                    {fieldName === 'transformationType' && 'Type of visual change to apply.'}
                    {fieldName === 'modificationLevel' && 'How intense or imaginative should the transformation be?'}
                    {fieldName === 'imageEmotion' && 'Emotion the scene should convey or enhance.'}
                    {fieldName === 'composition' && 'Visual arrangement or structure of the scene.'}
                    {fieldName === 'lighting' && 'Type of lighting used in the image.'}
                    {fieldName === 'mood' && 'Emotional tone or feeling of the image.'}
                    {fieldName === 'colorPalette' && 'Dominant colors or tones in the image.'}
                    {fieldName === 'textureStyle' && 'Surface quality of objects in the image.'}
                    {fieldName === 'detailLevel' && 'Level of intricacy and refinement in visual features.'}
                  </span>
                </span>
              )}
            </div>
            {config.fieldType === "text" && (
              <Input
                name={fieldName}
                placeholder={`Enter ${config.label.toLowerCase()}`}
                value={formData[fieldName as keyof ExtendedFormData] || ""}
                onChange={handleChange}
                className="bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 text-sm sm:text-base"
              />
            )}
            {config.fieldType === "select" && config.options && (
              <>
                <ReactSelect
                  options={config.options.map((opt) => ({ value: opt, label: opt }))}
                  value={formData[fieldName as keyof ExtendedFormData] ? { value: formData[fieldName as keyof ExtendedFormData], label: formData[fieldName as keyof ExtendedFormData] } : null}
                  onChange={(option) => handleSelectChange(fieldName as keyof ExtendedFormData, option?.value || "")}
                  placeholder={`Select ${config.label.toLowerCase()}`}
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: document.documentElement.classList.contains("dark") ? "#2E2E2E" : "#F5F5F5",
                      color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
                      borderColor: document.documentElement.classList.contains("dark") ? "#555" : "#ccc",
                      boxShadow: "none",
                      fontSize: "0.95rem",
                      minHeight: "2.25rem",
                      '&:hover': {
                        borderColor: document.documentElement.classList.contains("dark") ? "#888" : "#aaa",
                      },
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: document.documentElement.classList.contains("dark") ? "#1E1E1E" : "#fff",
                      color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
                      fontSize: "0.95rem",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: document.documentElement.classList.contains("dark") ? "#aaa" : "#666",
                    }),
                  }}
                />
                {hasCustomOtherInput(fieldName, formData) && (
                  <Input
                    name={`${fieldName}Other`}
                    placeholder={`Enter your custom ${config.label.toLowerCase()}`}
                    value={formData[`${fieldName}Other` as keyof ExtendedFormData] || ""}
                    onChange={handleChange}
                    className="mt-2 bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 text-sm sm:text-base"
                  />
                )}
              </>
            )}
            {config.fieldType === "multi-select" && config.options && (
              <div className="flex flex-wrap gap-2">
                {config.options.map((option) => {
                  const selected = Array.isArray(formData[fieldName as keyof ExtendedFormData]) &&
                    (formData[fieldName as keyof ExtendedFormData] as string[]).includes(option);
                  const handleMultiSelect = () => {
                    const currentValues = (formData[fieldName as keyof ExtendedFormData] as string[]) || [];
                    const newValue = selected
                      ? currentValues.filter((v) => v !== option)
                      : [...currentValues, option];
                    handleSelectChange(fieldName as keyof ExtendedFormData, newValue as string | string[]);
                  };
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={handleMultiSelect}
                      className={`px-3 py-1 text-xs sm:text-sm rounded-full border transition focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        selected
                          ? "bg-primary text-white border-primary"
                          : "bg-gray-100 text-gray-700 dark:bg-[#2E2E2E] dark:text-white dark:border-gray-600"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            )}
            {errors[fieldName as keyof ExtendedFormData] && (
              <p className="text-red-500 text-xs mt-1">{errors[fieldName as keyof ExtendedFormData]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
