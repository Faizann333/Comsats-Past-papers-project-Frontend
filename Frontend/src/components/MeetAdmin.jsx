import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaUsers } from "react-icons/fa";
import { ThemeContext } from "./store/ThemeContext";

const MeetAdmin = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`shadow-xl rounded-lg max-w-md w-full text-center p-8 transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        {/* Profile Image */}
        <img
          className="w-[200px] h-[200px] object-cover rounded-full mx-auto border-4 border-gray-300"
          src="/src/assets/profilePic2.jpg"
          alt="Admin"
        />

        {/* Name & Role */}
        <h1
          className={`mt-4 text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Faizan Ahmed
        </h1>
        <p
          className={`${
            darkMode ? "text-gray-400" : "text-gray-600"
          } transition`}
        >
          MERN Stack Developer | Developer of UniPastPapers | UnderGraduate Student at Comsats Wah
        </p>

        {/* About */}
        <p
          className={`mt-4 text-sm leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Passionate about building useful applications.  
          I created <span className="font-semibold">UniPastPapers</span> to help my fellow students prepare better for exams by accessing past papers easily.
        </p>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-6 mt-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <a href="mailto:mrfaizanmughal333@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="text-2xl hover:text-red-500 transition" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            <FaGithub
              className={`text-2xl transition ${
                darkMode ? "hover:text-white" : "hover:text-black"
              }`}
            />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>
        </div>

        {/* Official Group Link */}
        <div className="mt-6">
          <a
            href="https://chat.whatsapp.com/GMaiCjcAvJWL1tpOB2UFon"
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              darkMode
                ? "bg-green-600 text-white hover:bg-green-500"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            <FaUsers className="text-lg" />
            Join Our Official Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeetAdmin;
