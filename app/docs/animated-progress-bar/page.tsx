"use client";

import { AnimatedProgressBarExamples } from "@/app/Examples/Examples";
import { AnimatedProgressBar } from "@/components/AnimatedProgressBar/AnimatedProgressBar";
import { ReusablePage } from "@/components/ReusablePage";

const componentCode = `'use client'

import React, { useState, useEffect } from 'react';

interface AnimatedProgressBarProps {
  percent: number;
  duration: number;
  barColor: string;
  backgroundColor: string;
  height: number;
  animated: boolean;
}

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  percent,
  duration,
  barColor,
  backgroundColor,
  height,
  animated
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setProgress(percent);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(percent);
    }
  }, [percent, animated]);

  return (
    <div 
      className="w-full rounded-full overflow-hidden"
      style={{ 
        backgroundColor: backgroundColor,
        height: \`\${height}px\`
      }}
    >
      <div 
        className="h-full rounded-full"
        style={{
          width: \`\${progress}%\`,
          backgroundColor: barColor,
          transition: animated ? \`width \${duration}ms ease-in-out\` : 'none'
        }}
      />
    </div>
  );
};`;

const demoCode = `import { AnimatedProgressBar } from '@/components/AnimatedProgressBar';

const Demo = () => {
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
      <div className="flex flex-wrap space-x-2">
        <Button onClick={() => setProgress(Math.max(0, progress - 20))}>
          Decrease
        </Button>
        <Button onClick={() => setProgress(Math.min(100, progress + 20))}>
          Increase
        </Button>
      </div>
    </div>
  );
};`;

const examples = AnimatedProgressBarExamples;

export default function AnimatedProgressPage() {
  return (
    <ReusablePage
      title="Animated Progress Bar"
      description="A customizable progress bar component with smooth animations and interactive controls."
      badgeText="UI Component"
      demoCode={demoCode}
      demoPreview={
        <AnimatedProgressBar
          percent={75}
          duration={1000}
          barColor="#10b981"
          backgroundColor="#d1fae5"
          height={16}
          animated={true}
        />
      }
      installationCode={componentCode}
      examples={examples}
    />
  );
}
