
import React from "react";
import ProfilePic from "../assets/profilePic2.jpg"; // replace with your image

const PortFolio = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ];

  const projects = [
    {
      name: "Past Paper Project",
      description:
        "A full-stack web app for sharing and uploading past papers. Built with React, Node.js, MongoDB, and Tailwind CSS.",
      image: "/project1.png", // put project screenshots in public folder
      link: "https://github.com/yourusername/past-paper-project",
    },
    {
      name: "Portfolio Website",
      description: "Professional portfolio built with React and Tailwind CSS.",
      image: "/project2.png",
      link: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-12 space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Faizan Ahmed</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Full-Stack Developer | React | Node.js | Open to Opportunities
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name}>
              <h3 className="font-semibold mb-1">{skill.name}</h3>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded h-4">
                <div
                  className="bg-blue-600 h-4 rounded"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="space-y-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:youremail@example.com" className="text-blue-600">
            youremail@example.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourusername"
            className="text-blue-600"
            target="_blank"
          >
            github.com/yourusername
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-blue-600"
            target="_blank"
          >
            linkedin.com/in/yourusername
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-sm opacity-70">
        © {new Date().getFullYear()} Faizan Ahmed | Portfolio
      </footer>
    </div>
  );
};

export default PortFolio;
