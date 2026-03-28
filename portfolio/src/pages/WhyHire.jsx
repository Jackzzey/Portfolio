import React, { useState } from 'react';


const ROLES = [
  'Software engineer',
  'DevOps engineer',
  'Full stack',
  'Backend engineer',
  'Frontend engineer',
  'UI design',
  'IT support',
  'Anything',
];

function WhyHire() {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  async function generateAnswer(role) {
    setSelectedRole(role);
    setLoading(true);

    try {
      const response = `{
      "summary":"As a software engineer, I bring a proven blend of low-level systems mastery and full-stack architectural expertise, consistently delivering clean, scalable solutions that meet complex business requirements.",
      "reasons":[
        "Designed and deployed DCU Groups, a constraint-based allocation engine with a robust REST API and secure cloud hosting.",
        "Built a Custom Unix Shell in C with process forking and I/O redirection.",
        "Implemented Codey Viber, an AI-driven JavaScript code generator."
      ],
      "projects":[
        {
          "name":"DCU Groups",
          "description":"Full-stack system with REST API and cloud deployment.",
          "link":"https://github.com/Jackzzey/DCU_Groups"
        },
        {
          "name":"Custom Unix Shell",
          "description":"C-based Unix shell with process management.",
          "link":"https://github.com/Jackzzey/CustomShell"
        },
        {
          "name":"Codey Viber",
          "description":"AI-powered JavaScript code generator.",
          "link":"https://github.com/yourrepo/Codey_Viber"
        }
      ]
    }`;

      //   const response = await fetch('/api/ai', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ role }),
      //   });

      //   const data = await response.json();

      //   if (data.answer) {
      //     setAnswer(data.answer);
      //   } else if (data.error) {
      //     setAnswer(data.error);
      //   } else {
      //     setAnswer('Unexpected response from server.');
      //   }
      // } catch (err) {
      //   console.error('Error generating answer:', err);
      //   setAnswer('Something went wrong while generating the response.');
      // } finally {
      //   setLoading(false);
      // }


      const data = JSON.parse(response);

      setAnswer(data);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Hire Me</h1>
      {/* Role buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {ROLES.map((role) => (
          <button
            key={role}
            onClick={() => generateAnswer(role)}
            className={`px-4 py-2 rounded text-white font-medium ${selectedRole === role ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {role}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-500 font-medium">Generating response...</div>
      )}



      {/* Call to CV / contact */}
      {answer && (
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
              {answer.reasons.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-semibold">Relevant Projects</h3>
            <div className="space-y-3 mt-2">
              {answer.projects.map((proj, i) => (
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