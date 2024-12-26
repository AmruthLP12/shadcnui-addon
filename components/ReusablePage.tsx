// components/ui/ReusablePage.tsx
'use client';

import React from 'react';
import { PageLayout } from '@/components/ui/PageLayout';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/Card';
import { CodePreview } from '@/components/CodePreview';
import { InstallationGuide } from '@/components/docs/InstallationGuide';

interface UsageExample {
  title: string;
  code: string;
  preview: React.ReactNode;
}

interface ReusablePageProps {
  title: string;
  description: string;
  badgeText: string;
  demoCode: string;
  demoPreview: React.ReactNode;
  installationCode: string;
  examples: UsageExample[];
}

export const ReusablePage: React.FC<ReusablePageProps> = ({
  title,
  description,
  badgeText,
  demoCode,
  demoPreview,
  installationCode,
  examples,
}) => {
  return (
    <PageLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          {title}
        </h1>
        <Badge variant="secondary">{badgeText}</Badge>
      </div>

      <p className="text-base md:text-lg text-muted-foreground mb-8 text-center md:text-left">
        {description}
      </p>

      {/* Demo Section */}
      <CodePreview code={demoCode} preview={demoPreview} />

      {/* Installation Section */}
      <Section title="Installation">
        <InstallationGuide componentName={title} componentCode={installationCode} />
      </Section>

      {/* Usage Examples */}
      <Section title="Usage Examples">
        <div className="grid gap-8">
          {examples.map((example, index) => (
            <Card key={index} title={example.title}>
              <CodePreview code={example.code} preview={example.preview} />
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};
