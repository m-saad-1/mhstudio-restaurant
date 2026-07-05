import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, Mail, MessageCircleMore, Share2 } from "lucide-react";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("@/components/marketing/contact-form").then((mod) => mod.ContactForm));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { contactFaqs, siteConfig, socialLinks } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact MhStudio to discuss your website project, consultation timeline, and business goals.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation about your next website."
        description="The contact page is designed to make the next step obvious, whether you prefer a structured project brief, a consultation booking, or a faster messaging route."
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={80} id="contact-methods" className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Direct contact options</h2>
              <div className="mt-6 grid gap-4">
                <Link href={siteConfig.calendarHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <CalendarRange className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Calendar Booking</p>
                    <p className="text-sm text-foreground-body">Use your booking link to schedule consultations directly from the site.</p>
                  </div>
                </Link>
                <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <MessageCircleMore className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground-body">A direct messaging route is accounted for in the contact architecture.</p>
                  </div>
                </Link>
                <Link href={`mailto:${siteConfig.email}`} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm text-foreground-body">{siteConfig.email}</p>
                  </div>
                </Link>
              </div>
            </Reveal>
            {/* Social links hidden for now
            <Reveal delayMs={120} className="surface-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                  <Share2 className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-semibold text-foreground">Social Links</h2>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="button-secondary px-5 text-sm">
                    {link.label}
                  </Link>
                ))}
              </div>
            </Reveal> */}
            <Reveal delayMs={160}>
              <FaqAccordion items={contactFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
