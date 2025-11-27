import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Routes from "./router/Routes";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
            {/* <!--> */}
            <Disclosure as="nav" className="relative bg-white shadow-sm">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3 claseParaSustituir">
                      <Link href="/" className="flex items-center gap-3">
                        <img src="/assets/logo.svg" alt="EnterLab Diagnóstico Logo" className="h-10 w-10 shrink-0" />
                      </Link>
                    </Menu>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-600 focus:outline-hidden focus:ring-inset">
                      <span className="absolute -inset-0.5 hamburguerColor" />
                      <span className="sr-only">Abrir menú</span>
                      <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                      <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                      {/* Current: "border-indigo-600 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                      <div className="flex items-center gap-4 text-sm font-medium text-neutral-600 justify-between">
                        <Routes />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-4">
                  {/* Contenido del menu de hamburguesa */}
                  <Routes />
                </div>
              </DisclosurePanel>
            </Disclosure>
            {/* <!--> */}
          </header>
          <main className="flex-1 globalBackground">
            <div className="mx-auto w-full max-w-6xl px-4 py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
