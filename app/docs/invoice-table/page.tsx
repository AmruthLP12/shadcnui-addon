"use client";

import { AdvancedInvoiceTable } from "@/app/components/InvoiceTable/AdvancedInvoiceTable";
import { BasicInvoiceTable } from "@/app/components/InvoiceTable/BasicInvoiceTable";
import { ReusablePage } from "@/components/ReusablePage";
import { useEffect, useState } from "react";

export default function InvoicePage() {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");
  const [basicInvoice, setBasicInvoice] = useState("Loading...");
  const [advancedInvoice, setAdvancedInvoice] = useState("Loading...");

  useEffect(() => {
    const fetchCode = async (
      component: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const response = await fetch(
          `/api/component-code?component=${encodeURIComponent(component)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const code = await response.text();
        setter(code);
      } catch (err) {
        console.error(`Failed to load code for ${component}:`, err);
        setter(`Failed to load code: ${err}`);
      }
    };

    fetchCode("InvoiceTable", setComponentCode);
    fetchCode("InvoiceTableDemo", setDemoCode);
    fetchCode("BasicInvoiceTable", setBasicInvoice);
    fetchCode("AdvancedInvoiceTable", setAdvancedInvoice);
  }, []);

  const examples = [
    {
      title: "Basic Invoice Table",
      code: basicInvoice,
      preview: <BasicInvoiceTable />,
    },
    {
      title: "Advanced Invoice Table",
      code: advancedInvoice,
      preview: <AdvancedInvoiceTable />,
    },
  ];

  return (
    <ReusablePage
      title="Invoice Table"
      description="A fully customizable invoice table with editable footer and real-time calculations."
      badgeText="UI Component"
      demoCode={demoCode}
      demoPreview={<AdvancedInvoiceTable />}
      installationCode={componentCode}
      examples={examples}
    />
  );
}
