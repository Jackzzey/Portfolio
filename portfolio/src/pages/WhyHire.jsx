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
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  async function generateAnswer(role) {
    setSelectedRole(role);
    setLoading(true);
    setAnswer('');

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role }),
      });

      const data = await response.json();

      if (data.answer) {
        setAnswer(data.answer);
      } else if (data.error) {
        setAnswer(data.error);
      } else {
        setAnswer('Unexpected response from server.');
      }
    } catch (err) {
      console.error('Error generating answer:', err);
      setAnswer('Something went wrong while generating the response.');
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
            className={`px-4 py-2 rounded text-white font-medium ${
              selectedRole === role ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'
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

      {/* Answer box */}
      {answer && (
        <div className="bg-gray-800 text-white p-6 rounded shadow-lg space-y-4">
          <h2 className="text-xl font-semibold">Here's why you should hire me</h2>
          <p>{answer}</p>

          
        </div>
      )}

      {/* Call to CV / contact */}
      {answer && (
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="/cv.pdf"
            target="_blank"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            View CV
          </a>
          <a
            href="/contact"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  );
}

export default WhyHire;