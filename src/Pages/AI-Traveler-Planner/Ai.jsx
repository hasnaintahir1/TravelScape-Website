// src/Pages/Ai.jsx
import React from "react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useGroqRuntime } from "../../lib/groq";

import { Thread } from "@/components/thread";

export default function AiPage() {
  const runtime = useGroqRuntime();

  return (
    <div className="flex flex-col items-center justify-center min-h-[92vh] p-4 bg-[rgb(235,229,217)]">
     <div className="relative w-full max-w-4xl h-[70vh] border border-gray-200 rounded-xl shadow-md overflow-hidden">
        <AssistantRuntimeProvider runtime={runtime}>
          <Thread />
        </AssistantRuntimeProvider>
      </div>
    </div>
  );
}