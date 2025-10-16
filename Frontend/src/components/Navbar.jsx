import { useState, useEffect, useContext,useRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Button from "./Button";
import { FiAlignJustify } from "react-icons/fi";
import { ThemeContext } from "./store/ThemeContext";
import UploadDropdown from "./UploadDropdown";
import { postLogout } from "../apis/authApi";
import { AuthContext } from "./store/AuthContext";
import SideBar from "./SideBar";
const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const sidebarRef = useRef(null);
    const toggleButtonRef = useRef(null);
  const postLogoutHandle = async () => {
    try {
      const response = await postLogout();
      console.log("Logout successful:", response);
      setUser(null); // Clear user context on logout
      navigate('/login');

    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

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

  //sidebar functunality
    useEffect(() => {
   const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && toggleButtonRef.current
    &&  !toggleButtonRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`h-[100px] sticky top-[-21px] z-50 w-full flex justify-between items-center p-10
    transition-all duration-300 ease-in-out 
    ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-black"}
    ${isScrolled ? "shadow-xl" : "shadow-none"}
  `}
    >
      <div className="flex items-center justify-center gap-4">
        {/* 3-lines icon */}
        {user && 
        <button
         ref={toggleButtonRef}
          onClick={() => {
         
              setIsSidebarOpen(prev=>(!prev))
            
          }}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <FiAlignJustify className="font-bold text-2xl"/>
        </button>
        }

        {/* Logo */}
        <h1 className="font-bold text-2xl">LOGO</h1>
      </div>
      {isSidebarOpen &&

        
         <SideBar  ref={sidebarRef} />
        }


      {/* Navigation Links */}
      <nav className="flex items-center">
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

          {user && (<>

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

            <li className="relative inline-block px-1 md:hidden">
              <NavLink
                to="/contributions"
                className={({ isActive }) =>
                  `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
       before:h-[2px] before:w-0 before:transition-all before:duration-300  md:hidden
       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                }
              >
                Contributions
              </NavLink>
            </li>

            <li className="md:hidden">
              <UploadDropdown />
            </li>

          </>)}
        </ul>
      </nav>



      {/* Right-side buttons */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        {user &&
          (
            <>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`px-3 py-1 rounded-md transition-colors duration-300
            ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}
          `}
              >
                {darkMode ? "☀️ Light" : "🌙 Dark"}
              </button>


              {/* Notification Bell */}
              <button className="relative hidden">
                <span className="text-2xl">🔔</span>
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                  3
                </span>
              </button>
            </>)}


        {/* Auth Buttons */}
        {user ?
          <Button name="Log Out" onClick={postLogoutHandle} />
          :
          (
            <>

              <Button onClick={() => navigate('/login')} name="Login" />
              <Button onClick={() => navigate('/signup')} name="Signup" />
            </>
          )
        }


      </div>
    </header >
  );
};

export default Navbar;
