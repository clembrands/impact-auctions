"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  function go(idx: number) {
    if (idx === current || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 180);
  }

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div
      className={`w-full py-4 px-4 md:px-10 ${className}`}
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
        {/* Card */}
        <div
          className="rounded-2xl bg-white p-10 md:p-14 flex flex-col"
          style={{
            border: "1.5px solid rgba(212, 196, 168, 0.55)",
            boxShadow: "0 8px 40px rgba(33, 45, 72, 0.10), 0 1px 4px rgba(212,196,168,0.18)",
            opacity: animating ? 0 : 1,
            transform: animating ? "scale(0.98)" : "scale(1)",
            transition: "opacity 180ms ease, transform 180ms ease",
          }}
          data-testid={`card-testimonial-${current}`}
        >
          {/* Decorative quotation mark */}
          <div
            aria-hidden="true"
            className="display-font leading-none select-none mb-4"
            style={{
              fontSize: "6rem",
              lineHeight: "0.8",
              color: "#D4C4A8",
              fontWeight: 900,
            }}
          >
            &ldquo;
          </div>

          <p
            className="text-base/8 text-secondary md:text-lg/9 flex-1"
            data-testid={`text-testimonial-quote-${current}`}
          >
            {t.quote}
          </p>

          <div
            className="mt-8 pt-6"
            style={{ borderTop: "1.5px solid rgba(212, 196, 168, 0.4)" }}
          >
            <div
              className="display-font text-lg font-extrabold text-primary"
              data-testid={`text-testimonial-name-${current}`}
            >
              {t.name}
            </div>
            <div
              className="text-sm font-medium mt-0.5"
              style={{ color: "#B5A48A" }}
              data-testid={`text-testimonial-org-${current}`}
            >
              {t.org}
            </div>
          </div>
        </div>

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
