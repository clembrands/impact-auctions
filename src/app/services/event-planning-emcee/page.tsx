"use client";

import { Check, Clock, Users, Mic, Presentation, ShieldAlert, BadgeDollarSign, Megaphone, MonitorPlay } from "lucide-react";
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

export default function EventPlanning() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-event-planning">
      <SiteHeader />

      <PageHero
        title="Event Planning & Emcee"
        subtitle="A confident run-of-show so your team can focus on guests"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                Your Gala Has a Lot of Moving Parts. We Handle the Stage.
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  A fundraising gala is a complex production—catering, AV, volunteers, sponsors, honorees, auction items, and a room full of donors expecting a great night. The last thing you need is to worry about what's happening on stage.
                </p>
                <p>
                  Our team provides full run-of-show support, stage management, and professional emcee services so your event flows seamlessly. You focus on greeting donors and thanking sponsors. We'll keep the program on track.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Emcee on stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-pad bg-background" data-testid="section-problem">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              What Happens Without Professional Event Support
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Awkward Transitions",
                icon: Clock,
                description: "Dead air between segments. Confused speakers waiting for cues. Guests checking their phones while nothing happens on stage. Energy dies."
              },
              {
                title: "Timing Disasters",
                icon: ShieldAlert,
                description: "The program runs 45 minutes long. Dessert is served during the Fund-A-Need. Half the room leaves before the live auction. Revenue suffers."
              },
              {
                title: "Stressed Volunteers",
                icon: Users,
                description: "Your board members and staff are running around backstage instead of connecting with donors. They're exhausted by the time the paddle raise happens."
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
              What You Get With Our Event Planning & Emcee Services
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Detailed run-of-show development",
                  "Timeline planning with realistic pacing",
                  "Vendor and AV coordination",
                  "Speaker preparation and cue cards",
                  "Backstage management on event night"
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
                  "Professional emcee services",
                  "Seamless transitions between segments",
                  "Real-time adjustments to keep on schedule",
                  "Energy management throughout the night",
                  "Post-event debrief and recommendations"
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

      {/* Emcee Section */}
      <section className="section-pad bg-background" data-testid="section-emcee">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                More Than an Announcer—A Professional Host
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  A great emcee doesn't just read from a script. They command the room, read the audience, and adjust on the fly to keep energy high.
                </p>
                <p>
                  Our emcees are experienced performers who know how to warm up a crowd, introduce speakers with impact, keep transitions tight, and build momentum toward your biggest fundraising moments. We're not just announcing—we're hosting.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-primary mb-3">What our emcees do:</h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex gap-2"><span className="text-accent">•</span> Welcome guests and set the tone for the evening</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Introduce speakers, honorees, and special guests</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Keep the program moving with energy and humor</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Manage timing and transitions backstage</li>
                  <li className="flex gap-2"><span className="text-accent">•</span> Build excitement leading into auction and Fund-A-Need</li>
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Ron emceeing</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Run-of-Show Section */}
      <section className="section-pad bg-muted" data-testid="section-run-of-show">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary mb-6">
              The Run-of-Show: Your Event's Blueprint
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              Every successful gala starts with a detailed run-of-show—a minute-by-minute plan for your entire event. We build this document with you, covering every segment, transition, cue, and contingency.
            </p>
          </div>

          <div className="mx-auto max-w-3xl bg-background rounded-xl border border-card-border shadow-sm overflow-hidden">
            <div className="bg-primary px-6 py-4 text-white font-bold tracking-wide">
              Sample Run-of-Show Timeline
            </div>
            <div className="p-6 md:p-8 space-y-4">
              {[
                { time: "6:00 PM", event: "Doors open, cocktail hour begins" },
                { time: "6:00-7:00 PM", event: "Silent auction open, guests mingle" },
                { time: "7:00 PM", event: "Emcee welcome, guests seated for dinner" },
                { time: "7:15 PM", event: "Dinner service begins" },
                { time: "7:30 PM", event: "Board Chair welcome remarks" },
                { time: "7:45 PM", event: "Honoree presentation and video" },
                { time: "8:00 PM", event: "Silent auction closes (by section)" },
                { time: "8:15 PM", event: "Mission video" },
                { time: "8:20 PM", event: "Fund-A-Need appeal", highlight: true },
                { time: "8:40 PM", event: "Live auction", highlight: true },
                { time: "9:15 PM", event: "Closing remarks, dessert, dancing" },
                { time: "10:00 PM", event: "Event concludes" }
              ].map((row, i) => (
                <div key={i} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="sm:w-32 font-semibold text-primary shrink-0">{row.time}</div>
                  <div className={`text-secondary ${row.highlight ? 'font-medium text-primary bg-accent/10 px-2 -mx-2 rounded' : ''}`}>
                    {row.event}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-muted/50 px-6 py-4 text-sm text-secondary text-center border-t border-card-border">
              We customize every run-of-show to your event, venue, and goals. No two galas are the same.
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="section-pad bg-background" data-testid="section-behind-scenes">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              What Happens Backstage
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Speaker Prep",
                icon: Mic,
                description: "We meet with every speaker before they go on stage. We review timing, cues, and key messages so there are no surprises."
              },
              {
                title: "AV Coordination",
                icon: Presentation,
                description: "We work directly with your AV team to ensure videos play on cue, mics are hot when needed, and lighting supports each moment."
              },
              {
                title: "Real-Time Adjustments",
                icon: Clock,
                description: "Running behind? We know where to trim. Energy dipping? We adjust pacing. We make dozens of small decisions throughout the night to keep your event on track."
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
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
      <section className="section-pad bg-[#F5F5F1]" data-testid="section-testimonial">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="space-y-6">
              <p className="display-font text-2xl md:text-3xl font-medium text-primary italic leading-relaxed">
                "From rehearsals to the final ask, they kept everything calm and on track. Our team felt supported and our guests felt inspired."
              </p>
              <footer className="text-base font-semibold text-secondary">
                — Events Manager, Education Scholarship Organization
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Planning Timeline Section */}
      <section className="section-pad bg-muted" data-testid="section-planning-timeline">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary mb-6">
              When to Bring Us In
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
              The earlier we're involved, the more we can help. Here's a typical planning timeline:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-6 left-0 w-full h-0.5 bg-card-border -z-10" />

            {[
              {
                step: "3-6 Months Out",
                description: "Initial consultation. We learn about your event, goals, and vision. We start building the run-of-show framework."
              },
              {
                step: "4-6 Weeks Out",
                description: "Detailed planning. We finalize the run-of-show, coordinate with vendors, and prepare all speaker materials."
              },
              {
                step: "1 Week Out",
                description: "Final review. We do a walkthrough of the venue, confirm all details, and rehearse key moments."
              },
              {
                step: "Event Day",
                description: "We arrive early, manage backstage, and execute the run-of-show from start to finish."
              }
            ].map((item, i) => (
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
              Common Questions About Event Planning & Emcee
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Do we need both event planning and emcee services?",
                  a: "Not necessarily. Some organizations just need an emcee for the night. Others want full run-of-show planning but have their own host. We're flexible—you can book what you need."
                },
                {
                  q: "Can you work with our existing event planner?",
                  a: "Absolutely. We collaborate well with event planners, coordinators, and venue staff. We focus on the program and stage while they handle logistics."
                },
                {
                  q: "How involved are you before event day?",
                  a: "Very. We're not just showing up to host—we're helping you plan the program, prepare speakers, and anticipate problems before they happen."
                },
                {
                  q: "What if we have a celebrity or VIP emcee?",
                  a: "Great! We can support them. We'll handle backstage management and cue them throughout the night so they look polished without needing to know every detail."
                },
                {
                  q: "Do you handle AV and production?",
                  a: "We coordinate with your AV team but don't provide equipment. We'll tell them what we need and make sure everything runs smoothly on event night."
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
                 title: "Live Auctions",
                 slug: "live-auctions",
                 icon: Megaphone,
                 desc: "High-energy bid calling."
               },
               {
                 title: "Fund-A-Need",
                 slug: "fund-a-need",
                 icon: BadgeDollarSign,
                 desc: "Maximize giving moments."
               },
               {
                 title: "Virtual Events",
                 slug: "virtual-events",
                 icon: MonitorPlay,
                 desc: "Livestream coordination."
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
        title="Ready for a stress-free event night?" 
        subtitle="Get a free consultation and let's start planning your run-of-show." 
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
