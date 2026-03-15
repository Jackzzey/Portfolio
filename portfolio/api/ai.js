export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

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

Skills:
- Java
- Python
- Linux
- React
- Docker
- SQL

Projects:
- Custom Unix shell in C

Explain why I would be a strong candidate.
Use short bullet points.
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

    const answer =
      data?.choices?.[0]?.message?.content || "No response generated";

    res.status(200).json({ answer });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message || "Failed to generate response",
    });
  }
}