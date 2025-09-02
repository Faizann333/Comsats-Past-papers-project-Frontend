import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { ThemeContext } from "./store/ThemeContext";
import UploadDropdown from "./UploadDropdown";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-[100px] sticky top-[-21px] z-50 w-full flex justify-between items-center p-10
    transition-all duration-300 ease-in-out 
    ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"}
    ${isScrolled ? "shadow-xl" : "shadow-none"}
  `}
    >
      <h1 className="font-bold text-xl">LOGO</h1>

      {/* Navigation Links */}
      <nav>
        <ul className="flex gap-6 items-center">
          <li className="relative inline-block px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="relative inline-block px-1">
            <NavLink
              to="/past-papers"
              className={({ isActive }) =>
                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
              }
            >
              Past Papers
            </NavLink>
          </li>
          <li className="relative inline-block px-1">
            <NavLink
              to="/reviews"
              className={({ isActive }) =>
                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
              }
            >
              Reviews
            </NavLink>
          </li>
          <li className="relative inline-block px-1">
            <NavLink
              to="/meet-admin"
              className={({ isActive }) =>
                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
              }
            >
              Meet Admin
            </NavLink>
          </li>
          
          <li className="relative inline-block px-1">
            <NavLink
              to="/contributions"
              className={({ isActive }) =>
                `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300 
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
              }
            >
              Contributions
            </NavLink>
          </li>
           <li>
            <UploadDropdown/>
          </li>

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
        <Button name="Log Out" />
        
      </div>
    </header >
  );
};

export default Navbar;
