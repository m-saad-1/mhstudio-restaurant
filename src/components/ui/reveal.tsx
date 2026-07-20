"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section";
  id?: string;
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const frame = window.requestAnimationFrame(() => {
      setReduceMotion(media.matches);
    });
    const updateMotion = () => setReduceMotion(media.matches);
    media.addEventListener("change", updateMotion);

    if (media.matches) {
      const visibleFrame = window.requestAnimationFrame(() => {
        setIsVisible(true);
      });

      return () => {
        window.cancelAnimationFrame(frame);
        window.cancelAnimationFrame(visibleFrame);
        media.removeEventListener("change", updateMotion);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      // Trigger just before entering the viewport so user can see it animate
      { threshold: 0.01, rootMargin: "50px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener("change", updateMotion);
      observer.disconnect();
    };
  }, []);

  const classes = [
    "transition-all duration-500 ease-out w-full will-change-[transform,opacity] motion-reduce:transition-none",
    isVisible || reduceMotion ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0",
    className,
  ].join(" ");

  // Re-enable delay but cap it so it doesn't get stuck if user scrolls fast
  const inlineStyle = delayMs > 0 ? { transitionDelay: `${Math.min(delayMs, 150)}ms` } : undefined;

  if (as === "section") {
    return (
      <section
        id={id}
        ref={setRef}
        className={classes}
        style={inlineStyle}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      id={id}
      ref={setRef}
      className={classes}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}
