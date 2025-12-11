import React, { useState } from "react";
import { Link } from "react-router-dom";

interface AuthFormProps {
  type: "login" | "signup";
  onSubmit?: (email: string, password: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (type === "signup" && password !== confirmPassword) {
      alert("Passwords do not match.");
      setLoading(false);
      return;
    }
    if (onSubmit) {
      await onSubmit(email, password);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-soft p-6 sm:p-8 flex flex-col gap-6 font-inter border border-gray-200 dark:border-gray-700"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-base placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-white">
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete={type === "signup" ? "new-password" : "current-password"}
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-base placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
          placeholder="Enter your password"
        />
      </div>
      {type === "signup" && (
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-white">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="bg-[#F5F5F5] dark:bg-[#2E2E2E] dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-base placeholder:text-gray-400 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition"
            placeholder="Confirm your password"
          />
        </div>
      )}
      {type === "signup" && (
        <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={e => setAcceptedTerms(e.target.checked)}
            required
            className="mt-1"
          />
          <label htmlFor="terms">
            I agree to the{" "}
            <a href="/terms" target="_blank" className="underline text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy-policy" target="_blank" className="underline text-primary">
              Privacy Policy
            </a>.
          </label>
        </div>
      )}
      <button
        type="submit"
        disabled={loading || (type === "signup" && !acceptedTerms)}
        className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-full shadow-lg transition-all duration-300 font-inter flex items-center justify-center gap-2 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
          {loading ? (type === "login" ? "Logging In..." : "Signing Up...") : type === "login" ? "Log In" : "Sign Up"}
        </span>
      </button>
      <div className="text-center mt-2">
        {type === "login" ? (
          <Link
            to="#"
            className="text-sm text-primary hover:underline transition-colors duration-200"
          >
            Forgot your password?
          </Link>
        ) : (
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary hover:underline transition-colors duration-200"
            >
              Log in
            </Link>
          </span>
        )}
      </div>
      {type === "login" && (
        <div className="text-center mt-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline transition-colors duration-200"
            >
              Sign up
            </Link>
          </span>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
