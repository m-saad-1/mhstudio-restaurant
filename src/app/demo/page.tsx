import type { Metadata } from "next";
import Link from "next/link";
import { CalendarRange, Cpu, HelpCircle, Laptop } from "lucide-react";
import dynamic from "next/dynamic";
const DemoForm = dynamic(() => import("@/components/marketing/demo-form").then((mod) => mod.DemoForm));
const FaqAccordion = dynamic(() => import("@/components/ui/faq-accordion").then((mod) => mod.FaqAccordion));
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { contactFaqs, siteConfig } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Obter Demo Grátis",
  description: "Solicite uma demonstração interativa personalizada dos nossos sites para restaurantes, menus online ou assistentes de reserva baseados em IA para o seu restaurante.",
};

const demoSteps = [
  {
    title: "1. Compartilhe o Conceito",
    description: "Preencha o formulário de solicitação com a identidade visual do seu restaurante, estilo e metas de reserva.",
    icon: Laptop,
  },
  {
    title: "2. Maquete Personalizada",
    description: "Construímos um layout de página inicial e menu digital personalizado que combina com a estética do seu restaurante.",
    icon: Cpu,
  },
  {
    title: "3. Teste ao Vivo",
    description: "Teste você mesmo o menu de alta velocidade para celular e o sistema de reservas, de forma totalmente gratuita.",
    icon: CalendarRange,
  },
];

const demoFaqs = [
  {
    question: "A demonstração personalizada é realmente gratuita?",
    answer: "Sim, 100%. Acreditamos em mostrar o valor real antes da assinatura de qualquer contrato. Construímos uma prova de conceito básica para empresas qualificadas sem custo.",
  },
  {
    question: "Quanto tempo leva para preparar a demonstração?",
    answer: "Normalmente, analisaremos sua solicitação e entregaremos ou agendaremos uma apresentação da demonstração personalizada em 3 a 5 dias úteis.",
  },
  {
    question: "E se eu quiser uma consulta ao vivo em vez de uma demonstração simulada?",
    answer: "Você pode agendar uma consulta ao vivo diretamente no nosso calendário. Use o link de agendamento nesta página ou vá para nossa página de contato para se conectar via WhatsApp ou e-mail.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo Grátis"
        title="Pré-visualize a sua nova experiência digital."
        description="Desenhamos menus interativos personalizados e maquetes da página inicial para que você possa testar a velocidade da página, UX móvel e layout de design antes de qualquer compromisso."
      />
      <section className="section-space">
        <div className="content-shell grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <DemoForm />
          </Reveal>
          <div className="grid gap-6">
            <Reveal delayMs={80} className="surface-card p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-foreground">Processo da Demo</h2>
              <div className="mt-6 grid gap-6">
                {demoSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border border-amber-400/15 bg-amber-400/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-1">
                        <p className="font-semibold text-foreground">{step.title}</p>
                        <p className="text-sm leading-relaxed text-foreground-body">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8">
                <p className="text-sm text-foreground-body mb-4">
                  Prefere uma discussão direta e ao vivo? Agende uma reunião conosco instantaneamente no nosso calendário.
                </p>
                <Link
                  href={siteConfig.calendarHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary inline-flex items-center gap-2 text-sm py-2.5 px-4"
                >
                  <CalendarRange className="h-4 w-4 text-accent" />
                  Agendar Reunião
                </Link>
              </div>
            </Reveal>

            <Reveal delayMs={160}>
              <FaqAccordion items={demoFaqs} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
