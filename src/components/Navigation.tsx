import React from "react";
import { Search } from "lucide-react";

const Navigation = () => {
  return (
    <header className="bg-darkbrown shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <img
              src="https://cdn.builder.io/api/v1/assets/77cbb1a1d74e4a5aa6cb648d4c6c25f0/image-b1875f?format=webp&width=800"
              alt="HopeBuddy Logo"
              className="w-8 h-8"
            />
            <span className="font-semibold text-lg">HopeBuddy</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#" className="hover:text-gray-100 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-gray-100 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-gray-100 transition-colors">
              Contact
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Example: Add a Search button or icon if needed */}
            {/* <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button> */}
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
              Safe Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
