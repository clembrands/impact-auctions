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

export default function HeadsOrTails() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-heads-or-tails">
      <SiteHeader />

      <PageHero
        title="Heads or Tails"
        subtitle="A crowd-favorite fundraising game that gets everyone on their feet"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                The Game Your Guests Will Be Talking About All Night
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Heads or Tails is a simple, high-energy fundraising game that generates real revenue while giving every guest a chance to win a fabulous prize. Players purchase a ticket, then survive each round by correctly guessing heads or tails on a coin flip — until one winner remains.
                </p>
                <p>
                  It sounds simple, but the energy it creates is electric. Guests are on their feet, cheering each other on, and the suspense builds with every flip. It's one of the easiest ways to add excitement and significant revenue to your fundraising event.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
              <span className="text-muted-foreground font-medium">Photo: Heads or Tails game in action</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-pad bg-muted" data-testid="section-how-it-works">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              How It Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-background -z-10" />
            {[
              {
                step: "01",
                title: "Sell Tickets",
                description: "Guests purchase Heads or Tails tickets before or during the event — typically $20–$50 each, or a bundle deal to maximize revenue."
              },
              {
                step: "02",
                title: "Everyone Plays",
                description: "At game time, all ticket holders stand up. Before each coin flip, every player puts their hands on their head (heads) or their backside (tails) to declare their guess."
              },
              {
                step: "03",
                title: "Flip & Eliminate",
                description: "The emcee flips the coin. Players who guessed wrong sit down. The tension builds round by round until only one player remains standing."
              },
              {
                step: "04",
                title: "One Winner",
                description: "The last person standing wins the prize — often a cash amount, a luxury experience, or a high-value item donated for the game."
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

      {/* Why It Works Section */}
      <section className="section-pad bg-background" data-testid="section-why-it-works">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              Why Heads or Tails Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Universal Participation",
                icon: Users,
                description: "Unlike auction items where only the highest bidder wins, everyone with a ticket gets to play. That inclusive energy gets the whole room involved and excited."
              },
              {
                title: "Pure Fun",
                icon: Laugh,
                description: "It's genuinely entertaining. The suspense, the cheering, the near-misses — guests love it. And when people are having fun, they give more freely."
              },
              {
                title: "Real Revenue",
                icon: Zap,
                description: "A room of 300 guests buying $25 tickets generates $7,500 before a single flip. Add in multiple ticket purchases and the numbers add up fast."
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
              What We Handle
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Full game hosting and facilitation",
                  "Ticket sales strategy and pricing guidance",
                  "Engaging, high-energy emcee delivery",
                  "Timing and placement in your program",
                  "Prize coordination and announcement"
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
                  "Round-by-round crowd management",
                  "Dispute resolution and fair play",
                  "Optional multiple-ticket upsell strategies",
                  "Integration with your event flow",
                  "Post-game transition to next program element"
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

      {/* Revenue Potential Section */}
      <section className="section-pad bg-background" data-testid="section-revenue">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            Revenue Potential
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">$25</div>
              <div className="text-sm font-medium text-secondary">Typical Ticket Price</div>
              <div className="text-xs text-muted-foreground mt-1">Adjust to fit your audience</div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">$5K+</div>
              <div className="text-sm font-medium text-secondary">Average Revenue per Game</div>
              <div className="text-xs text-muted-foreground mt-1">Based on 200+ ticket holders</div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">10 min</div>
              <div className="text-sm font-medium text-secondary">Average Game Duration</div>
              <div className="text-xs text-muted-foreground mt-1">Fast-paced and high energy</div>
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
              Common Questions About Heads or Tails
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "When should Heads or Tails happen in our program?",
                  a: "It works best during cocktail hour, after dinner, or between auction segments. It's a great way to maintain energy during transitions in your event program."
                },
                {
                  q: "What should we offer as the prize?",
                  a: "Cash prizes work well and are easy to execute. Travel packages, weekend getaways, or a high-value donated item also generate great excitement. We'll help you choose a prize that matches your audience."
                },
                {
                  q: "How many tickets should we sell?",
                  a: "There's no limit — you can sell as many as guests want. Many events offer bundle pricing (e.g., buy 3 tickets for $60) to encourage multiple purchases and increase revenue per person."
                },
                {
                  q: "What if two people are left and they both guess correctly?",
                  a: "We handle tie-breaker rules in the rules announcement up front — typically a sudden death flip or a split of the prize. We walk guests through the rules clearly before the game starts."
                },
                {
                  q: "Can this be combined with other fundraising games?",
                  a: "Absolutely. Heads or Tails pairs naturally with a live auction, Fund-A-Need, or raffle. We can help you sequence multiple revenue elements for maximum impact."
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
                title: "Fund-A-Need",
                slug: "fund-a-need",
                icon: HandHeart,
                desc: "Maximize giving moments."
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
                <Link
                  key={i}
                  href={`/services/${service.slug}`}
                  data-testid={`link-related-${service.slug}`}
                >
                  <Card className="flex items-start gap-4 p-5 h-full border border-card-border bg-card hover:bg-background transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="display-font font-semibold text-primary text-sm">{service.title}</div>
                      <div className="text-xs text-secondary mt-1">{service.desc}</div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
