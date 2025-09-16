import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import { I18nProvider } from "@/lib/i18n";
import MobileDetector from "@/components/MobileDetector/MobileDetecor";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melek ElMokhtar",
  description:
    "Melek ElMokhtar's Portfolio - Full-Stack Developer specializing in modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.variable} antialiased`}>
        <I18nProvider>
          <MobileDetector>
            <Navbar />
            {children}
          </MobileDetector>
        </I18nProvider>
      </body>
    </html>
  );
}
