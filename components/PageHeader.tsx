'use client'

import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  title: string;
  description: string;
  badgeText?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, badgeText }) => {
  return (
    <div className="container max-w-4xl py-10 px-4 lg:px-0">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          {title}
        </h1>
        {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
      </div>
      <p className="text-base md:text-lg text-muted-foreground mb-8 text-center md:text-left">
        {description}
      </p>
    </div>
  );
};
