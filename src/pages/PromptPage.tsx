import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import PromptBuilder from "@/components/PromptGenerator/PromptBuilder";
import { fields } from "@/utils/decisionTreeLogic";
import Layout from "@/components/Layout";
import PromptOutput from "@/components/PromptGenerator/PromptOutput";
import generateRandomPromptData from "@/utils/generateRandomPromptData";
import { useAuth } from "@/contexts/AuthContext";
import { getUserData, incrementPromptCount, MAX_DEMO_PROMPTS } from "../utils/firebaseUserData";
import { useToast } from "@/components/ui/use-toast";

export default function PromptPage() {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [formData, setFormData] = useState<any>({});
  const [errors, setErrors] = useState({});
  const [mode, setMode] = useState<"text" | "image">("text");

  const [promptCount, setPromptCount] = useState<number>(0);
  const [isPro, setIsPro] = useState<boolean>(false);
  const [loadingUserData, setLoadingUserData] = useState<boolean>(true);

  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    let ignore = false;
    const fetchUserData = async () => {
      if (user && user.uid) {
        setLoadingUserData(true);
        const data = await getUserData(user.uid);
        if (!ignore && data) {
          setPromptCount(typeof data.promptCount === "number" ? data.promptCount : 0);
          setIsPro(!!data.isPro);
        }
        setLoadingUserData(false);
      } else {
        setPromptCount(0);
        setIsPro(false);
        setLoadingUserData(false);
      }
    };
    fetchUserData();
    return () => { ignore = true; };
  }, [user]);

  const showLimitReached = () => {
    toast({
      title: "Demo limit reached",
      description: "You've used all your free prompts. Unlock unlimited access!",
      variant: "destructive",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string | number, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  async function handleRandomPromptClick() {
    if (!isPro && promptCount >= MAX_DEMO_PROMPTS) {
      showLimitReached();
      return;
    }
    const randomData = generateRandomPromptData(mode);
    const merged = { ...formData };
    Object.entries(randomData).forEach(([key, value]) => {
      const current = formData[key];
      if (typeof value === "string") {
        if (!current || (typeof current === "string" && current.trim() === "")) {
          merged[key] = value;
        }
      } else if (Array.isArray(value)) {
        if (!Array.isArray(current) || current.length === 0) {
          merged[key] = value;
        }
      } else if (value !== undefined && current === undefined) {
        merged[key] = value;
      }
    });
    setFormData(merged);
    setGeneratedPrompt((randomData as any).generatedPrompt || "");
    if (!isPro && user && user.uid) {
      await incrementPromptCount(user.uid);
      setPromptCount((prev) => prev + 1);
    }
  }

  async function handleGeneratePrompt(prompt: string) {
    setGeneratedPrompt(prompt);
    if (!isPro && user && user.uid) {
      await incrementPromptCount(user.uid);
      setPromptCount((prev) => prev + 1);
    }
  }

  return (
    <Layout>
      <main className="bg-white dark:bg-[#0e0e0e] py-6 sm:py-10 px-2 sm:px-6 lg:px-16 xl:px-24 space-y-8 sm:space-y-12">
        <div className="text-center space-y-3 sm:space-y-4 mt-8 sm:mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-text dark:text-white font-inter">
            ValorixAI Vision Prompt GPT
          </h1>
          <p className="text-base sm:text-lg text-secondary-text dark:text-gray-300 font-inter">
            Advanced prompt builder for ChatGPT.
            Structure complex visual scenes with precision over lighting, framing, and artistic direction.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-start">
          <PromptBuilder
            fields={fields}
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
            generatedPrompt={generatedPrompt}
            setGeneratedPrompt={setGeneratedPrompt}
            setFormData={setFormData}
            onRandomPrompt={handleRandomPromptClick}
            handleGeneratePrompt={handleGeneratePrompt}
          />
          <PromptOutput 
            prompt={generatedPrompt} 
            isLoading={false} 
            handleRandomPromptClick={handleRandomPromptClick}
            promptCount={promptCount}
            MAX_DEMO_PROMPTS={MAX_DEMO_PROMPTS}
            isPro={isPro}
            loadingUserData={loadingUserData}
          />
        </div>
      </main>
    </Layout>
  );
}