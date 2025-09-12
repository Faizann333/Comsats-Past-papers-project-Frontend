import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../components/store/ThemeContext";
import { ReviewListContext } from "../components/store/ReviewListContext";
import { postReview } from "../apis/reviewApi";

const UploadReview = () => {
  const { addReview } = useContext(ReviewListContext)
  const { darkMode } = useContext(ThemeContext);
  
  const [instructorName, setIntructorName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [review, setReview] = useState("");



  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        instructorName,
        courseName,
        review
      };
      const data = await postReview(reviewData);
      console.log(data);

      const reviewObj = {
        instructorName: data.data.instructorName,
        courseName: data.data.courseName,
        review: data.data.review,
        id: data.data._id
      };
      addReview(reviewObj)

      setIntructorName("")
      setCourseName('')
      setReview("")
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  }
  return (
    <div
      className={`flex flex-col items-center gap-5 w-full min-h-screen text-center pt-6 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
    >
      <h1 className="font-bold text-2xl">Enter Review of Instructors</h1>

      <form
        onSubmit={handleReviewSubmit}
        className={`flex flex-col w-[320px] min-h-[200px] rounded p-4 gap-3 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"
          }`}
      >
        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${darkMode
            ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
            : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
            }`}
          onChange={(e) => setIntructorName(e.target.value)}
          type="text"
          value={instructorName}
          placeholder="Enter Instructor Name"
        />
        <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${darkMode
            ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
            : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
            }`}
          onChange={(e) => setCourseName(e.target.value)}
          type="text"
          value={courseName}
          placeholder="Enter Course Name"
        />

        <textarea
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${darkMode
            ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
            : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
            }`}
          value={review}
          rows={5}
          placeholder="Enter Review (max 20 words)"
          onChange={(e) => {
            const text = e.target.value;
            const words = text.trim().split(/\s+/);


            if (words.length <= 25) {
              setReview(text);
            }
          }}
        />

        <p className="text-sm mt-1">
          {review.trim() === "" ? 0 : review.trim().split(/\s+/).length}/25 words
        </p>

        {/* <input
          className={`rounded p-2 focus:outline-none focus:ring-2 transition ${
            darkMode
              ? "bg-gray-700 border border-gray-600 text-white focus:ring-gray-500"
              : "bg-gray-100 border border-gray-400 text-gray-800 focus:ring-gray-500"
          }`}
          onChange={(e) => setCourseName(e.target.value)}
          type="text"
          value={courseName}
          placeholder="Enter Course Name"
        /> */}



        <button
          type="submit"
          className={`rounded p-2 cursor-pointer font-semibold transition ${darkMode
            ? "bg-gradient-to-r from-purple-800 to-purple-400 text-white hover:bg-purple-500"
            : "bg-gradient-to-r from-green-600 to-green-400 text-gray-900 hover:bg-green-500"
            }`}
        >
          Submit
        </button>
      </form>
    </div>
  );



}

export default UploadReview
