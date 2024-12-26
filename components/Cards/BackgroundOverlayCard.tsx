"use client";

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
          backgroundImage: `url(${defaultBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 transition-all duration-500"
      />

      {/* Hover Background Layer */}
      <div
        style={{
          backgroundImage: `url(${hoverBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Black Overlay */}
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

