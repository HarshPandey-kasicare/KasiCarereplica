import React, { useState } from "react";
import Logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector("nav");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div>
      <nav className="py-4 px-6 flex justify-between items-center bg-white fixed top-0 w-full z-50 shadow-sm">
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="logo" className="h-14" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("affiliate")}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Affiliate program
          </button>
          <button className="px-4 py-2 bg-[#240848] text-white rounded-md hover:bg-opacity-90 transition-colors">
            <a href="https://www.pracflow.ai/login">Login/Sign Up</a>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay with transitions */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop with fade transition */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content with slide transition */}
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu items with fade-in transition */}
          <div className="px-4 py-2 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-gray-900 py-2 transition-colors text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-gray-900 py-2 transition-colors text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("affiliate")}
              className="text-gray-700 hover:text-gray-900 py-2 transition-colors text-left"
            >
              Affiliate program
            </button>
            <button
              className="px-4 py-2 bg-[#240848] text-white rounded-md hover:bg-opacity-90 transition-colors w-full"
             
            >
              <a href="https://www.pracflow.ai/login">
              Login/Sign Up
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
