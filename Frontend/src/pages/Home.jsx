import React, { useContext } from "react";
import PaperCardList from "../components/paper/PaperCardList";
import { PastPapersContext } from "../components/store/PaperListContext";
import { ThemeContext } from "../components/store/ThemeContext";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);
  const { paperList } = useContext(PastPapersContext);
  const latestPapers = paperList.slice(0, 9);

  return (
    <div
      className={`w-full min-h-[600px] 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Hero Section */}
      <div
        className="relative w-full h-[450px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${
            darkMode
              ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              : "https://images.unsplash.com/photo-1521747116042-5a810fda9664"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60"></div>

        {/* Hero Text */}
        <h1
          className="relative z-10 text-3xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-green-400 to-purple-500 bg-clip-text text-transparent"
        >
          Welcome To Past Paper Portal
        </h1>
      </div>

      {/* Papers Section */}
      <h2
        className={`text-center font-bold text-2xl p-3 mt-7 mb-7
        ${darkMode ? "text-gray-100" : "text-gray-900"}`}
      >
        {paperList.length > 0
          ? "Here are Latest Uploaded Papers"
          : "No papers Found"}
      </h2>

      <PaperCardList paperList={latestPapers} />
    </div>
  );
};

export default Home;






// import React from 'react'
// import PaperCardList from "../components/paper/PaperCardList"

// import { PastPapersContext } from '../components/store/PaperListContext'
// import { useContext, useState } from "react";
// import { ThemeContext } from '../components/store/ThemeContext';
// const Home = () => {
//    const { darkMode } = useContext(ThemeContext);
//   const { paperList } = useContext(PastPapersContext);
//     const latestPapers = paperList.slice(0, 9);
  
//  return (
//   <div
//     className={`w-full min-h-[600px] 
//       ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
//   >
//     <h1
//       className={`text-center font-bold text-2xl p-3
//         ${darkMode ? "text-gray-100" : "text-gray-900"}`}
//     >
//      {paperList.length>0? 'Here are Latest Uploaded Papers' : 'No papers Found'} 
//     </h1>

//     <PaperCardList paperList={latestPapers} />
//   </div>
// );

// }

// export default Home
