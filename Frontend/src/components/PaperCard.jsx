import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

const PaperCard = ({ paper }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-[320px] w-[250px]  rounded-lg shadow-2xl overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-800 border border-gray-700 text-gray-100" : "bg-white border border-gray-300 text-gray-800"
      }`}
    >
      {/* Thumbnail */}
      <img
        className="w-full h-[180px] object-cover"
        src="https://tse1.mm.bing.net/th/id/OIF.5PAMN9xRlbjR2ZQz7i2qUQ?pid=Api&P=0&h=180"
        alt="Past Paper"
      />

      {/* Paper Info */}
      <div className="p-3 space-y-1 text-sm">
        <h1><strong>Uploaded By:</strong> Ali</h1>
        <h1><strong>Instructor:</strong> {paper.instructorName}</h1>
        <h1><strong>Course:</strong> {paper.courseName}</h1>
        <h1><strong>Code:</strong> {paper.courseCode}</h1>
        <h1><strong>Exam:</strong> {paper.examType}</h1>
        <h1><strong>Semester:</strong> {paper.semester}</h1>
      </div>
    </div>
  );
};

export default PaperCard;
