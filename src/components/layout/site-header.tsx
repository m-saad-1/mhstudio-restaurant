"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/site-content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 overflow-visible">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[180px] sm:h-[220px]">
          <div className="absolute left-1/2 top-[-5rem] h-[16rem] w-[min(92vw,52rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.28)_0%,_rgba(245,158,11,0.1)_28%,_transparent_72%)] blur-[120px]" />
          <div className="absolute left-[8%] top-[-2rem] h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(251,191,36,0.14)_0%,_transparent_72%)] blur-[100px] sm:h-44 sm:w-44" />
          <div className="absolute right-[10%] top-[-1.5rem] h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.12)_0%,_transparent_72%)] blur-[90px] sm:h-40 sm:w-40" />
        </div>

        <div className="content-shell relative py-4">
          <div
            className={[
              "grid h-[72px] grid-cols-[1fr_auto] items-center rounded-full border transition-colors duration-300 lg:grid-cols-[1fr_auto_1fr]",
              scrolled
                ? "border-white/10 bg-navigation-background shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur-md"
                : "border-white/0 bg-transparent backdrop-blur-md",
            ].join(" ")}
          >
            <Link href="/" className="justify-self-start px-6 flex items-center">
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={48} height={48} className="h-10 w-auto sm:h-12" />
            </Link>

            <nav className="hidden items-center gap-8 lg:flex lg:justify-self-center" aria-label="Primary">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-foreground" : "text-foreground-body hover:text-foreground"}`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden justify-self-end pr-3 lg:block">
              <Link href="/contact" className="button-primary px-6 text-sm">
                Book Free Consultation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="mr-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-card-background text-foreground lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-[rgba(9,9,11,0.92)] backdrop-blur-md" />
        <div className="content-shell relative flex min-h-screen flex-col py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
            >
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={48} height={48} className="h-10 w-auto sm:h-12" />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-16 flex flex-1 flex-col justify-center gap-6" aria-label="Mobile">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <div key={item.href} className="relative w-fit">
                  {isActive && (
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-accent" />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-3xl font-semibold leading-none transition-colors duration-300 ${isActive ? "text-accent" : "text-foreground hover:text-accent"}`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="button-primary mt-8 w-full px-6 text-base"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
