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

export default function VirtualEvents() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-virtual-events">
      <SiteHeader />

      <PageHero
        title="Virtual Events"
        subtitle="Confident hosting for livestream and hybrid events"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                Keep the Energy High—Even Through a Screen
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Virtual and hybrid fundraising events are here to stay. Whether your donors are gathered in a ballroom, watching from their living rooms, or a mix of both, you need a team that knows how to engage audiences through a camera.
                </p>
                <p>
                  The biggest challenge with virtual events? Keeping people engaged when they're one click away from distraction. Our team has hosted dozens of successful virtual and hybrid fundraisers, and we know how to make remote attendees feel like they're in the room.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Virtual event setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="section-pad bg-background" data-testid="section-challenge">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              The Virtual Event Challenge
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Attention Is Fragile",
                icon: MonitorPlay,
                description: "Remote viewers can tune out, mute, or leave at any moment. You need dynamic pacing and constant engagement to keep them watching and giving."
              },
              {
                title: "Technology Can Fail",
                icon: AlertTriangle,
                description: "Glitchy streams, audio issues, and platform confusion can derail your event. You need a team that's handled it all and knows how to recover."
              },
              {
                title: "Connection Feels Distant",
                icon: LinkIcon,
                description: "It's harder to create emotional moments through a screen. You need intentional storytelling and production choices that translate to virtual audiences."
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
              What You Get With Our Virtual Event Services
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Pre-event technology planning and testing",
                  "Platform selection guidance (Zoom, YouTube, custom)",
                  "Run-of-show designed for virtual pacing",
                  "On-camera hosting and emcee services",
                  "Real-time chat and audience engagement"
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
                  "Live auction bid-calling adapted for virtual",
                  "Fund-A-Need execution for remote audiences",
                  "Hybrid event coordination (in-person + virtual)",
                  "Technical director coordination",
                  "Backup plans for technology issues"
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

      {/* Virtual vs Hybrid Section */}
      <section className="section-pad bg-background" data-testid="section-virtual-vs-hybrid">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            Virtual vs. Hybrid: We Do Both
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <Card className="p-8 border border-card-border shadow-sm bg-white">
              <h3 className="display-font text-2xl font-bold text-primary mb-4">Fully Virtual</h3>
              <p className="text-secondary leading-relaxed mb-6">
                Your entire audience joins online. We help you create a broadcast-quality experience with professional hosting, strategic pacing, and seamless bid collection.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold text-primary">Best for:</span> geographically dispersed donors, ongoing pandemic concerns, or cost-conscious events.
              </div>
            </Card>
            <Card className="p-8 border border-card-border shadow-sm bg-white">
              <h3 className="display-font text-2xl font-bold text-primary mb-4">Hybrid Events</h3>
              <p className="text-secondary leading-relaxed mb-6">
                Some guests in the room, others watching from home. This is the most complex format—but also the most flexible. We coordinate both audiences so no one feels like an afterthought.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <span className="font-semibold text-primary">Best for:</span> maximizing attendance, accommodating travel limitations, or testing virtual before going all-in.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Different Section */}
      <section className="section-pad bg-muted" data-testid="section-whats-different">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            What Changes for Virtual
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Pacing",
                icon: FastForward,
                desc: "Virtual events need to move faster. Attention spans are shorter online, so we tighten the program and eliminate dead air."
              },
              {
                title: "Visuals",
                icon: ImageIcon,
                desc: "We help you think through camera angles, graphics, and on-screen elements that keep the broadcast visually engaging."
              },
              {
                title: "Bidding",
                icon: Smartphone,
                desc: "We coordinate with mobile bidding platforms so virtual attendees can bid in real-time during live and silent auctions."
              },
              {
                title: "Giving",
                icon: DollarSign,
                desc: "Fund-A-Need works virtually—but the approach is different. We use on-screen giving levels, countdown timers, and real-time donation tracking to build momentum."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-background p-6 rounded-xl border border-card-border shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-[#D4C4A8]/20 flex items-center justify-center mb-4 text-[#D4C4A8]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display-font text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
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
              How We Prepare for Virtual
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {[
              {
                step: "01",
                title: "Technology Consultation",
                description: "We review your platform options, audience size, and technical capabilities to recommend the right setup."
              },
              {
                step: "02",
                title: "Run-of-Show Planning",
                description: "We build a detailed program designed for virtual pacing—tighter segments, more visuals, strategic breaks."
              },
              {
                step: "03",
                title: "Rehearsal",
                description: "We do a full tech rehearsal before event day. No surprises. We test every transition, every video, every handoff."
              },
              {
                step: "04",
                title: "Live Execution",
                description: "On event day, we host with energy and confidence, managing the technology and keeping your virtual audience engaged from start to finish."
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

      {/* Results Section */}
      <section className="section-pad bg-[#F5F5F1]" data-testid="section-results">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-8">
               Virtual Events That Delivered
            </h2>
            <p className="text-center text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              When the world went virtual in 2020, many organizations saw their fundraising collapse. Our clients didn't. We helped nonprofits pivot to virtual and hybrid formats that maintained—and in some cases exceeded—their in-person results.
            </p>
            <div className="grid gap-10 text-center md:grid-cols-2 max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="display-font text-4xl font-extrabold text-primary">
                  Dozens
                </div>
                <div className="text-sm font-medium text-secondary">
                  Of Virtual Events Hosted Since 2020
                </div>
              </div>
              <div className="space-y-2">
                <div className="display-font text-4xl font-extrabold text-primary">
                  Record-Breaking
                </div>
                <div className="text-sm font-medium text-secondary">
                  Results Achieved Without an In-Person Audience
                </div>
              </div>
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
                "We were terrified to go virtual, but Impact Auctions made it seamless. Our donors stayed engaged the entire broadcast, and we raised more than we expected. They made us feel like pros."
              </p>
              <footer className="text-base font-semibold text-secondary">
                — Events Manager, Education Scholarship Organization
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
              Common Questions About Virtual Events
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "What platform should we use?",
                  a: "It depends on your audience size, budget, and technical comfort. We've worked with Zoom, YouTube Live, Vimeo, and custom platforms. We'll help you choose the right fit."
                },
                {
                  q: "Can we still do a live auction virtually?",
                  a: "Absolutely. We adapt our bid-calling for the camera and coordinate with mobile bidding platforms so remote viewers can participate in real-time."
                },
                {
                  q: "How do we collect donations from virtual attendees?",
                  a: "We integrate with mobile giving platforms that allow real-time donations. Guests can give via their phones or computers while watching the stream."
                },
                {
                  q: "What if something goes wrong technically?",
                  a: "We always have backup plans—backup internet, backup audio, backup hosts. And we've been through enough tech hiccups to know how to recover gracefully without killing the energy."
                },
                {
                  q: "Is hybrid harder than fully virtual?",
                  a: "Yes, hybrid is the most complex format because you're essentially running two events at once. But we've done it many times and know how to make both audiences feel included."
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
      <section className="section-pad bg-background" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            Often Paired With
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {[
               {
                 title: "Live Auctions",
                 slug: "live-auctions",
                 desc: "Adapted for the camera."
               },
               {
                 title: "Fund-A-Need",
                 slug: "fund-a-need",
                 desc: "Real-time giving tracking."
               },
               {
                 title: "Event Planning",
                 slug: "event-planning-emcee",
                 desc: "Run-of-show coordination."
               }
             ].map((service, i) => {
                return (
                  <Link key={i} href={`/services/${service.slug}`}>
                    <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-card-border shadow-sm flex items-center gap-4">
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
        title="Planning a virtual or hybrid event?" 
        subtitle="Get a free consultation and let's make sure your remote audience stays engaged." 
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
