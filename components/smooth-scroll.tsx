"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    let lenis: Lenis | null = null;

    const destroyLenis = () => {
      lenis?.destroy();
      lenis = null;
    };

    const syncMotionPreference = () => {
      destroyLenis();

      if (reducedMotion.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.075,
        wheelMultiplier: 0.9,
        anchors: { lerp: 0.085 },
        stopInertiaOnNavigate: true,
      });
    };

    syncMotionPreference();
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      reducedMotion.removeEventListener("change", syncMotionPreference);
      destroyLenis();
    };
  }, []);

  return null;
}
