"use client";

import { Check, Users, Heart, TrendingUp, BadgeDollarSign, Coins, Megaphone, CalendarClock, Mic } from "lucide-react";
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

export default function FundANeed() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-fund-a-need">
      <SiteHeader />

      <PageHero
        title="Fund-A-Need"
        subtitle="The most powerful fundraising moment of your night"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                Sometimes, All You Need to Do Is Ask
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Fund-A-Need—also called Fund-A-Mission, Paddle Raise, or Special Appeal—is often the single biggest revenue driver of your entire event. When done right, it can raise more than your live and silent auctions combined.
                </p>
                <p>
                  Here's the reality: many guests come to your gala hoping to support your cause, but they don't win anything in the auction. Fund-A-Need gives every person in the room a chance to contribute directly to your mission. No competition, no items—just pure, heartfelt giving.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Paddle raise moment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="section-pad bg-background" data-testid="section-why-it-works">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              Why Fund-A-Need Is So Powerful
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "100% Participation",
                icon: Users,
                description: "Unlike auctions where only winning bidders contribute, Fund-A-Need invites every guest to give. Even those who didn't win a single item can make a meaningful impact."
              },
              {
                title: "Mission-Focused Giving",
                icon: Heart,
                description: "This is giving from the heart. Guests aren't buying something—they're investing directly in your cause. That emotional connection drives higher gifts."
              },
              {
                title: "Multiplier Effect",
                icon: TrendingUp,
                description: "When guests see others raising their paddles, it creates momentum. One gift inspires another, and the room feeds off the collective generosity."
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
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
              What You Get With Our Fund-A-Need Services
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Pre-event strategy to define ask levels",
                  "Compelling story development with your team",
                  "Video and presentation coordination",
                  "Optimal timing placement in your program",
                  "Script development for the appeal"
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
                  "Professional delivery that moves the room",
                  "Strategic ask level sequencing",
                  "Paddle tracking and bid spotting",
                  "Real-time adjustments based on room energy",
                  "Techniques to capture every possible gift"
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

      {/* The Anatomy Section */}
      <section className="section-pad bg-background" data-testid="section-anatomy">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              Anatomy of a Successful Fund-A-Need
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {[
              {
                step: "01",
                title: "Set the Stage",
                description: "We work with you to identify the perfect moment in your program—usually after dinner, after a compelling video, when guests are emotionally connected to your mission."
              },
              {
                step: "02",
                title: "Tell the Story",
                description: "Great Fund-A-Needs start with great stories. We help you craft a narrative that connects your donors to real impact—specific programs, real beneficiaries, tangible outcomes."
              },
              {
                step: "03",
                title: "Make the Ask",
                description: "Our auctioneer delivers the appeal with confidence and heart. We start high and work down through giving levels, using proven techniques to capture gifts at every amount."
              },
              {
                step: "04",
                title: "Capture Every Gift",
                description: "We use strategic pauses, bid spotters, and gentle encouragement to ensure no one who wants to give is overlooked. Every raised paddle counts."
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-background pt-4 md:pt-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mb-6 mx-auto md:mx-0 relative z-10 ring-4 ring-background">
                  {item.step}
                </div>
                <h3 className="display-font text-lg font-bold text-primary mb-3 text-center md:text-left">{item.title}</h3>
                <p className="text-secondary text-center md:text-left text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Levels Section */}
      <section className="section-pad bg-muted" data-testid="section-ask-levels">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="display-font text-3xl font-extrabold text-primary mb-6">
              Strategic Ask Levels
            </h2>
            <p className="text-lg text-secondary mb-12">
              The giving levels you choose matter. We help you set ask amounts based on your audience, your goals, and your event history. A typical Fund-A-Need might include:
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8">
              {["$10,000", "$5,000", "$2,500", "$1,000", "$500", "$250", "$100"].map((level, i, arr) => (
                <div key={i} className="flex items-center gap-2 md:gap-4">
                  <div className="bg-background border border-card-border px-4 py-3 rounded-lg font-bold text-primary shadow-sm text-lg md:text-xl">
                    {level}
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-accent text-xl hidden md:inline-block">→</span>
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-sm font-medium text-secondary/80 bg-background/50 inline-block px-6 py-3 rounded-full">
              We'll customize the levels based on your audience and fundraising goals. The key is making every guest feel they can participate meaningfully.
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-pad bg-background" data-testid="section-results">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
             Fund-A-Need Results
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">
                $3.2M
              </div>
              <div className="text-sm font-medium text-secondary">
                Raised in One Night
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Joe DiMaggio Children's Hospital
              </div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">
                100%
              </div>
              <div className="text-sm font-medium text-secondary">
                Participation
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                The goal for every Fund-A-Need
              </div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">
                2-3x
              </div>
              <div className="text-sm font-medium text-secondary">
                Revenue
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Compared to organizations without a Fund-A-Need
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-background" data-testid="section-faq">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              Common Questions About Fund-A-Need
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "When should the Fund-A-Need happen in our program?",
                  a: "Typically after dinner and after an emotional moment—like a mission video or beneficiary story. We'll help you find the perfect placement based on your specific event flow."
                },
                {
                  q: "What if our donors aren't big givers?",
                  a: "Fund-A-Need works for every audience. We customize ask levels based on your donor base. Even starting at $100 or $250 can generate significant revenue when the whole room participates."
                },
                {
                  q: "How long does a Fund-A-Need take?",
                  a: "Usually 10-15 minutes, depending on the size of your audience and number of giving levels. We keep it moving so it stays energetic, not drawn out."
                },
                {
                  q: "Do we need a video?",
                  a: "A video isn't required, but it helps. A 2-3 minute mission video right before the appeal creates emotional connection. We can advise on what works best."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-secondary leading-relaxed">
                    {faq.a}
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
            Often Paired With
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {[
               {
                 title: "Fundraising Auctioneer",
                 slug: "live-auctions",
                 icon: Megaphone,
                 desc: "High-energy bid calling."
               },
               {
                 title: "Heads or Tails",
                 slug: "heads-or-tails",
                 icon: Coins,
                 desc: "Crowd-favorite fundraising game."
               },
               {
                 title: "Event Planning",
                 slug: "event-planning",
                 icon: CalendarClock,
                 desc: "Seamless run-of-show."
               },
               {
                 title: "Emcee Services",
                 slug: "emcee",
                 icon: Mic,
                 desc: "Professional event hosting."
               }
             ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <Link key={i} href={`/services/${service.slug}`}>
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
        title="Ready to make your Fund-A-Need unforgettable?"
        subtitle="Get a free consultation and let's discuss your event."
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
