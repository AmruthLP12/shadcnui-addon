"use client";
import React, { createContext, useContext, useState } from "react";

interface MetadataContextProps {
  title: string;
  description: string;
  setMetadata: (title: string, description: string) => void;
}

const MetadataContext = createContext<MetadataContextProps | undefined>(
  undefined
);

export const MetadataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [title, setTitle] = useState("shadcn-ui/addons");
  const [description, setDescription] = useState(
    "Enhance your UI with powerful addons for shadcn-ui, designed to extend functionality and streamline your development workflow."
  );

  const setMetadata = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
  };

  return (
    <MetadataContext.Provider value={{ title, description, setMetadata }}>
      {children}
    </MetadataContext.Provider>
  );
};

export const useMetadata = () => {
  const context = useContext(MetadataContext);
  if (!context) {
    throw new Error("useMetadata must be used within a MetadataProvider");
  }
  return context;
};
