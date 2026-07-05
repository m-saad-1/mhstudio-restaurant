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
        title="Package-based pricing keeps the offer clear while leaving room for the right scope."
        description="Instead of random fixed pricing, the structure uses clear tiers so local businesses can understand what level of website support fits their goals."
        primaryCta={{ label: "Book Free Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <section className="section-space">
        <PricingGrid />
      </section>
    </>
  );
}
