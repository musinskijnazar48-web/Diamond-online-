import OpenAI from "openai";

// From javascript_openai integration:
// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user

const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

export async function generateChatResponse(message: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
      messages: [
        {
          role: "system",
          content: "Ты полезный AI-помощник. Отвечай на русском языке дружелюбно и информативно. Будь краток, но полезен."
        },
        {
          role: "user",
          content: message
        }
      ],
      max_completion_tokens: 1000,
    });

    return response.choices[0].message.content || "Извините, я не смог сгенерировать ответ.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Ошибка при обращении к OpenAI API");
  }
}