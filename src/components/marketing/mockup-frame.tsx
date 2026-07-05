import Image from "next/image";
import Link from "next/link";
import { TrackedLink } from "@/components/ui/tracked-link";
import type { PortfolioItem } from "@/data/site-content";

const blurData =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEwJyBmaWxsPScjMTExMTEzJy8+PHJlY3QgY29yPScyJyB4PScxJyB5PScxJyB3aWR0aD0nMTQnIGhlaWdodD0nOCcgZmlsbD0nI0Y1OUUwQicgb3BhY2l0eT0nMC4xNScvPjwvc3ZnPg==";

type MockupFrameProps = {
  item: PortfolioItem;
  compact?: boolean;
};

export function MockupFrame({ item, compact = false }: MockupFrameProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-amber-500/10">
      {/* 2. Visual Asset (The Hook) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
          placeholder="blur"
          blurDataURL={blurData}
        />
        {/* Subtle overlay to enhance hover state */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* 3. Content Hierarchy */}
      <div className="flex flex-1 flex-col p-5">
        <div>
          {/* Category Tag */}
          <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-amber-500">
            {item.category}
          </span>
          
          {/* Project Title */}
          <h3 className="text-xl font-semibold text-zinc-50">
            {item.title}
          </h3>
          
          {/* Short Description */}
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-400">
            {item.shortDescription}
          </p>
        </div>

        {/* 4. Call-to-Action (The Footer) */}
        <div className="mt-auto pt-4">
          <div className="flex items-center gap-3 border-t border-zinc-800/50 pt-3">
            <TrackedLink 
              href={item.liveHref} 
              eventName="click_portfolio_live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-amber-500 transition-colors hover:text-amber-400 hover:underline"
            >
              Visit Website
            </TrackedLink>
            <span className="text-sm text-zinc-700">|</span>
            <TrackedLink 
              href={`/case-study/${item.slug}`} 
              eventName="click_portfolio_case_study"
              className="text-sm font-medium text-amber-500 transition-colors hover:text-amber-400 hover:underline"
            >
              View Case Study
            </TrackedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
