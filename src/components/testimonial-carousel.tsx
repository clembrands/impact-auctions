"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface Testimonial {
  quote: string;
  name: string;
  org: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Impact Auctions brought the perfect mix of professionalism and warmth. Our donors stayed engaged all night.",
    name: "Development Director",
    org: "Regional Children's Nonprofit",
  },
  {
    quote:
      "They guided our team with clarity and confidence. The Fund-A-Need was our best ever.",
    name: "Event Chair",
    org: "Community Foundation",
  },
  {
    quote:
      "From planning to execution, they made the night feel seamless—and the results exceeded expectations.",
    name: "Executive Director",
    org: "Health & Wellness Charity",
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

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className={`w-full ${className}`} data-testid="testimonial-carousel">
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
        <Card
          className="flex min-h-[220px] flex-col rounded-xl border border-card-border bg-card p-8 md:p-10"
          data-testid={`card-testimonial-${current}`}
        >
          <div className="flex-1">
            <div className="mb-4 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="display-font text-5xl font-extrabold leading-none text-primary/70 select-none"
              >
                "
              </span>
              <p
                className="text-base/7 text-secondary md:text-lg/8"
                data-testid={`text-testimonial-quote-${current}`}
              >
                {t.quote}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-card-border pt-4">
            <div
              className="text-sm font-semibold text-primary"
              data-testid={`text-testimonial-name-${current}`}
            >
              {t.name}
            </div>
            <div
              className="text-sm text-secondary"
              data-testid={`text-testimonial-org-${current}`}
            >
              {t.org}
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-9 w-9 rounded-full border border-card-border bg-card flex items-center justify-center text-primary hover:bg-muted transition-colors"
            data-testid="btn-testimonial-prev"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === current}
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? "w-6 bg-primary"
                    : "w-2 bg-primary/25 hover:bg-primary/50"
                }`}
                data-testid={`btn-testimonial-dot-${idx}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-9 w-9 rounded-full border border-card-border bg-card flex items-center justify-center text-primary hover:bg-muted transition-colors"
            data-testid="btn-testimonial-next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
