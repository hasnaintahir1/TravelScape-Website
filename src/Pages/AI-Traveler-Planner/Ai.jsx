// src/Pages/Ai.jsx
import React from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useGroqRuntime } from "../../lib/groq";
import { Thread } from "@/components/thread";

export default function AiPage() {
  const runtime = useGroqRuntime();

  return (

    <div className="h-[92vh] w-full bg-[rgb(249, 245, 237)] flex flex-col justify-end items-center relative">
      <div className="relative flex h-[80vh] w-full max-w-full flex-col overflow-hidden">
        <AssistantRuntimeProvider runtime={runtime}>
          <Thread />
        </AssistantRuntimeProvider>
      </div>
    </div>
  );
}