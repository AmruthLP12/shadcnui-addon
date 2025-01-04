"use client";
import BackgroundOverlayCardDemo from "@/app/components/BackgroundOverlayCard/BackgroundOverlayCardDemo";
import DarkMode from "@/app/components/BackgroundOverlayCard/DarkMode";
import FullWidthCard from "@/app/components/BackgroundOverlayCard/FullWidthCard";
import GalleryCard from "@/app/components/BackgroundOverlayCard/GalleryCard";
import HoverEffectExample from "@/app/components/BackgroundOverlayCard/HoverEffectExample";
import MinimalStyle from "@/app/components/BackgroundOverlayCard/MinimalStyle";
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
      component: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const response = await fetch(
          `/api/component-code?component=${encodeURIComponent(component)}`
        );
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

    fetchCode("BackgroundOverlayCard", setComponentCode);
    fetchCode("BackgroundOverlayCardDemo", setDemoCode);
    fetchCode("HoverEffectExample", setHoverEffect);
    fetchCode("FullWidthCard", setFullWidth);
    fetchCode("GalleryCard", setGalleryCard);
    fetchCode("MinimalStyle", setMinimalStyle);
    fetchCode("DarkMode", setDarkMode);
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
