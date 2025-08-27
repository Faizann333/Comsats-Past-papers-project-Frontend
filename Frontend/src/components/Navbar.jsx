import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

const Navbar = () => {
   const  { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header
      className={`h-[100px] sticky top-[-21px] z-50 w-full flex justify-between items-center p-10 transition-colors duration-300
        ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"}
      `}
    >
      <h1 className="font-bold text-xl">LOGO</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6">
          <li className="hover:underline"><Link to="/">Home</Link></li>
          <li className="hover:underline"><Link to="/Past-Papers">Past Papers</Link></li>
          <li className="hover:underline"><Link to="/upload-paper">Upload Papers</Link></li>
          <li className="hover:underline"><Link to="/meet-admin">Meet Admin</Link></li>
        </ul>
      </nav>

      {/* Right-side buttons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-md transition-colors duration-300
            ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}
          `}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Notification Bell */}
        <button className="relative">
          <span className="text-2xl">🔔</span>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Auth Buttons */}
        <Button name="Login" />
        <Button name="Sign Up" />
      </div>
    </header>
  );
};

export default Navbar;
