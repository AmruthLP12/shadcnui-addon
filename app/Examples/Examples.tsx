import { AdvancedInvoiceTable } from "@/components/InvoiceTable/AdvancedInvoiceTable";
import { BasicInvoiceTable } from "@/components/InvoiceTable/BasicInvoiceTable";

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
