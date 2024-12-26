'use client'

import React, { useState } from 'react';
import { AnimatedProgressBar } from './AnimatedProgressBar';
import { Button } from '@/components/ui/button';

const AnimatedProgressBarDemo = () => {
  const [progress, setProgress] = useState(0);

  const handleIncrement = () => {
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handleDecrement = () => {
    setProgress((prev) => Math.max(prev - 20, 0));
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div className="space-y-4">
      <AnimatedProgressBar
        percent={progress}
        duration={1000}
        barColor="#3b82f6"
        backgroundColor="#e2e8f0"
        height={20}
        animated={true}
      />
      <div className="flex space-x-2">
        <Button onClick={handleDecrement} disabled={progress === 0}>Decrease</Button>
        <Button onClick={handleIncrement} disabled={progress === 100}>Increase</Button>
        <Button onClick={handleReset} variant="outline">Reset</Button>
      </div>
    </div>
  );
};

export default AnimatedProgressBarDemo;

