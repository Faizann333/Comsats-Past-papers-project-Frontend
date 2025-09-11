import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";


const Button = ({name,onClick}) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <button  onClick={onClick} className={`${darkMode ?  " text-white bg-gradient-to-r from-purple-800 to-purple-500 hover:from-purple-900 hover:to-purple-400": "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300"} p-2 w-full rounded-xl cursor-pointer `}>{name}</button>
    </div>
  )
}

export default Button
