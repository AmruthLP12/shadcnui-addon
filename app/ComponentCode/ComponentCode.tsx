export const InivoiceTableComponentCode = `'use client';

import React, { useState } from "react";

interface TableItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

interface InvoiceTableProps {
  initialItems: TableItem[];
  footerDetails?: {
    advancePayment: number;
    grandTotal: number;
    remainingAmount: number;
  };
  editableFooter?: boolean;
  onFooterChange?: (updatedFooter: {
    advancePayment: number;
    grandTotal: number;
    remainingAmount: number;
  }) => void;
}

export const InvoiceTable: React.FC<InvoiceTableProps> = ({
  initialItems,
  footerDetails,
  editableFooter = false,
  onFooterChange,
}) => {
  const [items, setItems] = useState(initialItems);
  const [footer, setFooter] = useState(
    footerDetails || {
      advancePayment: 0,
      grandTotal: 0,
      remainingAmount: 0,
    }
  );

  const updateGrandTotal = () => {
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    setFooter((prev) => ({
      ...prev,
      grandTotal: total,
      remainingAmount: total - prev.advancePayment,
    }));
  };

  const handleItemChange = (id: number, field: "quantity" | "price", value: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleFooterChange = (field: string, value: number) => {
    const updatedFooter = {
      ...footer,
      [field]: value,
      remainingAmount: footer.grandTotal - value,
    };
    setFooter(updatedFooter);
    onFooterChange?.(updatedFooter);
  };

  React.useEffect(() => {
    updateGrandTotal();
  }, [items]);

  return (
    <div>
      <table className="table">
        {/* Render Table Rows */}
      </table>
      <div>
        <span>Grand Total: {footer.grandTotal}</span>
        <span>Remaining Amount: {footer.remainingAmount}</span>
      </div>
    </div>
  );
};`;