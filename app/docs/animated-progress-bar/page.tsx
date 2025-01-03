"use client";

import React, { useEffect, useState } from "react";
import AnimatedProgressBarDemo from "@/components/AnimatedProgressBar/AnimatedProgressBarDemo";
import { ReusablePage } from "@/components/ReusablePage";
import ProgressBarWithControls from "@/components/AnimatedProgressBar/ProgressBarWithControls";
import { CustomColorsExample } from "@/components/AnimatedProgressBar/CustomColorsExample";
import { WithoutAnimationExample } from "@/components/AnimatedProgressBar/WithoutAnimationExample";

export default function AnimatedProgressPage() {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");
  const [WithControls, setWithControls] = useState("Loading...");
  const [CustomColors, setCustomColors] = useState("Loading...");
  const [WithoutAnimation, setWithoutAnimation] = useState("Loading...");

  useEffect(() => {
    const fetchCode = async (path: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
      try {
        const response = await fetch(`/api/component-code?path=${path}`);
        const code = await response.text();
        setter(code);
      } catch (err) {
        console.error(`Failed to load code from ${path}:`, err);
        setter("Failed to load code.");
      }
    };

    Promise.all([
      fetchCode("components/AnimatedProgressBar/AnimatedProgressBar.tsx", setComponentCode),
      fetchCode("components/AnimatedProgressBar/AnimatedProgressBarDemo.tsx", setDemoCode),
      fetchCode("components/AnimatedProgressBar/ProgressBarWithControls.tsx", setWithControls),
      fetchCode("components/AnimatedProgressBar/CustomColorsExample.tsx", setCustomColors),
      fetchCode("components/AnimatedProgressBar/WithoutAnimationExample.tsx", setWithoutAnimation),
    ]);
  }, []);

  const examples = [
    {
      title: "ProgressBar With Controls",
      code: WithControls,
      preview: <ProgressBarWithControls />,
    },
    {
      title: "Custom Colors",
      code: CustomColors,
      preview: <CustomColorsExample />,
    },
    {
      title: "Without Animation",
      code: WithoutAnimation,
      preview: <WithoutAnimationExample />,
    },
  ];

  return (
    <ReusablePage
      title="Animated Progress Bar"
      description="A customizable progress bar component with smooth animations and interactive controls."
      badgeText="UI Component"
      demoCode={demoCode}
      demoPreview={<AnimatedProgressBarDemo />}
      installationCode={componentCode}
      examples={examples}
    />
  );
}
