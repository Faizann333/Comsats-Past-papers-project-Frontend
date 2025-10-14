import React from "react";
import { motion } from "framer-motion";
import { Mail, User, Hash, Phone } from "lucide-react";
import Button from  "../Button"

const UserCard = ({ user }) => {
  return (
    <motion.div
      key={user._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 w-[400px] max-w-md"
    >
      {/* Title */}
      <h1 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100 border-b pb-2">
        👤 Registered User
      </h1>

      {/* User Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <User className="text-purple-600 dark:text-purple-400 w-5 h-5" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {user.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-green-600 dark:text-green-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <Hash className="text-blue-600 dark:text-blue-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            {user.registrationNumber}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-pink-600 dark:text-pink-400 w-5 h-5" />
          <p className="text-gray-600 dark:text-gray-400">
            {user.watsappNumber}
          </p>
        </div>
        <Button name="Delete"/>
      </div>
    </motion.div>
  );
};

export default UserCard;
