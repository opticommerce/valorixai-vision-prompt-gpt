import type { NextApiRequest, NextApiResponse } from "next";
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { app } from "@/utils/firebase";

const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Parse x-www-form-urlencoded
    const body = typeof req.body === "string"
      ? Object.fromEntries(new URLSearchParams(req.body))
      : req.body;
    const email = body.purchaser_email;
    if (!email) {
      return res.status(400).json({ error: "Missing purchaser_email" });
    }

    // Query Firestore for user with matching email
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update isPro for the first matching user
    const userDoc = querySnapshot.docs[0];
    await updateDoc(doc(db, "users", userDoc.id), { isPro: true });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error("Gumroad webhook error:", error);
    return res.status(500).json({ error: error.message || "Internal server error" });
  }
}
