import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  isScrolled,
}) {
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
      className={`mb-4 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-gray-900 shadow-lg backdrop-blur-lg" : "py-4 bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold text-blue-400">SNAP</div>
            <div className="text-xl font-bold text-white">FORGE</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium text-white hover:text-blue-400 transition-colors ${
                  activeSection === item ? "text-blue-400" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button className="px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-700"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {["home", "services", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`p-2 text-left text-white hover:bg-gray-700 rounded transition-colors ${
                  activeSection === item ? "text-blue-400" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button className="mt-2 px-4 py-2 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
