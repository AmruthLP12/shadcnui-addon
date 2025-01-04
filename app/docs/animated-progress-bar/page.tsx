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
    const fetchCode = async ( component: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
      try {
        const response = await fetch(`/api/component-code?component=${encodeURIComponent(component)}`);
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

    fetchCode('AnimatedProgressBar', setComponentCode);
    fetchCode('AnimatedProgressBarDemo', setDemoCode);
    fetchCode('ProgressBarWithControls', setWithControls);
    fetchCode('CustomColorsExample', setCustomColors);
    fetchCode('WithoutAnimationExample', setWithoutAnimation);
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

