import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-3.5-turbo-0125"),
    system: "Respond in emojis",
    messages,
  });

  // Assuming result does not contain StreamData
  return new Response(result.toAIStream(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}