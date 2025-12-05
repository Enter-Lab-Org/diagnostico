"use client";

import { ProtectedRoute } from "@/app/common/components/ProtectedRoute";

export default function MisEmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}


