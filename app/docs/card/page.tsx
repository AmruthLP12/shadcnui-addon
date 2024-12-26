import { CodePreview } from "@/components/CodePreview";
import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";

const demoCode = `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";

const BackgroundOverlayCardDemo = () => {
  return (
    <div className="w-full px-10">
            <BackgroundOverlayCard
              title="Dynamic Background Card"
              description="Hover over this card to see the background change!"
              defaultBackground="https://tinyurl.com/47n2srhd"
              hoverBackground="https://tinyurl.com/3r62nt4v"
              className="max-w-md"
            />
          </div>
  );
};

export default AutosizeTextareaDemo;`;

export default function Demo() {
  return (
    <div className="container mx-auto p-6">
      <CodePreview
        code={demoCode}
        preview={
          <div className="w-full px-10">
            <BackgroundOverlayCard
              title="Dynamic Background Card"
              description="Hover over this card to see the background change!"
              defaultBackground="https://tinyurl.com/47n2srhd"
              hoverBackground="https://tinyurl.com/3r62nt4v"
              className="max-w-md"
            />
          </div>
        }
      />
    </div>
  );
}
