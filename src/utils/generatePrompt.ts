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

export function generatePrompt(input: ExtendedFormData): string {
  const phrases: string[] = [];

  // Experience level
  if (input.experienceLevel === "beginner") {
    phrases.push("Generate an image with a clear, literal description and minimal abstraction.");
  } else if (input.experienceLevel === "intermediate") {
    phrases.push("Generate an image based on a structured visual prompt, with creative freedom and stylistic elements.");
  } else if (input.experienceLevel === "expert") {
    phrases.push("Generate an artistic, metaphor-rich image based on an imaginative and interpretative visual prompt.");
  }

  // Main subject
  const mainSubject = getValue(input.subject);
  if (mainSubject) {
    phrases.push(`A detailed, cinematic depiction of ${mainSubject}`);
  }

  // Style, reference, universe
  const visualStyle = getValue(input.visualStyle, input.visualStyleOther);
  const visualReferenceStyle = getValue(input.visualReferenceStyle);
  const universeStyles = uniqueNonEmpty([
    ...(Array.isArray(input.visualUniverseStyle) ? input.visualUniverseStyle : []),
    input.visualUniverseStyleOther
  ]);
  const universe = joinWithAnd(universeStyles);
  const styleParts = [];
  if (visualStyle && visualStyle !== visualReferenceStyle) styleParts.push(`${visualStyle} style`);
  if (visualReferenceStyle) styleParts.push(`inspired by ${visualReferenceStyle}`);
  if (universe) styleParts.push(`with elements from universes like ${universe}`);

  // Lighting
  const lighting = getValue(input.lighting, input.lightingOther);
  const lightingStyle = getValue(input.lightingStyle);
  const lightingCombined = uniqueNonEmpty([lighting, lightingStyle]);
  if (lightingCombined.length) styleParts.push(`lit by ${joinWithAnd(lightingCombined)}`);

  // Mood
  const mood = getValue(input.mood, input.moodOther);
  const moodTone = getValue(input.moodTone);
  const moodCombined = uniqueNonEmpty([mood, moodTone]);
  if (moodCombined.length) styleParts.push(`with a ${joinWithAnd(moodCombined).toLowerCase()} atmosphere`);

  // Color palette
  const colorPalette = getValue(input.colorPalette, input.colorPaletteOther);
  const imageColorPalette = getValue(input.imageColorPalette);
  const paletteCombined = uniqueNonEmpty([colorPalette, imageColorPalette]);
  if (paletteCombined.length) styleParts.push(`featuring ${joinWithAnd(paletteCombined).toLowerCase()} tones`);

  // Scene type
  const sceneType = getValue(input.sceneType);
  if (sceneType) styleParts.push(`set in a ${sceneType} scene`);

  if (styleParts.length) {
    phrases.push(styleParts.join(", ") + ".");
  }

  // Camera angle, lighting mood
  const cameraAngle = getValue(input.cameraAngle);
  const lightingMood = getValue(input.lightingMood);
  if (cameraAngle || lightingMood) {
    phrases.push([
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
  if (texture) phrases.push(`The textures appear ${texture.toLowerCase()}.`);
  if (detail) phrases.push(`The scene is rendered in ${detail.toLowerCase()} resolution.`);
  if (techniqueParts.length) {
    phrases.push(`Created using ${joinWithAnd(techniqueParts)} techniques.`);
  }
  if (quality) phrases.push(`Quality: ${quality}.`);

  // Format
  const format = getValue(input.format);
  const imageFormat = getValue(input.imageFormat);
  const formatCombined = uniqueNonEmpty([format, imageFormat]);
  if (formatCombined.length) phrases.push(`The image format is ${joinWithAnd(formatCombined)}.`);

  // Composition
  const composition = getValue(input.composition) === "Other" ? getValue(input.compositionOther) : getValue(input.composition);
  const compositionType = getValue(input.compositionType);
  const compositionCombined = uniqueNonEmpty([composition, compositionType]);
  if (compositionCombined.length) {
    phrases.push(`The environment is composed using ${joinWithAnd(compositionCombined)}.`);
  }

  // Context/setting
  const context = getValue(input.context);
  const imageContext = getValue(input.imageContext);
  const contextCombined = uniqueNonEmpty([context, imageContext]);
  if (contextCombined.length) phrases.push(`Set in ${joinWithAnd(contextCombined)}.`);

  // Focal point
  const focalPoint = getValue(input.focalPoint) === "Other" ? getValue(input.focalPointOther) : getValue(input.focalPoint);
  if (focalPoint) phrases.push(`Focal point: ${focalPoint}.`);

  // Transformation
  const transformationTarget = getValue(input.transformationTarget);
  const transformationType = getValue(input.transformationType);
  const modificationLevel = getValue(input.modificationLevel);
  if (transformationTarget || transformationType || modificationLevel) {
    phrases.push([
      transformationTarget ? `Transformation target: ${transformationTarget}` : null,
      transformationType ? `Type: ${transformationType}` : null,
      modificationLevel ? `Level: ${modificationLevel}` : null
    ].filter(Boolean).join(". "));
  }

  // Remove element
  const elementToRemove = getValue(input.elementToRemove);
  if (elementToRemove) phrases.push(`Remove: ${elementToRemove}.`);

  // Emotion
  const imageEmotion = getValue(input.imageEmotion);
  if (imageEmotion) phrases.push(`Aim to evoke a feeling of ${imageEmotion.toLowerCase()}.`);

  // Custom comment
  const customComment = getValue(input.customComment);
  if (customComment) phrases.push(`Additional notes: ${customComment}`);

  // Era, narrative, context
  const historicalEra = getValue(input.historicalEra);
  const narrativeContext = getValue(input.narrativeContext);
  const narrativeCustomEra = getValue(input.narrativeCustomEra);
  if (historicalEra) phrases.push(`Set during the ${historicalEra} period.`);
  if (narrativeContext) phrases.push(`The story unfolds during the ${narrativeContext.toLowerCase()} era.`);
  if (narrativeCustomEra) phrases.push(`The scene reflects the historical setting of ${narrativeCustomEra}.`);

  // Extra/Additional elements
  const extraElements = uniqueNonEmpty(Array.isArray(input.extraElements) ? input.extraElements : typeof input.extraElements === 'string' ? [input.extraElements] : []);
  const additionalElements = uniqueNonEmpty(Array.isArray(input.additionalElements) ? input.additionalElements : typeof input.additionalElements === 'string' ? [input.additionalElements] : []);
  if (extraElements.length) {
    phrases.push(`Details like ${joinWithAnd(extraElements)} enrich the scene.`);
  }
  if (additionalElements.length) {
    phrases.push(`Additional elements like ${joinWithAnd(additionalElements)} are present in the scene.`);
  }

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

  // Combine all boost/atmospheric/special fields for a varied, cinematic phrasing
  const boostLines = [];
  if (surrealEffects.length) boostLines.push(`surreal effects like ${joinWithAnd(surrealEffects)}`);
  if (rareTextures.length) boostLines.push(`rare textures such as ${joinWithAnd(rareTextures)}`);
  if (specialLights.length) boostLines.push(`special lighting such as ${joinWithAnd(specialLights)}`);
  if (lightAndSpecialEffects.length) boostLines.push(`special lighting effects like ${joinWithAnd(lightAndSpecialEffects)}`);
  if (atmosphericEffects.length) boostLines.push(`atmospheric details such as ${joinWithAnd(atmosphericEffects)}`);
  if (narrativeElements.length) boostLines.push(`symbolic objects like ${joinWithAnd(narrativeElements)}`);
  if (emotionalTriggers.length) boostLines.push(`emotional undertones of ${joinWithAnd(emotionalTriggers)}`);
  if (boostLines.length) {
    phrases.push(`To enhance its impact, include ${boostLines.join(", ")}.`);
  }
  if (creativeMetaphor) {
    phrases.push(`Think of the scene as: "${creativeMetaphor}".`);
  }

  // Negative prompt
  const negativePrompt = getValue(input.negativePrompt);
  if (negativePrompt) {
    phrases.push(`Avoid elements such as: ${negativePrompt}.`);
  }

  return phrases.filter(Boolean).join(" ");
}