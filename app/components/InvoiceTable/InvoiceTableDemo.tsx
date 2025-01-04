'use client';

import React from 'react';
import { BasicInvoiceTable } from '@/app/components/InvoiceTable/BasicInvoiceTable';
import { AdvancedInvoiceTable } from '@/app/components/InvoiceTable/AdvancedInvoiceTable';

export default function InvoiceTableDemo() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Invoice Table Demos</h1>
      <div className="space-y-12">
        <BasicInvoiceTable />
        <AdvancedInvoiceTable />
      </div>
    </div>
  );
}

