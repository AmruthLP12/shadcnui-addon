"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer"

interface InstallationGuideProps {
  componentName: string;
  componentCode: string;
}

export const InstallationGuide: React.FC<InstallationGuideProps> = ({
  componentName,
  componentCode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(componentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const displayedCode = isExpanded
    ? componentCode
    : componentCode.split("\n").slice(0, 10).join("\n") + "\n...";

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge>1</Badge>
              <p>Create the following file in your project:</p>
            </div>
            <pre className="overflow-x-auto rounded-lg bg-muted p-4">
              <code>
                components/{componentName}/{componentName}.tsx
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge>2</Badge>
                <p>Copy and paste the following code:</p>
              </div>
              <Button size="icon" variant="ghost" onClick={copyToClipboard}>
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="relative">
            <Highlight  theme={themes.dracula}  code={displayedCode} language="tsx">
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                  <pre className={`${className} text-sm`} style={{ ...style, padding: '16px' }}>
                    {tokens.map((line, i) => (
                      <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                          <span {...getTokenProps({ token, key })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-muted to-transparent" />
              )}
              <div className="absolute bottom-2 right-2">
                <Button variant="outline" size="sm" onClick={toggleExpand}>
                  {isExpanded ? (
                    <>
                      Collapse <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Expand <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
