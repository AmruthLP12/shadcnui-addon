import { BackgroundOverlayCardExample } from "@/app/Examples/Examples";
import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
import { ReusablePage } from "@/components/ReusablePage";

const componentCode = `"use client";

import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface BackgroundOverlayCardProps {
  title: string;
  description: string;
  defaultBackground: string;
  hoverBackground: string;
  className?: string;
}

export function BackgroundOverlayCard({
  title,
  description,
  defaultBackground,
  hoverBackground,
  className,
}: BackgroundOverlayCardProps) {
  return (
    <div
      className={cn(
        "group relative max-w-xs w-full h-96 mx-auto overflow-hidden rounded-md shadow-xl border border-transparent dark:border-neutral-800",
        className
      )}
    >
      {/* Background Layer (Default) */}
      <div
        style={{
          backgroundImage: \`url(\${defaultBackground})\`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 transition-all duration-500"
      />

      {/* Hover Background */}
      <div
        style={{
          backgroundImage: \`url(\${hoverBackground})\`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Card Content */}
      <Card className="relative z-10 bg-transparent p-4 h-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-3xl font-bold text-white">{title}</CardTitle>
          <CardDescription className="text-base text-gray-300 my-4">{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
`;

const demoCode = `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";

const BackgroundOverlayCardDemo = () => {
  return (
    <div className="w-full px-10">
      <BackgroundOverlayCard
        title="Dynamic Background Card"
        description="Hover over this card to see the background change!"
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-md cursor-pointer"
      />
    </div>
  );
};

export default BackgroundOverlayCardDemo;
`;

const examples = BackgroundOverlayCardExample

export default function Demo() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <ReusablePage
        title="Background Overlay Card"
        description="A reusable card component with dynamic background transitions on hover."
        badgeText="UI Component"
        demoCode={demoCode}
        demoPreview={
          <BackgroundOverlayCard
            title="Dynamic Background Card"
            description="Hover over this card to see the background change!"
            defaultBackground="https://tinyurl.com/47n2srhd"
            hoverBackground="https://tinyurl.com/3r62nt4v"
            className="max-w-md cursor-pointer"
          />
        }
        installationCode={componentCode}
        examples={examples}
      />
    </div>
  );
}
