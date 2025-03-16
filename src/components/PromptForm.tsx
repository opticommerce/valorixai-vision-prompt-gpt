import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface PromptFormProps {
  onGeneratePrompt?: (formData: PromptFormData) => void;
}

export interface PromptFormData {
  productName: string;
  category: string;
  customCategory?: string;
  materials: string;
  tone: string;
}

const PromptForm = ({ onGeneratePrompt = () => {} }: PromptFormProps) => {
  const [formData, setFormData] = useState<PromptFormData>({
    productName: "",
    category: "",
    customCategory: "",
    materials: "",
    tone: "professional",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof PromptFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof PromptFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSelectChange = (name: keyof PromptFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PromptFormData, string>> = {};

    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (formData.category === "other" && !formData.customCategory?.trim()) {
      newErrors.customCategory = "Custom category is required";
    }

    if (!formData.materials.trim()) {
      newErrors.materials = "Materials are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const finalFormData = { ...formData };
      if (formData.category === "other" && formData.customCategory) {
        finalFormData.category = formData.customCategory;
      }
      onGeneratePrompt(finalFormData);
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-soft">
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary font-inter">
        Create Your Etsy Product Description
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label
            htmlFor="productName"
            className="text-secondary font-medium font-inter flex items-center gap-2"
          >
            <span className="text-etsy-brightOrange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
              </svg>
            </span>
            Product Name
          </Label>
          <Input
            id="productName"
            name="productName"
            placeholder="e.g. Handmade Leather Wallet"
            value={formData.productName}
            onChange={handleChange}
            className={`rounded-lg border-input bg-background px-4 py-2 text-sm ring-offset-background shadow-inner ${errors.productName ? "border-red-500" : ""}`}
          />
          {errors.productName && (
            <p className="text-red-500 text-xs mt-1 font-inter">
              {errors.productName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="category"
            className="text-secondary font-medium font-inter flex items-center gap-2"
          >
            <span className="text-etsy-brightOrange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
                <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
                <path d="M4 12h16"></path>
                <path d="M9 12v4"></path>
                <path d="M15 12v4"></path>
                <path d="M13 8V4"></path>
              </svg>
            </span>
            Product Category
          </Label>
          <Select
            value={formData.category}
            onValueChange={(value) => handleSelectChange("category", value)}
          >
            <SelectTrigger
              id="category"
              className={`rounded-lg shadow-inner ${errors.category ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem value="jewelry_accessories">
                Jewelry & Accessories
              </SelectItem>
              <SelectItem value="fashion_clothing">
                Fashion & Clothing
              </SelectItem>
              <SelectItem value="home_decor">Home Decor</SelectItem>
              <SelectItem value="art_craft_supplies">
                Art & Craft Supplies
              </SelectItem>
              <SelectItem value="weddings_parties">
                Weddings & Parties
              </SelectItem>
              <SelectItem value="toys_entertainment">
                Toys & Entertainment
              </SelectItem>
              <SelectItem value="vintage_collectibles">
                Vintage & Collectibles
              </SelectItem>
              <SelectItem value="beauty_personal_care">
                Beauty & Personal Care
              </SelectItem>
              <SelectItem value="stationery_customization">
                Stationery & Customization
              </SelectItem>
              <SelectItem value="other">Other (Custom)</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-red-500 text-xs mt-1 font-inter">
              {errors.category}
            </p>
          )}
        </div>

        {formData.category === "other" && (
          <div className="space-y-2">
            <Label
              htmlFor="customCategory"
              className="text-secondary font-medium font-inter"
            >
              Custom Category
            </Label>
            <Input
              id="customCategory"
              name="customCategory"
              placeholder="Enter your custom category"
              value={formData.customCategory}
              onChange={handleChange}
              className={`rounded-lg border-input bg-background px-4 py-2 text-sm ring-offset-background shadow-inner ${errors.customCategory ? "border-red-500" : ""}`}
            />
            {errors.customCategory && (
              <p className="text-red-500 text-xs mt-1 font-inter">
                {errors.customCategory}
              </p>
            )}
          </div>
        )}

        <div className="space-y-2">
          <Label
            htmlFor="materials"
            className="text-secondary font-medium font-inter flex items-center gap-2"
          >
            <span className="text-etsy-brightOrange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </span>
            Materials Used
          </Label>
          <Textarea
            id="materials"
            name="materials"
            placeholder="e.g. Genuine leather, metal hardware, cotton thread"
            value={formData.materials}
            onChange={handleChange}
            className={`rounded-lg min-h-[100px] shadow-inner ${errors.materials ? "border-red-500" : ""}`}
          />
          {errors.materials && (
            <p className="text-red-500 text-xs mt-1 font-inter">
              {errors.materials}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="tone"
            className="text-secondary font-medium font-inter flex items-center gap-2"
          >
            <span className="text-etsy-brightOrange">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </span>
            Tone Preference
          </Label>
          <Select
            value={formData.tone}
            onValueChange={(value) => handleSelectChange("tone", value)}
          >
            <SelectTrigger id="tone" className="rounded-lg shadow-inner">
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
              <SelectItem value="elegant">Elegant</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full mt-8 bg-etsy-orange hover:bg-etsy-brightOrange text-white font-medium py-3 rounded-full shadow-soft transition-all duration-300 font-inter"
        >
          Generate Description
        </Button>
      </form>
    </div>
  );
};

export default PromptForm;
