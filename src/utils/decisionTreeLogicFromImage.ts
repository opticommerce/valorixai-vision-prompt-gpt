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
    imageContext: {
      label: "Image context",
      fieldType: "text"
    },
    imageContent: {
      label: "Image content",
      fieldType: "select",
      options: ["Person", "Animal", "Object", "Product", "Interior", "Other"]
    },
    imageContentOther: {
      label: "Custom image content",
      fieldType: "text",
      optional: true
    },
    focalPoint: {
      label: "Focal point",
      fieldType: "select",
      options: ["Face", "Detail", "Central object", "Hands", "None", "Other"]
    },
    focalPointOther: {
      label: "Custom focal point",
      fieldType: "text",
      optional: true
    },
    transformationTarget: {
      label: "What do you want to transform?",
      fieldType: "text"
    },
    transformationType: {
      label: "Transformation type",
      fieldType: "select",
      options: [
        "Aesthetic edit",
        "Creative expansion",
        "Stylistic fusion",
        "Deformation / abstraction",
        "Stylistic reinterpretation",
        "Surreal transformation",
        "Fairy-tale / fantastic"
      ]
    },
    modificationLevel: {
      label: "Modification intensity",
      fieldType: "select",
      options: ["Light (almost real)", "Medium (stylized)", "Deep (artistic)", "Abstract (dreamlike)"]
    },
    elementToRemove: {
      label: "Element to remove",
      fieldType: "text",
      optional: true
    },
    imageEmotion: {
      label: "Emotional tone",
      fieldType: "select",
      options: ["Calm", "Dramatic", "Elegant", "Dreamy", "Mysterious", "Energetic"],
      optional: true
    },
    customComment: {
      label: "Creative notes",
      fieldType: "text"
    }
  },
  advanced: {
    historicalEra: {
      label: "Historical era",
      fieldType: "select",
      options: [
        "Prehistoric",
        "Ancient Egypt",
        "Classical Greece",
        "Medieval",
        "Renaissance",
        "Baroque",
        "Victorian",
        "Industrial Age",
        "80s",
        "Y2K",
        "2040",
        "Cyberpunk",
        "Futuristic"
      ]
    },
    moodTone: {
      label: "Mood & tone",
      fieldType: "multi-select",
      options: [
        "Dramatic",
        "Calm",
        "Mystical",
        "Psychedelic",
        "Ironic",
        "Dreamy",
        "Dark Fantasy",
        "Melancholic",
        "Uplifting"
      ]
    },
    imageColorPalette: {
      label: "Color palette",
      fieldType: "select",
      options: [
        "Pastel",
        "Neon",
        "Earth tones",
        "Black & white",
        "Duotone",
        "Y2K",
        "Vibrant",
        "Muted"
      ]
    },
    lightingStyle: {
      label: "Lighting style",
      fieldType: "select",
      options: [
        "Golden hour",
        "Neon Blade Runner",
        "Strong shadows",
        "Studio lighting",
        "Soft ambient",
        "Harsh contrast"
      ]
    },
    compositionType: {
      label: "Composition type",
      fieldType: "select",
      options: [
        "Symmetrical",
        "Close-up",
        "Isometric view",
        "Floating subject",
        "Portrait centered",
        "Wide shot",
        "Bird's-eye view"
      ]
    },
    imageFormat: {
      label: "Image format",
      fieldType: "select",
      options: ["16:9", "1:1", "4:3", "9:16", "21:9"]
    },
    artTechnique: {
      label: "Art technique",
      fieldType: "select",
      options: [
        "Digital painting",
        "3D render",
        "Claymation",
        "Watercolor",
        "Vector art",
        "AI-generated",
        "Ink drawing"
      ]
    },
    visualReferenceStyle: {
      label: "Visual reference style",
      fieldType: "text"
    },
    visualUniverseStyle: {
      label: "Visual universe style",
      fieldType: "multi-select",
      options: [
        "Ghibli",
        "LEGO",
        "Vaporwave",
        "VHS",
        "Retro sci-fi",
        "Cyberpunk Tokyo",
        "Pixar",
        "Moebius",
        "Dune",
        "Wes Anderson",
        "Other"
      ]
    },
    sceneType: {
      label: "Scene type",
      fieldType: "select",
      options: [
        "Narrative",
        "Surreal",
        "Architectural",
        "Fashion",
        "Portrait",
        "Satirical",
        "Conceptual"
      ]
    },
    mixedTechnique: {
      label: "Mixed technique",
      fieldType: "multi-select",
      options: [
        "3D + collage",
        "AI + painting",
        "Sketch + digital",
        "Paper cut + glitch",
        "Photo + scan texture"
      ],
      optional: true
    }
  },
  creativeBoost: {
    surrealEffects: {
      label: "Surreal effects",
      fieldType: "multi-select",
      options: [
        "Object morphing",
        "Dreamlike reflections",
        "Double exposure",
        "Cubist fragmentation",
        "Floating subjects",
        "Temporal loops"
      ]
    },
    rareTextures: {
      label: "Rare textures",
      fieldType: "multi-select",
      options: [
        "Liquid glass",
        "Molten metal",
        "Folded paper",
        "Dense smoke",
        "Velvet fuzz",
        "Neon snow"
      ]
    },
    atmosphericEffects: {
      label: "Atmospheric effects",
      fieldType: "multi-select",
      options: [
        "Heavy fog",
        "Holy light",
        "Electric rain",
        "Color storm",
        "Lightning burst",
        "Heat shimmer"
      ]
    },
    narrativeElements: {
      label: "Narrative elements",
      fieldType: "multi-select",
      options: [
        "Suspended portal",
        "Floating clock",
        "Ancient mask",
        "Broken lock",
        "Shadow spirits",
        "Ethereal doors"
      ]
    },
    emotionalTriggers: {
      label: "Emotional triggers",
      fieldType: "multi-select",
      options: [
        "Tension",
        "Wonder",
        "Melancholy",
        "Euphoria",
        "Confusion",
        "Longing"
      ]
    },
    creativeMetaphor: {
      label: "Creative metaphor",
      fieldType: "text"
    }
  }
};

export const fields = decisionTree;