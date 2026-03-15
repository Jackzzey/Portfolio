import { OpenAI } from 'openai/client.js';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  try {
    const { role } = req.body;

    const prompt = `
  A recruiter is considering hiring me for the role: ${role}.

Use these facts about me:

Skills:
- Java
- Python
- Linux
- React
- Docker
- SQL

Projects:
- Custom Unix shell in C

Explain why I would be a strong candidate for this role.
Keep it concise and professional.
  `;

    const completion = await client.chat.completions.create({
      model: 'openai/gpt-oss-20b:nscale',
      messages: [{ role: 'user', content: prompt }],
    });

    res.status(200).json({
      answer: completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: 'Failed to generate response',
    });
  }
}
