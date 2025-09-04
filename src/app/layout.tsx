import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melek ElMokhtar",
  description: "Melek ElMokhtar's Portfolio",
};

//TODO: Implement Lanyard or Profile Card

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
