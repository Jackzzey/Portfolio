import React, { useState } from 'react';

function WhyHire() {
  const roles = [
    'Software engineer',
    'DevOps engineer',
    'Full stack',
    'Backend engineer',
    'frontend engineer',
    'UI design',
    'IT support',
  ];

  const [answer, setAnswer] = useState('');

  async function generateAnswer(role) {
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('error generating answer:', error);
      setAnswer(
        'chat gpt not at home at the moment but heres a few words from myself'
      );
    }
  }

  return (
    <div className="">
      {roles.map((role) => (
        <button
          key={role}
          onClick={() => generateAnswer(role)}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          {role}
        </button>
      ))}
      <hr />
      <div className="">
        {answer && (
          <div className="">
            <p>Heres why</p>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WhyHire;
