
const rateLimit = new Map();




export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const now = Date.now()
  const WINDOW = 60 * 1000;
  const LIMIT = 5;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);

  }

  const timestamps = rateLimit.get(ip);

  const recent = timestamps.filter((t) => now - t < WINDOW);

  if (recent.length >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests. Try again later",
    });
  }

  recent.push(now);
  rateLimit.set(ip, recent);



  try {
    const HF_TOKEN = process.env.HF_TOKEN;

    if (!HF_TOKEN) {
      throw new Error("HF_TOKEN missing");
    }

    const { role } = req.body;

    if (!role) {
      throw new Error("Role is required");
    }
    const prompt = `
A recruiter is considering hiring me for the role: ${role}.
Write a compelling, confident, and concise explanation (150–250 words) of why I should be hired for this role.

Tone: professional, confident, and slightly persuasive (like a strong internal hiring recommendation).

Instructions:
- Tailor the response specifically to the role
- Prioritise the most relevant skills and projects only
- Avoid generic phrases — use specific evidence
- Show clear reasoning, not just listing skills

Role-specific focus:
- Software engineer: programming fundamentals, data structures & algorithms, problem-solving, clean code, and building scalable applications
- DevOps engineer: Linux systems, Docker, CI/CD pipelines, cloud deployment, automation, infrastructure as code, and system reliability
- Full stack: end-to-end development, integrating frontend and backend, API design, databases, and delivering complete production-ready systems
- Backend engineer: server-side logic, API development, database design, performance, scalability, and handling data efficiently
- Frontend engineer: modern JavaScript, React, responsive design, state management, and building fast, interactive user interfaces
- UI design: user interface design, usability, visual hierarchy, user experience thinking, and creating intuitive, polished interfaces
- IT support: troubleshooting, debugging, system maintenance, user support, problem resolution, and clear communication with non-technical users
- Anything: highlight adaptability, broad technical skillset, fast learning ability, and willingness to take ownership across different areasStructure:

Technical Skills:
Languages: Java, JavaScript, Python, C, R, Haskell, TypeScript  
Web: HTML, CSS, JavaScript, REST APIs  
Frameworks: React.js, Node.js, Django, NumPy  
DevOps: Git, Docker, CI/CD, Linux, Shell Scripting  
Databases: SQL, MySQL, UML, ER Diagrams

Projects (you MUST choose from this list and return matching objects exactly):

- DCU Groups: Full-stack system with constraint-based allocation engine, REST API integration, deployed to cloud VPS with nginx + HTTPS. Link: https://github.com/Jackzzey/DCU_Groups
- Custom Unix Shell: C-based Unix shell with process forking, I/O redirection, background execution. Link: https://github.com/Jackzzey/CustomShell
- Pizza App: Django full-stack app with authentication and checkout. Link: https://github.com/yourusername/pizza-app
- Codey Viber: AI-powered JavaScript code generator using natural language. Link: https://github.com/yourusername/codey-viber
- MyScrabbly: TypeScript Scrabble game with drag-and-drop UI, Agile team project. Link: https://github.com/yourusername/myscrabbly

Experience:
- Odeon Cinemas: customer-facing role demonstrating communication and teamwork
- Fastway Couriers: logistics, accuracy, and problem-solving under pressure

Achievements:
- International athlete representing Ireland
- Leadership captain role in Ballyroan athletics club

Respond ONLY in valid JSON with this structure:

{
  "summary": "2-3 sentence overview of why hire me",
  "reasons": ["bullet point", "bullet point", "bullet point"],
  "projects": [
    {
      "name": "string",
      "description": "string",
      "link": "string"
    }
  ]
}

Return ONLY projects that are relevant to the selected role.

Rules:
- Keep it concise
- No extra text outside JSON
`;

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    console.log("HF response:", data);
    const answerRaw =
      data?.choices?.[0]?.message?.content || "{}";

    let answer;

    try {
      answer = JSON.parse(answerRaw);
    } catch (err) {
      console.error("Failed to parse model JSON:", answerRaw);
      console.log(err);
      answer = {
        summary: answerRaw,
        reasons: []
      }
    }



    res.status(200).json({ answer });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message || "Failed to generate response",
    });
  }
}
