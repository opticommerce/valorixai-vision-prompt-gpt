import { ExtendedFormData } from "@/types/prompt";

function isNonEmpty(val: any) {
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "string") return val.trim() !== "";
  return val !== undefined && val !== null;
}

export default function mergeWithExistingFormData(
  existingData: Partial<ExtendedFormData>,
  randomPreset: Partial<ExtendedFormData>
): Partial<ExtendedFormData> {
  const merged: Partial<ExtendedFormData> = {};
  const allKeys = new Set([
    ...Object.keys(existingData || {}),
    ...Object.keys(randomPreset || {})
  ]);
  for (const key of allKeys) {
    const userVal = existingData[key];
    const presetVal = randomPreset[key];
    if (isNonEmpty(userVal)) {
      merged[key] = userVal;
    } else if (presetVal !== undefined) {
      merged[key] = presetVal;
    }
  }
  return merged;
}
