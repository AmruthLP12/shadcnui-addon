import { CodePreview } from "@/components/CodePreview";
import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";

const demoCode = `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";

const BackgroundOverlayCardDemo = () => {
  return (
    <div className="w-full px-10">
            <BackgroundOverlayCard
              title="Dynamic Background Card"
              description="Hover over this card to see the background change!"
              defaultBackground="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              hoverBackground="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
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
              defaultBackground="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              hoverBackground="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
              className="max-w-md"
            />
          </div>
        }
      />
    </div>
  );
}
