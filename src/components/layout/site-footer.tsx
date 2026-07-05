import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { navigationItems, serviceCards, siteConfig, socialLinks } from "@/data/site-content";
import { FooterCtaWrapper } from "@/components/layout/footer-cta-wrapper";
import { TrackedLink } from "@/components/ui/tracked-link";

export function SiteFooter() {
  return (
    <footer className="section-divider relative mt-10 overflow-hidden bg-[rgba(9,9,11,0.88)]">
      <FooterCtaWrapper>
        <div className="content-shell relative pt-16">
          <div className="surface-card relative overflow-hidden p-8 sm:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.5),transparent)]" />
            
            {/* The Neon Glow at the bottom of CTA (Upwards) */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[25rem] w-[min(100vw,80rem)] -translate-x-1/2 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,1)_0%,_rgba(245,158,11,0.6)_30%,_rgba(245,158,11,0.2)_50%,_transparent_70%)] blur-[130px]" />
            
            {/* Sparkle Icon */}
            <Sparkles className="absolute bottom-6 right-[10%] sm:right-[15%] lg:right-[20%] z-10 h-7 w-7 text-white/50" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.6fr_0.9fr] lg:items-center">
              <div className="space-y-4">
                <span className="eyebrow">Ready To Grow</span>
                <h2 className="max-w-[12ch] text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.6rem]">
                  Let&apos;s build a website your customers will trust.
                </h2>
                <p className="max-w-2xl text-base leading-[1.7] text-foreground-body sm:text-lg">
                  If your business needs a cleaner story, stronger visuals, and a better path to inquiries, MhStudio is ready to help.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <TrackedLink href="/contact" eventName="click_footer_cta_contact" className="button-primary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  Book Free Consultation
                </TrackedLink>
                <TrackedLink href="/work" eventName="click_footer_cta_portfolio" className="button-secondary w-full px-6 text-sm sm:w-auto lg:w-full lg:max-w-xs">
                  View Portfolio
                </TrackedLink>
              </div>
            </div>
          </div>
          
          {/* The Neon Glow at the bottom of CTA (Downwards bleeding into footer) */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[25rem] w-[min(100vw,80rem)] -translate-x-1/2 translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,1)_0%,_rgba(245,158,11,0.6)_30%,_rgba(245,158,11,0.2)_50%,_transparent_70%)] blur-[130px]" />
        </div>
      </FooterCtaWrapper>

      <div className="content-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-semibold tracking-[-0.03em] text-foreground">
              <Image src="/mh_logo.png" alt="MhStudio Logo" width={32} height={32} className="h-8 w-auto" />
              {siteConfig.name}
            </Link>
            <p className="max-w-sm text-sm leading-[1.7] text-foreground-body sm:text-base">
              Premium websites for local businesses that want to look modern, build trust, and generate better customer conversations.
            </p>
            {/* Social links hidden for now
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/8 px-4 text-sm text-foreground-body transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div> */}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Quick Links</h3>
            <div className="grid gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-foreground-body transition-colors duration-300 hover:text-foreground"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Services</h3>
            <div className="grid gap-3">
              {serviceCards.slice(0, 5).map((service) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground-muted">Legal</h3>
            <div className="grid gap-3">
              <Link href="/privacy" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="text-sm text-foreground-body transition-colors duration-300 hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/6 pt-6 text-sm text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Built to be fast, mobile-first, and conversion-ready.</p>
        </div>
      </div>
    </footer>
  );
}
