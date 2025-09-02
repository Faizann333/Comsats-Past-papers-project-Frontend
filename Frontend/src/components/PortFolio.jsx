import React from "react";

const PortFolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white px-4">
      
      {/* Big Coming Soon Text */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6 animate-pulse">
        🚀 Coming Soon
      </h1>

      {/* Sub Text */}
      <p className="text-lg md:text-2xl text-gray-100 mb-8 text-center max-w-xl">
        I’m working on something amazing! Stay tuned for my portfolio launch.  
      </p>

      {/* Loading Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

      {/* Footer */}
      <p className="mt-10 text-sm opacity-80">
        © {new Date().getFullYear()} Faizan Ahmed | Portfolio
      </p>
    </div>
  );
};

export default PortFolio;
