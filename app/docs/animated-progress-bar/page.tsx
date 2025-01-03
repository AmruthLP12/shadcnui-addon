"use client";

import { AnimatedProgressBarExamples } from "@/app/Examples/Examples";
import AnimatedProgressBarDemo from "@/components/AnimatedProgressBar/AnimatedProgressBarDemo";
import { ReusablePage } from "@/components/ReusablePage";
import { useEffect, useState } from "react";




const examples = AnimatedProgressBarExamples;

export default function AnimatedProgressPage() {


  const [componentCode, setComponentCode] = useState('');
  const [demoCode, setDemoCode] = useState('');

  useEffect(() => {
    // Dynamically import the AnimatedProgressBar component code
    fetch('/api/component-code?path=components/AnimatedProgressBar/AnimatedProgressBar.tsx')
      .then(response => response.text())
      .then(code => setComponentCode(code))
      .catch((err) => console.error('Failed to load AnimatedProgressBar code:', err));
  }, []);

  useEffect(() => {
    // Dynamically import the AnimatedProgressBarDemo component code
    fetch('/api/component-code?path=components/AnimatedProgressBar/AnimatedProgressBarDemo.tsx')
      .then(response => response.text())
      .then(code => setDemoCode(code))
      .catch((err) => console.error('Failed to load AnimatedProgressBarDemo code:', err));
  },
  []);

  
  return (
    <ReusablePage
      title="Animated Progress Bar"
      description="A customizable progress bar component with smooth animations and interactive controls."
      badgeText="UI Component"
      demoCode={demoCode}
      demoPreview={
        <AnimatedProgressBarDemo
        />
      }
      installationCode={componentCode}
      examples={examples}
    />
  );
}
