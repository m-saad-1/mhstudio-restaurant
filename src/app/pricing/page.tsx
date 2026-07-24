import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PricingGrid = dynamic(() => import("@/components/marketing/pricing-grid").then((mod) => mod.PricingGrid));

export const metadata: Metadata = {
  title: "Preços",
  description: "Explore os pacotes de sites MhStudio Lançamento, Crescimento, Escala com IA e Corporativo para empresas locais.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Preços"
        title="Preços claros e de taxa fixa construídos para o crescimento dos negócios."
        description="Escolha um plano que atenda à sua empresa — desde sites simples de lançamento até plataformas digitais avançadas e assistentes de IA."
        primaryCta={{ label: "Obter Demo Grátis", href: "/demo" }}
        secondaryCta={{ label: "Ver Serviços", href: "/services" }}
      />
      <section className="section-space">
        <PricingGrid />
      </section>
    </>
  );
}
