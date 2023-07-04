import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "Redit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //combining multiplt classname
    <html lang="en" className={cn("bg-white", inter.className)}>
      <body className="min-h-screen  bg-slate-50 pt-12">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
