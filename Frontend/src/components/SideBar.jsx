import React, { forwardRef } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
const SideBar = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="h-[600px] w-[130px] flex flex-col items-center shadow-2xl shadow-purple-600  bg-gray-800 absolute top-[100px] left-0 z-50">
            <ul className='flex flex-col items-center gap-3 pt-2 cursor-pointer'>
                <li className="font-bold text-base cursor-default">ADMIN PANEL</li>
                <li className="relative inline-block px-1">
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
                <li className="relative inline-block px-1">
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
                <li className="relative inline-block px-1">
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
                <li className="relative inline-block px-1">
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
