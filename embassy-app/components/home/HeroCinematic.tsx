"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { GuillocheRosette } from "@/components/ui/GuillochePattern";

// Single-image cinematic hero. Replaces the earlier three-slide concept
// per explicit request — no slideshow, no prev/next, no dots. Motion is
// one continuous, gently alternating Ken Burns sequence implemented as a
// CSS animation (not JS-driven per-frame state), which is what makes a
// smooth 18-24s ease-in-out cycle with a non-jarring loop practical.
const MOTION_DURATION_S = 20; // within the requested 18-24s range
const MAX_ROTATE_DEG = 0.25;
const MAX_PARALLAX_PX = 7; // within the requested 6-8px range

const HERO_IMAGE_SRC = "/images/hero/raouche-beirut-hero.jpg";
// Keeps both the Raouché rocks (lower-centre of the source photo) and
// enough of the Beirut skyline (upper portion) in frame on narrow
// screens, rather than a plain centre-crop that would lose one or the
// other. See IMAGE_MANIFEST.md for the full crop rationale.
const MOBILE_OBJECT_POSITION = "50% 38%";

export function HeroCinematic({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const slide = dict.hero.slides[0]!; // single image now; other slide
  // entries in the dictionary (if any remain from the prior multi-image
  // build) are intentionally unused here — see component comment above.
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Desktop-only pointer parallax — same touch-exclusion logic as the
  // previous hero build: (pointer: fine) plus an explicit touch-capability
  // check, so a touch-capable laptop trackpad doesn't accidentally
  // qualify. Applied as a translate *composed with* (not replacing) the
  // CSS Ken Burns animation, via a separate wrapper layer, so the two
  // motions never fight over the same transform.
  useEffect(() => {
    if (!mounted || reducedMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
    const el = containerRef.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        setParallax({ x: px * MAX_PARALLAX_PX, y: py * (MAX_PARALLAX_PX * 0.6) });
      });
    };
    const onLeave = () => setParallax({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mounted, reducedMotion]);

  const showMotion = mounted && !reducedMotion;
  const showRealImage = !imageFailed;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden border-b border-line bg-cedar-950"
    >
      <style>{`
        @keyframes heroKenBurns {
          0%   { transform: scale(1.00) translate(0px, 0px) rotate(0deg); }
          50%  { transform: scale(1.08) translate(-1.2%, -1.6%) rotate(${MAX_ROTATE_DEG}deg); }
          100% { transform: scale(1.00) translate(0px, 0px) rotate(0deg); }
        }
        .hero-kenburns {
          animation: heroKenBurns ${MOTION_DURATION_S}s ease-in-out infinite;
        }
        .hero-kenburns.paused { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns { animation: none !important; transform: none !important; }
        }
      `}</style>

      {/* Fixed height reserved up front — zero layout shift regardless
          of image load timing. */}
      <div className="relative h-[560px] w-full sm:h-[620px] lg:h-[720px]">
        {/* Ken Burns layer (CSS animation) — parallax is applied on an
            inner wrapper so the two motions compose instead of clobbering
            each other's transform. */}
        <div className={`absolute inset-0 ${showMotion ? "hero-kenburns" : ""} ${!isPlaying ? "paused" : ""}`}>
          <div
            className="absolute inset-0"
            style={{
              transform: showMotion ? `translate(${parallax.x}px, ${parallax.y}px)` : "none",
              transition: showMotion ? "transform 120ms ease-out" : "none",
            }}
          >
            {showRealImage && (
              <Image
                src={HERO_IMAGE_SRC}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover max-sm:[object-position:var(--mobile-op)]"
                style={{ ["--mobile-op" as string]: MOBILE_OBJECT_POSITION }}
                onError={() => setImageFailed(true)}
              />
            )}
            {!showRealImage && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(200deg, #0F2A22 0%, #25573F 60%, #0F2A22 100%)",
                }}
              />
            )}
          </div>
        </div>

        <GuillocheRosette
          className="pointer-events-none absolute -end-[15%] top-1/2 h-[140%] w-[80%] -translate-y-1/2 opacity-[0.14]"
          color="#C9A659"
          opacity={0.16}
        />

        {/* Restrained cedar-green diplomatic overlay + vignette — a
            gradient, not a flat filter, and deliberately lighter on the
            side away from the text so the photograph still reads clearly. */}
        <div className="absolute inset-0 bg-gradient-to-t from-cedar-950/85 via-cedar-950/45 to-cedar-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cedar-950/70 via-cedar-950/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(15,42,34,0.35)]" />

        {/* Content — unchanged headline/lede/CTAs */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-content px-5">
            <div className="max-w-[620px]">
              <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-300">
                {dict.hero.eyebrow}
              </span>
              <h1 className="mt-4 font-serif text-[32px] leading-[1.2] text-ivory-50 sm:text-[38px] md:text-[44px]">
                {dict.hero.headline}
              </h1>
              <p className="mt-5 max-w-[520px] text-[17px] text-ivory-50/80 sm:text-[18.5px]">
                {dict.hero.lede}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={`/${locale}#services`} variant="gold">
                  {dict.hero.ctaPrimary}
                </Button>
                <Button href={`/${locale}#finder`} variant="ghost">
                  {dict.hero.ctaSecondary}
                </Button>
              </div>

              {/* Beirut - Bucharest diplomatic connection — preserved */}
              <div className="mt-10 flex items-center gap-4">
                <svg width="132" height="40" viewBox="0 0 132 40" aria-hidden="true" className="flex-none">
                  <circle cx="10" cy="30" r="3.5" fill="#C9A659" />
                  <circle cx="122" cy="10" r="3.5" fill="#C9A659" />
                  <path
                    d="M10 30 C 45 8, 85 40, 122 10"
                    fill="none"
                    stroke="#C9A659"
                    strokeWidth="1.4"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />
                  {showMotion && (
                    <circle r="2.2" fill="#F3ECDD">
                      <animateMotion
                        dur="3.6s"
                        repeatCount="indefinite"
                        path="M10 30 C 45 8, 85 40, 122 10"
                      />
                    </circle>
                  )}
                </svg>
                <div className="text-[13px] leading-tight text-ivory-50/75">
                  <div>
                    {dict.hero.beirut} <span aria-hidden="true">→</span> {dict.hero.bucharest}
                  </div>
                  <div className="mt-0.5 font-semibold text-ivory-50/90">
                    {dict.hero.connectionLine}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Single control: pause/play for the continuous motion. No
            prev/next/dots — there is only one image. */}
        {!reducedMotion && (
          <div className="absolute bottom-6 start-5 z-10 sm:start-8">
            <button
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? dict.hero.controls.pause : dict.hero.controls.play}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory-50/35 bg-cedar-950/50 text-ivory-50 hover:bg-cedar-950/75 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-gold-400 focus-visible:outline-offset-2"
            >
              <span aria-hidden="true">{isPlaying ? "❚❚" : "▶"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
