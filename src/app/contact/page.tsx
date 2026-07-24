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
  title: "Contato",
  description: "Contate a MhStudio para discutir o site do seu restaurante, sistema de reservas ou integrações de menu.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos discutir o site do seu restaurante."
        description="Fale-nos sobre o seu projeto, agende uma chamada direta no calendário ou envie-nos uma mensagem no WhatsApp."
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={40} className="surface-card relative overflow-hidden p-6 sm:p-8 border border-amber-500/10 bg-[rgba(245,158,11,0.02)]">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.1)_0%,_transparent_70%)] blur-[40px]" />
              <h2 className="text-2xl font-semibold text-foreground">Solicitar uma Demo Grátis</h2>
              <p className="mt-3 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Criaremos uma maquete interativa e gratuita do seu menu digital e site.
              </p>
              <Link href="/demo" className="button-primary mt-6 inline-flex w-full justify-center px-6 py-2.5 text-sm sm:w-auto">
                Obter Demo Grátis
              </Link>
            </Reveal>
            <Reveal delayMs={80} id="contact-methods" className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Contato Direto</h2>
              <div className="mt-6 grid gap-4">
                <Link href={siteConfig.calendarHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <CalendarRange className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Reserva de Calendário</p>
                    <p className="text-sm text-foreground-body">Agende uma consulta de 15 minutos diretamente no nosso calendário.</p>
                  </div>
                </Link>
                <Link href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-4 p-4">
                  <span className="rounded-[16px] border border-amber-400/15 bg-amber-400/10 p-3 text-accent">
                    <MessageCircleMore className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground-body">Envie-nos uma mensagem diretamente no WhatsApp para um retorno instantâneo.</p>
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
            <Reveal delayMs={160}>
              <FaqAccordion items={contactFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
