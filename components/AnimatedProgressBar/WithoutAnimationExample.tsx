"use client";

import React from "react";
import { AnimatedProgressBar } from "@/components/AnimatedProgressBar/AnimatedProgressBar";

export const WithoutAnimationExample = () => {
  return (
    <AnimatedProgressBar
      percent={50}
      duration={0}
      barColor="#f59e0b"
      backgroundColor="#fef3c7"
      height={24}
      animated={false}
    />
  );
};
