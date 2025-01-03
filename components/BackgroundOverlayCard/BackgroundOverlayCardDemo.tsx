import { BackgroundOverlayCard } from "@/components/BackgroundOverlayCard/BackgroundOverlayCard";

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
