import { ChevronDown } from "lucide-react";
import { LoopingVideo } from "@/components/LoopingVideo";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <>
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="video-sharpen">
          <feConvolveMatrix order="3" kernelMatrix="0 -1 0 -1 5 -1 0 -1 0" preserveAlpha="true" />
        </filter>
      </svg>

      <div className="js-video-wrap absolute inset-0 overflow-hidden">
        <LoopingVideo src="/video.mp4" />
      </div>

      <div className="js-intro-veil pointer-events-none absolute inset-0 bg-black opacity-0" />

      <div className="hero-mask pointer-events-none absolute inset-0" />
      <div className="js-dim pointer-events-none absolute inset-0 bg-black opacity-0" />
      <div className="film-grain pointer-events-none absolute inset-0" />

      <div className="js-manifesto relative z-10 flex min-h-svh flex-col justify-center px-6 pb-24 pt-28 md:px-10 lg:px-14 lg:pb-24">
        <div className="max-w-xl">
          <h1 className="font-sans">
            <span className="js-line12 block text-[clamp(1.35rem,3.2vw,2.35rem)] font-medium leading-[1.35] tracking-[0.18em] text-white/65">
              {site.copy.line1}
            </span>
            <span className="js-line12 block text-[clamp(1.35rem,3.2vw,2.35rem)] font-medium leading-[1.35] tracking-[0.18em] text-white/65">
              {site.copy.line2}
            </span>
            <span className="text-heritage js-line3 mt-5 block text-[clamp(4.2rem,14vw,9.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              {site.copy.line3}
            </span>
          </h1>
          <p className="js-sub mt-8 max-w-sm text-[13px] font-normal leading-6 tracking-[0.04em] text-white/45 md:text-sm md:leading-7">
            {site.copy.sub}
          </p>
        </div>

        <div
          className="js-scroll pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40"
          aria-hidden="true"
        >
          <span className="text-[9px] tracking-[0.35em]">KAYDIR</span>
          <ChevronDown size={16} strokeWidth={1.25} className="scroll-hint" />
        </div>
      </div>
    </>
  );
}
