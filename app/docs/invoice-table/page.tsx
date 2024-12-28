'use client';

import { InivoiceTableComponentCode } from "@/app/ComponentCode/ComponentCode";
import { AdvancedInvoiceTable } from "@/components/InvoiceTable/AdvancedInvoiceTable";
import { ReusablePage } from "@/components/ReusablePage";
import {InvoiceTableExamples} from "@/app/Examples/Examples"
import { BasicInvoiceDemoCode } from "@/app/DemoCodes/DemoCodes";

const componentCode = InivoiceTableComponentCode

const demoCode = BasicInvoiceDemoCode

const examples = InvoiceTableExamples

export default function InvoicePage() {
  return (
    <ReusablePage
      title="Invoice Table"
      description="A fully customizable invoice table with editable footer and real-time calculations."
      badgeText="UI Component"
      demoCode={demoCode}
      demoPreview={
        <AdvancedInvoiceTable />
      }
      installationCode={componentCode}
      examples={examples}
    />
  );
}
