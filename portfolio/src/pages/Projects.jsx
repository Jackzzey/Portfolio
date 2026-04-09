import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

import DCUGroups from "../../public/images/DCUGroups.png"
import ML from "../../public/images/ML.png"
import CustomShell from "../../public/images/CustomShell.png"
import Pizza from "../../public/images/Pizza.png"
import Codey from "../../public/images/Codey.png"
import scabble from "../../public/images/Scabble.png"

const projects = [
  {
    title: "DCU Groups",
    image: DCUGroups,
    description:
      "Full-stack platform for automating university group allocation using a constraint-based optimization engine.",
    tech: ["React", "Node.js", "Moodle API", "nginx", "Hetzner"],
    github: "https://github.com/Jackzzey/DCU_Groups",
    features: [
      "Constraint-based group allocation engine",
      "REST API integration with Moodle LMS",
      "Custom lecturer configuration plugin",
      "Deployed on cloud VPS with nginx + HTTPS"
    ],
  },
  {
    title: "Machine Learning Assignment",
    image: ML,
    description:
      "Applied machine learning techniques to analyse datasets, train models, and evaluate performance using standard metrics.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    github: "https://github.com/Jackzzey/machine_learning_assignment",
    features: [
      "Data preprocessing and cleaning",
      "Model training and evaluation",
      "Use of ML algorithms",
      "Performance analysis with metrics"
    ],
  },
  {
    title: "Custom Unix Shell",
    image: CustomShell,
    description:
      "Developed a UNIX shell in C supporting process forking, I/O redirection, and background execution.",
    tech: ["C", "Unix", "Systems Programming"],
    github: "https://github.com/Jackzzey/CustomShell",
    features: [
      "Command execution with process forking",
      "Input/output redirection",
      "Background process handling",
      "Batch execution support"
    ],
  },
  {
    title: "Pizza App",
    image: Pizza,
    description:
      "Full-stack pizza ordering web application with authentication and checkout system.",
    tech: ["Django", "SQL", "Bootstrap"],
    github: "https://github.com/yourusername/pizza-app",
    features: [
      "User authentication system",
      "Dynamic pizza customization",
      "Session-based cart management",
      "Checkout and order processing"
    ],
  },
  {
    title: "Codey Viber",
    image: Codey,
    description:
      "AI-powered web app that generates and executes JavaScript code from natural language prompts.",
    tech: ["JavaScript", "AI APIs"],
    github: "https://github.com/yourusername/codey-viber",
    features: [
      "Natural language to code generation",
      "Live JavaScript execution",
      "AI API integration",
      "Interactive coding interface"
    ],
  },
  {
    title: "MyScrabbly",
    image: scabble,
    description:
      "Scrabble clone with drag-and-drop gameplay and real-time scoring built in an Agile team.",
    tech: ["TypeScript", "Game Engine", "Agile"],
    github: "https://github.com/yourusername/myscrabbly",
    features: [
      "Drag-and-drop tile placement",
      "Real-time score tracking",
      "Custom game engine logic",
      "Agile team collaboration"
    ],
  },
];

function Projects() {
  return (
    <div className="w-full min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12"
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="mb-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on GitHub 
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;