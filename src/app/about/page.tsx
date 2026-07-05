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
        title="Built to help businesses grow through beautiful, high-performing websites."
        description="MhStudio was created to help businesses establish a strong online presence through modern websites that build trust, support growth, and convert visitors into customers."
        primaryCta={{ label: "View Portfolio", href: "/work" }}
        secondaryCta={{ label: "Contact MhStudio", href: "/contact" }}
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="surface-card p-8 sm:p-10">
            <span className="eyebrow">Story</span>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.8rem]">
              Every business deserves a website that feels as strong as the business behind it.
            </h2>
            <p className="mt-5 text-base leading-[1.7] text-foreground-body sm:text-lg">
              MhStudio exists to bridge the gap between visual quality and business performance. The goal is not simply to ship pages, but to give local businesses a digital presence that feels premium, credible, and ready to convert.
            </p>
            <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">
              The work blends strategy, strong content structure, and fast frontend execution so owners can present their services with clarity and confidence.
            </p>
          </Reveal>
          <Reveal delayMs={100} className="grid gap-6">
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Mission</p>
              <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Build websites that drive growth, build trust, and turn local-business attention into action.
              </p>
            </div>
            <div className="surface-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Vision</p>
              <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Become the premium digital partner local businesses think of when they need modern websites that actually support results.
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
            <h2 className="mt-4 text-2xl font-semibold text-foreground">From business goals to launch-ready confidence.</h2>
            <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
              MhStudio works through discovery, planning, design, development, testing, and launch so the website reflects the business clearly and performs well across devices.
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
