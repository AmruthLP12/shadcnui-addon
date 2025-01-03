import React from "react";
import { BackgroundOverlayCard } from "./BackgroundOverlayCard";

const MinimalStyle = () => {
  return (
    <div>
      <BackgroundOverlayCard
        title="Minimal Card"
        description="This card has a lighter overlay effect."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm opacity-[0.3] cursor-pointer"
      />
    </div>
  );
};

export default MinimalStyle;
