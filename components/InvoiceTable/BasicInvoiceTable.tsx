'use client';

import React from 'react';
import { InvoiceTable } from '@/components/InvoiceTable/InvoiceTable';

export const BasicInvoiceTable: React.FC = () => {
  const initialItems = [
    { id: 1, description: "Product A", quantity: 2, price: 50 },
    { id: 2, description: "Product B", quantity: 3, price:100}
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Basic Invoice Table</h2>
      <InvoiceTable
        initialItems={initialItems}
        footerDetails={{
          advancePayment: 200,
          grandTotal: 1900,
          remainingAmount: 1700,
        }}
        editableFooter
      />
    </div>
  );
};

