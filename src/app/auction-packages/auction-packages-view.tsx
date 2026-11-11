"use client";

import { Check, Plane, Compass, Ticket, Utensils, HeartPulse, Sparkles, MapPin, Search, CalendarCheck, BadgeDollarSign, HeadphonesIcon, Megaphone, Presentation, CalendarClock, Mic, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ContentFor } from "@/content";

type AuctionPackagesContent = ContentFor<"auctionPackagesPage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const stepIcons = [Search, CalendarCheck, Megaphone, BadgeDollarSign];
const valueIcons = [BadgeDollarSign, Check, Sparkles];
const packageTypeIcons = [Plane, Compass, Ticket, Utensils, HeartPulse, Sparkles];
const relatedServiceMeta = [
  { slug: "live-auctions", icon: Megaphone },
  { slug: "event-planning", icon: CalendarClock },
  { slug: "emcee", icon: Mic },
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

export default function AuctionPackagesView({ content }: { content: AuctionPackagesContent }) {
  const {
    hero,
    intro,
    howItWorks,
    whyItWorks,
    packageTypes,
    samplePackages,
    theNumbers,
    fulfillment,
    faq,
    browseCta,
    relatedServices,
  } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-auction-packages">
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
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">{intro.photoPlaceholderText}</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-pad bg-background" data-testid="section-how-it-works">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              {howItWorks.heading}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {howItWorks.steps.map((item, i) => {
              const Icon = stepIcons[i] ?? Check;
              return (
                <div key={i} className="relative bg-background pt-4 md:pt-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 ring-4 ring-background">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display-font text-lg font-bold text-primary mb-3 text-center md:text-left">{item.title}</h3>
                  <p className="text-secondary text-center md:text-left text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* The Value Section */}
      <section className="section-pad bg-muted" data-testid="section-value">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              {whyItWorks.heading}
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {whyItWorks.cards.map((feature, i) => {
               const Icon = valueIcons[i] ?? Check;
              return (
                <Card key={i} className="p-8 border-none shadow-sm bg-white h-full">
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

      {/* Package Types Section */}
      <section className="section-pad bg-background" data-testid="section-package-types">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {packageTypes.heading}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packageTypes.types.map((type, i) => {
              const Icon = packageTypeIcons[i] ?? Sparkles;
              return (
                <Card key={i} className="p-6 border border-card-border shadow-sm bg-background flex flex-col items-start hover:border-accent/50 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center mb-4 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display-font text-lg font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{type.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sample Packages Section */}
      <section className="section-pad bg-muted" data-testid="section-sample-packages">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            {samplePackages.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {samplePackages.packages.map((pkg, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-sm bg-white flex flex-col h-full">
                <div className="aspect-[4/3] bg-muted w-full relative grid place-items-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="display-font text-xl font-bold text-primary mb-3">{pkg.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{pkg.description}</p>
                  <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary">{samplePackages.startingBidLabel}</span>
                      <span className="font-semibold text-primary">{pkg.startingBid}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary">{samplePackages.winningBidLabel}</span>
                      <span className="font-bold text-accent">{pkg.typicalWinningBid}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-secondary text-sm mt-8 italic">
            {samplePackages.disclaimer}
          </p>
        </div>
      </section>

      {/* The Math Section */}
      <section className="section-pad bg-background" data-testid="section-math">
        <div className="container-tight">
          <div className="mx-auto max-w-5xl">
            <h2 className="display-font text-3xl font-extrabold text-center md:text-left text-primary mb-12">
               {theNumbers.heading}
            </h2>
            <div className="grid gap-12 md:grid-cols-2 items-start">
              <div className="space-y-6">
                <p className="text-lg text-secondary">
                  {theNumbers.intro}
                </p>
                <div className="bg-muted rounded-xl p-6 md:p-8 space-y-4 font-mono text-sm md:text-base">
                  {theNumbers.rows.map((row, i) => (
                    <div key={i} className="flex justify-between border-b border-card-border pb-2">
                      <span className="text-secondary">{row.label}</span>
                      <span className={i === 0 ? "text-primary line-through" : "text-primary"}>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-2 text-lg md:text-xl">
                    <span className="font-bold text-primary">{theNumbers.profitLabel}</span>
                    <span className="font-bold text-accent">{theNumbers.profitValue}</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-primary flex items-center gap-2">
                  <Check className="text-accent h-5 w-5" strokeWidth={3} />
                  {theNumbers.noSaleNote}
                </p>
              </div>
              
              <div className="bg-primary text-white p-8 md:p-10 rounded-xl h-full flex flex-col justify-center">
                <div className="mb-6">
                   <BadgeDollarSign className="h-12 w-12 text-[#D4C4A8]" strokeWidth={1.5} />
                </div>
                <blockquote className="display-font text-2xl md:text-3xl font-bold leading-tight mb-6">
                  {theNumbers.quote}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment Section */}
      <section className="section-pad bg-muted" data-testid="section-fulfillment">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-6">
              {fulfillment.heading}
            </h2>
            <p className="text-center text-lg text-secondary mb-12 max-w-3xl mx-auto">
              {fulfillment.intro}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8 mb-10">
              <ul className="space-y-5 flex-1">
                {fulfillment.leftColumnItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5 flex-1">
                {fulfillment.rightColumnItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center bg-background py-4 px-6 rounded-lg border border-card-border shadow-sm inline-block mx-auto flex items-center justify-center gap-3">
               <HeadphonesIcon className="text-accent h-5 w-5" />
               <span className="font-medium text-primary">{fulfillment.supportNote}</span>
            </div>
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
      <section className="section-pad bg-[#F5F5F1]" data-testid="section-faq">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              {faq.heading}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faq.questions.map((item, i) => (
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

      {/* CTA Browse Section */}
      <section className="section-pad bg-background" data-testid="section-cta-browse">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl bg-muted rounded-2xl p-8 md:p-12 border border-card-border shadow-sm">
             <h2 className="display-font text-3xl font-extrabold text-primary mb-8 text-center md:text-left">
              {browseCta.heading}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
               <div className="md:w-3/5 text-lg text-secondary leading-relaxed text-center md:text-left">
                  {browseCta.body}
               </div>
               <div className="md:w-2/5 flex flex-col gap-3 w-full sm:max-w-xs">
                 <Link href="/contact">
                   <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base">
                     {browseCta.primaryButton}
                   </Button>
                 </Link>
                 <Link href="/contact">
                   <Button variant="outline" className="w-full border-primary text-primary hover:bg-muted h-12 text-base">
                     {browseCta.secondaryButton}
                   </Button>
                 </Link>
               </div>
            </div>
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
             {relatedServices.services.map((service, i) => {
                const meta = relatedServiceMeta[i];
                const Icon = meta?.icon ?? Sparkles;
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
