import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import dynamic from "next/dynamic";

const AnimatedCounter = dynamic(() => import("@/components/ui/animated-counter").then((mod) => mod.AnimatedCounter));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { MockupFrame } from "@/components/marketing/mockup-frame";
import { HeroSection } from "@/components/marketing/hero-section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/components/ui/icon-map";
import {
  faqs,
  industryShowcaseItems,
  portfolioItems,
  processSteps,
  serviceCards,
  stats,
  technologyGroups,
  websiteFeatures,
  whyChooseItems,
} from "@/data/site-content";

const blurData = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExMTEzJy8+PHJlY3QgY29yPScyJyB4PScxJyB5PScxJyB3aWR0aD0nMTQnIGhlaWdodD0nOCcgZmlsbD0nI0Y1OUUwQicgb3BhY2l0eT0nMC4xNScvPjwvc3ZnPg==";

export default function Home() {
  const featuredProjects = portfolioItems.slice(0, 6);

  return (
    <>
      <HeroSection />

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Services Snapshot"
            title="Everything a local business needs to launch with confidence."
            description="Each service is framed around business outcomes, not just deliverables, so the value stays clear for owners and decision-makers."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service, index) => {
              const Icon = getIcon(service.icon);
              const columnSpan =
                index === 0 || index === 3
                  ? "xl:col-span-2"
                  : "";

              return (
                <Reveal
                  key={service.title}
                  delayMs={index * 70}
                  className={`surface-card group flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1.5 ${columnSpan}`}
                >
                  <div className="space-y-5">
                    <span className="inline-flex rounded-[18px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent transition-transform duration-300 group-hover:rotate-6">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm leading-[1.7] text-foreground-body sm:text-base">{service.description}</p>
                    </div>
                    <ul className="grid gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-foreground-body">
                          <Check className="h-4 w-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn More
                    <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Featured Portfolio"
            title="Real website concepts built for real businesses."
            description="The portfolio is the primary proof layer, so every project is treated like a launch story with device previews, feature highlights, and a dedicated case study."
            action={
              <Link href="/work" className="button-secondary px-6 text-sm">
                See All Projects
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((item, index) => (
              <Reveal key={item.slug} delayMs={index * 70}>
                <MockupFrame item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Why Choose MhStudio"
            title="A premium site is not just visual. It solves the real business friction."
            description="Instead of generic claims, each proof point pairs a business problem with the decision or capability that addresses it."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseItems.map((item, index) => (
              <Reveal
                key={item.title}
                delayMs={index * 70}
                className="surface-card relative overflow-hidden p-6"
              >
                <div className="pointer-events-none absolute right-[-3rem] top-[-3rem] h-[13rem] w-[13rem] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_rgba(245,158,11,0.08)_26%,_transparent_72%)] blur-[90px]" />
                <div className="pointer-events-none absolute bottom-[-3rem] left-[-3rem] h-[12rem] w-[12rem] rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.12)_0%,_rgba(245,158,11,0.05)_28%,_transparent_72%)] blur-[90px]" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">{item.title}</p>
                  <p className="mt-4 text-lg font-semibold text-foreground">{item.problem}</p>
                  <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{item.solution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Flexible enough for many local-business models, focused enough to stay sharp."
            description="The experience is designed around the needs of service businesses that depend on trust, clarity, and fast mobile conversion."
            align="center"
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {industryShowcaseItems.map((industry, index) => (
              <Reveal
                key={industry.label}
                delayMs={index * 50}
                className="surface-card group relative min-h-[220px] overflow-hidden !rounded-[24px] border border-white/8"
              >
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  placeholder="blur"
                  blurDataURL={blurData}
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ objectPosition: industry.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.08)_0%,rgba(9,9,11,0.3)_40%,rgba(9,9,11,0.88)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12)_0%,transparent_42%)]" />
                <div className="relative flex min-h-[220px] items-end p-5 sm:p-6">
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground sm:text-xl">{industry.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Website Features"
            title="Feature sets that support customer acquisition, not just page decoration."
            description="The feature library covers the building blocks local businesses usually need to launch, explain, and convert effectively online."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {websiteFeatures.map((feature, index) => {
              const Icon = getIcon(feature.icon);

              return (
                <Reveal
                  key={feature.title}
                  delayMs={index * 35}
                  className={`surface-card p-5 ${index % 5 === 0 ? "xl:col-span-2" : ""}`}
                >
                  <span className="inline-flex rounded-[18px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">{feature.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Our Process"
            title="A six-step workflow that keeps strategy, design, and launch aligned."
            description="The process is built to reduce confusion, clarify deliverables, and keep the site moving toward launch without losing quality."
          />
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delayMs={index * 70} className="surface-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-sm font-bold text-zinc-950">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-foreground-muted">Step-by-step project delivery</p>
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
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell">
          <div className="surface-card flex flex-col items-center justify-center gap-4 px-8 py-14 text-center">
            <span className="eyebrow">Coming Soon</span>
            <h2 className="text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.6rem]">
              Client Success Stories
            </h2>
            <p className="max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
              Testimonials stay hidden until verified client stories are ready to support the proof layer honestly.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Stats"
            title="Measured signals that support the credibility story."
            description="Animated counters bring energy to the section while staying restrained and purposeful."
            align="center"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delayMs={index * 50} className="surface-card p-6">
                <div className="text-[2.3rem] font-semibold leading-none text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-base font-semibold text-foreground">{stat.label}</p>
                <p className="mt-2 text-sm leading-[1.7] text-foreground-body">{stat.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Technologies"
            title="A modern stack grouped by purpose, not just a logo wall."
            description="Grouping the stack by role keeps the section more useful for business owners while still signaling technical depth."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {technologyGroups.map((group, index) => (
              <Reveal key={group.title} delayMs={index * 70} className="surface-card p-6">
                <p className="text-xl font-semibold text-foreground">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground-body"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions a business owner is likely to ask before reaching out."
            description="The answers stay short, confident, and practical so the section supports trust rather than creating more friction."
          />
          <FaqAccordion items={faqs} />
        </div>
      </Reveal>

      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <div className="surface-card relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.18)_0%,_transparent_72%)] blur-[140px]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <span className="eyebrow">Final CTA</span>
                <h2 className="max-w-[14ch] text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.8rem]">
                  Ready to grow your business online?
                </h2>
                <p className="max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
                  Let&apos;s build a website your customers will love, trust, and act on.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Link href="/contact" className="button-primary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  Book a Free Consultation
                </Link>
                <Link href="/contact" className="button-secondary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
