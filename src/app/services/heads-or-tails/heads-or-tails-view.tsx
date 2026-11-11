"use client";

import { Check, Coins, Laugh, Users, Zap, CalendarClock, HandHeart, Megaphone, Mic } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import type { ContentFor } from "@/content";

type HeadsOrTailsContent = ContentFor<"headsOrTailsPage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const whyItWorksIcons = [Users, Laugh, Zap];

const relatedServiceMeta = [
  { slug: "live-auctions", icon: Megaphone },
  { slug: "fund-a-need", icon: HandHeart },
  { slug: "event-planning", icon: CalendarClock },
  { slug: "emcee", icon: Mic },
];

function YouTubeEmbed({
  videoId,
  title,
  playLabel,
  thumbnailAlt,
}: {
  videoId: string;
  title: string;
  playLabel: string;
  thumbnailAlt: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = "/images/heads-or-tails-video-thumbnail.jpg";

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={playLabel}
          className="group absolute inset-0 w-full h-full"
        >
          {/* Thumbnail */}
          <img
            src={thumbnail}
            alt={thumbnailAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 group-hover:bg-white shadow-xl group-hover:scale-110 transition-all duration-200">
              <svg
                className="w-8 h-8 text-primary ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-pad bg-muted/50" data-testid="section-page-hero">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl" data-testid="text-page-title">
            {title}
          </h1>
          <p className="mt-4 text-xl text-secondary" data-testid="text-page-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function HeadsOrTailsView({ content }: { content: HeadsOrTailsContent }) {
  const { hero, intro, howItWorks, whyItWorks, whatWeHandle, revenuePotential, faq, relatedServices } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-heads-or-tails">
      <SiteHeader />

      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                {intro.heading}
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                {intro.paragraphs.map((paragraph, i) => (
                  <p key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <YouTubeEmbed
              videoId="RRR4NfHof4Q"
              title={intro.videoTitle}
              playLabel={intro.videoPlayButtonLabel}
              thumbnailAlt={intro.videoThumbnailAlt}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-pad bg-muted" data-testid="section-how-it-works">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              {howItWorks.heading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-background -z-10" />
            {howItWorks.steps.map((item, i) => (
              <div key={i} className="relative bg-muted pt-4 md:pt-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mb-6 mx-auto md:mx-0 relative z-10 ring-4 ring-muted">
                  {item.step}
                </div>
                <h3 className="display-font text-lg font-bold text-primary mb-3 text-center md:text-left">{item.title}</h3>
                <p className="text-secondary text-center md:text-left text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="section-pad bg-background" data-testid="section-why-it-works">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              {whyItWorks.heading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whyItWorks.cards.map((feature, i) => {
              const Icon = whyItWorksIcons[i] ?? Coins;
              return (
                <Card key={i} className="p-8 border-none shadow-sm bg-muted h-full">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="display-font text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="section-pad bg-muted" data-testid="section-what-we-do">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
              {whatWeHandle.heading}
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {whatWeHandle.leftColumnItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5 flex-1">
                {whatWeHandle.rightColumnItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Potential Section */}
      <section className="section-pad bg-background" data-testid="section-revenue">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {revenuePotential.heading}
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            {revenuePotential.stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="display-font text-4xl font-extrabold text-primary">{stat.value}</div>
                <div className="text-sm font-medium text-secondary">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <TestimonialCarousel title={content.testimonials.heading} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-background" data-testid="section-faq">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              {faq.heading}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-pad bg-muted" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            {relatedServices.heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {relatedServices.cards.map((service, i) => {
              const meta = relatedServiceMeta[i];
              const Icon = meta?.icon ?? Coins;
              return (
                <Link
                  key={i}
                  href={meta ? `/services/${meta.slug}` : "/services"}
                  data-testid={`link-related-${meta?.slug ?? i}`}
                >
                  <Card className="flex items-start gap-4 p-5 h-full border border-card-border bg-card hover:bg-background transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="display-font font-semibold text-primary text-sm">{service.title}</div>
                      <div className="text-xs text-secondary mt-1">{service.description}</div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner {...content.ctaBanner} />
      <SiteFooter />
    </div>
  );
}
