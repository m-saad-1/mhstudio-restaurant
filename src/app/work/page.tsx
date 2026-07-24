import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/marketing/page-hero";
const PortfolioFilterGrid = dynamic(() => import("@/components/marketing/portfolio-filter-grid").then((mod) => mod.PortfolioFilterGrid));
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Nosso Trabalho",
  description: "Explore o portfólio da MhStudio de trabalhos para restaurantes, salões, academias, clínicas odontológicas, barbearias e marcas de negócios locais.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosso Trabalho"
        title="Sites reais construídos para negócios reais."
        description="Cada item do portfólio é estruturado como uma história de lançamento, com um ângulo claro da indústria, conjunto de recursos, pilha de tecnologia e um caminho dedicado ao estudo de caso."
        primaryCta={{ label: "Obter Demo Grátis", href: "/demo" }}
        secondaryCta={{ label: "Ver Preços", href: "/pricing" }}
      />
      <Reveal as="section" className="section-space">
        <div className="content-shell">
          <PortfolioFilterGrid items={portfolioItems} />
        </div>
      </Reveal>
    </>
  );
}
