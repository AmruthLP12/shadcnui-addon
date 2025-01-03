"use client";

import { AdvancedInvoiceTable } from "@/components/InvoiceTable/AdvancedInvoiceTable";
import { BasicInvoiceTable } from "@/components/InvoiceTable/BasicInvoiceTable";
import { ReusablePage } from "@/components/ReusablePage";
import { useEffect, useState } from "react";

export default function InvoicePage() {
  const [componentCode, setComponentCode] = useState("Loading...");
  const [demoCode, setDemoCode] = useState("Loading...");
  const [basicInvoice, setBasicInvoice] = useState("Loading...");
  const [advancedInvoice, setAdvancedInvoice] = useState("Loading...");

  useEffect(() => {
    const fetchCode = async (
      path: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      try {
        const response = await fetch(`/api/component-code?path=${path}`);
        const code = await response.text();
        setter(code);
      } catch (err) {
        console.error(`Failed to load code from ${path}:`, err);
        setter("Failed to load code.");
      }
    };

    Promise.all([
      fetchCode("components/InvoiceTable/InvoiceTable.tsx", setComponentCode),
      fetchCode(
        "components/InvoiceTable/AdvancedInvoiceTable.tsx",
        setDemoCode
      ),
      fetchCode(
        "components/InvoiceTable/BasicInvoiceTable.tsx",
        setBasicInvoice
      ),
      fetchCode(
        "components/InvoiceTable/BasicInvoiceTable.tsx",
        setAdvancedInvoice
      ),
    ]);
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
