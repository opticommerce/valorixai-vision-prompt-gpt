import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("[AuthContext] Detected auth state change:", user);
      setUser(user);
      console.log("[AuthContext] Setting user:", user);
      // Firestore user doc creation logic
      const db = getFirestore();
      const createUserDocIfNotExists = async () => {
        if (!user?.uid || !user.email) return;
        const userRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userRef);
        if (!docSnap.exists()) {
          await setDoc(userRef, {
            email: user.email,
            isPro: false,
            promptCount: 0
          });
        }
      };
      createUserDocIfNotExists();
      setLoading(false);
      console.log("[AuthContext] Setting loading to false");
      console.log("[AuthContext] onAuthStateChanged:", { user, loading: false });
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("[AuthContext] State:", { user, loading });
  }, [user, loading]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}