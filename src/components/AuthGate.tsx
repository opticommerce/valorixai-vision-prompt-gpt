import { useState, useEffect } from "react";

const PASSWORD = "valorix2025";

const AuthGate = ({ onUnlock }: { onUnlock: () => void }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const isAuthed = localStorage.getItem("valorix_auth") === "true";
    if (isAuthed) onUnlock();
  }, [onUnlock]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      localStorage.setItem("valorix_auth", "true");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-center px-4">
      <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-primaryText dark:text-white">
          Enter Access Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2E2E2E] text-black dark:text-white"
            placeholder="Enter password"
          />
          {error && (
            <p className="text-red-500 text-sm">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-2 rounded-md hover:brightness-110 transition"
          >
            Unlock Tool
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthGate;
