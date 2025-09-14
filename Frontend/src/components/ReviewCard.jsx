import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

const ReviewCard = ({ review }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative h-[290px] w-[350px] rounded-2xl p-[5px] overflow-hidden">
      {/* Inner card */}
      <div
        className={`relative z-10 h-full w-full rounded-2xl shadow-lg border transition-all duration-300 
          ${darkMode ? "bg-gray-800 border-purple-500 text-gray-100" : "bg-white border-green-500 text-gray-900"}
        `}
      >
        {/* Top Section */}
        <div className="flex items-center justify-between p-3 border-b border-gray-300 ">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full tracking-wide 
              ${darkMode ? "bg-purple-500" : "bg-green-500"} text-white`}
          >
            Uploaded
          </span>
          <span className="text-xs italic opacity-80">
            by {review.uploaderName}
          </span>
        </div>

        {/* Review Content */}
        <div className="p-4 flex flex-col gap-2 text-sm">
          <div className="grid grid-cols-2 gap-y-2 gap-x-1">
            <span className="font-medium opacity-70">Instructor:</span>
            <span className="truncate">{review.instructorName}</span>

            <span className="font-medium opacity-70">Course:</span>
            <span className="truncate">{review.courseName}</span>

            <span className="font-medium opacity-70">Review:</span>
            <span className="whitespace-pre-wrap break-words">{review.review}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
