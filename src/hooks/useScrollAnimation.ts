"use client";

import { useEffect, useRef } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");

          // Animate progress bars inside this element
          el.querySelectorAll<HTMLDivElement>(".progress-fill").forEach(
            (fill) => {
              const target = fill.dataset.width ?? "0";
              fill.style.width = `${target}%`;
            },
          );

          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("visible");
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return ref;
}

export function useScrollAnimationAll(
  selector: string,
  options: UseScrollAnimationOptions = {},
) {
  const { threshold = 0.15, once = true } = options;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            (entry.target as HTMLElement)
              .querySelectorAll<HTMLDivElement>(".progress-fill")
              .forEach((fill) => {
                const target = fill.dataset.width ?? "0";
                fill.style.width = `${target}%`;
              });

            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, threshold, once]);

  return containerRef;
}
