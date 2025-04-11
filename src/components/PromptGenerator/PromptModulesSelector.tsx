import { Label } from "@/components/ui/label";
import { Zap } from "lucide-react";

type PromptFormData = {
  modules?: string[];
};

type Props = {
  formData: PromptFormData;
  toggleModule: (module: string) => void;
};

const modules = [
  { label: "SEO Optimization", value: "seo" },
  { label: "Emotional Hook", value: "emotional" },
  { label: "Visual Description", value: "visual" },
  { label: "Conversion Layer", value: "conversion" },
  { label: "Social Media Caption", value: "social" },
  { label: "Target Audience", value: "audience" }
];

export default function PromptModulesSelector({ formData, toggleModule }: Props) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Zap className="w-5 h-5 text-primary" />
        <Label className="text-base sm:text-lg font-semibold text-secondary dark:text-white">
          Optional Add-ons for Extra Power
        </Label>
      </div>
      <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3">
        Select one or more modules to enhance the generated prompt.
      </p>
      <div className="flex flex-wrap gap-2">
        {modules.map((module) => {
          const isSelected = formData.modules?.includes(module.value);
          return (
            <button
              key={module.value}
              type="button"
              onClick={() => toggleModule(module.value)}
              className={`w-40 py-2 rounded-md border text-sm font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-md ${
                isSelected
                  ? "bg-primary text-white border-primary"
                  : "text-primary border-gray-300 bg-white dark:bg-[#2A2A2A] hover:bg-primary/10"
              }`}
            >
              {module.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}