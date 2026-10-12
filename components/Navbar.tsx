"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-50">
      <div className="pointer-events-auto flex items-center justify-between px-6 py-7 md:px-10 lg:px-14">
        <div className="flex items-baseline gap-4">
          <a
            href="/anasayfa"
            className="js-logo font-serif text-[13px] font-semibold tracking-[0.32em] text-white md:text-sm"
          >
            {site.name}
          </a>
          <span className="js-logo hidden font-serif text-[10px] tracking-[0.2em] text-white/55 sm:inline">
            since 1972
          </span>
        </div>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="js-nav-link text-[11px] font-medium tracking-[0.22em] text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="text-white/80 lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden bg-black/90 backdrop-blur-md transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden ${
          open
            ? "pointer-events-auto grid-rows-[1fr] border-t border-white/10 opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav className="flex min-h-0 flex-col gap-5 px-6 py-8">
          {site.nav.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm tracking-[0.22em] text-white/70 transition-all duration-300 ease-out ${
                open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
