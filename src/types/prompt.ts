export interface PromptFormData {
  productName: string;
  productType: "" | "physical" | "digital";
  category: string;
  customCategory?: string;
  materials: string;
  customMaterial?: string;
  tone: string;
  color?: string;
  occasion?: string;
  customOccasion?: string;
  specialFeatures: string[];
  seoFocus?: string;
  generatedPrompt?: string;
  inspiration?: string;
  usp?: string;
  buyerStruggle?: string;
  modules?: string[];
  experienceLevel: "" | "beginner" | "intermediate" | "expert";
}
