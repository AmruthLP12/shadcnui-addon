"use client";

import React from "react";
import { BackgroundOverlayCard } from "@/app/components/BackgroundOverlayCard/BackgroundOverlayCard";

const HoverEffectExample = () => {
  const defaultBackground = "https://tinyurl.com/47n2srhd";
  const hoverBackground = "https://tinyurl.com/3r62nt4v";

  return (
    <BackgroundOverlayCard
      title="Interactive Card"
      description="This card shows a hover effect with a dynamic background."
      defaultBackground={defaultBackground}
      hoverBackground={hoverBackground}
      className="max-w-sm cursor-pointer"
    />
  );
};

export default HoverEffectExample;
