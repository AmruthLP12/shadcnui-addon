import { AnimatedProgressBar } from "./AnimatedProgressBar";

const AnimatedProgressBarDemo = () => {
  return (
    <div className="space-y-4">
      <AnimatedProgressBar
        percent={50}
        duration={1000}
        barColor="#3b82f6"
        backgroundColor="#e2e8f0"
        height={20}
        animated={true}
      />
    </div>
  );
};

export default AnimatedProgressBarDemo;
