import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-darkbrown shadow-md text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/weatherly-logo.png"
              alt="Weatherly Logo"
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg">Weatherly</span>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="hover:text-gray-100 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-100 transition-colors">About</a>
            <a href="#" className="hover:text-gray-100 transition-colors">Contact</a>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <a
          href="https://meriumeedai.in"

          className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
>         Safe Mode
          </a>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-darkbrown px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="block text-sm hover:text-gray-100">Home</a>
          <a href="#" className="block text-sm hover:text-gray-100">About</a>
          <a href="#" className="block text-sm hover:text-gray-100">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navigation;
