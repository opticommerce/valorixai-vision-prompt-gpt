import { DecisionTreeNode, decisionTree } from './decisionTreeLogic';

type PromptInput = {
  productName: string;
  productType: '' | 'physical' | 'digital';
  productCategory?: string;
  category?: string;
  subCategory?: string;
  material?: string;
  tone?: string;
  color?: string;
  occasion?: string;
  specialFeatures?: string[];
  keywords?: string;
  inspiration?: string;
  uniqueSellingPoint?: string;
  buyerStruggle?: string;
  audience?: string;
  modules?: string[];
  experienceLevel?: '' | 'beginner' | 'intermediate' | 'expert';
};

function getDecisionInstructions(
  category: string,
  subCategory?: string
): string[] {
  if (!(category in decisionTree)) return [];

  const tree = decisionTree[category as keyof typeof decisionTree];
  const matchedNode = tree?.find((node) => node.subCategory === subCategory);
  if (matchedNode) {
    return matchedNode.instructions || [];
  }

  return [];
}

export function generatePrompt(input: PromptInput): string {
  console.log("Generating prompt with input:", input);
  
  const {
    productName,
    productType,
    productCategory,
    category,
    subCategory,
    material,
    tone,
    color,
    occasion,
    specialFeatures,
    keywords,
    inspiration,
    uniqueSellingPoint,
    buyerStruggle,
    audience,
    modules,
    experienceLevel,
  } = input;

  const productCat = productCategory || category || '';
  const instructions = getDecisionInstructions(productCat, subCategory);

  const toneGuides: Record<string, string> = {
    professional: "Use clear, confident, and value-driven language that establishes trust.",
    creative: "Use expressive, engaging tone with creative flair and originality.",
    minimal: "Write short, sleek sentences. Let simplicity and clarity be the power.",
    technical: "Use precise, factual language focused on specifications and use cases.",
    poetic: "Use lyrical, sensory-rich language that evokes emotion and imagery.",
    elegant: "Use refined, graceful tone with a polished and high-end feel.",
  };

  const toneDescription = tone && toneGuides[tone] ? `- Tone: ${tone}\n- Style Guide: ${toneGuides[tone]}` : '';

  const experienceGuides: Record<string, string> = {
    beginner: "- Level: Beginner\n- Write clearly, use basic concepts, keep it simple and friendly.\n- Avoid jargon. Focus on guiding the reader step-by-step.",
    intermediate: "- Level: Intermediate\n- Assume some product knowledge.\n- Use moderately technical terms and highlight practical advantages.\n- Focus on benefits that boost visibility, increase engagement, and drive more clicks.",
    expert: "- Level: Expert\n- Use advanced language and in-depth technical details.\n- Highlight niche features and subtle value propositions.",
  };

  const levelDescription = experienceLevel && experienceGuides[experienceLevel]
    ? `\n${experienceGuides[experienceLevel]}`
    : '';

  const basePrompt = [
    `Act as a senior ecommerce copywriter. Write a structured prompt to generate high-converting product listings.`,
    `### 1. Product Title`,
    `- Include key material, emotional cue, or benefit`,
    `- Max 140 characters, no punctuation`,
    ``,
    `### 2. Product Description`,
    `- 2–3 short paragraphs or bullet points`,
    `- Open with an emotional hook`,
    `- Highlight what makes it unique and desirable`,
    ``,
    `### 3. SEO Tags`,
    `- 13 long-tail keywords, comma-separated`,
    `- Use relevant search terms for discovery`,
    ``,
    `Product Information:`,
    productName ? `- Name: ${productName}` : '',
    `- Type: ${productType === 'physical' ? 'Physical' : 'Digital'}`,
    `- Category: ${productCat}`,
    subCategory ? `- Subcategory: ${subCategory}` : '',
    material ? `- Material: ${material}` : '',
    color ? `- Color: ${color}` : '',
    occasion ? `- Occasion: ${occasion}` : '',
    toneDescription,
    levelDescription,
    specialFeatures?.length ? `- Features: ${specialFeatures.join(', ')}` : '',
    keywords ? `- SEO Keywords: ${keywords}` : '',
    inspiration ? `- Inspired by: ${inspiration}` : '',
    uniqueSellingPoint ? `- Unique Angle: ${uniqueSellingPoint}` : '',
    buyerStruggle ? `- Customer Problem: ${buyerStruggle}` : '',
    audience ? `- Target Audience: ${audience}` : '',
    instructions.length ? `\nContextual Tips:\n${instructions.map(i => `- ${i}`).join('\n')}` : ''
  ].filter(Boolean).join('\n');

  const modulesSection = modules?.length
    ? `\n\n---\n\nAdditional Prompt Modules:\n\n` + modules.map((mod) => {
      const moduleContent: Record<string, { title: string; body: string }> = {
        seo: {
          title: "SEO Optimization",
          body: "Use long-tail search phrases that ideal buyers would type. No keyword stuffing.",
        },
        emotional: {
          title: "Emotional Hook",
          body: "Start with a phrase that evokes emotion — aspiration, identity, nostalgia.",
        },
        visual: {
          title: "Visual Description",
          body: "Describe the visual and sensory experience of the product clearly and vividly.",
        },
        conversion: {
          title: "Conversion Layer",
          body: "Mention benefits like instant delivery, platform compatibility, or limited availability.",
        },
        social: {
          title: "Social Caption",
          body: "Add a short Instagram-style caption with light emojis and one strong hashtag.",
        },
        audience: {
          title: "Target Audience",
          body: "Define who this product is perfect for. Example: Busy moms, minimalist designers, Gen Z students.",
        },
      };
      const content = moduleContent[mod];
      return content ? `### [${content.title}]\n${content.body}` : '';
    }).join('\n\n')
    : '';

  const competitiveEdgeSection =
    experienceLevel === "expert"
      ? `\n\n### [Competitive Edge]\nInclude subtle differentiators that separate this listing from others in the same niche.`
      : '';

  const footer = `\n\n---\n\nMake sure the output is fully formatted in Markdown, clearly separated into sections.`;

  return `${basePrompt}${modulesSection}${competitiveEdgeSection}${footer}`.trim();
}