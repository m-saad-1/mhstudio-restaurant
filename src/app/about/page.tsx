import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/marketing/page-hero";
import { aboutValues, processSteps, technologyGroups } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About MhStudio",
  description: "Learn about MhStudio, the mission, values, tools, and approach behind premium websites for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MhStudio"
        title="High-performance websites built for modern businesses."
        description="We build fast, responsive digital experiences that highlight your brand, streamline customer flows, and turn visitors into loyal clients."
        primaryCta={{ label: "View Portfolio", href: "/work" }}
        secondaryCta={{ label: "Contact MhStudio", href: "/contact" }}
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-card p-8 sm:p-10">
            <span className="eyebrow">Story</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.15] text-foreground sm:text-[2.8rem]">
              Your website should match the quality of your business.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-foreground-body sm:text-lg">
              MhStudio blends digital strategy, visual design, and fast frontend engineering. We give businesses a premium digital presence that is easy to navigate, fast to load, and built to convert.
            </p>
          </Reveal>
          <Reveal delayMs={100} className="grid gap-6">
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Mission</p>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Build high-performance websites that increase conversions and elevate your brand.
              </p>
            </div>
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Vision</p>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Empower businesses with digital tools that drive growth, showcase services, and simplify operations.
              </p>
            </div>
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Values</p>
              <div className="mt-4 grid gap-3">
                {aboutValues.map((value) => (
                  <p key={value} className="text-sm leading-[1.7] text-foreground-body sm:text-base">
                    {value}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-space section-divider">
        <div className="content-shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Your Journey</p>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">From concept to launch-ready confidence.</h2>
            <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
              We guide you through strategy, layout design, and fast coding to launch a website that performs perfectly across all devices.
            </p>
            <div className="mt-6 grid gap-3">
              {processSteps.slice(0, 6).map((step) => (
                <div key={step.step} className="rounded-[16px] border border-white/8 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-sm text-foreground-body">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={120} className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Technologies & Tools</p>
            <div className="mt-6 grid gap-4">
              {technologyGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="button-primary mt-8 px-6 text-sm">
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
