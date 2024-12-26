import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/navbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "../globals.css";

export const metadata = {
  title: "shadcn-ui/addons",
  description:
    "Enhance your UI with powerful addons for shadcn-ui, designed to extend functionality and streamline your development workflow.",
};

export default function LayoutWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
