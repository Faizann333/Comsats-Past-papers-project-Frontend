import React, { forwardRef, useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import UploadDropdown from "./UploadDropdown";
import { ThemeContext } from "./store/ThemeContext";

const SideBar = forwardRef((props, ref) => {

    const { darkMode } = useContext(ThemeContext);
    return (
        <div ref={ref} className={`h-[800px] w-[130px] flex flex-col items-center shadow-2xl shadow-purple-600   absolute top-[100px] left-0 z-50 bg-gray-800
        ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            <ul className='flex flex-col items-center gap-3 pt-2 cursor-pointer'>

                <li className="relative inline-block px-1 sm:hidden">
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

                <li className="relative inline-block px-1 sm:hidden">
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

                <li className="relative inline-block px-1 sm:hidden">
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



                <li className=" relative px-1 md:hidden">
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

                <li className="relative inline-block px-1 lg:hidden">
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

                <li className="relative inline-block px-1 lg:hidden">
                    <NavLink
                        to="/upload/paper"
                        className={({ isActive }) =>
                            `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                       before:h-[2px] before:w-0 before:transition-all before:duration-300 
                       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
                       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                        }
                    >
                        Upload Paper
                    </NavLink>
                </li>

                <li className="relative inline-block px-1 lg:hidden">
                    <NavLink
                        to="/upload/review"
                        className={({ isActive }) =>
                            `relative inline-block px-1 before:content-[''] before:absolute before:-bottom-1 before:left-0 
                       before:h-[2px] before:w-0 before:transition-all before:duration-300 
                       ${darkMode ? "before:bg-purple-500" : "before:bg-black"} 
                       ${isActive ? "before:w-full" : "hover:before:w-full"}`
                        }
                    >
                        Upload Review
                    </NavLink>
                </li>


                <li className=" hidden font-bold text-base cursor-default">ADMIN PANEL</li>
                <li className="hidden relative  px-1">
                    <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) =>
                            `relative inline-block px-1 
       before:content-[''] 
       before:absolute 
       before:-bottom-1 
       before:left-0 
       before:h-[2px] 
       before:bg-purple-500 
       before:transition-all 
       before:duration-300 
       ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="relative hidden px-1">
                    <NavLink
                        to="/admin/papers"
                        className={({ isActive }) =>
                            `relative inline-block px-1 
       before:content-[''] 
       before:absolute 
       before:-bottom-1 
       before:left-0 
       before:h-[2px] 
       before:bg-purple-500 
       before:transition-all 
       before:duration-300 
       ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
                        }
                    >
                        Papers
                    </NavLink>
                </li>
                <li className="relative hidden px-1">
                    <NavLink
                        to="/admin/reviews"
                        className={({ isActive }) =>
                            `relative inline-block px-1 
       before:content-[''] 
       before:absolute 
       before:-bottom-1 
       before:left-0 
       before:h-[2px] 
       before:bg-purple-500 
       before:transition-all 
       before:duration-300 
       ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
                        }
                    >
                        Reviews
                    </NavLink>
                </li>
                <li className="relative hidden px-1">
                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `relative inline-block px-1 
       before:content-[''] 
       before:absolute 
       before:-bottom-1 
       before:left-0 
       before:h-[2px] 
       before:bg-purple-500 
       before:transition-all 
       before:duration-300 
       ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`
                        }
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
)

export default SideBar
