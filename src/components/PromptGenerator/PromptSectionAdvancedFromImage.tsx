import { Info } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PromptFormData } from "@/types/prompt";
import { decisionTree } from "@/utils/decisionTreeLogicFromImage";
import ReactSelect, { MultiValue } from "react-select";
import { Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
  formData: PromptFormData;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof PromptFormData, value: string | string[]) => void;
};

export default function PromptSectionAdvancedFromImage({
  formData,
  errors,
  handleChange,
  handleSelectChange,
}: Props) {
  const fields = decisionTree.advanced;
  return (
    <div className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] rounded-2xl p-4 sm:p-6 shadow-md mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-white font-inter flex items-center gap-2 mb-2 sm:mb-4">
        <Sparkles className="w-4 h-4 text-primary" />
        Advanced Prompt Controls
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">Add advanced details to further refine your image prompt. Most fields are optional.</p>
      <div className="space-y-4 sm:space-y-6">
        {Object.entries(fields).map(([key, field]) => {
          const value = formData[key as keyof PromptFormData];
          const isOtherSelected =
            (Array.isArray(value) && value.includes("Other")) ||
            (!Array.isArray(value) && value === "Other");
          return (
            <div key={key} className="space-y-1.5">
              <div className="flex items-center gap-1.5 mb-0.5">
                <Label className="text-secondary dark:text-white font-inter font-medium text-sm sm:text-base">
                  {field.label}
                </Label>
                {(() => {
                  const tooltips: Record<string, string> = {
                    composition: "How the elements are arranged (e.g. Rule of Thirds, Golden Ratio).",
                    lighting: "Style and source of light (e.g. soft light, backlight).",
                    imageColorPalette: "Dominant colors and their harmony.",
                    moodEmotion: "Emotional atmosphere to evoke.",
                    textureStyle: "Surface detail: smooth, rough, metallic, soft...",
                    detailLevel: "How intricate and defined the elements are.",
                    artMedium: "Artistic material or format (e.g. watercolor, oil, digital).",
                    technique: "Method or approach for rendering (e.g. impasto, hatching).",
                    qualityResolution: "Clarity and resolution (e.g. HD, 4K, photorealistic).",
                    historicalEra: "Historical or futuristic time period reflected in the image.",
                    moodTone: "Emotional tone of the image.",
                    lightingStyle: "Lighting style used in the scene.",
                    compositionType: "How elements are arranged in the scene.",
                    imageFormat: "Aspect ratio or layout.",
                    artTechnique: "Artistic technique for rendering.",
                    visualReferenceStyle: "Visual inspiration sources like artists or films.",
                    visualUniverseStyle: "Imaginary or pop universes that shape the style.",
                    sceneType: "Type of scene represented.",
                    mixedTechnique: "Mixed creative methods (e.g., AI + painting, collage + 3D)."
                  };
                  return key in tooltips ? (
                    <span className="relative group">
                      <Info className="w-4 h-4 text-primary cursor-pointer" />
                      <span className="absolute top-full left-0 mt-1 w-56 sm:w-64 text-xs text-white bg-gray-800 px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 pointer-events-none">
                        {tooltips[key]}
                      </span>
                    </span>
                  ) : null;
                })()}
              </div>
              {field.fieldType === "text" && (
                <Input
                  name={key}
                  value={value as string}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className="w-full bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 text-sm sm:text-base"
                />
              )}
              {(field.fieldType === "select" || field.fieldType === "multi-select") && (
                <>
                  <ReactSelect
                    isMulti={field.fieldType === "multi-select"}
                    options={field.options.map((opt) => ({ value: opt, label: opt }))}
                    value={
                      field.fieldType === "multi-select"
                        ? Array.isArray(value)
                          ? value.map((val) => ({ value: val, label: val }))
                          : []
                        : typeof value === "string"
                        ? { value, label: value }
                        : null
                    }
                    onChange={(option) => {
                      if (Array.isArray(option)) {
                        handleSelectChange(
                          key as keyof PromptFormData,
                          (option as MultiValue<{ value: string; label: string }>).map((opt) => opt.value)
                        );
                      } else {
                        if (option && !Array.isArray(option) && "value" in option) {
                          handleSelectChange(key as keyof PromptFormData, option.value);
                        } else {
                          handleSelectChange(key as keyof PromptFormData, "");
                        }
                      }
                    }}
                    placeholder={`Select ${field.label.toLowerCase()}`}
                    className="text-sm sm:text-base font-inter"
                    classNames={{
                      control: () =>
                        "bg-[#F5F5F5] dark:bg-[#2E2E2E] border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-inter text-black dark:text-white hover:bg-gray-100 dark:hover:bg-primary/10 transition-all duration-200",
                      option: () =>
                        "text-sm sm:text-base font-inter text-black dark:text-white hover:bg-primary/10 cursor-pointer px-3 py-2",
                      menu: () => "bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 mt-1 rounded-md shadow-lg",
                      input: () => "text-sm sm:text-base font-inter text-black dark:text-white",
                      singleValue: () => "text-sm sm:text-base font-inter text-black dark:text-white",
                      multiValue: () => "bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-inter",
                    }}
                  />
                  {key === "visualUniverseStyle" && isOtherSelected && (
                    <Input
                      name="visualUniverseStyleOther"
                      value={formData.visualUniverseStyleOther || ""}
                      onChange={handleChange}
                      placeholder="Enter custom visual universe style"
                      className="w-full mt-2 bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 text-sm sm:text-base"
                    />
                  )}
                </>
              )}
              {errors[key] && (
                <p className="text-red-500 text-xs mt-1">{errors[key]}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
