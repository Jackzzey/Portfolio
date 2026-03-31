import React, { useState, useCallback } from 'react';
import Typewriter from '../components/Typewriter';
import { motion } from "framer-motion";

const ROLES = [
  'Software Engineer',
  'Backend Engineer',
  'Frontend Engineer',
  'Full-Stack',
  'UI Design',
  'IT Support',
  'DevOps Engineer',
  'Something Different',
];

function WhyHire() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [step, setStep] = useState(1);

  async function generateAnswer(role) {
    setSelectedRole(role);
    setLoading(true);

    try {
      //   const response = `{
      //   "summary":"As a software engineer, I bring a proven blend of low-level systems mastery and full-stack architectural expertise, consistently delivering clean, scalable solutions that meet complex business requirements.",
      //   "reasons":[
      //     "Designed and deployed DCU Groups, a constraint-based allocation engine with a robust REST API and secure cloud hosting.",
      //     "Built a Custom Unix Shell in C with process forking and I/O redirection.",
      //     "Implemented Codey Viber, an AI-driven JavaScript code generator."
      //   ],
      //   "projects":[
      //     {
      //       "name":"DCU Groups",
      //       "description":"Full-stack system with REST API and cloud deployment.",
      //       "link":"https://github.com/Jackzzey/DCU_Groups"
      //     },
      //     {
      //       "name":"Custom Unix Shell",
      //       "description":"C-based Unix shell with process management.",
      //       "link":"https://github.com/Jackzzey/CustomShell"
      //     },
      //     {
      //       "name":"Codey Viber",
      //       "description":"AI-powered JavaScript code generator.",
      //       "link":"https://github.com/yourrepo/Codey_Viber"
      //     }
      //   ]
      // }`;
      //     const data = JSON.parse(response);

      //     setAnswer(data);

      //   } catch (err) {
      //     console.error(err);
      //   } finally {
      //     setLoading(false);
      //   }
      // }

      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      });

      let data;
      try {

        data = await response.json()
        console.log("AI response", data);
      } catch (err) {
        console.error("Failed to parse JSON", err);
        setAnswer("Server returned invalid response");
        return;
      }

      if (data.answer) {
        const safeAnswer = {
          summary: answer?.summary || "",
          reasons: Array.isArray(answer?.reasons) ? answer.reasons : [],
          projects: Array.isArray(answer?.projects) ? answer.projects : [],
        };
        setAnswer(safeAnswer);
      } else if (data.error) {
        setAnswer(data.error);
      } else {
        setAnswer("Unexpected response from server.");
      }

    } catch (err) {
      console.error('Error generating answer:', err);
      setAnswer('Something went wrong while generating the response.');
    } finally {
      setLoading(false);
    }
  }

  // const handleStep1Complete = useCallback(() => {
  //   setStep(2);
  // }, []);
  // const handleStep2Complete = useCallback(() => {
  //   setStep(3);
  // }, []);
  const pass = useCallback(() => {
    setStep(4);
  })


  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">

      <p className="text-xl mb-4">

        {step >= 1 && <Typewriter
          text="Mr Ai Why should i hire Jack?"
          // onComplete={handleStep1Complete}
          onComplete={pass}
        />}
      </p>

      <p className="text-xl mb-4 text-right">
        {step >= 2 && <Typewriter
          text="What Job do you want to hire him for"
          // onComplete={handleStep2Complete}
          onComplete={pass}
        />
        }
      </p>
      {step >= 3 && <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Any of these positions🤔</h1>
        {/* Role buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => generateAnswer(role)}
              className={`px-5 py-2 rounded-full text-sm text-white md:text-base font-medium transition-all duration-200
              ${selectedRole === role
                  ? "bg-green-600 text-white shadow-lg scale-105"
                  : "bg-green-600/60 hover:bg-green-800 hover:scale-105"
                }`}
            >

              {role}
            </button>
          ))}
        </div>
        {/* Loading */}
        {loading && (
          <div className="mt-6 text-center text-gray animate-pulse font-medium">
            🤔Generating response...
          </div>
        )}

      </motion.div>}


      {/* Call to CV / contact */}
      {answer?.summary && (
        <div className="bg-gray-800 text-white p-6 rounded space-y-6">

          {/* Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Why Hire Me</h2>
            <p className="text-gray-300">{answer.summary}</p>
          </div>

          {/* Reasons */}
          <div>
            <h3 className="font-semibold">Key Strengths</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {(answer?.reasons || []).map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold">Relevant Projects</h3>
            <div className="space-y-3 mt-2">
              {(answer.projects.map || [])((proj, i) => (
                <div key={i} className="bg-gray-700 p-3 rounded">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="text-blue-400 font-medium underline"
                  >
                    {proj.name}
                  </a>
                  <p className="text-sm text-gray-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default WhyHire;