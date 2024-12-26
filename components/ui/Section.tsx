// components/ui/Section.tsx
'use client';

import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mt-16">
      <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
};
