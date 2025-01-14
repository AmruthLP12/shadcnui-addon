"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlight, themes } from "prism-react-renderer";

interface CodePreviewProps {
  code: string;
  preview: React.ReactNode;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ code, preview }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between border-b px-4">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("preview")}
            className={`py-3 ${
              activeTab === "preview"
                ? "border-b-2 border-primary font-semibold"
                : "text-muted-foreground"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`py-3 ${
              activeTab === "code"
                ? "border-b-2 border-primary font-semibold"
                : "text-muted-foreground"
            }`}
          >
            Code
          </button>
        </div>
      </div>
      <div className="p-6">
        {activeTab === "preview" ? (
          preview
        ) : (
          <div className="relative">
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-4"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Highlight theme={themes.dracula} code={code} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                className={`${className} text-sm h-64 overflow-y-auto rounded-lg border`}
                style={{
                  ...style,
                  padding: "16px",
                  whiteSpace: "pre-wrap", // Enables word wrapping
                  wordBreak: "break-word", // Breaks long words
                }}
              >
                {tokens.map((line, i) => (
                  <div
                    key={`line-${i}`}
                    {...getLineProps({ line, key: i })}
                  >
                    {line.map((token, key) => (
                      <span
                        key={`token-${key}`}
                        {...getTokenProps({ token, key })}
                      />
                    ))}
                  </div>
                ))}
              </pre>
              
              )}
            </Highlight>
          </div>
        )}
      </div>
    </div>
  );
};
