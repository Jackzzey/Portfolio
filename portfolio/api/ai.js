export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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
          "link":"https://github.com/yourrepo/DCU-Groups"
        },
        {
          "name":"Custom Unix Shell",
          "description":"C-based Unix shell with process management.",
          "link":"https://github.com/yourrepo/Custom-Unix-Shell"
        },
        {
          "name":"Codey Viber",
          "description":"AI-powered JavaScript code generator.",
          "link":"https://github.com/yourrepo/Codey-Viber"
        }
      ]
    }`;

    const data = JSON.parse(response);

    setAnswer(data);

  }
//     const HF_TOKEN = process.env.HF_TOKEN;

//     if (!HF_TOKEN) {
//       throw new Error("HF_TOKEN missing");
//     }

//     const { role } = req.body;

//     if (!role) {
//       throw new Error("Role is required");
//     }

//     const prompt = `
// A recruiter is considering hiring me for the role: ${role}.
// Write a compelling, confident, and concise explanation (150–250 words) of why I should be hired for this role.

// Tone: professional, confident, and slightly persuasive (like a strong internal hiring recommendation).

// Instructions:
// - Tailor the response specifically to the role
// - Prioritise the most relevant skills and projects only
// - Avoid generic phrases — use specific evidence
// - Show clear reasoning, not just listing skills

// Role-specific focus:
// - Software engineer: programming fundamentals, data structures & algorithms, problem-solving, clean code, and building scalable applications
// - DevOps engineer: Linux systems, Docker, CI/CD pipelines, cloud deployment, automation, infrastructure as code, and system reliability
// - Full stack: end-to-end development, integrating frontend and backend, API design, databases, and delivering complete production-ready systems
// - Backend engineer: server-side logic, API development, database design, performance, scalability, and handling data efficiently
// - Frontend engineer: modern JavaScript, React, responsive design, state management, and building fast, interactive user interfaces
// - UI design: user interface design, usability, visual hierarchy, user experience thinking, and creating intuitive, polished interfaces
// - IT support: troubleshooting, debugging, system maintenance, user support, problem resolution, and clear communication with non-technical users
// - Anything: highlight adaptability, broad technical skillset, fast learning ability, and willingness to take ownership across different areasStructure:

// Technical Skills:
// Languages: Java, JavaScript, Python, C, R, Haskell, TypeScript  
// Web: HTML, CSS, JavaScript, REST APIs  
// Frameworks: React.js, Node.js, Django, NumPy  
// DevOps: Git, Docker, CI/CD, Linux, Shell Scripting  
// Databases: SQL, MySQL, UML, ER Diagrams

// Projects:
// - DCU Groups: Full-stack system with constraint-based allocation engine, REST API integration, deployed to cloud VPS with nginx + HTTPS
// - Custom Unix Shell in C: supports process forking, I/O redirection, background execution
// - Pizza App: Django full-stack app with authentication and checkout
// - Codey Viber: AI-powered JavaScript code generator using natural language
// - MyScrabbly: TypeScript Scrabble game with drag-and-drop UI, Agile team project

// Experience:
// - Odeon Cinemas: customer-facing role demonstrating communication and teamwork
// - Fastway Couriers: logistics, accuracy, and problem-solving under pressure

// Achievements:
// - International athlete representing Ireland
// - Leadership captain role in Ballyroan athletics club

// Respond ONLY in valid JSON with this structure:

// {
//   "summary": "2-3 sentence overview of why hire me",
//   "reasons": ["bullet point", "bullet point", "bullet point"],
// }

// Rules:
// - Keep it concise
// - No extra text outside JSON
// `;

//     const response = await fetch(
//       "https://router.huggingface.co/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${HF_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "openai/gpt-oss-20b",
//           messages: [
//             {
//               role: "user",
//               content: prompt,
//             },
//           ],
//         }),
//       }
//     );

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(errorText);
//       throw new Error(errorText);
//     }

//     const data = await response.json();

//     const answer =
//       data?.choices?.[0]?.message?.content || "No response generated";

    

//     res.status(200).json({ answer });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       error: error.message || "Failed to generate response",
//     });
//   }
// }