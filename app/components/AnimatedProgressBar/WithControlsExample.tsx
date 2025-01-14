"use client";

import React, { useState } from "react";
import { AnimatedProgressBar } from "@/app/components/AnimatedProgressBar/AnimatedProgressBar";
import { Button } from "@/components/ui/button";

export const WithControlsExample = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div className="space-y-4">
      <AnimatedProgressBar
        percent={progress}
        duration={1000}
        barColor="#3b82f6"
        backgroundColor="#e2e8f0"
        height={20}
        animated={true}
      />
      <div className="flex space-x-2">
        <Button onClick={() => setProgress(Math.max(0, progress - 20))} variant="destructive">
          Decrease
        </Button>
        <Button onClick={() => setProgress(Math.min(100, progress + 20))}>
          Increase
        </Button>
      </div>
    </div>
  );
};
