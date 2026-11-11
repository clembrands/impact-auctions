"use client";

import Link from "next/link";
import { useSiteContent } from "@/components/site-content-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
}

/**
 * Wording defaults to Sanity "Site Settings › CTA Banner"; individual pages
 * can pass their own (also Sanity-editable) title/subtitle/buttonText.
 */
export default function CtaBanner({
  title,
  subtitle,
  buttonText,
  className
}: CtaBannerProps) {
  const defaults = useSiteContent().ctaBanner;
  title = title || defaults.title;
  subtitle = subtitle || defaults.subtitle;
  buttonText = buttonText || defaults.buttonText;
  return (
    <section className={cn("bg-[#E7E3DD]", className)} data-testid="section-cta-banner">
      <div className="container-tight section-pad">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <h2 className={cn("display-font text-2xl font-bold md:text-3xl", className?.includes("bg-primary") ? "text-white" : "text-primary")} data-testid="text-cta-title">
              {title}
            </h2>
            <p className={cn("text-sm md:text-base", className?.includes("bg-primary") ? "text-white/90" : "text-secondary")} data-testid="text-cta-subtext">
              {subtitle}
            </p>
          </div>
          <Link href="/contact" data-testid="link-cta-book">
            <Button
              className={cn("rounded-lg px-6", className?.includes("bg-primary") ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90")}
              data-testid="button-cta-book"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
