import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const Logo = "/valorixlogodefinitivo-trasparente.png";

interface NavbarProps {
  logoText?: string;
  ctaText?: string;
  ctaLink?: string;
  showMenu?: boolean;
  showHomeLink?: boolean;
}

const Navbar = ({
  logoText = "ValorixAI Vision Prompt GPT",
  ctaText = "Start Building",
  ctaLink = "/prompt-builder",
  showMenu = true,
  showHomeLink = false,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const currentlyDark = document.documentElement.classList.contains("dark");
    if (currentlyDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-24 bg-secondary dark:bg-[#1A1A1A] text-foreground border-b border-border dark:border-gray-600 shadow-md dark:shadow-none fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-xl font-bold text-white dark:text-white font-inter">
              {logoText}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {showMenu && (
          <div className="hidden md:flex items-center space-x-6">
            {showHomeLink && (
              <Link
                to="/"
                className="text-white hover:text-primary transition-colors duration-200 font-inter font-semibold"
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="text-white hover:text-primary transition-colors duration-200 font-inter font-semibold"
            >
              About
            </Link>
            <Link
              to="/tutorials"
              className="text-white hover:text-primary transition-colors duration-200 font-inter font-semibold"
            >
              Tutorials
            </Link>
            <Link
              to="/examples"
              className="text-white hover:text-primary transition-colors duration-200 font-inter font-semibold"
            >
              Examples
            </Link>
            <Link
              to="/help-center"
              className="text-white hover:text-primary transition-colors duration-200 font-inter font-semibold"
            >
              Help Center
            </Link>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm font-medium text-white dark:text-white hover:text-primary dark:hover:text-primary transition-colors"
            >
              {isDark ? (
                <>
                  <Moon className="w-4 h-4 text-primary" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
            {window.location.pathname === "/prompt-builder" ? (
              <Link to="/">
                <motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -1,
                  }}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-full shadow-lg transition-all duration-300 font-inter flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                    Home
                  </span>
                </motion.button>
              </Link>
            ) : (
              <Link to="/prompt-builder">
                <motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -1,
                  }}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold text-base rounded-full shadow-lg transition-all duration-300 font-inter flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300">
                    Start Building
                  </span>
                </motion.button>
              </Link>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          className="text-white hover:text-primary dark:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && showMenu && (
        <div className="md:hidden bg-white dark:bg-[#1A1A1A] w-full py-4 px-4 border-t border-gray-200 dark:border-gray-600 shadow-md">
          <div className="flex flex-col space-y-4">
            {showHomeLink && (
              <Link
                to="/"
                className="text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link
              to="/about"
              className="text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/tutorials"
              className="text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              to="/examples"
              className="text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Examples
            </Link>
            <Link
              to="/help-center"
              className="text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Help Center
            </Link>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-black dark:text-white hover:text-primary transition-colors duration-200 py-2 font-inter font-semibold text-left"
            >
              {isDark ? (
                <>
                  <Moon className="w-4 h-4 text-primary" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
            {window.location.pathname === "/prompt-builder" ? (
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -1,
                  }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-full text-base font-semibold shadow-lg transition-all duration-300 font-inter group relative overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300 text-black dark:text-white">
                    Home
                  </span>
                </motion.button>
              </Link>
            ) : (
              <Link to="/prompt-builder" onClick={() => setIsMenuOpen(false)}>
                <motion.button
                  whileHover={{
                    scale: 1.06,
                    boxShadow: "0px 0px 18px rgba(132, 204, 22, 0.6)",
                  }}
                  whileTap={{
                    scale: 0.95,
                    rotate: -1,
                  }}
                  className="w-full px-8 py-4 bg-primary text-white rounded-full text-base font-semibold shadow-lg transition-all duration-300 font-inter group relative overflow-hidden"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 group-hover:tracking-wide transition-all duration-300 text-black dark:text-white">
                    Start Building
                  </span>
                </motion.button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
