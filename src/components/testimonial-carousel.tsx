"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface Testimonial {
  quote: string;
  name: string;
  org: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "We love working with Debbie and Ron! Their professionalism, energy, skill, and wit are extraordinary, and they have elevated the Ballantyne Ball charity auction experience from planning through execution. Yet, what we appreciate the most is their authenticity. They are good people who truly have a heart for building relationships and serving the community. We couldn't be happier to partner with Impact Auctions and are blessed to know Debbie and Ron.",
    name: "Allen Starrett",
    org: "Founder/Chair, Ballantyne Ball",
  },
  {
    quote:
      "Thank you to both you and Ron for helping us raise a significant portion of the overall funds – we've been receiving a lot of positive feedback, and I'm so glad we were able to partner with you. Goal: $3 Million | Achieved: $3.2 Million",
    name: "Abbie Beltz",
    org: "Manager of Special Events, Memorial Foundation / Joe DiMaggio Children's Hospital Foundation",
  },
  {
    quote:
      "Coming soon...",
    name: "Third Testimonial",
    org: "Pending",
  },
];

const AUTO_PLAY_INTERVAL = 6000;   // advance every 6 s
const RESUME_DELAY      = 10000;  // resume after 10 s of inactivity

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  title?: string;
  className?: string;
}

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
  title = "What Nonprofits Say",
  className = "",
}: TestimonialCarouselProps) {
  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const pausedRef  = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── measure content height for smooth animation ─────────────────────────────
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [current]);

  // ── pause helpers ──────────────────────────────────────────────────────────
  const pause = useCallback(() => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY);
  }, []);

  // ── navigation ─────────────────────────────────────────────────────────────
  const go = useCallback((idx: number, dir?: number) => {
    if (idx === current) return;
    setDirection(dir ?? (idx > current ? 1 : -1));
    setCurrent(idx);
    pause();
  }, [current, pause]);

  const prev = useCallback(() => {
    const idx = (current - 1 + testimonials.length) % testimonials.length;
    go(idx, -1);
  }, [current, testimonials.length, go]);

  const next = useCallback(() => {
    const idx = (current + 1) % testimonials.length;
    go(idx, 1);
  }, [current, testimonials.length, go]);

  // ── auto-play ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => {
          setDirection(1);
          return (c + 1) % testimonials.length;
        });
      }
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // ── framer motion variants ─────────────────────────────────────────────────
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <div
      className={`w-full py-4 px-4 md:px-10 ${className}`}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; if (resumeTimer.current) clearTimeout(resumeTimer.current); }}
      data-testid="testimonial-carousel"
    >
      {title && (
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2
            className="display-font text-3xl font-extrabold tracking-tight text-primary"
            data-testid="text-testimonials-title"
          >
            {title}
          </h2>
        </div>
      )}

      <div className="relative mx-auto max-w-3xl">
        {/* Dynamic height container */}
        <motion.div
          className="relative rounded-xl"
          animate={{ height: height > 0 ? height : "auto" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              ref={contentRef}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="rounded-xl bg-white pt-8 pb-8 pr-8 pl-10 flex flex-col justify-between"
              style={{
                borderTop: "1px solid rgba(212, 196, 168, 0.35)",
                borderRight: "1px solid rgba(212, 196, 168, 0.35)",
                borderBottom: "1px solid rgba(212, 196, 168, 0.35)",
                borderLeft: "4px solid #D4C4A8",
                boxShadow: "0 6px 32px rgba(33, 45, 72, 0.08)",
              }}
              data-testid={`card-testimonial-${current}`}
            >
              {/* Quote content */}
              <div className="flex flex-col gap-5">
                {/* Inline quote mark + text */}
                <p
                  className="text-lg md:text-xl italic leading-relaxed text-primary"
                  data-testid={`text-testimonial-quote-${current}`}
                >
                  <span
                    aria-hidden="true"
                    className="display-font not-italic select-none mr-1 align-bottom"
                    style={{ fontSize: "2.5rem", lineHeight: "1", color: "#D4C4A8", fontWeight: 900 }}
                  >
                    &ldquo;
                  </span>
                  {t.quote}
                </p>
              </div>

              {/* Attribution — always pinned to the bottom */}
              <div
                className="mt-6 pt-5 shrink-0"
                style={{ borderTop: "1.5px solid rgba(212, 196, 168, 0.4)" }}
              >
                <div
                  className="display-font text-xl font-extrabold text-primary"
                  data-testid={`text-testimonial-name-${current}`}
                >
                  {t.name}
                </div>
                <div
                  className="text-xs font-medium mt-1 uppercase tracking-wide"
                  style={{ color: "#B5A48A" }}
                  data-testid={`text-testimonial-org-${current}`}
                >
                  {t.org}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: "hsl(var(--primary))" }}
            data-testid="btn-testimonial-prev"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => go(idx)}
                className="h-2.5 rounded-full transition-all duration-300"
                style={{
                  width: idx === current ? "2rem" : "0.625rem",
                  backgroundColor: idx === current ? "#D4C4A8" : "rgba(212,196,168,0.4)",
                }}
                data-testid={`btn-testimonial-dot-${idx}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
            style={{ backgroundColor: "hsl(var(--primary))" }}
            data-testid="btn-testimonial-next"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
