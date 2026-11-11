"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Check, Clock, Megaphone, Zap } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Card } from "@/components/ui/card";
import type { ContentFor } from "@/content";

type EmceeContent = ContentFor<"emceePage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const relatedServiceMeta = [
  { slug: "live-auctions", icon: Megaphone },
  { slug: "fund-a-need", icon: Zap },
  { slug: "event-planning", icon: Clock },
];

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

export default function EmceeView({ content }: { content: EmceeContent }) {
  const { hero, intro, whyItMatters, whatYouGet, eventNight, testimonials, faq, relatedServices } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-emcee-services">
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
              <img src="/images/emcee-on-stage.jpg" alt={intro.imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards Section */}
      <section className="section-pad bg-muted" data-testid="section-problems">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              {whyItMatters.heading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {whyItMatters.cards.map((problem, i) => (
              <Card key={i} className="p-8 border-none shadow-sm bg-white h-full">
                <h3 className="display-font text-xl font-bold text-primary mb-4">{problem.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-pad bg-background" data-testid="section-what-you-get">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
              {whatYouGet.heading}
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {whatYouGet.leftColumnItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5 flex-1">
                {whatYouGet.rightColumnItems.map((item, i) => (
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

      {/* Event Night Timeline Section */}
      <section className="section-pad bg-muted" data-testid="section-event-night">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {eventNight.heading}
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {eventNight.moments.map((moment, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                    {i + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="display-font text-lg font-bold text-primary mb-2">{moment.title}</h3>
                  <p className="text-secondary leading-relaxed">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <TestimonialCarousel title={testimonials.heading} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-muted" data-testid="section-faq">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {faq.heading}
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {faq.questions.map((item, i) => (
              <Card key={i} className="p-6 border-none shadow-sm bg-white">
                <h3 className="display-font text-lg font-bold text-primary mb-2">{item.question}</h3>
                <p className="text-secondary leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-pad bg-background" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            {relatedServices.heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {relatedServices.cards.map((service, i) => {
                const meta = relatedServiceMeta[i];
                const Icon = meta?.icon ?? Megaphone;
                return (
                  <Link key={i} href={meta ? `/services/${meta.slug}` : "/services"}>
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/5 grid place-items-center text-primary">
                         <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{service.title}</h3>
                        <p className="text-sm text-secondary">{service.description}</p>
                      </div>
                    </Card>
                  </Link>
                )
             })}
          </div>
        </div>
      </section>

      <CtaBanner
        {...content.ctaBanner}
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
