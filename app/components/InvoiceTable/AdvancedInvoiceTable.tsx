'use client';

import React, { useState } from 'react';
import { InvoiceTable } from '@/app/components/InvoiceTable/InvoiceTable';

export const AdvancedInvoiceTable: React.FC = () => {
  const [footerDetails, setFooterDetails] = useState({
    advancePayment: 50,
        grandTotal: 200,
        remainingAmount: 150,
  });

  const initialItems = [
    { id: 1, description: "Product A", quantity: 2, price: 50 },
    { id: 2, description: "Product B", quantity: 1, price: 100 },
  ];

  const handleFooterChange = (updatedFooter: typeof footerDetails) => {
    setFooterDetails(updatedFooter);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Advanced Invoice Table</h2>
      <InvoiceTable
        initialItems={initialItems}
        footerDetails={footerDetails}
        editableFooter
        onFooterChange={handleFooterChange}
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Footer Details (State):</h3>
        <pre className="bg-muted-foreground p-2 rounded mt-2">
          {JSON.stringify(footerDetails, null, 2)}
        </pre>
      </div>
    </div>
  );
};

