import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the MhStudio marketing site.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of use for the MhStudio marketing site."
        description="These terms outline the general use, expectations, and scope boundaries for the site and its inquiry flow."
      />
      <section className="section-space">
        <div className="content-shell">
          <Reveal className="surface-card max-w-4xl p-8 sm:p-10 space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Scope of Work and Deliverables</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                MhStudio provides custom website design, development, and consulting services as outlined in the accepted project proposal or chosen pricing package. Any additional features, pages, or revisions requested outside the original agreed-upon scope will be subject to additional billing at our standard hourly rate or a separate flat-fee agreement.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Revisions and Feedback</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                We work in milestones to ensure your website meets expectations. Each milestone (e.g., Wireframes, Design, Development) includes a set number of revision rounds as defined in your package. Consolidating feedback during these rounds is highly encouraged to keep the project on schedule.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Client Responsibilities</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                The success and timely delivery of the project depend heavily on prompt communication. The client is responsible for providing all necessary assets, including branding files, text content, and images, before development begins, unless content creation is explicitly included in the project scope. Delays in providing assets or feedback may result in corresponding timeline extensions.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Payment Terms</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                Standard projects require a 50% upfront deposit before work begins, with the remaining balance due prior to the final site launch or handover. Hosting, domain registration, and third-party software subscriptions are the responsibility of the client unless otherwise specified in a maintenance agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                Upon final payment, the client owns the copyright to the final website design, HTML/CSS, and content. MhStudio retains the right to display the completed project in our portfolio, marketing materials, and social media for promotional purposes, unless a Non-Disclosure Agreement (NDA) is signed prior to project commencement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Hosting and Maintenance</h2>
              <p className="text-sm leading-[1.7] text-foreground-body">
                Once the website is launched and handed over, MhStudio is not responsible for future server downtime, third-party plugin failures, or security breaches unless the client is actively enrolled in a monthly Maintenance & Support package.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
