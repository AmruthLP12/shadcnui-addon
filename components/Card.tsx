// components/ui/Card.tsx
'use client';

import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="p-6 shadow rounded-lg">
      <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};
