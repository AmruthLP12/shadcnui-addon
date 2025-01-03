import { BackgroundOverlayCard } from "./BackgroundOverlayCard";

const DarkMode = () => {
  return (
    <BackgroundOverlayCard
      title="Dark Mode Card"
      description="Perfect for dark-themed applications."
      defaultBackground="https://tinyurl.com/47n2srhd"
      hoverBackground="https://tinyurl.com/3r62nt4v"
      className="max-w-sm dark:bg-neutral-900 cursor-pointer"
    />
  );
};

export default DarkMode;
