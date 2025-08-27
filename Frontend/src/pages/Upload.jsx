import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PastPapersContext } from '../components/store/Paper-List-Store';
import { ThemeContext } from '../components/store/ThemeContext';

const Upload = () => {
  const navigate = useNavigate();
  const { addPaper } = useContext(PastPapersContext);
  const { darkMode } = useContext(ThemeContext);

  const [instructorName, setIntructorName] = useState('');
  const [examType, setExamType] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [semester, setSemester] = useState('');

  const handlePaperSubmit = (e) => {
    e.preventDefault();

    const paperDetail = {
      id: Date.now(),
      instructorName,
      examType,
      courseName,
      courseCode,
      semester,
      status: 'pending'
    };

    addPaper(paperDetail);

    // reset form
    setIntructorName('');
    setExamType('');
    setCourseName('');
    setCourseCode('');
    setSemester('');

    navigate("/upload-paper/approval");
  };

  return (
    <div
      className={`flex flex-col items-center gap-5 w-full min-h-screen text-center pt-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="font-bold text-2xl">Enter detail of Past Paper</h1>

      <form
        onSubmit={handlePaperSubmit}
        className={`flex flex-col w-[320px] min-h-[320px] rounded p-4 gap-3 shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"
        }`}
      >
        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setIntructorName(e.target.value)}
          type="text"
          value={instructorName}
          placeholder="Enter Instructor Name"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setExamType(e.target.value)}
          type="text"
          value={examType}
          placeholder="Enter Exam Type i.e Final, Mid"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setCourseName(e.target.value)}
          type="text"
          value={courseName}
          placeholder="Enter Course Name"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setCourseCode(e.target.value)}
          type="text"
          value={courseCode}
          placeholder="Enter Course Code"
        />

        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setSemester(e.target.value)}
          type="text"
          value={semester}
          placeholder="Enter current semester i.e SP25"
        />

        <button
          type="submit"
          className={`rounded p-2 cursor-pointer font-semibold transition ${
            darkMode
              ? "bg-green-600 text-white hover:bg-green-500"
              : "bg-green-400 text-gray-900 hover:bg-green-500"
          }`}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
