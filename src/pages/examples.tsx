import React from "react";

const EXAMPLES = [
  {
    image: "/example/image-cyborg-pianist.png",
    prompt: "An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of a cyborg pianist playing in a burning cathedral, Cyber-Gothic style, lit by Fiery Backlight, with an intense, poetic atmosphere, featuring 3D Render. The image format is 16:9. The environment is composed using Rule of Thirds. Metaphor: “Melody born from destruction”."
  },
  {
    image: "/example/image-western-violinist.png",
    prompt: "An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of a time-traveling violinist in a ruined ballroom, Baroque style, lit by Golden Hour, with a whimsical, melancholic atmosphere, featuring Oil on Canvas. The image format is 1:1. The environment is composed using Symmetrical. Metaphor: \"A sonata lost in time\"."
  },
  {
    image: "/example/image-steampunk-whale.png",
    prompt: "An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of a mechanical whale soaring above skyscrapers, Steampunk style, lit by Studio Lights, with a playful, epic atmosphere, featuring Collage. The image format is 16:9. The environment is composed using Dynamic Angle. Metaphor: \"A sky full of dreams\"."
  },
  {
    image: "/example/image-cosmic-meditation.png",
    prompt: "An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of an astronaut meditating on Saturn’s rings, Cyberpunk style, lit by Backlit Silhouette, with a mysterious, reflective atmosphere, featuring Digital Painting. The image format is 21:9. The environment is composed using Symmetrical. Metaphor: \"Silence between the stars\"."
  },
  {
    image: "/example/image-cyber-cathedral-globe.png",
    prompt: "An imaginative, metaphor-rich visual prompt designed for abstract and artistic rendering. A detailed, cinematic depiction of a cathedral of mirrors inside a snow globe, Vaporwave style, lit by Neon Blade Runner, with a surreal, evocative atmosphere, featuring 3D Render. The image format is 1:1. The environment is composed using Diagonal Flow. Metaphor: \"A memory refracted endlessly”."
  },
  {
    image: "/example/image-abandoned-ship-jungle.png",
    prompt: "A detailed, cinematic depiction of An abandoned spaceship overgrown by jungle vines Fantasy style, lit by Cinematic, with a mysterious atmosphere, featuring earth tones tones. The textures appear smooth. The scene is rendered in ultra detailed resolution. Created using Photorealistic techniques. The image format is 4:3. Set during the Mythical / Fantasy Age period. The environment is composed using Dynamic angle."
  },
  {
    image: "/example/image-ethereal-wolf-tavern.png",
    prompt: "Generate an image based on a structured visual prompt, with creative freedom and stylistic elements. A detailed, cinematic depiction of A medieval tavern where all the patrons are ghosts Cinematic style, lit by Cinematic, with a epic atmosphere, featuring warm tones tones. The scene is rendered in ultra detailed resolution. Created using 8K techniques. The image format is 16:9. Set during the Medieval / Middle Ages period. The environment is composed using Golden Ratio."
  },
  {
    image: "/example/solitude-in-the-crowd.png",
    prompt: "Generate an image based on a structured visual prompt, with creative freedom and stylistic elements. A detailed, cinematic depiction of Lone traveler, People rush by with umbrellas, but the central figure moves slowly, unaffected. Cinematic style, lit by Cinematic, with a dramatic atmosphere, featuring pastel tones. Camera angle: High angle. Lighting mood: Moody The scene is rendered in ultra detailed resolution. Quality: Photorealistic. The image format is 16:9. The environment is composed using Bird’s-eye view. Set during the Cyberpunk Future period. Additional elements like Snow are present in the scene."
  },
  {
    image: "/example/the-neural-galaxy-within.png",
    prompt: "Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt. A detailed, cinematic depiction of A human figure with a luminous glass dome for a head, revealing glowing neurons and cosmic constellations swirling inside Surrealism style, lit by Neon glow, with a mysterious atmosphere, featuring vibrant tones. Camera angle: Eye level. Lighting mood: Harsh shadows The scene is rendered in ultra detailed resolution. Quality: Photorealistic. The image format is 16:9. The environment is composed using Symmetrical. Set during the Mythical / Fantasy Age period. Additional elements like Reflections are present in the scene."
  },
  {
    image: "/example/the-aI-forest-awakens.png",
    prompt: "Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt. A detailed, cinematic depiction of  A biomechanical forest where trees are made of neural circuits and glowing data streams Fantasy style, lit by Cinematic, with a triumphant atmosphere, featuring earth tones tones. Camera angle: Low angle. Lighting mood: Bright The scene is rendered in ultra detailed resolution. Quality: Photorealistic. The image format is 16:9. The environment is composed using Wide Shot. Set in A deep forest landscape in a futuristic AI world. Set during the Post-Apocalyptic period. Additional elements like Other are present in the scene."
  },
  {
    image: "/example/lone-medieval-hero.png",
    prompt: "Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt. A detailed, cinematic depiction of A lone medieval warrior standing atop a battlefield at dawn, with a tattered banner and sword in hand. Cinematic style, lit by Cinematic, with a epic atmosphere, featuring warm tones tones. Camera angle: Eye level. Lighting mood: Harsh shadows The scene is rendered in ultra detailed resolution. Quality: Photorealistic. The image format is 16:9. The environment is composed using Centered. Set during the Medieval / Middle Ages period. Additional elements like Dust are present in the scene."
  },
  {
    image: "/example/octopus-shreds-the-waves.png",
    prompt: "Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt. A detailed, cinematic depiction of “Rock ‘n’ Roll Octopus on a Surfboard” Cinematic style, lit by Cinematic, with a joyful atmosphere, featuring vibrant tones. Camera angle: Eye level. Lighting mood: Moody The scene is rendered in photorealistic resolution. Quality: Photorealistic. The image format is 16:9. The environment is composed using Top-down. Additional elements like Fire are present in the scene."
  }
];

const ExamplesPage = () => {
  React.useEffect(() => {
    document.title = "Prompt Examples Gallery | ValorixAI Vision Prompt GPT";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#18181B] pt-32 pb-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-white mb-10 font-inter">Prompt Examples Gallery</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {EXAMPLES.map((ex, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#23232B] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-4 group"
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl mb-4">
              <img
                src={ex.image}
                alt={ex.prompt.slice(0, 40) + '...'}
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 text-center font-inter">{ex.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplesPage;
