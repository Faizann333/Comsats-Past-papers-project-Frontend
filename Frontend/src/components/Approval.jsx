import  { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

const Approval = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-800' : 'bg-green-100'}`}>
      <h1 className="text-3xl font-bold text-green-700">
        ✅ Paper submitted! Waiting for approval.
      </h1>
    </div>
  );
};

export default Approval;
