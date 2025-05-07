import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import React from "react";

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  isScrolled,
}) {
  // Add animation state for mobile menu
  const [menuAnimation, setMenuAnimation] = useState(false);

  // Handle animation on menu open/close
  useEffect(() => {
    if (mobileMenuOpen) {
      setMenuAnimation(true);
    } else {
      // Small delay before removing animation class
      const timer = setTimeout(() => {
        setMenuAnimation(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height offset to account for fixed navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-2 bg-gray-900/95 shadow-lg backdrop-blur-md" 
          : "py-3 bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold text-blue-400">SNAP</div>
            <div className="text-xl md:text-2xl font-bold text-white">FORGE</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative text-sm font-medium transition-colors group ${
                  activeSection === item 
                    ? "text-blue-400" 
                    : "text-white hover:text-blue-300"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button className="px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-md hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-white hover:bg-gray-800 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? 
              <X size={24} className="text-blue-400" /> : 
              <Menu size={24} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Animated */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? "opacity-100 top-16" 
            : "opacity-0 top-[-100%] pointer-events-none"
        } ${menuAnimation ? "block" : "hidden"}`}
      >
        <div className="flex flex-col space-y-1 p-4 mt-4">
          {["home", "services", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`flex items-center justify-between p-3 text-left rounded-lg transition-all ${
                activeSection === item 
                  ? "bg-blue-500/20 text-blue-400" 
                  : "text-white hover:bg-gray-800"
              }`}
            >
              <span className="text-lg font-medium">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <ChevronRight 
                size={18} 
                className={`transition-transform ${activeSection === item ? "text-blue-400" : ""}`} 
              />
            </button>
          ))}
          <div className="pt-6">
            <button className="w-full py-3 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-md text-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}