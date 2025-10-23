import PaperCardList from "../components/paper/PaperCardList";
import { FaSearchDollar } from "react-icons/fa";
import { useContext, useState,useEffect } from "react";
import { ThemeContext } from '../components/store/ThemeContext';
import { PastPapersContext } from '../components/store/PaperListContext';
import Loader from "../components/loader/Loader";

const PastPapers = () => {
  const { loading } = useContext(PastPapersContext);
  const { paperList  } = useContext(PastPapersContext);
  const { darkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');


  const filteredPapers = paperList.filter((paper) =>
    paper.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.instructorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.examType.toLowerCase().includes(searchQuery.toLowerCase())
  );

   if (loading) {
    return <Loader />; // show loader while fetching papers
  }

  return (
    <div
      className={`flex flex-col items-center w-full min-h-[400px] p-6 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Search Bar */}
      <div className="relative w-[300px] sm:w-[600px]">

        <FaSearchDollar className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-lg
    ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        />
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className={`w-full p-2 pl-10 rounded-md border placeholder:text-xs sm:placeholder:text-lg  focus:outline-none focus:ring-2 transition-colors duration-300
      ${darkMode
              ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-green-500"
              : "bg-white border-gray-300 text-black placeholder-gray-500  focus:ring-green-400"}`}
          type="text"
          placeholder="Search by Course, Instructor, Code or Exam Type"
        />
      </div>



      <h1 className="text-center text-2xl font-bold sm:text-4xl mt-3 mb-4">Past Papers</h1>

      {/* Papers List */}
      {filteredPapers.length > 0 ? (
        <PaperCardList paperList={filteredPapers} />
      ) : (
       
        <h2 className="mt-6 text-lg font-medium text-gray-500">
           No Papers Found
        </h2>
      )}
    </div>
  );
};

export default PastPapers;
