"use client";

import { useEffect } from "react";

interface TestimonialCarouselProps {
  title?: string;
  className?: string;
}

export default function TestimonialCarousel({
  title = "What Nonprofits Say",
  className = "",
}: TestimonialCarouselProps) {
  useEffect(() => {
    if ((window as any).efsAPI) {
      (window as any).efsAPI.load();
    }
  }, []);

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

      {/* Elfsight Google Reviews embed */}
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div
        className="elfsight-app-56714005-6595-4b9c-b595-6c4575ba3a0d"
        data-elfsight-app-lazy
        data-testid="elfsight-google-reviews"
      ></div>
    </div>
  );
}
