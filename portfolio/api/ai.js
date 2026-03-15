export default async function handler(req, res) {
  try {
    const HF_TOKEN = process.env.HF_TOKEN;

    if (!HF_TOKEN) {
      throw new Error("HF_TOKEN is missing");
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

Explain why I would be a strong candidate for this role.
Keep it concise and professional.
`;

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          model: "openai/gpt-oss-20b:nscale",
          max_tokens: 200,
        }),
      }
    );

    const data = await response.json();

    const answer =
      data?.choices?.[0]?.message?.content || "No response generated";

    res.status(200).json({ answer });

  } catch (error) {
    console.error("API error:", error);

    res.status(500).json({
      error: error.message || "Failed to generate response",
    });
  }
}