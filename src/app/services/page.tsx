import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { getIcon } from "@/components/ui/icon-map";
import { serviceSections } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore MhStudio services across website design, development, landing pages, SEO, maintenance, performance, and hosting support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Services built to drive growth and elevate your brand."
        description="From high-performance custom websites and digital platforms to automated AI assistants, we build tools that drive real business results."
        primaryCta={{ label: "Start a Project", href: "/contact" }}
        secondaryCta={{ label: "How We Work", href: "/process" }}
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {serviceSections.map((service, index) => {
            const Icon = getIcon(service.icon);

            return (
              <Reveal key={`${service.title}-${index}`} delayMs={index * 60} className="surface-card flex h-full flex-col p-6">
                <span className="inline-flex w-fit rounded-none border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h2 className="mt-6 text-2xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{service.description}</p>
                <div className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-foreground-body">
                      <Check className="h-4 w-4 text-accent" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition-colors hover:text-amber-400">
                  Discuss this service
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
