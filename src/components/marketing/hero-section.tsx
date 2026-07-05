import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/ui/tracked-link";
import deviceShowcase from "../../../public/images/device_showcase.avif";
import {
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/site-content";

const trustItems = [
  { label: "Fast Delivery", icon: Zap },
  { label: "Mobile Optimized", icon: Smartphone },
  { label: "SEO Ready", icon: SearchCheck },
  { label: "Modern Design", icon: Sparkles },
  { label: "Secure Hosting", icon: ShieldCheck },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pt-4 pb-0 sm:px-6 sm:pt-6 sm:pb-0 lg:px-10 lg:pt-8 lg:pb-0">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[35rem] w-[min(100vw,70rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(245,158,11,1)_0%,_rgba(245,158,11,0.6)_30%,_rgba(245,158,11,0.25)_50%,_transparent_70%)] blur-[130px] sm:h-[40rem] sm:w-[min(100vw,80rem)]" />

      <div className="mx-auto flex min-h-0 w-full max-w-[1200px] flex-col items-center justify-start pt-4 gap-4 text-center sm:min-h-[calc(100svh-96px)] sm:pt-[clamp(3rem,8vh,6rem)] sm:gap-5 lg:gap-6">
        <span className="eyebrow border-white/10 bg-white/5 text-foreground text-[9px] px-2.5 py-1 sm:text-xs sm:px-4 sm:py-1.5">
          <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
          Modern Websites for Growing Businesses
        </span>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="mx-auto text-[clamp(1.7rem,4.5vw,3rem)] font-semibold leading-[1.15] tracking-[-0.04em] text-foreground sm:text-[clamp(1.5rem,3.5vw,3.5rem)]">
            <span className="block">Websites That Don&apos;t Just Look Good</span>
            <span className="block">— They Bring You More Customers.</span>
          </h1>

          <p className="mx-auto max-w-[700px] text-pretty text-sm leading-[1.65] text-foreground-body sm:text-[clamp(1rem,2vw,1.125rem)]">
            {siteConfig.name} designs and develops high-performance, conversion-focused websites for restaurants,
            salons, gyms, clinics, cafes, and local businesses.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 sm:gap-3">
          <TrackedLink href="/work" eventName="click_hero_portfolio" className="button-primary w-auto min-h-[44px] px-3.5 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            View Portfolio
          </TrackedLink>
          <TrackedLink href="/contact" eventName="click_hero_contact" className="button-secondary w-auto min-h-[44px] px-3.5 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            Free Consultation
          </TrackedLink>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] text-foreground-body sm:px-4 sm:py-1.5 sm:text-sm"
              >
                <Icon className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" strokeWidth={2} />
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>

        <div className="relative mt-4 w-full max-w-[1100px] sm:mt-auto sm:pt-8 lg:pt-12">
          <Image
            src={deviceShowcase}
            alt="Device showcase featuring MhStudio website mockups on laptop, tablet, and phone."
            priority
            placeholder="blur"
            sizes="(max-width: 640px) 96vw, (max-width: 1024px) 92vw, 1100px"
            className="relative mx-auto h-auto w-full max-h-[clamp(11rem,30vw,24rem)] object-contain drop-shadow-[0_30px_90px_rgba(0,0,0,0.72)]"
          />
        </div>
      </div>
    </section>
  );
}
