import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

interface NavbarProps {
  logoText?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Navbar = ({
  logoText = "Etsy Prompt Builder",
  ctaText = "Get Started",
  ctaLink = "#prompt-builder",
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-24 bg-secondary text-white border-b border-secondary/20 shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <ShoppingBag size={28} className="text-etsy-brightOrange mr-2" />
            <span className="text-xl font-bold text-white font-inter">
              {logoText}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-white/80 hover:text-accent transition-colors font-inter font-semibold"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-white/80 hover:text-accent transition-colors font-inter font-semibold"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-white/80 hover:text-accent transition-colors font-inter font-semibold"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-accent transition-colors font-inter font-semibold"
          >
            About
          </Link>
          <a href={ctaLink}>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white font-medium rounded-full shadow-soft"
            >
              {ctaText}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-white hover:text-accent hover:bg-secondary/80"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary w-full py-4 px-4 border-t border-secondary/20 shadow-soft">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white/80 hover:text-accent transition-colors py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-white/80 hover:text-accent transition-colors py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-white/80 hover:text-accent transition-colors py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-white/80 hover:text-accent transition-colors py-2 font-inter font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a href={ctaLink} onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-medium rounded-full shadow-soft">
                {ctaText}
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
