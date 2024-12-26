import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata = {
  title: "shadcn-ui/addons",
  description:
    "Enhance your UI with powerful addons for shadcn-ui, designed to extend functionality and streamline your development workflow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google site verification */}
        <meta name="google-site-verification" content="m3gcO3z77CpmDFtlEBa5Qk-g2yMOUvIFj34TKqbJMoU" />
      </head> 
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 overflow-auto p-8 pt-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
