
import { motion } from "framer-motion";
import Button from "../Button"
import { User, BookOpen, Quote, Calendar } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <motion.div
      key={review._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 flex flex-col justify-between gap-7 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 w-[400px] max-w-md"
    >
      {/* Title */}
      <h1 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100 border-b pb-2">
        ⭐ Course Review
      </h1>

      {/* Review Info */}
      <div className="space-y-3">
        {/* Instructor */}
        <div className="flex items-center gap-3">
          <User className="text-blue-600 dark:text-blue-400 w-5 h-5" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Instructor: {review.instructorName}
          </p>
        </div>

        {/* Course */}
        <div className="flex items-center gap-3">
          <BookOpen className="text-green-600 dark:text-green-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            Course: {review.courseName}
          </p>
        </div>

        {/* Review Text */}
        <div className="flex items-start gap-3">
          <Quote className="text-purple-600 dark:text-purple-400 w-5 h-5 mt-1" />
          <p className="italic text-gray-700 dark:text-gray-300">
            "{review.review}"
          </p>
        </div>

        {/* Uploader */}
        <div className="flex items-center gap-3">
          <User className="text-pink-600 dark:text-pink-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            Uploaded by: {review.uploaderName} ({review.uploaderReg})
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-3">
          <Calendar className="text-orange-600 dark:text-orange-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            {new Date(review.createdAt).toLocaleDateString()}
          </p>
        </div>

      </div>
      <div className="flex gap-2">
        <Button name="Approve" />
        <Button name="Delete" />
      </div>
    </motion.div>
  );
};

export default ReviewCard;
