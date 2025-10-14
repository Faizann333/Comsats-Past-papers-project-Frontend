import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { AuthContext } from "../store/AuthContext";
import Button from "../Button";

const PaperCard = ({ paper }) => {
  const { darkMode } = useContext(ThemeContext);

  const pdfViewerHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!paper.fileUrl) {
      alert("File not available yet!");
      console.warn("Missing fileUrl in paper:", paper);
      return;
    }

    // Ensure full HTTPS Cloudinary URL
    const url = paper.fileUrl.startsWith("http")
      ? paper.fileUrl
      : `https://${paper.fileUrl}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative rounded-2xl p-[3px] overflow-hidden min-w-[300px]">
      {/* Animated gradient border */}
      <div
        className="
          absolute inset-0 rounded-2xl
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl
          before:bg-[linear-gradient(90deg,#a855f7,#ec4899,#22c55e,#3b82f6,#a855f7)]
          before:bg-[length:300%_300%] before:animate-[borderLoop_6s_linear_infinite]
        "
      ></div>

      {/* Inner card */}
      <div
        className={`relative z-10 rounded-2xl overflow-hidden shadow-md
          ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
        `}
      >
        {/* Thumbnail */}
        <img
          className="w-full h-[150px] object-cover rounded-t-2xl"
          src="https://tse4.mm.bing.net/th/id/OIP.CP4miLwLcuVjZcEJ453NuAHaFj?pid=Api&P=0&h=180"
          alt="Past Paper"
        />

        {/* Paper Info */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                darkMode ? "bg-purple-500" : "bg-green-500"
              } text-white`}
            >
              Uploaded
            </span>
            <span className="text-xs italic opacity-80">
              by {paper.uploader}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
            <span className="font-semibold opacity-70">Instructor:</span>
            <span>{paper.instructorName}</span>

            <span className="font-semibold opacity-70">Course:</span>
            <span>{paper.courseName}</span>

            <span className="font-semibold opacity-70">Code:</span>
            <span>{paper.courseCode}</span>

            <span className="font-semibold opacity-70">Exam:</span>
            <span className="capitalize">{paper.examType}</span>

            <span className="font-semibold opacity-70">Semester:</span>
            <span>{paper.semester}</span>
          </div>

          {/* Open PDF */}
          <Button name="See Detail" onClick={pdfViewerHandler} />
        </div>
      </div>
    </div>
  );
};

export default PaperCard;







// import { useContext } from "react";
// import { ThemeContext } from "../store/ThemeContext";
// import { AuthContext } from "../store/AuthContext";
// import Button from "../Button";

// const PaperCard = ({ paper }) => {

//   const { darkMode } = useContext(ThemeContext);

//   const pdfViewerHandler = () => {
//     window.open(paper.fileUrl, "_blank");
//   }

//   return (
//     <div className="relative rounded-2xl p-[3px] overflow-hidden min-w-[300px]">
//       {/* Animated gradient border */}
//       <div
//         className="
//           absolute inset-0 rounded-2xl
//           before:content-[''] before:absolute before:inset-0 before:rounded-2xl
//           before:bg-[linear-gradient(90deg,#a855f7,#ec4899,#22c55e,#3b82f6,#a855f7)]
//           before:bg-[length:300%_300%] before:animate-[borderLoop_6s_linear_infinite]
//         "
//       ></div>

//       {/* Inner card (real content area) */}
//       <div
//         className={`relative z-10 rounded-2xl overflow-hidden shadow-md
//           ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
//         `}
//       >
//         {/* Thumbnail */}
//         <img
//           className="w-full h-[150px] object-cover rounded-t-2xl"
//           src="https://tse4.mm.bing.net/th/id/OIP.CP4miLwLcuVjZcEJ453NuAHaFj?pid=Api&P=0&h=180"
//           alt="Past Paper"
//         />

//         {/* Paper Info */}
//         <div className="p-4 flex flex-col gap-3">
//           <div className="flex justify-between items-center">
//             <span
//               className={`text-xs font-medium px-2 py-1 rounded-full ${
//                 darkMode ? "bg-purple-500" : "bg-green-500"
//               } text-white`}
//             >
//               Uploaded
//             </span>
//             <span className="text-xs italic opacity-80">
//               by {paper.uploader}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
//             <span className="font-semibold opacity-70">Instructor:</span>
//             <span>{paper.instructorName}</span>

//             <span className="font-semibold opacity-70">Course:</span>
//             <span>{paper.courseName}</span>

//             <span className="font-semibold opacity-70">Code:</span>
//             <span>{paper.courseCode}</span>

//             <span className="font-semibold opacity-70">Exam:</span>
//             <span className="capitalize">{paper.examType}</span>

//             <span className="font-semibold opacity-70">Semester:</span>
//             <span>{paper.semester}</span>
//           </div>
//           <Button name="See Detail" onClick={pdfViewerHandler}/> 
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaperCard;
