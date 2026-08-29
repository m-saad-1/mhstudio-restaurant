"use client";

import { useState } from "react";
import Link from "next/link";
import Check from "lucide-react/dist/esm/icons/check";
import X from "lucide-react/dist/esm/icons/x";
import { Reveal } from "@/components/ui/reveal";
import { pricingPackages } from "@/data/site-content";

export function PricingGrid() {
  const [selectedPkg, setSelectedPkg] = useState<typeof pricingPackages[0] | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly" | "onetime">("monthly");

  return (
    <>
      {/* Promotional Banner */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-col gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-6 py-4 w-full max-w-sm relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[50px] bg-amber-500/10 blur-2xl rounded-full pointer-events-none" />
          
          <div className="flex items-center justify-between relative z-10">
            <span className="text-amber-400 font-semibold text-sm">20% Off — First 20 Restaurants</span>
            <span className="text-amber-200 text-xs font-medium bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">12 spots left</span>
          </div>
          <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden relative z-10 border border-white/5 flex">
            <div className="h-full bg-amber-500 w-2/5 rounded-full"></div>
          </div>
          <div className="flex justify-end relative z-10 mt-0.5">
            <span className="text-[10px] text-foreground-muted uppercase tracking-wider font-semibold">8/20 purchased</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-white/10 bg-white/[0.02] p-1">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billingCycle === "monthly" ? "bg-amber-400 text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]" : "text-foreground-muted hover:text-foreground"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billingCycle === "yearly" ? "bg-amber-400 text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]" : "text-foreground-muted hover:text-foreground"}`}
          >
            Yearly
          </button>
          <button
            onClick={() => setBillingCycle("onetime")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${billingCycle === "onetime" ? "bg-amber-400 text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]" : "text-foreground-muted hover:text-foreground"}`}
          >
            One Time
          </button>
        </div>
      </div>

      <div className="content-shell grid gap-6 lg:grid-cols-3">
        {pricingPackages.map((pkg, index) => {
          const activePrice = pkg.pricingOptions ? pkg.pricingOptions[billingCycle] : null;

          return (
            <Reveal
              key={pkg.name}
              delayMs={index * 60}
              className={`surface-card flex h-full flex-col p-6 ${pkg.featured ? "border-amber-400/25 bg-[linear-gradient(180deg,rgba(245,158,11,0.1),rgba(17,17,19,0.88))]" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="flex items-baseline gap-2 text-2xl font-semibold text-foreground">
                    {pkg.name}
                  </h2>
                  {pkg.featured && (
                    <span className="rounded-none bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-zinc-950 shadow-[0_4px_14px_rgba(245,158,11,0.3)]">
                      Recommended
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-1 min-h-[5.5rem] justify-center">
                  <div className="flex items-baseline gap-2.5">
                    <p className="text-3xl font-bold text-foreground">
                      {activePrice ? activePrice.price : pkg.price}
                    </p>
                    {/* @ts-ignore */}
                    {(activePrice ? activePrice.suffix : pkg.priceSuffix) && (
                      <span className="text-sm font-normal text-foreground-muted opacity-80">
                        {activePrice ? activePrice.suffix : pkg.priceSuffix}
                      </span>
                    )}
                    {/* @ts-ignore */}
                    {(activePrice?.originalPrice || (!activePrice && pkg.originalPrice)) && (
                      <span className="text-lg font-medium text-foreground-muted line-through opacity-60">
                        {/* @ts-ignore */}
                        {activePrice?.originalPrice || pkg.originalPrice}
                      </span>
                    )}
                  </div>
                  {/* @ts-ignore */}
                  {activePrice?.note && (
                    <span className="inline-block w-fit rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-500/20">
                      {/* @ts-ignore */}
                      {activePrice.note}
                    </span>
                  )}
                  {/* @ts-ignore */}
                  {activePrice?.smallNote && (
                    <p className="text-[11px] leading-tight text-foreground-muted/70 mt-1 max-w-[95%]">
                      {/* @ts-ignore */}
                      {activePrice.smallNote}
                    </p>
                  )}
                </div>
                <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">{pkg.summary}</p>
              </div>
              <div className="mt-6 grid gap-3 flex-1">
                {pkg.includes.map((item) => {
                  let displayItem = item;
                  if (item.includes("Days Support") && pkg.pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly")) {
                    displayItem = "Lifetime Support";
                  }
                  return (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground-body">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      <span>{displayItem}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 rounded-none border border-white/8 bg-white/[0.03] p-4">
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
          );
        })}
      </div>

      <Reveal delayMs={200} className="content-shell mt-8">
        <div className="surface-card flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center lg:p-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground">Mobile Application</h3>
            <p className="mt-2 text-sm text-foreground-body sm:max-w-[70%]">
              Expand your reach with a dedicated mobile application for iOS and Android. Seamlessly integrated with your restaurant's system for reservations, orders, and customer management.
            </p>
          </div>
          <div className="shrink-0 sm:text-right">
            <p className="text-2xl font-bold text-foreground">PKR 10,000</p>
            <p className="text-sm text-foreground-muted">Additional</p>
          </div>
        </div>
      </Reveal>

      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPkg(null)}
          />
          <div className="surface-card relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-none shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 sm:px-8">
              <div>
                <h3 className="flex items-baseline gap-2 text-2xl font-semibold text-foreground">
                  {selectedPkg.name} Package
                </h3>
                <p className="mt-1 text-sm text-foreground-body">
                  {/* @ts-ignore */}
                  {selectedPkg.pricingOptions ? selectedPkg.pricingOptions[billingCycle].price : selectedPkg.price}
                </p>
              </div>
              <button 
                onClick={() => setSelectedPkg(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-white/10 bg-white/5 text-foreground-muted transition-colors hover:bg-white/10 hover:text-foreground"
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
                      {detailSection.features.map((feature) => {
                        let displayFeature = feature;
                        if (feature.toLowerCase().includes("days post-launch support") && selectedPkg?.pricingOptions && (billingCycle === "monthly" || billingCycle === "yearly")) {
                          displayFeature = feature.replace(/\d+\s+days post-launch support/i, "Lifetime support");
                        }
                        return (
                          <li key={feature} className="flex items-start gap-2 text-sm text-foreground-body">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/70" />
                            <span>{displayFeature}</span>
                          </li>
                        );
                      })}
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
                    Start Your Project
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
