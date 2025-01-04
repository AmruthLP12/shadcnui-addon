"use client";

import React, { useEffect, useState } from "react";
import AnimatedProgressBarDemo from "@/app/components/AnimatedProgressBar/AnimatedProgressBarDemo";
import { ReusablePage } from "@/components/ReusablePage";
import ProgressBarWithControls from "@/app/components/AnimatedProgressBar/ProgressBarWithControls";
import { CustomColorsExample } from "@/app/components/AnimatedProgressBar/CustomColorsExample";
import { WithoutAnimationExample } from "@/app/components/AnimatedProgressBar/WithoutAnimationExample";

export default function AnimatedProgressPage() {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");
  const [withControls, setWithControls] = useState("Loading...");
  const [customColors, setCustomColors] = useState("Loading...");
  const [withoutAnimation, setWithoutAnimation] = useState("Loading...");

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
      fetchCode("app/components/AnimatedProgressBar/AnimatedProgressBar.tsx", setComponentCode),
      fetchCode("app/components/AnimatedProgressBar/AnimatedProgressBarDemo.tsx", setDemoCode),
      fetchCode("app/components/AnimatedProgressBar/ProgressBarWithControls.tsx", setWithControls),
      fetchCode("app/components/AnimatedProgressBar/CustomColorsExample.tsx", setCustomColors),
      fetchCode("app/components/AnimatedProgressBar/WithoutAnimationExample.tsx", setWithoutAnimation),
    ]);
  }, []);

  const examples = [
    {
      title: "ProgressBar With Controls",
      code: withControls,
      preview: <ProgressBarWithControls />,
    },
    {
      title: "Custom Colors",
      code: customColors,
      preview: <CustomColorsExample />,
    },
    {
      title: "Without Animation",
      code: withoutAnimation,
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
