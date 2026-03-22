"use client";

import { Check, Megaphone, BadgeDollarSign, Plane, HandHeart } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

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

export default function SilentAuctions() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-silent-auctions">
      <SiteHeader />

      <PageHero
        title="Silent Auctions"
        subtitle="Strategic setup and pacing that maximizes participation"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                More Than Great Items—It's About Strategy
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  A successful silent auction isn't just about having great items—it's about presentation, flow, and timing. The way you display items, structure your bid sheets, and manage the closing process can mean the difference between a mediocre result and a record-breaking night.
                </p>
                <p>
                  Our team helps you organize your silent auction for maximum engagement. We've seen what works (and what doesn't) across hundreds of events, and we bring that expertise to your gala.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Silent auction tables</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-pad bg-background" data-testid="section-what-we-do">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
              What You Get With Our Silent Auction Services
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Strategic item grouping and categorization",
                  "Bid sheet design and optimization",
                  "Display and table layout recommendations",
                  "Starting bid and bid increment guidance",
                  "Item description writing assistance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white mt-0.5">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5 flex-1">
                {[
                  "Traffic flow planning for your venue",
                  "Timed section closings to build urgency",
                  "Checkout process coordination",
                  "Bid spotting and monitoring during event",
                  "Post-event item fulfillment guidance"
                ].map((item, i) => (
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

      {/* Common Mistakes Section */}
      <section className="section-pad bg-muted" data-testid="section-common-mistakes">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              Silent Auction Mistakes We Help You Avoid
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Poor Item Placement",
                description: "Burying your best items in back corners kills bids. We help you create a strategic layout that puts high-value items where they'll get maximum visibility and foot traffic."
              },
              {
                title: "Confusing Bid Sheets",
                description: "Cluttered or unclear bid sheets frustrate bidders and reduce participation. We design clean, simple sheets that make it easy for guests to bid confidently."
              },
              {
                title: "Chaotic Closing",
                description: "A messy closing process creates confusion and lost bids. We implement timed section closings and clear announcements that build urgency and capture every bid."
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 border-none shadow-sm bg-white h-full">
                <h3 className="display-font text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="section-pad bg-background" data-testid="section-why-it-matters">
        <div className="container-tight">
          <div className="mx-auto max-w-5xl">
            <h2 className="display-font text-3xl font-extrabold text-center md:text-left text-primary mb-12">
               Why Silent Auction Strategy Matters
            </h2>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Most organizations underestimate the revenue potential of their silent auction. With the right strategy, your silent auction can generate 30-50% of your total event revenue—but only if it's done right.
                </p>
                <p>
                  We've seen silent auctions transformed from chaotic afterthoughts into well-oiled fundraising machines. The difference isn't better items—it's better execution.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-muted p-8 rounded-xl border border-card-border">
                  <div className="display-font text-4xl font-extrabold text-primary mb-2 text-center md:text-left">
                    Up to 50%
                  </div>
                  <div className="text-sm font-medium text-secondary text-center md:text-left">
                    Of total event revenue can come from a well-run silent auction
                  </div>
                </div>
                <div className="bg-muted p-8 rounded-xl border border-card-border">
                  <div className="display-font text-4xl font-extrabold text-primary mb-2 text-center md:text-left">
                    2-3x More Bids
                  </div>
                  <div className="text-sm font-medium text-secondary text-center md:text-left">
                    When items are displayed and described strategically
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="section-pad bg-muted" data-testid="section-process">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              How We Help
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-card-border -z-10" />

            {[
              {
                step: "01",
                title: "Review Your Items",
                description: "We review your item list and help you categorize, price, and describe each one for maximum appeal."
              },
              {
                step: "02",
                title: "Plan the Layout",
                description: "We create a strategic floor plan that optimizes traffic flow and puts your best items front and center."
              },
              {
                step: "03",
                title: "Design the Experience",
                description: "From bid sheets to display signage to closing announcements, we plan every detail."
              },
              {
                step: "04",
                title: "Execute Flawlessly",
                description: "On event night, we monitor bidding, manage closings, and ensure a smooth checkout process."
              }
            ].map((item, i) => (
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

      {/* Testimonial Section */}
      <section className="section-pad bg-background" data-testid="section-testimonial">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="space-y-6">
              <p className="display-font text-2xl md:text-3xl font-medium text-primary italic leading-relaxed">
                "Their Fund-A-Need was the most compelling giving moment we've ever hosted. Clear story, strong pacing, and incredible audience connection."
              </p>
              <footer className="text-base font-semibold text-secondary">
                — Event Chair, Community Health Foundation
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="section-pad bg-muted" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            Often Paired With
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {[
               {
                 title: "Live Auctions",
                 slug: "live-auctions",
                 icon: Megaphone,
                 desc: "High-energy bid calling."
               },
               {
                 title: "Fund-A-Need",
                 slug: "fund-a-need",
                 icon: HandHeart,
                 desc: "Maximize giving moments."
               },
               {
                 title: "Auction Packages",
                 slug: "auction-packages",
                 icon: Plane,
                 desc: "Curated experiences."
               }
             ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link key={i} href={service.slug === 'auction-packages' ? '/auction-packages' : `/services/${service.slug}`}>
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-none shadow-sm flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/5 grid place-items-center text-primary">
                         <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary">{service.title}</h3>
                        <p className="text-sm text-secondary">{service.desc}</p>
                      </div>
                    </Card>
                  </Link>
                )
             })}
          </div>
        </div>
      </section>

      <CtaBanner 
        title="Ready to transform your silent auction?" 
        subtitle="Get a free consultation and let's discuss your event." 
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
