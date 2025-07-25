'use client';
import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "../globals.css";
import { MetadataProvider } from "@/context/MetadataContext";
import { MetadataUpdater } from "@/context/MetadataUpdater"; // use next/head version

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MetadataProvider>
      <MetadataUpdater /> {/* ✅ Injects into <head> safely */}
      <div className="flex flex-col min-h-screen">
        <SidebarProvider>
          <Navbar />
          <div className="flex flex-1">
            <AppSidebar />
            <main className="flex-1 overflow-auto">
              <SidebarTrigger className="fixed mb-4" />
              {children}
            </main>
          </div>
        </SidebarProvider>
      </div>
    </MetadataProvider>
  );
}
