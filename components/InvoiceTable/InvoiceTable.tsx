'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

const noArrows = "appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"

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
  const [items, setItems] = useState<TableItem[]>(initialItems);
  const [footer, setFooter] = useState(footerDetails || {
    advancePayment: 0,
    grandTotal: 0,
    remainingAmount: 0,
  });

  useEffect(() => {
    updateGrandTotal();
  }, [items]);

  const updateGrandTotal = () => {
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    setFooter(prev => ({
      ...prev,
      grandTotal: total,
      remainingAmount: total - prev.advancePayment
    }));
  };

  const handleItemChange = (id: number, field: 'quantity' | 'price', value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, [field]: numValue } : item
      )
    );
  };

  const handleAddItem = (index: number) => {
    const itemToClone = items[index];
    const newItem = {
      id: Date.now(),
      description: itemToClone.description,
      quantity: 1,
      price: 0
    };
    const newItems = [...items];
    newItems.splice(index + 1, 0, newItem);
    setItems(newItems);
  };

  const handleRemoveItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleFooterChange = (field: string, value: string) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    const updatedFooter = {
      ...footer,
      [field]: numValue,
      remainingAmount: footer.grandTotal - numValue,
    };
    setFooter(updatedFooter);
    onFooterChange?.(updatedFooter);
  };

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.quantity === 0 ? '' : item.quantity}
                  onChange={(e) => handleItemChange(item.id, 'quantity', e.target.value)}
                  className={cn("w-full", noArrows)}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  value={item.price === 0 ? '' : item.price}
                  onChange={(e) => handleItemChange(item.id, 'price', e.target.value)}
                  className={cn("w-full", noArrows)}
                />
              </TableCell>
              <TableCell>
                {item.quantity * item.price}
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => handleAddItem(index)}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  {items.filter(i => i.description === item.description).length > 1 && (
                    <Button
                      onClick={() => handleRemoveItem(item.id)}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {footer && (
        <div className="space-y-3 text-right">
          <div className="flex items-center justify-end space-x-4">
            <span>Advance Payment:</span>
            {editableFooter ? (
              <Input
                type="number"
                value={footer.advancePayment === 0 ? '' : footer.advancePayment}
                onChange={(e) =>
                  handleFooterChange('advancePayment', e.target.value)
                }
                className={cn("w-28", noArrows)}
              />
            ) : (
              <span className="font-bold">{footer.advancePayment}</span>
            )}
          </div>
          <div className="text-lg">
            Grand Total: <span className="font-bold text-green-600">{footer.grandTotal}</span>
          </div>
          <div className="text-lg">
            Remaining Amount:{' '}
            <span
              className={`font-bold ${
                footer.remainingAmount < 0 ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {footer.remainingAmount}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

