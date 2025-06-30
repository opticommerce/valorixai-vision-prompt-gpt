import { doc, getDoc, updateDoc, increment, getFirestore } from "firebase/firestore";
import { app } from "../utils/firebase";

// Initialize Firestore instance
const db = getFirestore(app);

export const MAX_DEMO_PROMPTS = 5;

export async function getUserData(uid: string): Promise<Record<string, any> | null> {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      return userDocSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export async function incrementPromptCount(uid: string): Promise<void> {
  try {
    const userDocRef = doc(db, "users", uid);
    await updateDoc(userDocRef, {
      promptCount: increment(1),
    });
  } catch (error) {
    console.error("Error incrementing prompt count:", error);
    throw error;
  }
}
