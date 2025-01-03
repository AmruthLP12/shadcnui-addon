import React from "react";
import { BackgroundOverlayCard } from "./BackgroundOverlayCard";

const FullWidthCard = () => {
  return (
    <BackgroundOverlayCard
      title="Full-Width Card"
      description="This card spans the entire width of its container."
      defaultBackground="https://tinyurl.com/47n2srhd"
      hoverBackground="https://tinyurl.com/3r62nt4v"
      className="w-full cursor-pointer"
    />
  );
};

export default FullWidthCard;
