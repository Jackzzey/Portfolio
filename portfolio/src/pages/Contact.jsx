import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="w-full min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Contact
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 mb-10"
        >
          Feel free to reach out if you have any questions, opportunities, or just want to connect.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          {/* Email */}
          <div>
            <p className="text-gray-500">Email</p>
            <a
              href="mailto:jackmcmahon330@gmail.com"
              className="text-xl font-semibold text-blue-500 hover:underline"
            >
              jackmcmahon330@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div>
            <p className="text-gray-500">GitHub</p>
            <a
              href="https://github.com/Jackzzey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-500 hover:underline"
            >
              github.com/Jackzzey
            </a>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-gray-500">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/mcmahon-jack/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-500 hover:underline"
            >
              linkedin.com/mcmahon-jack/
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;