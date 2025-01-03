"use client";

import React, { useState, useEffect } from "react";

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
  animated,
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
        height: `${height}px`,
      }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${progress}%`,
          backgroundColor: barColor,
          transition: animated ? `width ${duration}ms ease-in-out` : "none",
        }}
      />
    </div>
  );
};
