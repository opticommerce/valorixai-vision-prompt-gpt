import { ExtendedFormData } from "@/types/prompt";

function joinWithAnd(arr: string[] = []) {
  if (!arr.length) return "";
  if (arr.length === 1) return arr[0];
  return arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];
}

function getValue(val: any, custom?: any) {
  if (!val || val === "N/A") return "";
  if (val === "Other" && custom && custom !== "N/A") return custom;
  if (Array.isArray(val)) return joinWithAnd(val);
  return val;
}

function uniqueNonEmpty(arr: (string | undefined)[]) {
  return Array.from(new Set(arr.filter(Boolean)));
}

export function generatePromptFromImage(input: ExtendedFormData): string {
  const parts: string[] = [];

  // Experience level
  if (input.experienceLevel === "beginner") {
    parts.push("Generate an image with a clear, literal description and minimal abstraction.");
  } else if (input.experienceLevel === "intermediate") {
    parts.push("Generate an image based on a structured visual prompt, combining clarity with stylistic creativity.");
  } else if (input.experienceLevel === "expert") {
    parts.push("Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt.");
  }

  // Content & context
  const content = getValue(input.imageContent, input.imageContentOther) || getValue(input.subject);
  const context = getValue(input.imageContext) || getValue(input.context);
  const sceneType = getValue(input.sceneType);
  const composition = getValue(input.compositionType) || getValue(input.composition);
  const format = getValue(input.imageFormat) || getValue(input.format);
  const palette = getValue(input.imageColorPalette) || getValue(input.colorPalette, input.colorPaletteOther);
  const lighting = getValue(input.lightingStyle) || getValue(input.lighting, input.lightingOther);
  const mood = getValue(input.moodTone) || getValue(input.mood, input.moodOther);
  const visualStyle = getValue(input.visualStyle, input.visualStyleOther);
  const visualReferenceStyle = getValue(input.visualReferenceStyle);
  const universeStyles = uniqueNonEmpty([
    ...(Array.isArray(input.visualUniverseStyle) ? input.visualUniverseStyle : []),
    input.visualUniverseStyleOther
  ]);
  const universe = joinWithAnd(universeStyles);

  const contentParts = [];
  if (content) contentParts.push(`a ${content}`);
  if (context) contentParts.push(`in ${context}`);
  if (sceneType) contentParts.push(`set in a ${sceneType} scene`);
  if (contentParts.length) {
    parts.push(`The image depicts ${contentParts.join(", ")}.`);
  }

  // Focal point
  const focalPoint = getValue(input.focalPoint) === "Other" ? getValue(input.focalPointOther) : getValue(input.focalPoint);
  if (focalPoint) parts.push(`Focal point: ${focalPoint}.`);

  // Transformation
  const transformationTarget = getValue(input.transformationTarget);
  const transformationType = getValue(input.transformationType);
  const modificationLevel = getValue(input.modificationLevel);
  if (transformationTarget || transformationType || modificationLevel) {
    parts.push([
      transformationTarget ? `Transformation target: ${transformationTarget}` : null,
      transformationType ? `Type: ${transformationType}` : null,
      modificationLevel ? `Level: ${modificationLevel}` : null
    ].filter(Boolean).join(". "));
  }

  // Remove element
  const elementToRemove = getValue(input.elementToRemove);
  if (elementToRemove) parts.push(`Remove: ${elementToRemove}.`);

  // Emotion
  const imageEmotion = getValue(input.imageEmotion);
  if (imageEmotion) parts.push(`Aim to evoke a feeling of ${imageEmotion.toLowerCase()}.`);

  // Custom comment
  const customComment = getValue(input.customComment);
  if (customComment) parts.push(`Additional notes: ${customComment}`);

  // Era, narrative, context
  const historicalEra = getValue(input.historicalEra);
  const narrativeContext = getValue(input.narrativeContext);
  const narrativeCustomEra = getValue(input.narrativeCustomEra);
  if (historicalEra) parts.push(`Set during the ${historicalEra} period.`);
  if (narrativeContext) parts.push(`The story unfolds during the ${narrativeContext.toLowerCase()} era.`);
  if (narrativeCustomEra) parts.push(`The scene reflects the historical setting of ${narrativeCustomEra}.`);

  // Camera angle, lighting mood
  const cameraAngle = getValue(input.cameraAngle);
  const lightingMood = getValue(input.lightingMood);
  if (cameraAngle || lightingMood) {
    parts.push([
      cameraAngle ? `Camera angle: ${cameraAngle}` : null,
      lightingMood ? `Lighting mood: ${lightingMood}` : null
    ].filter(Boolean).join(". "));
  }

  // Texture, detail, quality, medium, technique
  const texture = getValue(input.textureStyle);
  const detail = getValue(input.detailLevel);
  const quality = getValue(input.qualityLevel);
  const artMedium = getValue(input.artMedium);
  const technique = getValue(input.technique);
  const mixedTechnique = getValue(input.mixedTechnique);
  const artTechnique = getValue(input.artTechnique);
  const techniqueParts = uniqueNonEmpty([artMedium, technique, mixedTechnique, artTechnique]);
  if (texture) parts.push(`The textures appear ${texture.toLowerCase()}.`);
  if (detail) parts.push(`The scene is rendered in ${detail.toLowerCase()} resolution.`);
  if (techniqueParts.length) {
    parts.push(`Created using ${joinWithAnd(techniqueParts)} techniques.`);
  }
  if (quality) parts.push(`Quality: ${quality}.`);

  // Style, reference, universe, palette, lighting, mood
  const styleParts = [];
  if (visualStyle && visualStyle !== visualReferenceStyle) styleParts.push(`${visualStyle} style`);
  if (visualReferenceStyle) styleParts.push(`inspired by ${visualReferenceStyle}`);
  if (universe) styleParts.push(`with elements from universes like ${universe}`);
  if (lighting) styleParts.push(`lit by ${lighting}`);
  if (mood) styleParts.push(`with a ${mood.toLowerCase()} atmosphere`);
  if (palette) styleParts.push(`featuring ${palette.toLowerCase()} tones`);
  if (format) styleParts.push(`format: ${format}`);
  if (composition) styleParts.push(`composition: ${composition}`);
  if (styleParts.length) {
    parts.push(styleParts.join(", ") + ".");
  }

  // Extra elements
  const extraElements = getValue(input.extraElements);
  if (extraElements) parts.push(`Details like ${extraElements} enhance the scene's richness and complexity.`);

  // Creative/boost fields
  const surrealEffects = uniqueNonEmpty([
    ...(Array.isArray(input.surrealEffects) ? input.surrealEffects : []),
    ...(Array.isArray(input.surrealEffectsImage) ? input.surrealEffectsImage : [])
  ]);
  const rareTextures = uniqueNonEmpty([
    ...(Array.isArray(input.rareTextures) ? input.rareTextures : []),
    ...(Array.isArray(input.rareTexturesImage) ? input.rareTexturesImage : [])
  ]);
  const specialLights = uniqueNonEmpty(Array.isArray(input.specialLights) ? input.specialLights : []);
  const lightAndSpecialEffects = uniqueNonEmpty(Array.isArray(input.lightAndSpecialEffects) ? input.lightAndSpecialEffects : []);
  const atmosphericEffects = uniqueNonEmpty(Array.isArray(input.atmosphericEffects) ? input.atmosphericEffects : []);
  const narrativeElements = uniqueNonEmpty(Array.isArray(input.narrativeElements) ? input.narrativeElements : []);
  const emotionalTriggers = uniqueNonEmpty(Array.isArray(input.emotionalTriggers) ? input.emotionalTriggers : []);
  const creativeMetaphor = getValue(input.creativeMetaphor);

  const boostLines = [];
  if (surrealEffects.length) boostLines.push(`surreal effects like ${joinWithAnd(surrealEffects)}`);
  if (rareTextures.length) boostLines.push(`rare textures such as ${joinWithAnd(rareTextures)}`);
  if (specialLights.length) boostLines.push(`special lighting such as ${joinWithAnd(specialLights)}`);
  if (lightAndSpecialEffects.length) boostLines.push(`special lighting effects like ${joinWithAnd(lightAndSpecialEffects)}`);
  if (atmosphericEffects.length) boostLines.push(`atmospheric details like ${joinWithAnd(atmosphericEffects)}`);
  if (narrativeElements.length) boostLines.push(`symbolic objects like ${joinWithAnd(narrativeElements)}`);
  if (emotionalTriggers.length) boostLines.push(`emotional undertones of ${joinWithAnd(emotionalTriggers)}`);
  if (boostLines.length) {
    parts.push(`To enhance its impact, include ${boostLines.join(", ")}.`);
  }
  if (creativeMetaphor) {
    parts.push(`Think of the scene as: "${creativeMetaphor}".`);
  }

  // Negative prompt
  const negativePrompt = getValue(input.negativePrompt);
  if (negativePrompt) {
    parts.push(`Avoid elements such as: ${negativePrompt}.`);
  }

  return parts.filter(Boolean).join(" ");
}