"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ActionScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(".js-card");
          gsap.set(cards, { opacity: 0, y: 56, pointerEvents: "none" });
          gsap.set(".js-video-wrap", { filter: "brightness(1)" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".js-pin",
              start: "top top",
              end: "+=240%",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          tl.to(".js-manifesto", {
            opacity: 0,
            filter: "blur(18px)",
            scale: 0.9,
            y: -28,
            duration: 1,
          })
            .to(".js-scroll", { opacity: 0, duration: 0.4 }, 0)
            .to(".js-dim", { opacity: 0.15, duration: 1 }, 0)
            .to(".js-video-wrap", { filter: "brightness(0.85)", duration: 1 }, 0);

          cards.forEach((card, i) => {
            tl.to(
              card,
              { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.55 },
              0.55 + i * 0.28,
            );
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="hero" className="relative bg-black">
      <div className="js-pin relative lg:h-svh lg:overflow-hidden">
        <Hero />

        <div
          id="aksiyon"
          className="relative z-20 flex flex-col gap-3 px-6 pb-16 pt-14 sm:pt-16 md:px-10 md:pt-20 lg:absolute lg:top-1/2 lg:left-14 lg:w-[min(100%,24rem)] lg:-translate-y-1/2 lg:px-0 lg:pt-0 lg:pb-0 xl:left-20"
        >
          {site.cards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i * 120}
              className="lg:!translate-y-0 lg:!opacity-100 lg:!blur-0 lg:!transition-none"
            >
              <a
                id={card.id === "aksiyon" ? undefined : card.id}
                href={waLink(site.wa[card.waKey])}
                target="_blank"
                rel="noopener noreferrer"
                className="js-card group block border border-white/15 bg-black/55 px-6 py-5 backdrop-blur-md transition-[border-color,background-color] hover:border-white/35 hover:bg-black/65"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-[11px] tracking-[0.28em] text-white/40">
                    {card.num}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] text-white/35">
                    {card.kicker}
                  </span>
                </div>
                <h2 className="mt-3 text-[13px] font-medium tracking-[0.16em] text-white">
                  {card.title}
                </h2>
                <p className="mt-2 text-[12px] leading-5 text-white/45">{card.body}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
