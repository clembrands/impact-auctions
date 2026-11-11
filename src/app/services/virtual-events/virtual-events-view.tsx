"use client";

import { Check, MonitorPlay, AlertTriangle, Link as LinkIcon, FastForward, Image as ImageIcon, Smartphone, DollarSign } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ContentFor } from "@/content";

type VirtualEventsContent = ContentFor<"virtualEventsPage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const challengeIcons = [MonitorPlay, AlertTriangle, LinkIcon];
const whatChangesIcons = [FastForward, ImageIcon, Smartphone, DollarSign];
const relatedServiceSlugs = ["live-auctions", "fund-a-need", "event-planning", "emcee"];

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

export default function VirtualEventsView({ content }: { content: VirtualEventsContent }) {
  const { hero, intro, challenge, whatYouGet, virtualVsHybrid, whatChanges, preparationProcess, results, testimonial, faq, relatedServices } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-virtual-events">
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

      {/* The Challenge Section */}
      <section className="section-pad bg-background" data-testid="section-challenge">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              {challenge.heading}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {challenge.cards.map((feature, i) => {
              const Icon = challengeIcons[i] ?? MonitorPlay;
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

      {/* Virtual vs Hybrid Section */}
      <section className="section-pad bg-background" data-testid="section-virtual-vs-hybrid">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {virtualVsHybrid.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="p-8 border border-card-border shadow-sm bg-white">
              <h3 className="display-font text-2xl font-bold text-primary mb-4">{virtualVsHybrid.fullyVirtual.title}</h3>
              <p className="text-secondary leading-relaxed mb-6">
                {virtualVsHybrid.fullyVirtual.description}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold text-primary">{virtualVsHybrid.fullyVirtual.bestForLabel}</span> {virtualVsHybrid.fullyVirtual.bestForText}
              </div>
            </Card>
            <Card className="p-8 border border-card-border shadow-sm bg-white">
              <h3 className="display-font text-2xl font-bold text-primary mb-4">{virtualVsHybrid.hybrid.title}</h3>
              <p className="text-secondary leading-relaxed mb-6">
                {virtualVsHybrid.hybrid.description}
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold text-primary">{virtualVsHybrid.hybrid.bestForLabel}</span> {virtualVsHybrid.hybrid.bestForText}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="section-pad bg-muted" data-testid="section-whats-different">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {whatChanges.heading}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatChanges.cards.map((item, i) => {
              const Icon = whatChangesIcons[i] ?? FastForward;
              return (
                <div key={i} className="bg-background p-6 rounded-xl border border-card-border shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-[#D4C4A8]/20 flex items-center justify-center mb-4 text-[#D4C4A8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display-font text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="section-pad bg-background" data-testid="section-process">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              {preparationProcess.heading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {preparationProcess.steps.map((item, i) => (
              <div key={i} className="relative bg-background pt-4 md:pt-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mb-6 mx-auto md:mx-0 relative z-10 ring-4 ring-background">
                  {item.number}
                </div>
                <h3 className="display-font text-lg font-bold text-primary mb-3 text-center md:text-left">{item.title}</h3>
                <p className="text-secondary text-center md:text-left text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-pad bg-[#F5F5F1]" data-testid="section-results">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-8">
               {results.heading}
            </h2>
            <p className="text-center text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              {results.description}
            </p>
            <div className="grid gap-10 text-center md:grid-cols-2 max-w-2xl mx-auto">
              {results.stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="display-font text-4xl font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-secondary">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="space-y-6">
              <p className="display-font text-2xl md:text-3xl font-medium text-primary italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <footer className="text-base font-semibold text-secondary">
                — {testimonial.attribution}
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-muted" data-testid="section-faq">
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
      <section className="section-pad bg-background" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            {relatedServices.heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {relatedServices.cards.map((service, i) => {
                const slug = relatedServiceSlugs[i];
                return (
                  <Link key={i} href={slug ? `/services/${slug}` : "/services"}>
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-card-border shadow-sm flex items-center gap-4">
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
