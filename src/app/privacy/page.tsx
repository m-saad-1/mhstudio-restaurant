import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the MhStudio marketing site.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy information for MhStudio visitors."
        description="This page explains how project inquiries and website interactions are handled on the MhStudio marketing site."
      />
      <section className="section-space">
        <div className="content-shell">
          <Reveal className="surface-card max-w-4xl p-8 sm:p-10">
            <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">
              MhStudio collects only the information needed to respond to project inquiries, schedule consultations, and support website discussions. If tracking, forms, or third-party tools are added later, this page should be updated to match the final setup and any applicable legal requirements.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
