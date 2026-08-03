"use client";

import { animate, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef } from "react";

export type CarouselDirection = -1 | 1;

export function useInfiniteCarousel(itemCount: number) {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLElement>(null);
  const stepRef = useRef(0);
  const indexRef = useRef(itemCount);
  const queueRef = useRef<CarouselDirection[]>([]);
  const processingRef = useRef(false);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const mountedRef = useRef(true);
  const x = useMotionValue(0);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstItem = firstItemRef.current;

    if (!viewport || !track || !firstItem) return;

    const updateStep = () => {
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
      stepRef.current = firstItem.offsetWidth + gap;
      x.set(-indexRef.current * stepRef.current);
    };

    updateStep();
    const observer = new ResizeObserver(updateStep);
    observer.observe(viewport);
    observer.observe(firstItem);

    return () => observer.disconnect();
  }, [x]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      queueRef.current = [];
      animationRef.current?.stop();
    };
  }, []);

  const runQueue = async () => {
    if (processingRef.current) return;
    processingRef.current = true;

    while (queueRef.current.length > 0 && mountedRef.current) {
      const direction = queueRef.current.shift();
      const step = stepRef.current;

      if (!direction || step === 0) continue;

      let nextIndex = indexRef.current + direction;
      indexRef.current = nextIndex;

      if (reduce) {
        x.set(-nextIndex * step);
      } else {
        animationRef.current = animate(x, -nextIndex * step, {
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        });
        await animationRef.current;
      }

      if (nextIndex >= itemCount * 2) {
        nextIndex -= itemCount;
      } else if (nextIndex < itemCount) {
        nextIndex += itemCount;
      }

      indexRef.current = nextIndex;
      x.set(-nextIndex * step);
    }

    processingRef.current = false;
  };

  const move = (direction: CarouselDirection) => {
    queueRef.current.push(direction);
    void runQueue();
  };

  return { firstItemRef, move, trackRef, viewportRef, x };
}
