import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext , useRef,useEffect } from "react";
import { ThemeContext } from "./store/ThemeContext";

const UploadDropdown = () => {
  const [open, setOpen] = useState(false);
    const { darkMode } = useContext(ThemeContext);
    const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left"  ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`px-4 py-2  ${darkMode ? 'text-white' : 'text-black' } rounded-md shadow-md  transition`}
      >
        Upload ⬇
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className={`absolute mt-2 w-48   ${darkMode ? 'backdrop-blur-md bg-gray-900/70' : 'bg-white '} border rounded-xl shadow-lg z-50`}>
          <NavLink
            to="/upload/paper"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-t-lg
             ${darkMode ? 'text-white hover:bg-black' : 'text-black hover:bg-black hover:text-white' }
            
           ` }
            onClick={() => setOpen(false)} // close dropdown on click
          >
            Upload Paper
          </NavLink>
          <NavLink
            to="/upload/review"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-b-lg 
              ${darkMode ? 'text-white hover:bg-black' : 'text-black  hover:bg-black hover:text-white' }`}
            onClick={() => setOpen(false)} // close dropdown on click
          >
            Upload Review
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UploadDropdown;
