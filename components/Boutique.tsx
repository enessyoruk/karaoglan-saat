"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { site, waLink } from "@/lib/site";
import { isAppleDevice } from "@/lib/device";
import { Reveal } from "@/components/Reveal";

export function Boutique() {
  const [mapsHref, setMapsHref] = useState<string>(site.maps.googleQuery);

  useEffect(() => {
    if (isAppleDevice()) setMapsHref(site.maps.apple);
  }, []);

  return (
    <section id="butik" className="relative overflow-hidden bg-black">
      <div className="boutique-marble pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-24 md:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20 lg:px-14 lg:py-32">
        <Reveal>
          <p className="font-serif text-[11px] tracking-[0.32em] text-white/40">FİZİKSEL BUTİK</p>
          <h2 className="mt-4 font-sans text-2xl font-medium tracking-[0.12em] text-white md:text-3xl">
            GEDİZ
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/55">{site.address}</p>
          <p className="mt-3 text-sm tracking-[0.08em] text-white/40">
            Çalışma saatlerimiz · {site.hours}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/80 bg-white px-6 py-3 text-[11px] tracking-[0.22em] text-black transition-colors hover:bg-white/90"
            >
              YOL TARİFİ AL
            </a>
            <a
              href={waLink(site.wa.visit)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-[11px] tracking-[0.22em] text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              İŞLETME ZİYARETİ İÇİN BİLGİ AL
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="justify-self-start lg:justify-self-end">
          <figure className="bg-black/40 p-5 backdrop-blur-sm">
            <QRCodeSVG
              value={site.maps.googleQuery}
              size={168}
              bgColor="#000000"
              fgColor="#c8c8c8"
              level="M"
              marginSize={0}
              title="Butik konumu — Google Maps"
            />
            <figcaption className="mt-4 max-w-[168px] text-[10px] leading-4 tracking-[0.16em] text-white/35">
              KAMERAYI OKUTUN
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
