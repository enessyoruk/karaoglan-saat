"use client";

import { useEffect, useRef } from "react";

const FADE_SEC = 0.9;

export function LoopingVideo({ src }: { src: string }) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"a" | "b">("a");
  const fadingRef = useRef(false);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    let raf = 0;
    let fadeTimer = 0;

    const playSafe = (el: HTMLVideoElement) => {
      const p = el.play();
      if (p) p.catch(() => {});
    };

    let fadeFor = FADE_SEC;

    const startFade = () => {
      if (fadingRef.current) return;
      const current = activeRef.current === "a" ? a : b;
      const next = activeRef.current === "a" ? b : a;
      if (!current.duration) return;

      fadingRef.current = true;
      next.style.transition = `opacity ${fadeFor}s linear`;
      current.style.transition = `opacity ${fadeFor}s linear`;
      next.currentTime = 0;
      playSafe(next);
      next.style.opacity = "1";
      current.style.opacity = "0";

      fadeTimer = window.setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        current.style.opacity = "0";
        activeRef.current = activeRef.current === "a" ? "b" : "a";
        fadingRef.current = false;
      }, fadeFor * 1000);
    };

    const tick = () => {
      const current = activeRef.current === "a" ? a : b;
      const d = current.duration;
      if (d && !fadingRef.current) {
        fadeFor = Math.min(FADE_SEC, Math.max(0.45, d * 0.16));
        if (d - current.currentTime <= fadeFor) startFade();
      }
      raf = requestAnimationFrame(tick);
    };

    const onReady = () => {
      if (a.duration && a.duration > 1) {
        a.currentTime = Math.min(a.duration * 0.3, 4);
      }
      playSafe(a);
    };
    a.addEventListener("loadedmetadata", onReady, { once: true });
    playSafe(a);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
      a.removeEventListener("loadedmetadata", onReady);
    };
  }, [src]);

  const cls =
    "hero-video-boost absolute inset-0 h-full w-full object-cover object-center [transition:opacity_0.9s_linear] [transform:scale(1.02)_translateX(1%)] lg:[transform:scale(1.18)_translateX(9%)]";

  return (
    <div className="relative h-full w-full">
      <video
        ref={aRef}
        className={cls}
        style={{ opacity: 1 }}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
      <video
        ref={bRef}
        className={cls}
        style={{ opacity: 0 }}
        muted
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
