"use client";

import { useMemo, useState } from "react";
import { portfolioFilters, type PortfolioItem } from "@/data/site-content";
import { MockupFrame } from "@/components/marketing/mockup-frame";

type PortfolioFilterGridProps = {
  items: PortfolioItem[];
};

export function PortfolioFilterGrid({ items }: PortfolioFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {portfolioFilters.map((filter) => {
          const isActive = filter === activeFilter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={[
                "min-h-11 rounded-none px-4 text-sm font-semibold transition-colors duration-300",
                isActive
                  ? "bg-amber-400 text-zinc-950 shadow-[0_10px_28px_rgba(245,158,11,0.28)]"
                  : "border border-white/8 bg-white/[0.03] text-foreground-body hover:border-white/12 hover:text-foreground",
              ].join(" ")}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <MockupFrame key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
