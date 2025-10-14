import React from "react";
import { motion } from "framer-motion";
import { BookOpen, FileText, User, Calendar } from "lucide-react";
import Button from "../Button"

const PaperCard = ({ paper }) => {
  return (
    <motion.div
      key={paper._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 w-full max-w-md"
    >
      {/* Title */}
      <h1 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100 border-b pb-2">
        📄 Past Paper
      </h1>

      <div className="space-y-3">
        {/* Course Name */}
        <div className="flex items-center gap-3">
          <BookOpen className="text-blue-600 dark:text-blue-400 w-5 h-5" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {paper.courseName} ({paper.courseCode})
          </p>
        </div>

        {/* Exam Type */}
        <div className="flex items-center gap-3">
          <FileText className="text-green-600 dark:text-green-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            Exam Type: {paper.examType}
          </p>
        </div>

        {/* Instructor */}
        <div className="flex items-center gap-3">
          <User className="text-purple-600 dark:text-purple-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            Instructor: {paper.instructorName}
          </p>
        </div>

        {/* Uploader */}
        <div className="flex items-center gap-3">
          <User className="text-pink-600 dark:text-pink-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            Uploaded by: {paper.uploader}
          </p>
        </div>

        {/* Created Date */}
        <div className="flex items-center gap-3">
          <Calendar className="text-orange-600 dark:text-orange-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            {new Date(paper.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
        <Button name="Approve"/>
        <Button name="Delete"/>
        </div>
      
      </div>
    </motion.div>
  );
};

export default PaperCard;
