"use client";

import { Check, Clock, Coins, Users, Mic, Presentation, ShieldAlert, BadgeDollarSign, Megaphone, MonitorPlay } from "lucide-react";
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
import type { ContentFor } from "@/content";

type EventPlanningEmceeContent = ContentFor<"eventPlanningEmceePage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const problemIcons = [Clock, ShieldAlert, Users];
const backstageIcons = [Mic, Presentation, Clock];
const relatedServiceMeta = [
  { slug: "live-auctions", icon: Megaphone },
  { slug: "fund-a-need", icon: BadgeDollarSign },
  { slug: "heads-or-tails", icon: Coins },
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

export default function EventPlanningEmceeView({ content }: { content: EventPlanningEmceeContent }) {
  const { hero, intro, problem, whatYouGet, emcee, runOfShow, backstage, planningTimeline, faq, relatedServices } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-event-planning">
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
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">{intro.photoPlaceholderLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-pad bg-background" data-testid="section-problem">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              {problem.heading}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {problem.cards.map((feature, i) => {
              const Icon = problemIcons[i] ?? Clock;
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
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-pad bg-muted" data-testid="section-what-we-do">
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

      {/* Emcee Section */}
      <section className="section-pad bg-background" data-testid="section-emcee">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                {emcee.heading}
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                {emcee.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-primary mb-3">{emcee.listHeading}</h3>
                <ul className="space-y-2 text-secondary">
                  {emcee.listItems.map((item, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary font-bold">•</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">{emcee.photoPlaceholderLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Run-of-Show Section */}
      <section className="section-pad bg-muted" data-testid="section-run-of-show">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary mb-6">
              {runOfShow.heading}
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              {runOfShow.description}
            </p>
          </div>

          <div className="mx-auto max-w-3xl bg-background rounded-xl border border-card-border shadow-sm overflow-hidden">
            <div className="bg-primary px-6 py-4 text-white font-bold tracking-wide">
              {runOfShow.timelineTitle}
            </div>
            <div className="p-6 md:p-8 space-y-4">
              {runOfShow.timelineRows.map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="sm:w-32 font-semibold text-primary shrink-0">{row.time}</div>
                  <div className={`text-secondary ${row.highlight ? 'font-medium text-primary bg-accent/10 px-2 -mx-2 rounded' : ''}`}>
                    {row.event}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-muted/50 px-6 py-4 text-sm text-secondary text-center border-t border-card-border">
              {runOfShow.timelineFootnote}
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="section-pad bg-background" data-testid="section-behind-scenes">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              {backstage.heading}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {backstage.cards.map((feature, i) => {
              const Icon = backstageIcons[i] ?? Clock;
              return (
                <div key={i} className="bg-muted p-8 rounded-xl border border-card-border shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="display-font text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-secondary leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <TestimonialCarousel title={content.testimonials.heading} />
        </div>
      </section>

      {/* Planning Timeline Section */}
      <section className="section-pad bg-muted" data-testid="section-planning-timeline">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary mb-6">
              {planningTimeline.heading}
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              {planningTimeline.description}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-card-border -z-10" />

            {planningTimeline.steps.map((item, i) => (
              <Card key={i} className="relative bg-background border-card-border p-6 shadow-sm flex flex-col items-center text-center">
                 <div className="w-4 h-4 rounded-full bg-accent mb-4 ring-4 ring-background" />
                <h3 className="display-font text-lg font-bold text-primary mb-3">{item.step}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
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

      <CtaBanner {...content.ctaBanner} className="bg-primary" />
      <SiteFooter />
    </div>
  );
}
