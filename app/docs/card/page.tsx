"use client";
import BackgroundOverlayCardDemo from "@/components/BackgroundOverlayCard/BackgroundOverlayCardDemo";
import DarkMode from "@/components/BackgroundOverlayCard/DarkMode";
import FullWidthCard from "@/components/BackgroundOverlayCard/FullWidthCard";
import GalleryCard from "@/components/BackgroundOverlayCard/GalleryCard";
import HoverEffectExample from "@/components/BackgroundOverlayCard/HoverEffectExample";
import MinimalStyle from "@/components/BackgroundOverlayCard/MinimalStyle";
import { ReusablePage } from "@/components/ReusablePage";
import { useEffect, useState } from "react";

export default function CardDemo() {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");
  const [hoverEffect, setHoverEffect] = useState("Loading...");
  const [fullWidth, setFullWidth] = useState("Loading...");
  const [galleryCard, setGalleryCard] = useState("Loading...");
  const [minimalStyle, setMinimalStyle] = useState("Loading...");
  const [darkMode, setDarkMode] = useState("Loading...");

  useEffect(() => {
    const fetchCode = async (
      path: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
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
      fetchCode(
        "components/BackgroundOverlayCard/BackgroundOverlayCard.tsx",
        setComponentCode
      ),
      fetchCode(
        "components/BackgroundOverlayCard/BackgroundOverlayCardDemo.tsx",
        setDemoCode
      ),
      fetchCode(
        "components/BackgroundOverlayCard/HoverEffectExample.tsx",
        setHoverEffect
      ),
      fetchCode(
        "components/BackgroundOverlayCard/FullWidthCard.tsx",
        setFullWidth
      ),
      fetchCode(
        "components/BackgroundOverlayCard/GalleryCard.tsx",
        setGalleryCard
      ),
      fetchCode(
        "components/BackgroundOverlayCard/MinimalStyle.tsx",
        setMinimalStyle
      ),
      fetchCode(
        "components/BackgroundOverlayCard/MinimalStyle.tsx",
        setDarkMode
      ),
    ]);
  }, []);

  const examples = [
    {
      title: "Hover Effect Example",
      code: hoverEffect,
      preview: <HoverEffectExample />,
    },
    {
      title: "Full-Width Card",
      code: fullWidth,
      preview: <FullWidthCard />,
    },
    {
      title: "Gallery Card",
      code: galleryCard,
      preview: <GalleryCard />,
    },
    {
      title: "Minimal Style",
      code: minimalStyle,
      preview: <MinimalStyle />,
    },
    {
      title: "Dark Mode",
      code: darkMode,
      preview: <DarkMode />,
    },
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <ReusablePage
        title="Background Overlay Card"
        description="A reusable card component with dynamic background transitions on hover."
        badgeText="UI Component"
        demoCode={demoCode}
        demoPreview={<BackgroundOverlayCardDemo />}
        installationCode={componentCode}
        examples={examples}
      />
    </div>
  );
}
