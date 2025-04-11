import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReactSelect from "react-select";
import { Info, Sparkles } from "lucide-react";
import { PromptFormData } from "@/types/prompt";

type Props = {
  formData: PromptFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: keyof PromptFormData, value: string) => void;
  toggleFeature: (feature: string) => void;
  isVisible?: boolean;
};

const specialFeatureOptions = [
  "Handmade",
  "Eco-friendly",
  "Limited edition",
  "Personalized",
  "Fast shipping",
  "Giftable",
];

export default function PromptSectionAdvanced({
  formData,
  handleChange,
  handleSelectChange,
  toggleFeature,
  isVisible = true,
}: Props) {
  if (!isVisible) return null;

  return (
    <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 sm:p-7 mb-8">
      <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-white flex items-center gap-2 mb-5">
        <Sparkles className="w-4 h-4 text-primary" />
        Optional Enhancements
      </h3>

      {/* Color */}
      <div className="mb-6">
        <Label className="text-secondary dark:text-white font-medium font-inter mb-1">Color</Label>
        <Input
          name="color"
          value={formData.color || ""}
          onChange={handleChange}
          placeholder="e.g. Olive green, lavender, monochrome"
          className="w-full bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Occasion */}
      <div className="mb-6">
        <Label className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
          Occasion
          <span className="ml-1 relative">
            <Info className="w-4 h-4 text-primary cursor-pointer peer" />
            <span className="absolute left-full ml-2 w-52 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              Optional: specify if the product is suitable for a specific holiday, event or use-case.
            </span>
          </span>
        </Label>
        <ReactSelect
          options={[
            { value: "birthday", label: "Birthday" },
            { value: "anniversary", label: "Anniversary" },
            { value: "wedding", label: "Wedding" },
            { value: "graduation", label: "Graduation" },
            { value: "holiday", label: "Holiday" },
            { value: "everyday", label: "Everyday Use" },
            { value: "valentines", label: "Valentine's Day" },
            { value: "mother", label: "Mother's Day" },
            { value: "father", label: "Father's Day" },
            { value: "christmas", label: "Christmas" },
            { value: "halloween", label: "Halloween" },
            { value: "newyear", label: "New Year's" },
            { value: "other", label: "Other" },
          ]}
          value={
            formData.occasion
              ? {
                  value: formData.occasion,
                  label: formData.occasion
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase()),
                }
              : null
          }
          onChange={(option) => handleSelectChange("occasion", option?.value || "")}
          placeholder="Select an occasion"
          className="text-sm"
          classNames={{
            control: () => "bg-[#F5F5F5] dark:bg-[#2E2E2E] border border-gray-300 dark:border-gray-600 text-black dark:text-white",
          }}
        />
        {formData.occasion === "other" && (
          <div className="mt-4">
            <Input
              name="customOccasion"
              value={formData.customOccasion || ""}
              onChange={handleChange}
              placeholder="Describe the occasion"
              className="w-full bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
            />
          </div>
        )}
      </div>

      {/* Special Features */}
      <div className="mb-6">
        <Label className="text-secondary dark:text-white font-medium font-inter mb-1">Special Features</Label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {specialFeatureOptions.map((feature) => {
            const isSelected = formData.specialFeatures?.includes(feature);
            return (
              <button
                key={feature}
                type="button"
                onClick={() => toggleFeature(feature)}
                className={`w-full py-2 rounded-md border text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
                  isSelected
                    ? "bg-primary text-white border-primary"
                    : "text-primary border-gray-300 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10"
                }`}
              >
                {feature}
              </button>
            );
          })}
        </div>
      </div>

      {/* SEO Focus Keyword */}
      <div className="mb-6">
        <Label htmlFor="seoFocus" className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
          SEO Focus Keyword
          <span className="ml-1 relative">
            <Info className="w-4 h-4 text-primary cursor-pointer peer" />
            <span className="absolute left-full ml-2 w-52 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              Optional: include a keyword you'd like to rank for.
            </span>
          </span>
        </Label>
        <Textarea
          name="seoFocus"
          value={formData.seoFocus || ""}
          onChange={handleChange}
          placeholder="e.g. minimalist wall art, vintage glass vase"
          className="w-full min-h-[80px] bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
        />
      </div>
    </div>
  );
}
