import { ExtendedFormData } from "@/types/prompt";

function random<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isNonEmpty(val: any) {
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "string") return val.trim() !== "";
  return val !== undefined && val !== null;
}

export function generateRandomPromptData(
  mode: "text" | "image",
  partialData: Partial<ExtendedFormData> = {}
): Partial<ExtendedFormData> {
  if (mode === "text") {
    const presets = [
      {
        mainSubject: "a glitching deity emerging from a CRT television",
        visualStyle: "Vaporwave",
        moodTone: ["Surreal", "Nostalgic"],
        lightingStyle: "Neon Blade Runner",
        artTechnique: "3D Render",
        creativeMetaphor: "A god lost in digital static",
        imageFormat: "16:9",
        compositionType: "Asymmetrical",
      },
      {
        mainSubject: "a jester juggling planets inside a cosmic circus",
        visualStyle: "Pop Surrealism",
        moodTone: ["Whimsical", "Chaotic"],
        lightingStyle: "Studio Lights",
        artTechnique: "Mixed Media",
        creativeMetaphor: "The universe on a unicycle",
        imageFormat: "4:3",
        compositionType: "Centered",
      },
      {
        mainSubject: "a shadowy raven wearing a crown of neon wires",
        visualStyle: "Dark Fantasy",
        moodTone: ["Eerie", "Regal"],
        lightingStyle: "Low Key",
        artTechnique: "Oil on Canvas",
        creativeMetaphor: "Royalty in ruin and static",
        imageFormat: "3:2",
        compositionType: "Rule of Thirds",
      },
      {
        mainSubject: "a dancing skeleton at a birthday party",
        visualStyle: "Cartoonish",
        moodTone: ["Absurd", "Cheerful"],
        lightingStyle: "Flash Lighting",
        artTechnique: "Comic Ink",
        creativeMetaphor: "Joy after death, cake included",
        imageFormat: "1:1",
        compositionType: "Chaotic Spread",
      },
      {
        mainSubject: "a Medusa DJ remixing nightmares at a rave",
        visualStyle: "Neon Horror",
        moodTone: ["Energetic", "Disturbing"],
        lightingStyle: "Strobe Lights",
        artTechnique: "Digital Collage",
        creativeMetaphor: "Terror you can dance to",
        imageFormat: "16:9",
        compositionType: "Dynamic Angle",
      },
      {
        mainSubject: "a pirate ship sailing across a spilled coffee cup",
        visualStyle: "Dadaism",
        moodTone: ["Ironic", "Adventurous"],
        lightingStyle: "Overhead Light",
        artTechnique: "Collage",
        creativeMetaphor: "Exploration brewed daily",
        imageFormat: "5:4",
        compositionType: "Tilted Frame",
      },
      {
        mainSubject: "a samurai cat in a cybernetic cherry blossom field",
        visualStyle: "Anime Fusion",
        moodTone: ["Majestic", "Futuristic"],
        lightingStyle: "Cinematic Glow",
        artTechnique: "Cel Shading",
        creativeMetaphor: "Honor in holograms",
        imageFormat: "2:1",
        compositionType: "Symmetrical",
      },
      {
        mainSubject: "a mime trapped inside a tesseract",
        visualStyle: "Escher-esque",
        moodTone: ["Claustrophobic", "Philosophical"],
        lightingStyle: "Monochrome Lighting",
        artTechnique: "Pencil Sketch",
        creativeMetaphor: "Infinity without words",
        imageFormat: "1:1",
        compositionType: "Recursive Depth",
      },
      {
        mainSubject: "a glass koi swimming through a sunset sky",
        visualStyle: "Art Nouveau",
        moodTone: ["Dreamy", "Uplifting"],
        lightingStyle: "Golden Hour",
        artTechnique: "Watercolor",
        creativeMetaphor: "Like hope gliding over sorrow",
        imageFormat: "16:9",
        compositionType: "Centered",
      },
      {
        mainSubject: "an astronaut meditating on Saturn's rings",
        visualStyle: "Cyberpunk",
        moodTone: ["Mysterious", "Reflective"],
        lightingStyle: "Backlit Silhouette",
        artTechnique: "Digital Painting",
        creativeMetaphor: "Silence between the stars",
        imageFormat: "21:9",
        compositionType: "Symmetrical",
      },
      {
        mainSubject: "a phoenix reborn from a data firestorm",
        visualStyle: "Synthwave",
        moodTone: ["Energetic", "Heroic"],
        lightingStyle: "Neon Blade Runner",
        artTechnique: "3D Render",
        creativeMetaphor: "A reboot of ancient myths",
        imageFormat: "16:9",
        compositionType: "Diagonal Flow",
      },
      {
        mainSubject: "a tree made of glass and memory",
        visualStyle: "Minimalist",
        moodTone: ["Melancholic", "Serene"],
        lightingStyle: "Soft Candlelight",
        artTechnique: "Charcoal Sketch",
        creativeMetaphor: "As fragile as forgetting",
        imageFormat: "4:5",
        compositionType: "Rule of Thirds",
      },
      {
        mainSubject: "a mechanical whale soaring above skyscrapers",
        visualStyle: "Steampunk",
        moodTone: ["Playful", "Epic"],
        lightingStyle: "Studio Lights",
        artTechnique: "Collage",
        creativeMetaphor: "A sky full of dreams",
        imageFormat: "16:9",
        compositionType: "Dynamic Angle",
      },
      {
        mainSubject: "a time-traveling violinist in a ruined ballroom",
        visualStyle: "Baroque",
        moodTone: ["Whimsical", "Melancholic"],
        lightingStyle: "Golden Hour",
        artTechnique: "Oil on Canvas",
        creativeMetaphor: "A sonata lost in time",
        imageFormat: "1:1",
        compositionType: "Symmetrical",
      },
      {
        mainSubject: "a digital fox whispering to satellites",
        visualStyle: "Pixel Art",
        moodTone: ["Tense", "Curious"],
        lightingStyle: "Harsh Spotlight",
        artTechnique: "Ink Drawing",
        creativeMetaphor: "A glitch in the wilderness",
        imageFormat: "16:9",
        compositionType: "Minimalist Layout",
      },
      {
        mainSubject: "a candlelit library under the sea",
        visualStyle: "Studio Ghibli",
        moodTone: ["Dreamy", "Peaceful"],
        lightingStyle: "Soft Candlelight",
        artTechnique: "Watercolor",
        creativeMetaphor: "Knowledge drifting in silence",
        imageFormat: "4:5",
        compositionType: "Centered",
      },
      {
        mainSubject: "a robot child painting constellations",
        visualStyle: "Retro Futurism",
        moodTone: ["Hopeful", "Poetic"],
        lightingStyle: "Colorful Studio Lights",
        artTechnique: "Digital Painting",
        creativeMetaphor: "Dreams coded in stardust",
        imageFormat: "9:16",
        compositionType: "Symmetrical",
      },
      {
        mainSubject: "a cathedral of mirrors inside a snow globe",
        visualStyle: "Vaporwave",
        moodTone: ["Surreal", "Evocative"],
        lightingStyle: "Neon Blade Runner",
        artTechnique: "3D Render",
        creativeMetaphor: "A memory refracted endlessly",
        imageFormat: "1:1",
        compositionType: "Diagonal Flow",
      },
      {
        mainSubject: "a blind king floating over a city of mirrors",
        visualStyle: "Dark Fantasy",
        moodTone: ["Ominous", "Poetic"],
        lightingStyle: "Backlit Silhouette",
        artTechnique: "Charcoal Sketch",
        creativeMetaphor: "The weight of vision in the hands of the unseen",
        imageFormat: "16:9",
        compositionType: "Rule of Thirds",
      },
      {
        mainSubject: "a goddess made of corrupted data",
        visualStyle: "Glitch Art",
        moodTone: ["Chaotic", "Mysterious"],
        lightingStyle: "Strobe Light",
        artTechnique: "Collage",
        creativeMetaphor: "Beauty fragmented through code",
        imageFormat: "4:3",
        compositionType: "Asymmetrical",
      },
      {
        mainSubject: "a cat DJ in space with toast headphones",
        visualStyle: "Cartoonish",
        moodTone: ["Goofy", "Playful"],
        lightingStyle: "Colorful Studio Lights",
        artTechnique: "Digital Illustration",
        creativeMetaphor: "Fun has no gravity",
        imageFormat: "9:16",
        compositionType: "Centered",
      },
      {
        mainSubject: "a superhero crying in a supermarket",
        visualStyle: "Pop Art",
        moodTone: ["Ironic", "Melancholic"],
        lightingStyle: "Neon Fluorescent",
        artTechnique: "Comic Ink",
        creativeMetaphor: "Even icons shop for sorrow",
        imageFormat: "1:1",
        compositionType: "Dynamic Angle",
      },
      {
        mainSubject: "a mermaid weaving dreams into constellations",
        visualStyle: "Mythological Fantasy",
        moodTone: ["Dreamy", "Timeless"],
        lightingStyle: "Moonlight",
        artTechnique: "Oil on Canvas",
        creativeMetaphor: "Legends made of stars",
        imageFormat: "21:9",
        compositionType: "Symmetrical",
      },
      {
        mainSubject: "a child painting sunrises on a ruined bunker",
        visualStyle: "Post-Apocalyptic",
        moodTone: ["Hopeful", "Wistful"],
        lightingStyle: "Golden Hour",
        artTechnique: "Spray Paint",
        creativeMetaphor: "Color as rebellion against decay",
        imageFormat: "16:9",
        compositionType: "Framed Depth",
      },
      {
        mainSubject: "a baby panda flying a paper airplane",
        visualStyle: "Kawaii",
        moodTone: ["Cute", "Lighthearted"],
        lightingStyle: "Soft Overcast",
        artTechnique: "Digital Pastels",
        creativeMetaphor: "Innocence finding altitude",
        imageFormat: "4:5",
        compositionType: "Minimalist Layout",
      },
      {
        mainSubject: "an angel dancing through a cathedral made of clouds",
        visualStyle: "Baroque",
        moodTone: ["Divine", "Exuberant"],
        lightingStyle: "Celestial Glow",
        artTechnique: "Fresco",
        creativeMetaphor: "Heaven learning to move",
        imageFormat: "16:9",
        compositionType: "Golden Spiral",
      },
      {
        mainSubject: "a cosmic samurai duel on a neon asteroid",
        visualStyle: "Neon Noir",
        moodTone: ["Epic", "Dramatic"],
        lightingStyle: "Bioluminescent Glow",
        artTechnique: "Digital Matte Painting",
        creativeMetaphor: "Honor illuminated in the vacuum",
        imageFormat: "21:9",
        compositionType: "Dynamic Angle",
      },
      {
        mainSubject: "a mechanical angel fishing for lost dreams",
        visualStyle: "Surrealist Steampunk",
        moodTone: ["Dreamy", "Melancholic"],
        lightingStyle: "Ethereal Moonlight",
        artTechnique: "Oil Painting",
        creativeMetaphor: "Reeling in forgotten fantasies",
        imageFormat: "4:5",
        compositionType: "Golden Spiral",
      },
      {
        mainSubject: "a cyborg pianist playing in a burning cathedral",
        visualStyle: "Cyber-Gothic",
        moodTone: ["Intense", "Poetic"],
        lightingStyle: "Fiery Backlight",
        artTechnique: "3D Render",
        creativeMetaphor: "Melody born from destruction",
        imageFormat: "16:9",
        compositionType: "Rule of Thirds",
      },
      {
        mainSubject: "floating islands made entirely of candy",
        visualStyle: "Fantasy Pop Art",
        moodTone: ["Whimsical", "Euphoric"],
        lightingStyle: "Candy-Colored Studio Lights",
        artTechnique: "Digital Illustration",
        creativeMetaphor: "Sweetness defying gravity",
        imageFormat: "1:1",
        compositionType: "Centered",
      },
      {
        mainSubject: "ghostly pirate ship sailing through a storm in space",
        visualStyle: "Dark Fantasy",
        moodTone: ["Mysterious", "Chaotic"],
        lightingStyle: "Thunderstorm Illumination",
        artTechnique: "Mixed Media Collage",
        creativeMetaphor: "Spectral tides among stars",
        imageFormat: "16:9",
        compositionType: "Framed Depth",
      },
      {
        mainSubject: "a fairy reading bedtime stories to shadows",
        visualStyle: "Gothic Fairytale",
        moodTone: ["Enchanting", "Haunting"],
        lightingStyle: "Twilight Glow",
        artTechnique: "Charcoal Sketch",
        creativeMetaphor: "Stories darker than night",
        imageFormat: "4:5",
        compositionType: "Asymmetrical",
      },
      {
        mainSubject: "a neon dragon soaring above a cyberpunk metropolis",
        visualStyle: "Futuristic Anime",
        moodTone: ["Energetic", "Heroic"],
        lightingStyle: "Neon Blade Runner",
        artTechnique: "Anime Digital Art",
        creativeMetaphor: "Legend reborn in circuits",
        imageFormat: "21:9",
        compositionType: "Diagonal Flow",
      },
      {
        mainSubject: "a skeleton gardener tending crystal flowers on Mars",
        visualStyle: "Cosmic Surrealism",
        moodTone: ["Serene", "Otherworldly"],
        lightingStyle: "Celestial Glow",
        artTechnique: "Watercolor",
        creativeMetaphor: "Life blooming beyond death",
        imageFormat: "16:9",
        compositionType: "Minimalist Layout",
      }
    ];
    const preset = random(presets);
    const merged: any = {};
    for (const key of Object.keys(preset)) {
      if (isNonEmpty(partialData[key])) {
        merged[key] = partialData[key];
      } else {
        merged[key] = preset[key];
      }
    }
    for (const key of Object.keys(partialData)) {
      if (!(key in merged)) {
        merged[key] = partialData[key];
      }
    }
    const fullPrompt = `An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of ${merged.mainSubject}, ${merged.visualStyle} style, lit by ${merged.lightingStyle}, with a ${Array.isArray(merged.moodTone) ? merged.moodTone.join(", ").toLowerCase() : merged.moodTone} atmosphere, featuring ${merged.artTechnique}. The image format is ${merged.imageFormat}. The environment is composed using ${merged.compositionType}. Metaphor: "${merged.creativeMetaphor}".`;
    return { ...merged, generatedPrompt: fullPrompt };
  } else {
    const presets = [
      {
        imageContext: "A floating cyberpunk bazaar at dusk",
        imageContent: random(["Robot", "Abstract Form"]),
        focalPoint: random(["Center Object", "Light Source"]),
        transformationTarget: random(["Atmosphere", "Texture"]),
        transformationType: random(["Surreal abstraction", "Dreamlike expansion"]),
        modificationLevel: random(["Deep (artistic)", "Extreme (surreal)"]),
        imageEmotion: random(["Joy", "Mystery"]),
        historicalEra: random(["Distant Future", "1980s"]),
        moodTone: random([["Mysterious", "Dreamy"], ["Tense", "Suspenseful"]]),
        visualUniverseStyle: random([["Dark Fantasy", "VHS"], ["Pixar", "Retro Futurism"]]),
        lightingStyle: random(["Neon Blade Runner", "Colorful Studio Lights"]),
        artTechnique: random(["3D Render", "Digital Painting"]),
        compositionType: random(["Rule of Thirds", "Symmetrical"]),
        sceneType: random(["Surreal", "Fashion"]),
        creativeMetaphor: "A glitch in the timeline of memory",
      },
      {
        imageContext: "A forgotten temple deep in a neon jungle",
        imageContent: random(["Creature", "Scene"]),
        focalPoint: random(["Eyes", "Background Detail"]),
        transformationTarget: random(["Emotion", "Color Palette"]),
        transformationType: random(["Photorealistic upgrade", "Aesthetic edit"]),
        modificationLevel: random(["Stylized", "Light (subtle)"]),
        imageEmotion: random(["Wonder", "Awe"]),
        historicalEra: random(["Ancient Egypt", "Medieval"]),
        moodTone: random([["Uplifting", "Hopeful"], ["Melancholic"]]),
        visualUniverseStyle: random([["Anime", "Minimalist"], ["Studio Ghibli", "Low Poly"]]),
        lightingStyle: random(["Golden Hour", "Backlit Silhouette"]),
        artTechnique: random(["Oil on Canvas", "Watercolor"]),
        compositionType: random(["Dynamic Angle", "Centered"]),
        sceneType: random(["Narrative", "Landscape"]),
        creativeMetaphor: "A dance of light and shadow",
      },
      // Add 16–26 more presets here as needed  
    ];
    const preset = random(presets);
    const merged: any = {};
    for (const key of Object.keys(preset)) {
      if (isNonEmpty(partialData[key])) {
        merged[key] = partialData[key];
      } else {
        merged[key] = preset[key];
      }
    }
    for (const key of Object.keys(partialData)) {
      if (!(key in merged)) {
        merged[key] = partialData[key];
      }
    }
    return merged;
  }
}

export default generateRandomPromptData;
