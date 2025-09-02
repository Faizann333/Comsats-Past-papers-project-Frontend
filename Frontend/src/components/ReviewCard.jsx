import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

const reviewCard = ({review }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="relative rounded-2xl p-[3px] overflow-hidden h-[230px] w-[350px]">
      {/* Animated gradient border */}
    

      {/* Inner card (real content area) */}
      <div
        className={` border  relative z-10 rounded-2xl overflow-hidden shadow-md
          ${darkMode ? "bg-gray-800  border-purple-500 text-gray-100" : "bg-white  border-green-500 text-gray-900"}
        `}
      >
       

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
              by {review.uploader || "SP25-CSE-41"}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
            <span className="font-semibold opacity-70">Instructor:</span>
            <span>{review.instructorName}</span>
            <span className="font-semibold opacity-70">Course Name:</span>
            <span>{review.courseName}</span>

            <span className="font-semibold opacity-70">Review :</span>
            <span>{review.review}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default reviewCard;
