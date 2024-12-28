export const BasicInvoiceDemoCode = 
    `
    import { InvoiceTable } from '@/components/InvoiceTable';
    
    const BasicInvoiceDemo = () => {
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
          editableFooter={true}
        />
      );
    };`
