import Navbar from "@/src/components/Navbar";
import { ThemeProvider } from "@/src/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caroline Vella - Coach Professionnelle",
  description:
    "Coach professionnelle certifiée en France, accompagnement personnalisé pour particuliers et entreprises",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="pt-24 pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
