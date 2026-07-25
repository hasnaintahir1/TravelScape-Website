// src/Pages/Ai.jsx
import React from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useGroqRuntime } from "../../lib/groq";
import { Thread } from "@/components/thread";

export default function AiPage() {
  const runtime = useGroqRuntime();

  return (
    <div className="flex h-dvh w-full bg-[rgb(235,229,217)] sm:p-4">
      <div className="relative flex h-full w-full flex-col border-0 sm:border border-gray-200/60 sm:rounded-2xl bg-background shadow-lg">
        <AssistantRuntimeProvider runtime={runtime}>
          <Thread />
        </AssistantRuntimeProvider>
      </div>
    </div>
  );
}