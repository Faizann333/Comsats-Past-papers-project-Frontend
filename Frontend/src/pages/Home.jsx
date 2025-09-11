import React from 'react'
import PaperCardList from "../components/paper/PaperCardList"

import { PastPapersContext } from '../components/store/PaperListContext'
import { useContext, useState } from "react";
import { ThemeContext } from '../components/store/ThemeContext';
const Home = () => {
   const { darkMode } = useContext(ThemeContext);
  const { paperList } = useContext(PastPapersContext);
    const latestPapers = paperList.slice(0, 10);
    console.log(latestPapers)
 return (
  <div
    className={`w-full min-h-[600px] 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
  >
    <h1
      className={`text-center font-bold text-2xl p-3
        ${darkMode ? "text-gray-100" : "text-gray-900"}`}
    >
     {paperList.length>0? 'Here are Latest Uploaded Papers' : 'No papers Found'} 
    </h1>

    <PaperCardList paperList={latestPapers} />
  </div>
);

}

export default Home
