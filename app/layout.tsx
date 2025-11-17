import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Routes from "./router/Routes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EnterLab Diagnóstico",
  description: "Enterlab diagnóstico app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-neutral-50 text-neutral-900">
          <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
            <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
              <Link href="/" className="flex items-center gap-3">
                <img src="/assets/logo.svg" alt="EnterLab Diagnóstico Logo" className="h-10 w-10 shrink-0" />
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium text-neutral-600 justify-between">
                <Routes />
              </div>
            </nav>
          </header>
          <main className="flex-1 globalBackground">
            <div className="mx-auto w-full max-w-6xl px-4 py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
