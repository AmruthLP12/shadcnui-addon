"use client";
import KanbanBoardDemo from "@/app/components/KanbanBoard/KanbanBoardDemo";
import { ReusablePage } from "@/components/ReusablePage";
import React, { useEffect, useState } from "react";

const KanbanBoard = () => {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");

  useEffect(() => {
    const fetchCode = async (
      component: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const response = await fetch(
          `/api/component-code?component=${encodeURIComponent(component)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const code = await response.text();
        setter(code);
      } catch (err) {
        console.error(`Failed to load code for ${component}:`, err);
        setter(`Failed to load code: ${err}`);
      }
    };

    fetchCode("KanbanBoard", setComponentCode);
    fetchCode("KanbanBoardDemo", setDemoCode);
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <ReusablePage
        title="Kanban Board"
        description="A reusable kanban board component with drag and drop functionality."
        badgeText="UI Component"
        demoCode={demoCode}
        demoPreview={<KanbanBoardDemo />}
        installationCode={componentCode}
        // examples={examples}
      />
    </div>
  );
};

export default KanbanBoard;
