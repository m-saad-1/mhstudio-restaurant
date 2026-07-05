"use client";

import { usePathname } from "next/navigation";

export function FooterCtaWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <>{children}</>;
}
