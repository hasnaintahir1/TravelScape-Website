// src/Pages/Ai.jsx
import React from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useGroqRuntime } from "../../lib/groq";
import { Thread } from "@/components/thread";

export default function AiPage() {
  const runtime = useGroqRuntime();

  return (
    <div className="flex h-[calc(100dvh-64px)] w-full overflow-hidden bg-[rgb(235,229,217)]">
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-[rgb(235,229,217)]">
        <AssistantRuntimeProvider runtime={runtime}>
          <Thread />
        </AssistantRuntimeProvider>
      </div>
    </div>
  );
}