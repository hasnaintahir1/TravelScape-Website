// src/lib/groq.jsx
import { useLocalRuntime } from "@assistant-ui/react";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const SYSTEM_INSTRUCTION = `
You are an expert AI Travel Planner for TravelScape.
STRICT RULES:
1. ONLY answer questions related to travel, trip planning, destinations, hotels, flights, itineraries, and tourist spots.
2. If the user asks about ANYTHING ELSE, POLITELY DECLINE by saying: "I am programmed to only assist with travel and trip planning!"
3. MATCH THE USER'S LANGUAGE (English, Urdu script, or Roman Urdu).
`;

export function useGroqRuntime() {
  return useLocalRuntime({
    async *run({ messages, abortSignal }) {
      try {
        const formattedMessages = [
          { role: "system", content: SYSTEM_INSTRUCTION },
          ...messages.map((m) => {
            const textContent = typeof m.content === "string" 
              ? m.content 
              : m.content?.[0]?.text || "";
            return {
              role: m.role === "assistant" ? "assistant" : "user",
              content: textContent,
            };
          })
        ];

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${GROQ_API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: formattedMessages,
            stream: true,
          }),
          signal: abortSignal,
        });

        if (!response.ok) throw new Error(`Groq API Error: ${response.statusText}`);

        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let fullText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const jsonStr = line.replace("data: ", "").trim();
              if (jsonStr === "[DONE]") return;
              
              try {
                const parsed = JSON.parse(jsonStr);
                const content = parsed.choices?.[0]?.delta?.content || "";
                if (content) {
                  fullText += content;
                  yield {
                    content: [{ type: "text", text: fullText }],
                  };
                }
              } catch (e) {
                // Ignore chunk parse errors
              }
            }
          }
        }
      } catch (error) {
        console.error("Groq Error:", error);
        yield {
          content: [{ type: "text", text: "⚠️ Error connecting to Groq API. Check your API key." }],
        };
      }
    },
  });
}