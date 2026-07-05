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
      { threshold: 0.18 },
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
    "transition duration-[600ms] ease-out will-change-[transform,opacity,filter] motion-reduce:transition-none",
    isVisible || reduceMotion ? "translate-y-0 opacity-100 blur-0" : "translate-y-[30px] opacity-0 blur-[2px]",
    className,
  ].join(" ");

  if (as === "section") {
    return (
      <section
        id={id}
        ref={setRef}
        style={reduceMotion ? undefined : { transitionDelay: `${delayMs}ms` }}
        className={classes}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      id={id}
      ref={setRef}
      style={reduceMotion ? undefined : { transitionDelay: `${delayMs}ms` }}
      className={classes}
    >
      {children}
    </div>
  );
}
