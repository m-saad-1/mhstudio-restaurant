"use client";

import Image from "next/image";
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
    <div className="group relative flex flex-col overflow-hidden rounded-none border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-2xl hover:shadow-amber-500/10">
      {/* Visual Asset (The Hook - Interactive Clickable Image) */}
      <TrackedLink
        href={item.liveHref}
        eventName="click_portfolio_image"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit website for ${item.title}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-zinc-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-inset"
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
          placeholder="blur"
          blurDataURL={blurData}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </TrackedLink>

        {/* Content Hierarchy */}
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

          {/* Call-to-Action */}
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
            </div>
          </div>
      </div>
    </div>
  );
}
