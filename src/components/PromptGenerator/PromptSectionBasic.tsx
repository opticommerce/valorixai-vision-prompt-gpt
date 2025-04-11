import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ReactSelect from "react-select";
import { Info } from "lucide-react";
import { PromptFormData } from "@/types/prompt";
import { useEffect, useState } from "react";

type Props = {
  formData: PromptFormData;
  errors: Partial<Record<keyof PromptFormData, string>>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: keyof PromptFormData, value: string) => void;
  categories: string[];
  categoryPlaceholder?: string;
};

export default function PromptSectionBasic({
  formData,
  errors,
  handleChange,
  handleSelectChange,
  categories,
  categoryPlaceholder,
}: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <>
      {/* Experience Level */}
      <div className="mb-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-white flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          Prompt Experience Level
          <span className="relative group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="8" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="12" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute top-full mt-2 left-0 w-64 text-xs text-white bg-gray-800 px-3 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-100 z-[100] pointer-events-none">
              Choose your writing experience. This adjusts the tone, complexity, and guidance level of the generated prompt.
            </span>
          </span>
        </h3>
        <Label className="text-secondary dark:text-white text-sm font-inter mb-2 flex items-center">
          Choose how advanced or beginner-friendly the AI response should be.
        </Label>
        <div className="flex justify-between gap-4">
          {["beginner", "intermediate", "expert"].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => handleSelectChange("experienceLevel", level)}
              className={`w-full py-2 rounded-md border text-sm font-inter transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
                formData.experienceLevel === level
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-gray-300 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10"
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-white flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h6m-3 0v14m0 0l-4-4m4 4l4-4" />
          </svg>
          Essential Product Details
        </h3>
        <hr className="my-4 border-t-2 border-[#70BF38]" />

        {/* Product Name */}
        <div className="mb-6">
          <Label htmlFor="productName" className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
            Product Name
            <span className="ml-1 relative">
              <Info className="w-4 h-4 text-primary cursor-pointer peer" />
              <span className="absolute left-full ml-2 w-52 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                Give your product a short, clear name.
              </span>
            </span>
          </Label>
          <Input
            name="productName"
            placeholder="e.g. Vintage Botanical Print"
            value={formData.productName || ""}
            onChange={handleChange}
            className="bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
          />
          {errors.productName && <p className="text-red-500 text-xs mt-1">{errors.productName}</p>}
        </div>

        {/* Product Type */}
        <div className="mb-6">
          <Label className="text-secondary dark:text-white font-medium font-inter mb-1">Product Type</Label>
          <ReactSelect
            options={[
              { value: "physical", label: "Physical Product" },
              { value: "digital", label: "Digital Product" },
            ]}
            value={
              formData.productType
                ? { value: formData.productType, label: formData.productType === "physical" ? "Physical Product" : "Digital Product" }
                : null
            }
            onChange={(option) => handleSelectChange("productType", option?.value || "")}
            placeholder="Choose the product type"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#2E2E2E" : "#F5F5F5",
                color: isDarkMode ? "#fff" : "#000",
                borderColor: isDarkMode ? "#555" : "#ccc",
                boxShadow: "none",
                "&:hover": {
                  borderColor: isDarkMode ? "#888" : "#aaa",
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }),
              singleValue: (base) => ({
                ...base,
                color: isDarkMode ? "#fff" : "#000",
              }),
              placeholder: (base) => ({
                ...base,
                color: isDarkMode ? "#aaa" : "#666",
              }),
            }}
          />
        </div>

        {/* Product Category */}
        <div className="mb-6">
          <Label className="text-secondary dark:text-white font-medium font-inter mb-1">Product Category</Label>
          <ReactSelect
            options={[
              "jewelry_accessories", "fashion_clothing", "home_decor", "art_craft_supplies",
              "weddings_parties", "toys_entertainment", "vintage_collectibles",
              "beauty_personal_care", "stationery_customization", "other"
            ].map(cat => ({
              value: cat,
              label: cat.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())
            }))}
            value={
              formData.category
                ? { value: formData.category, label: formData.category.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()) }
                : null
            }
            onChange={(option) => handleSelectChange("category", option?.value || "")}
            placeholder="Select a category"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#2E2E2E" : "#F5F5F5",
                color: isDarkMode ? "#fff" : "#000",
                borderColor: isDarkMode ? "#555" : "#ccc",
                boxShadow: "none",
                "&:hover": {
                  borderColor: isDarkMode ? "#888" : "#aaa",
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }),
              singleValue: (base) => ({
                ...base,
                color: isDarkMode ? "#fff" : "#000",
              }),
              placeholder: (base) => ({
                ...base,
                color: isDarkMode ? "#aaa" : "#666",
              }),
            }}
          />
          {formData.category === "other" && (
            <Input
              name="customCategory"
              placeholder="Enter custom category"
              value={formData.customCategory || ""}
              onChange={handleChange}
              className="mt-2 bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-600"
            />
          )}
        </div>

        {/* Materials (if physical) */}
        {formData.productType === "physical" && (
          <div className="mb-6">
            <Label className="text-secondary dark:text-white font-medium font-inter mb-1">Materials Used</Label>
            <ReactSelect
              options={[
                "cotton", "linen", "leather", "wood", "ceramic", "metal", "glass", "resin", "recycled", "other",
              ].map(mat => ({ value: mat as PromptFormData["materials"], label: mat.charAt(0).toUpperCase() + mat.slice(1) }))}
              value={
                formData.materials
                  ? { value: formData.materials, label: formData.materials.charAt(0).toUpperCase() + formData.materials.slice(1) }
                  : null
              }
              onChange={(option) => handleSelectChange("materials", option?.value || "")}
              placeholder="Select material used"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: isDarkMode ? "#2E2E2E" : "#F5F5F5",
                  color: isDarkMode ? "#fff" : "#000",
                  borderColor: isDarkMode ? "#555" : "#ccc",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: isDarkMode ? "#888" : "#aaa",
                  },
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                  color: isDarkMode ? "#fff" : "#000",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: isDarkMode ? "#fff" : "#000",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: isDarkMode ? "#aaa" : "#666",
                }),
              }}
            />
            {formData.materials === "other" && (
              <Input
                name="customMaterial"
                placeholder="Enter custom material"
                value={formData.customMaterial || ""}
                onChange={handleChange}
              className="mt-2 bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-600"
              />
            )}
          </div>
        )}

        {/* Tone / Writing Style */}
        <div className="mb-6">
          <Label className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
            Tone / Writing Style
            <span className="ml-1 relative">
              <Info className="w-4 h-4 text-primary cursor-pointer peer" />
              <span className="absolute left-full ml-2 w-52 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                Choose a tone that matches your brand and product vibe.
              </span>
            </span>
          </Label>
          <ReactSelect
            options={[
              "professional", "creative", "minimal", "technical", "poetic", "elegant",
            ].map(tone => ({ value: tone as PromptFormData["tone"], label: tone.charAt(0).toUpperCase() + tone.slice(1) }))}
            value={
              formData.tone
                ? { value: formData.tone, label: formData.tone.charAt(0).toUpperCase() + formData.tone.slice(1) }
                : null
            }
            onChange={(option) => handleSelectChange("tone", option?.value || "")}
            placeholder="Select tone or style"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#2E2E2E" : "#F5F5F5",
                color: isDarkMode ? "#fff" : "#000",
                borderColor: isDarkMode ? "#555" : "#ccc",
                boxShadow: "none",
                "&:hover": {
                  borderColor: isDarkMode ? "#888" : "#aaa",
                },
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                color: isDarkMode ? "#fff" : "#000",
              }),
              singleValue: (base) => ({
                ...base,
                color: isDarkMode ? "#fff" : "#000",
              }),
              placeholder: (base) => ({
                ...base,
                color: isDarkMode ? "#aaa" : "#666",
              }),
            }}
          />
        </div>
      </div>
    </>
  );
}
