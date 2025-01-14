'use client'
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";
import { MetadataProvider, useMetadata } from "@/context/MetadataContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function MetadataUpdater() {
  const { title, description } = useMetadata();
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <MetadataProvider>
        <MetadataUpdater />
        <body className={`${poppins.variable} font-sans antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 overflow-auto p-8 pt-20">{children}</main>
            </div>
          </ThemeProvider>
        </body>
      </MetadataProvider>
    </html>
  );
}
