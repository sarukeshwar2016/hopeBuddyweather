import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4b2e24] text-white py-4 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold">HopeBuddy Weather © {new Date().getFullYear()}</p>
          <p>Crafted with ❤️ to keep you weather-wise and well-prepared.</p>
        </div>
        <div className="text-center md:text-right space-x-4">
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Powered by OpenWeather
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
