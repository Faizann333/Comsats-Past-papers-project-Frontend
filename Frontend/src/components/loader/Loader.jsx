
import React, { useContext } from 'react';
import { ThemeContext } from '../store/ThemeContext';
const Loader = () => {
    const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="relative w-24 h-24">
        {/* Orbit 1 */}
        <div className="absolute w-4 h-4 bg-purple-500 rounded-full animate-orbit1 top-0 left-1/2 -translate-x-1/2"></div>
        {/* Orbit 2 */}
        <div className="absolute w-4 h-4 bg-indigo-400 rounded-full animate-orbit2 top-0 left-1/2 -translate-x-1/2"></div>
        {/* Orbit 3 */}                          
        <div className="absolute w-4 h-4 bg-pink-500 rounded-full animate-orbit3 top-0 left-1/2 -translate-x-1/2"></div>

        {/* Center glow */}
        <div className="absolute w-6 h-6 bg-purple-700 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_#a855f7] animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loader;
