import { useState } from "react";
import AuthForm from "@/components/Auth/AuthForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/prompt");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full">
        <AuthForm type="login" onSubmit={handleLogin} />
        {error && (
          <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
        )}
      </div>
    </div>
  );
}