export type FieldType = "text" | "select" | "multi-select";

export interface DecisionTreeNode {
  label: string;
  fieldType: FieldType;
  optional?: boolean;
  options?: string[];
}

export type DecisionTree = Record<string, DecisionTreeNode>;

export interface FullDecisionTree {
  basic: DecisionTree;
  advanced: DecisionTree;
  creativeBoost: DecisionTree;
}

// Visual prompt decision tree (English labels)
export const decisionTree: FullDecisionTree = {
  basic: {
    subject: { label: "Main subject", fieldType: "text" },
    visualStyle: {
      label: "Visual style",
      fieldType: "select",
      options: [
        "Cartoon",
        "Cinematic",
        "Cyberpunk",
        "Editorial",
        "Fantasy",
        "Impressionist",
        "Noir",
        "Oil painting",
        "Pixel art",
        "Realistic",
        "Surrealism",
        "Vaporwave",
        "Watercolor",
        "Other"
      ]
    },
    composition: {
      label: "Composition",
      fieldType: "select",
      options: [
        "Asymmetrical",
        "Bird’s-eye view",
        "Centered",
        "Close-up",
        "Double Exposure",
        "Dynamic angle",
        "Editorial",
        "Establishing Shot",
        "Extreme Close-Up",
        "Eye-level",
        "Framed Within Frame",
        "Golden Ratio",
        "Leading Lines",
        "Medium Shot",
        "Minimalist",
        "Over-the-shoulder",
        "Rule of thirds",
        "Symmetrical",
        "Top-down",
        "Worm’s-eye view",
        "Wide Shot",
        "Other"
      ]
    },
    lighting: {
      label: "Lighting",
      fieldType: "select",
      options: [
        "Backlight",
        "Cinematic",
        "Dramatic spotlight",
        "Hard light",
        "Natural daylight",
        "Neon glow",
        "Rembrandt lighting",
        "Soft light",
        "Studio lighting",
        "Other"
      ]
    },
    mood: {
      label: "Mood / emotion",
      fieldType: "select",
      options: [
        "Anxious",
        "Calm",
        "Cheerful",
        "Dark",
        "Dramatic",
        "Epic",
        "Joyful",
        "Melancholic",
        "Mysterious",
        "Romantic",
        "Serene",
        "Tense",
        "Triumphant",
        "Other"
      ]
    },
    colorPalette: {
      label: "Color palette",
      fieldType: "select",
      optional: true,
      options: [
        "Analogous",
        "Black & white",
        "Cool tones",
        "Complementary",
        "Duotone",
        "Earth tones",
        "Monochrome",
        "Muted",
        "Pastel",
        "Split complementary",
        "Triadic",
        "Vibrant",
        "Warm tones",
        "Other"
      ]
    },
    context: { label: "Context / setting", fieldType: "text", optional: true },
    format: {
      label: "Format / ratio",
      fieldType: "select",
      options: ["1:1", "16:9", "4:3", "2:3", "9:16"]
    },
  },
  advanced: {
    additionalElements: {
      label: "Additional elements",
      fieldType: "select",
      options: [
        "Abstract shapes",
        "Architecture",
        "Dust",
        "Fire",
        "Floating objects",
        "Fog",
        "Glass shards",
        "Leaves",
        "Petals",
        "Rain",
        "Reflections",
        "Smoke",
        "Snow",
        "Sparkles",
        "Other"
      ]
    },
    cameraAngle: {
      label: "Camera angle",
      fieldType: "select",
      options: ["Low angle", "High angle", "Eye level", "Overhead", "Dutch angle"]
    },
    lightingMood: {
      label: "Lighting atmosphere",
      fieldType: "select",
      options: ["Moody", "Bright", "High contrast", "Soft ambient", "Harsh shadows"]
    },
    textureStyle: {
      label: "Texture style",
      fieldType: "select",
      options: [
        "Cracked",
        "Dusty",
        "Glossy",
        "Grainy",
        "Matte",
        "Organic",
        "Rough",
        "Smooth",
        "Synthetic",
        "Wet",
        "Other"
      ]
    },
    detailLevel: {
      label: "Detail level",
      fieldType: "select",
      options: [
        "High",
        "Line art",
        "Minimal",
        "Photorealistic",
        "Sketchy",
        "Ultra detailed",
        "Other"
      ]
    },
    technique: {
      label: "Technique",
      fieldType: "select",
      options: [
        "Cross hatching",
        "Flat shading",
        "Glazing",
        "Impasto",
        "Layered",
        "Loose brushwork",
        "Photo bashing",
        "Stippling",
        "Vector art",
        "Other"
      ]
    },
    qualityLevel: {
      label: "Quality / resolution",
      fieldType: "select",
      options: [
        "Draft",
        "Standard",
        "High",
        "Ultra HD",
        "4K",
        "8K",
        "Photorealistic",
        "Other"
      ]
    },
    artMedium: {
      label: "Art medium",
      fieldType: "multi-select",
      options: [
        "Acrylic",
        "Chalk",
        "Charcoal",
        "Collage",
        "Digital painting",
        "Ink",
        "Marker",
        "Mixed media",
        "Oil",
        "Pastel",
        "Pencil",
        "Spray paint",
        "Watercolor",
        "Other"
      ]
    },
    negativePrompt: {
      label: "Negative prompt",
      fieldType: "text",
      optional: true
    }
  },
  creativeBoost: {
    additionalElements: {
      label: "Additional elements",
      fieldType: "multi-select",
      options: [
        "Abstract shapes",
        "Architecture",
        "Dust",
        "Fire",
        "Floating objects",
        "Fog",
        "Glass shards",
        "Leaves",
        "Petals",
        "Rain",
        "Reflections",
        "Smoke",
        "Snow",
        "Sparkles",
        "Other"
      ]
    },
    surrealEffects: {
      label: "Surreal effects",
      fieldType: "multi-select",
      options: ["Hidden symbolism", "Invisibility / Ghost", "Morphing & Fusion", "Surreal masks"]
    },
    specialLights: {
      label: "Lighting and special effects",
      fieldType: "multi-select",
      options: ["Chromatic aberrations", "Creative negative space", "Fluorescence", "Light painting", "Ultraviolet light"]
    },
    rareTextures: {
      label: "Rare textures",
      fieldType: "multi-select",
      options: ["Crystallization", "Ice/metal fusion", "Parchment effect"]
    },
    historicalEra: {
      label: "Historical era",
      fieldType: "select",
      options: [
        "Prehistoric (Stone Age)",
        "Ancient Egypt",
        "Classical Greece",
        "Roman Empire",
        "Medieval / Middle Ages",
        "Renaissance",
        "Baroque",
        "Victorian Era",
        "Industrial Revolution",
        "World War I",
        "World War II",
        "Post-war 1950s",
        "Space Age",
        "Cyberpunk Future",
        "Post-Apocalyptic",
        "Mythical / Fantasy Age"
      ]
    }
  }
};

export const fields = decisionTree;