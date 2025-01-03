"use client";

import React from "react";
import { AnimatedProgressBar } from "@/components/AnimatedProgressBar/AnimatedProgressBar";

export const CustomColorsExample = () => {
  return (
    <AnimatedProgressBar
      percent={75}
      duration={1000}
      barColor="#10b981"
      backgroundColor="#d1fae5"
      height={16}
      animated={true}
    />
  );
};
