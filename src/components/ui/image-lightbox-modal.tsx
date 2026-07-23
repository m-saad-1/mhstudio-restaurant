"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ExternalLink } from "lucide-react";
import { TrackedLink } from "@/components/ui/tracked-link";

type ImageLightboxModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  category: string;
  liveHref?: string;
};

export function ImageLightboxModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  category,
  liveHref,
}: ImageLightboxModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image preview`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
    >
      {/* Backdrop with backdrop blur */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-none border border-white/10 bg-zinc-950 shadow-2xl transition-all duration-300 scale-100">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-5 py-3.5 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              {category}
            </span>
            <span className="hidden text-zinc-600 sm:inline">•</span>
            <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {liveHref && (
              <TrackedLink
                href={liveHref}
                eventName="click_lightbox_live"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-1.5 rounded-none border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 transition hover:bg-amber-500/20 sm:inline-flex"
              >
                <span>Live Project</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </TrackedLink>
            )}
            <button
              onClick={onClose}
              aria-label="Close image preview"
              className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/15 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable / Full Image View */}
        <div className="relative flex max-h-[calc(92vh-60px)] w-full items-center justify-center overflow-auto p-2 sm:p-4 bg-zinc-950/80">
          <div className="relative w-full max-w-full overflow-hidden rounded-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1600}
              height={1000}
              sizes="(max-width: 1280px) 100vw, 1600px"
              className="h-auto max-h-[78vh] w-full object-contain mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
