"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/ui/tracked-link";
import deviceShowcase from "../../../public/images/device_showcase.avif";
import {
  SearchCheck,
  ShieldCheck,
  Bot,
  Sparkles,
  Zap,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/data/site-content";

const trustItems = [
  { label: "95+ Page Speed", icon: Zap },
  { label: "AI Receptionist", icon: Bot },
  { label: "Local SEO & Maps", icon: SearchCheck },
  { label: "Mobile-First Menus", icon: Sparkles },
  { label: "Secure SSL Hosting", icon: ShieldCheck },
];

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fallback if image fails to load or loads too fast
    const timer = setTimeout(() => setImageLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const isReady = mounted && imageLoaded;

  return (
    <div className="relative min-h-[calc(100svh-96px)]">
      {/* Global Loader - Covers Header & Hero */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
          isReady ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative h-[2px] w-48 overflow-hidden rounded-none bg-white/10">
          <div 
            className="absolute inset-y-0 w-1/2 rounded-none bg-amber-500" 
            style={{ animation: "progress-indeterminate 1.5s infinite ease-in-out" }}
          />
        </div>
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes progress-indeterminate {
            0% { left: -50%; }
            100% { left: 100%; }
          }
        `}} />
      </div>

      <section className={`relative isolate overflow-hidden px-4 pt-4 pb-0 sm:px-6 sm:pt-6 sm:pb-0 lg:px-10 lg:pt-8 lg:pb-0 transition-opacity duration-700 ease-out ${
        isReady ? "opacity-100" : "opacity-0"
      }`}>
        <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[35rem] w-[min(100vw,70rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_bottom,_rgba(245,158,11,1)_0%,_rgba(245,158,11,0.6)_30%,_rgba(245,158,11,0.25)_50%,_transparent_70%)] blur-[130px] sm:h-[40rem] sm:w-[min(100vw,80rem)]" />

      <div className="mx-auto flex min-h-0 w-full max-w-[1200px] flex-col items-center justify-start pt-4 gap-4 text-center sm:min-h-[calc(100svh-96px)] sm:pt-[clamp(3rem,8vh,6rem)] sm:gap-5 lg:gap-6">
        <span className="eyebrow border-white/10 bg-white/5 text-foreground !text-[9px] !px-2.5 !py-0.5 tracking-tight sm:!text-xs sm:!px-4 sm:!py-1.5 sm:tracking-normal">
          <Sparkles className="h-3 w-3 text-accent sm:h-4 sm:w-4" />
          Attract more customers through modern Websites
        </span>

        <div className="space-y-3 sm:space-y-4">
          <h1 className="mx-auto text-foreground">
            <span className="block sm:hidden text-[2.15rem] leading-[1.1] font-bold tracking-[-0.04em]">
              <span className="block">Websites For Restaurants</span>
              <span className="block text-accent mt-0.5">- That Fill Tables.</span>
            </span>
            <span className="hidden sm:block text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
              <span className="block">Premium Websites for Restaurants</span>
              <span className="block">— Built to Fill Your Tables.</span>
            </span>
          </h1>

          <p className="mx-auto max-w-[840px] text-pretty text-sm leading-[1.65] text-foreground-body sm:text-[clamp(1.05rem,1.8vw,1.125rem)]">
            High-performance restaurant websites with interactive menus, online reservation integrations, and 24/7 AI-powered booking assistants.
          </p>
        </div>

        <div className="flex w-full max-w-[340px] flex-row items-center justify-center gap-2 sm:w-auto sm:max-w-none sm:gap-3">
          <TrackedLink href="/demo" eventName="click_hero_demo" className="button-primary flex-1 sm:flex-none sm:w-auto min-h-[44px] px-2 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            Get Free Demo
          </TrackedLink>
          <TrackedLink href="/contact" eventName="click_hero_contact" className="button-secondary flex-1 sm:flex-none sm:w-auto min-h-[44px] px-2 text-xs sm:min-h-[52px] sm:px-7 sm:text-sm">
            Book Free Consultation
          </TrackedLink>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-1.5 rounded-none border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] text-foreground-body sm:px-4 sm:py-1.5 sm:text-sm"
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
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
      </section>
    </div>
  );
}
