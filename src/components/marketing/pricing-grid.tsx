"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { pricingPackages } from "@/data/site-content";

export function PricingGrid() {
  const [selectedPkg, setSelectedPkg] = useState<typeof pricingPackages[0] | null>(null);

  return (
    <>
      <div className="content-shell grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {pricingPackages.map((pkg, index) => (
          <Reveal
            key={pkg.name}
            delayMs={index * 60}
            className={`surface-card flex h-full flex-col p-6 ${pkg.featured ? "border-amber-400/25 bg-[linear-gradient(180deg,rgba(245,158,11,0.1),rgba(17,17,19,0.88))]" : ""}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-foreground">{pkg.name}</h2>
                {pkg.featured && (
                  <span className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-3xl font-semibold text-foreground">{pkg.price}</p>
              <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">{pkg.summary}</p>
            </div>
            <div className="mt-6 grid gap-3 flex-1">
              {pkg.includes.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground-body">
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[16px] border border-white/8 bg-white/[0.03] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Timeline</p>
              <p className="mt-2 text-sm text-foreground-body">{pkg.timeline}</p>
            </div>
            <button
              onClick={() => setSelectedPkg(pkg)}
              className="button-primary mt-6 flex w-full items-center justify-center px-6 text-sm"
            >
              {pkg.ctaText}
            </button>
          </Reveal>
        ))}
      </div>

      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPkg(null)}
          />
          <div className="surface-card relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[24px] shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{selectedPkg.name} Package</h3>
                <p className="mt-1 text-sm text-foreground-body">{selectedPkg.price}</p>
              </div>
              <button 
                onClick={() => setSelectedPkg(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground-muted transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              <div className="grid gap-8 md:grid-cols-2">
                {selectedPkg.modalDetails.map((detailSection) => (
                  <div key={detailSection.category} className="space-y-3">
                    <h4 className="text-lg font-medium text-amber-400">{detailSection.category}</h4>
                    <ul className="grid gap-2">
                      {detailSection.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground-body">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/70" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8 sm:py-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <p className="text-sm font-medium text-foreground">Ready to get started?</p>
                  <p className="text-xs text-foreground-body">Book a free consultation to discuss this package.</p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link 
                    href="/contact" 
                    className="button-primary w-full px-8 text-sm sm:w-auto"
                  >
                    Book Consultation
                  </Link>
                  <Link 
                    href="/contact#contact-methods" 
                    className="button-secondary w-full px-8 text-sm sm:w-auto"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
