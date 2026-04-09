import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-full min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8"
        >
          About Me
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-6 leading-relaxed"
        >
          I'm a Computer Science student at DCU with a strong interest in
          backend systems, DevOps, and cloud infrastructure. I enjoy building
          scalable applications and working close to the system level.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>

          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "Python",
              "C",
              "JavaScript",
              "React",
              "SQL",
              "Docker",
              "Linux",
              "Git",
              "AWS",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* What you're doing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-3">
            What I'm Currently Working On
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I'm currently building projects focused on systems and DevOps,
            including cloud automation tools and CI/CD pipelines. I'm also
            improving my knowledge of distributed systems and infrastructure
            design.
          </p>
        </motion.div>

        {/* Goals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Career Goals</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm seeking a software engineering internship where I can work on
            backend systems, cloud infrastructure, or DevOps-related projects,
            and continue developing real-world engineering skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;