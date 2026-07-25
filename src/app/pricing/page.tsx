import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PricingGrid = dynamic(() => import("@/components/marketing/pricing-grid").then((mod) => mod.PricingGrid));

export const metadata: Metadata = {
  title: "Pricing",
  description: "Explore MhStudio Launch, Growth, Scale AI, and Enterprise website packages for local businesses.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear, flat-rate pricing built for business growth."
        description="Choose a plan that fits your business—from simple launch sites to advanced custom digital platforms and AI assistants."
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <section className="section-space">
        <PricingGrid />
      </section>
    </>
  );
}
