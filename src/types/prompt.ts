export type PromptFormData = {
  subject: string;
  visualStyle: string;
  composition: string;
  lighting: string;
  mood: string;
  colorPalette: string;
  context: string;
  format: string;

  // Creative Boost fields
  surrealEffects?: string[];
  specialLights?: string[];
  rareTextures?: string[];
  narrativeContext?: string;
  narrativeCustomEra?: string;

  // From Image – Block 1: Content & Transformation
  imageContext?: string;
  imageContent?: string;
  imageContentOther?: string;
  focalPoint?: string;
  focalPointOther?: string;
  transformationTarget?: string;
  transformationType?: string;
  modificationLevel?: string;
  elementToRemove?: string;
  imageEmotion?: string;
  customComment?: string;
  // From Image – Block 2: Style, Composition, Atmosphere
  historicalEra?: string;
  moodTone?: string[];
  imageColorPalette?: string;
  lightingStyle?: string;
  compositionType?: string;
  imageFormat?: string;
  artTechnique?: string;
  visualReferenceStyle?: string;
  visualUniverseStyle?: string[];
  visualUniverseStyleOther?: string;
  sceneType?: string;
  mixedTechnique?: string[];

  // From Image – Block 3: Creative Boost
  surrealEffectsImage?: string[];
  rareTexturesImage?: string[];
  atmosphericEffects?: string[];
  narrativeElements?: string[];
  emotionalTriggers?: string[];
  creativeMetaphor?: string;
};

export type ExtendedFormData = {
  [key: string]: string | string[];
} & PromptFormData & {
  experienceLevel: string;
};
