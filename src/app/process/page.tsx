import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getIcon } from "@/components/ui/icon-map";
import dynamic from "next/dynamic";
import {
  corePhases,
  developmentPaths,
  clientInvolvement,
  qualityAssurance,
  processFaqs,
  techTimeline
} from "./data";

const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));

export const metadata: Metadata = {
  title: "Processo | Como Trabalhamos",
  description: "Esteja você lançando o site de um único restaurante, um menu digital ou sistemas de reserva personalizados, nosso processo garante qualidade, transparência e cronogramas previsíveis.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Fluxo de Trabalho e Metodologia"
        title="Um fluxo de trabalho estruturado construído para clareza."
        description="De menus digitais a plataformas de reservas personalizadas, nosso processo garante etapas claras, cronogramas fixos e lançamentos de alto desempenho."
        primaryCta={{ label: "Inicie seu Projeto", href: "/contact" }}
        secondaryCta={{ label: "Ver Nosso Trabalho", href: "/work" }}
      />

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="O Processo Central"
            title="Seis passos para o lançamento."
            description="Nosso roteiro passo a passo para construir plataformas digitais de alta velocidade."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {corePhases.map((phase, index) => {
              const Icon = getIcon(phase.icon);
              return (
                <Reveal key={phase.step} delayMs={index * 60} className="surface-card flex flex-col p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-none bg-amber-400 text-sm font-bold text-zinc-950">
                      {phase.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                      <p className="text-sm font-medium text-amber-500">{phase.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-[1.7] text-foreground-body flex-grow">
                    {phase.description}
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <ul className="grid gap-2">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="flex items-center gap-2 text-sm text-foreground-body">
                          <Check className="h-4 w-4 text-accent shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Caminhos de Desenvolvimento"
            title="Caminhos de desenvolvimento personalizados."
            description="Personalizamos nosso fluxo de trabalho para corresponder perfeitamente aos seus objetivos e ao tamanho do negócio."
          />
          <div className="grid gap-6">
            {developmentPaths.map((path, index) => (
              <Reveal key={path.title} delayMs={index * 50} className="surface-card p-6 md:p-8">
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{path.title}</h3>
                    <p className="text-sm leading-[1.7] text-foreground-body">{path.description}</p>
                    {path.timeline && (
                      <p className="inline-flex items-center rounded-none bg-white/5 px-3 py-1 text-xs font-medium text-foreground-muted">
                        Cronograma Típico: {path.timeline}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {path.steps.map((step, stepIdx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-none border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground-body">
                          {step}
                        </span>
                        {stepIdx < path.steps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-foreground-muted shrink-0" />
                        )}
                      </div>
                    ))}
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
            eyebrow="Envolvimento do Cliente"
            title="Como nos mantemos alinhados."
            description="Nós nos comunicamos de forma clara em cada etapa sem tomar o seu tempo valioso."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clientInvolvement.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.title} delayMs={index * 50} className="surface-card p-6">
                  <span className="mb-4 inline-flex rounded-none bg-white/5 p-3 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-foreground-body">{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-2">
          
          <div className="space-y-8">
            <div>
              <span className="eyebrow">Padrões de Engenharia</span>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">Altos Padrões</h2>
              <p className="mt-3 text-foreground-body">Cada detalhe é exaustivamente testado antes do lançamento.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {qualityAssurance.map((qa, i) => {
                const Icon = getIcon(qa.icon);
                return (
                  <Reveal key={qa.title} delayMs={i * 30} className="flex items-center gap-3 rounded-none border border-white/10 bg-white/5 p-4">
                    <Icon className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{qa.title}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span className="eyebrow">A Stack</span>
              <h2 className="mt-2 text-3xl font-semibold text-foreground">Tech Stack</h2>
              <p className="mt-3 text-foreground-body">Ferramentas rápidas, confiáveis e seguras impulsionando seu site.</p>
            </div>
            <div className="relative border-l border-white/10 pl-6 space-y-6">
              {techTimeline.map((item, i) => {
                const Icon = getIcon(item.icon);
                return (
                  <Reveal key={item.stage} delayMs={i * 40} className="relative">
                    <div className="absolute -left-[41px] top-1 flex h-8 w-8 items-center justify-center rounded-none border border-white/10 bg-zinc-950 text-accent">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground">{item.stage}</h4>
                      <p className="text-sm text-foreground-muted">{item.tech}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </Reveal>

      <Reveal as="section" className="section-space section-divider">
        <div className="content-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Perguntas Frequentes"
            title="FAQs do Processo"
            description="Breves respostas sobre agendamento, atualizações de menu e prazos de lançamento."
          />
          <FaqAccordion items={processFaqs} />
        </div>
      </Reveal>

      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <div className="surface-card relative overflow-hidden px-8 py-12 sm:px-10 sm:py-14 lg:px-14 text-center flex flex-col items-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.15)_0%,_transparent_70%)] blur-[100px]" />
            <div className="relative space-y-5 max-w-3xl">
              <span className="eyebrow mx-auto">Pronto para crescer?</span>
              <h2 className="text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.8rem]">
                Vamos Construir
              </h2>
              <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">
                Seja lançando seu primeiro site, construindo um aplicativo da web personalizado ou integrando assistentes de IA, nosso processo estruturado garante um caminho rápido e transparente para o crescimento.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="button-primary px-8 text-sm sm:w-auto">
                  Entrar em Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
