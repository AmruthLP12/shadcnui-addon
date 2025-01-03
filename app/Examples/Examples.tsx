import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
import { AdvancedInvoiceTable } from "@/components/InvoiceTable/AdvancedInvoiceTable";
import { BasicInvoiceTable } from "@/components/InvoiceTable/BasicInvoiceTable";

// ! BackgroundOverlayCardExample
export const BackgroundOverlayCardExample = [
  {
    title: "Hover Effect Example",
    description: "An interactive card that changes the background on hover.",
    code: `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
    
    <BackgroundOverlayCard
      title="Interactive Card"
      description="This card shows a hover effect with a dynamic background."
      defaultBackground="https://tinyurl.com/47n2srhd"
      hoverBackground="https://tinyurl.com/3r62nt4v"
      className="max-w-sm cursor-pointer"
    />;`,
    preview: (
      <BackgroundOverlayCard
        title="Interactive Card"
        description="This card shows a hover effect with a dynamic background."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm cursor-pointer"
      />
    ),
  },
  {
    title: "Full-Width Card",
    description:
      "A card with a dynamic background that spans the entire width of the container.",
    code: `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
      
      <BackgroundOverlayCard
        title="Full-Width Card"
        description="This card spans the entire width of its container."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="w-full cursor-pointer"
      />;`,
    preview: (
      <BackgroundOverlayCard
        title="Full-Width Card"
        description="This card spans the entire width of its container."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="w-full cursor-pointer"
      />
    ),
  },
  {
    title: "Gallery Example",
    description: "A grid of cards showcasing multiple hover effects.",
    code: `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((_, index) => (
          <BackgroundOverlayCard
            key={index}
            title={\`Card \${index + 1}\`}
            description="Hover to see the effect."
            defaultBackground="https://tinyurl.com/47n2srhd"
            hoverBackground="https://tinyurl.com/3r62nt4v"
            className="max-w-sm cursor-pointer"
          />
        ))}
      </div>;`,
    preview: (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((_, index) => (
          <BackgroundOverlayCard
            key={index}
            title={`Card ${index + 1}`}
            description="Hover to see the effect."
            defaultBackground="https://tinyurl.com/47n2srhd"
            hoverBackground="https://tinyurl.com/3r62nt4v"
            className="max-w-sm cursor-pointer"
          />
        ))}
      </div>
    ),
  },
  {
    title: "Minimal Style",
    description: "A minimalistic card with lighter overlays.",
    code: `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
      
      <BackgroundOverlayCard
        title="Minimal Card"
        description="This card has a lighter overlay effect."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm opacity-[0.3] cursor-pointer"
      />;`,
    preview: (
      <BackgroundOverlayCard
        title="Minimal Card"
        description="This card has a lighter overlay effect."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm opacity-[0.3] cursor-pointer"
      />
    ),
  },
  {
    title: "Dark Mode Example",
    description: "A card optimized for dark mode with adjusted text contrast.",
    code: `import { BackgroundOverlayCard } from "@/components/Cards/BackgroundOverlayCard";
      
      <BackgroundOverlayCard
        title="Dark Mode Card"
        description="Perfect for dark-themed applications."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm dark:bg-neutral-900 cursor-pointer"
      />;`,
    preview: (
      <BackgroundOverlayCard
        title="Dark Mode Card"
        description="Perfect for dark-themed applications."
        defaultBackground="https://tinyurl.com/47n2srhd"
        hoverBackground="https://tinyurl.com/3r62nt4v"
        className="max-w-sm dark:bg-neutral-900 cursor-pointer"
      />
    ),
  },
];

// ! InvoiceTableExamples

export const InvoiceTableExamples = [
  {
    title: "Basic Invoice Table",
    code: `
import { InvoiceTable } from '@/components/InvoiceTable';

export const BasicInvoiceDemo = () => {
  const initialItems = [
    { id: 1, description: "Product A", quantity: 2, price: 50 },
    { id: 2, description: "Product B", quantity: 1, price: 100 },
  ];

  return (
    <InvoiceTable
      initialItems={initialItems}
      footerDetails={{
        advancePayment: 20,
        grandTotal: 100,
        remainingAmount: 80,
      }}
    />
  );
};`,
    preview: <BasicInvoiceTable />,
  },
  {
    title: "Advanced Invoice Table",
    code: `
import { InvoiceTable } from '@/components/InvoiceTable';

export const AdvancedInvoiceDemo = () => {
  const initialItems = [
    { id: 1, description: "Product A", quantity: 2, price: 50 },
    { id: 2, description: "Product B", quantity: 1, price: 100 },
  ];

  return (
    <InvoiceTable
      initialItems={initialItems}
      footerDetails={{
        advancePayment: 50,
        grandTotal: 200,
        remainingAmount: 150,
      }}
      editableFooter
    />
  );
};`,
    preview: <AdvancedInvoiceTable />,
  },
];
