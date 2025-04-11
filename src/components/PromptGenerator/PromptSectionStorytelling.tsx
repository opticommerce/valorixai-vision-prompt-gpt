import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import { BookOpen } from "lucide-react";
import { PromptFormData } from "@/types/prompt";

type Props = {
  formData: PromptFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isVisible?: boolean;
};

export default function PromptSectionStorytelling({ formData, handleChange, isVisible = true }: Props) {
  if (!isVisible) return null;

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-xl p-5 mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-secondary dark:text-white flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-primary" />
        Storytelling & Emotional Connection
      </h3>

      {/* Inspiration */}
      <div className="mb-6">
        <div className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
          Inspiration / Story
          <span className="ml-1 relative">
            <Info className="w-4 h-4 text-primary cursor-pointer peer" />
            <span className="absolute left-full ml-2 w-60 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              Optional: share what inspired you to create this product.
            </span>
          </span>
        </div>
        <Textarea
          id="inspiration"
          name="inspiration"
          value={formData.inspiration || ""}
          onChange={handleChange}
          placeholder="Share the story or inspiration behind the product"
          className="relative z-0 w-full min-h-[100px] bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Unique Selling Point */}
      <div className="mb-6">
        <div className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
          Unique Selling Point
          <span className="ml-1 relative">
            <Info className="w-4 h-4 text-primary cursor-pointer peer" />
            <span className="absolute left-full ml-2 w-60 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              Optional: what makes this product stand out?
            </span>
          </span>
        </div>
        <Input
          id="usp"
          name="usp"
          value={formData.usp || ""}
          onChange={handleChange}
          placeholder="Describe your product's unique value"
          className="relative z-0 w-full bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Customer Pain Point */}
      <div className="mb-6">
        <div className="text-secondary dark:text-white font-medium font-inter mb-1 flex items-center">
          Customer Pain Point
          <span className="ml-1 relative">
            <Info className="w-4 h-4 text-primary cursor-pointer peer" />
            <span className="absolute left-full ml-2 w-60 text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              Optional: what challenge does your product solve?
            </span>
          </span>
        </div>
        <Textarea
          id="buyerStruggle"
          name="buyerStruggle"
          value={formData.buyerStruggle || ""}
          onChange={handleChange}
          placeholder="e.g. finding minimalist jewelry that actually fits"
          className="relative z-0 w-full min-h-[100px] bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600"
        />
      </div>
    </div>
  );
}
