"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function IntroSequence() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set([".js-logo", ".js-nav-link", ".js-line12", ".js-line3"], { opacity: 0, y: 10 });
    gsap.set(".js-intro-veil", { opacity: 1 });
    gsap.set(".js-sub", { clipPath: "inset(0% 100% 0% 0%)" });

    const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "power2.out" } });

    tl.to([".js-logo", ".js-nav-link"], { opacity: 1, y: 0, duration: 0.6, stagger: 0.05 })
      .to(".js-line12", { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.15")
      .to(".js-line3", { opacity: 1, y: 0, duration: 1.1 }, "-=0.35")
      .to(".js-intro-veil", { opacity: 0, duration: 2, ease: "power1.inOut" }, "-=1.6")
      .to(
        ".js-sub",
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power1.out" },
        "-=1.05",
      );
  }, []);

  return null;
}
