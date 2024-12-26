// components/ui/PageLayout.tsx
'use client';

import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className="container max-w-4xl py-10 px-4 lg:px-0">{children}</div>;
};
