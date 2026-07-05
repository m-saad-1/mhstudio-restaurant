import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site-content";

export const metadata: Metadata = {
  title: "How We Work",
  description: "See the MhStudio process from discovery and planning through design, development, testing, and launch.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="A clear workflow keeps premium work moving without confusion."
        description="The process is designed to reduce ambiguity, keep decisions visible, and make sure the website supports the business goals before and after launch."
        primaryCta={{ label: "Book Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Work", href: "/work" }}
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delayMs={index * 60} className="surface-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-zinc-950">
                  {step.step}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-foreground">{step.title}</h2>
                  <p className="text-sm text-foreground-muted">MhStudio workflow stage</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-[1.7] text-foreground-body sm:text-base">{step.description}</p>
              <div className="mt-5 grid gap-2">
                {step.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 text-sm text-foreground-body">
                    <Check className="h-4 w-4 text-accent" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
