import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function Cv() {
  return (
    <div className="w-full min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8"
        >
          CV
        </motion.h1>

        {/* Download Button */}
        <a
          href="/CV.docx"
          download
          className="inline-block mb-6 px-6 py-3 bg-black text-white rounded-xl hover:opacity-80 transition"
        >
          Download CV
        </a>

        {/* Embedded PDF */}
        <div className="w-full h-[800px] border rounded-xl overflow-hidden shadow">
          <iframe
            src="/cvpdf.pdf"
            title="CV"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Cv;