import PaperCardList from "../components/PaperCardList";
import { useContext, useState } from "react";
import { ThemeContext } from '../components/store/ThemeContext';
import { PastPapersContext } from '../components/store/Paper-List-Store';

const PastPapers = () => {
  const { paperList } = useContext(PastPapersContext);
  const { darkMode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = paperList.filter((paper) =>
    paper.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.instructorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.examType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`flex flex-col items-center w-full min-h-[400px] p-6 transition-colors duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Search Bar */}
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className={`w-[600px] p-2 m-2 border rounded focus:outline-none transition-colors duration-300
          ${darkMode ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400" : "bg-white border-gray-400 text-black placeholder-gray-600"}`}
        type="text"
        placeholder="Search by Course, Instructor, Exam Type, or Code"
      />

      {/* Title */}
      <h1 className="text-center font-bold text-2xl mb-4">Past Papers</h1>

      {/* Papers List */}
      {filteredPapers.length > 0 ? (
        <PaperCardList paperList={filteredPapers} />
      ) : (
        <h2 className="mt-6 text-lg font-medium text-red-500">
          ❌ No Papers Found
        </h2>
      )}
    </div>
  );
};

export default PastPapers;
