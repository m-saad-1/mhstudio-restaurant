import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PortfolioFilterGrid = dynamic(() => import("@/components/marketing/portfolio-filter-grid").then((mod) => mod.PortfolioFilterGrid));
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Explore MhStudio portfolio work for restaurants, salons, gyms, dental clinics, barbers, and local business brands.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real websites built for real businesses."
        description="Each portfolio item is structured as a launch story, with a clear industry angle, feature set, technology stack, and a dedicated case-study path."
        primaryCta={{ label: "Book Consultation", href: "/contact" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing" }}
      />
      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <PortfolioFilterGrid items={portfolioItems} />
        </div>
      </Reveal>
    </>
  );
}
