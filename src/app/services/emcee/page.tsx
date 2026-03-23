"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Check, Clock, Megaphone, Zap } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";
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

export default function EmceeServices() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-emcee-services">
      <SiteHeader />

      <PageHero
        title="Emcee Services"
        subtitle="A professional host who commands the room and keeps your audience engaged"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                More Than an Announcer—A Professional Host
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  A great emcee doesn't just read from a script. They command the room, read the audience, and adjust on the fly to keep energy high. Our emcees are experienced performers who know how to warm up a crowd, introduce speakers with impact, keep transitions tight, and build momentum toward your biggest fundraising moments. We're not just announcing—we're hosting your entire evening.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Emcee on stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards Section */}
      <section className="section-pad bg-muted" data-testid="section-problems">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              Why a Professional Emcee Matters
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Awkward Transitions",
                description: "Dead air between segments. Confused speakers waiting for cues. Guests checking their phones while nothing happens on stage. Energy dies and never comes back."
              },
              {
                title: "Board Member as Emcee",
                description: "Asking a board member to host sounds like a good idea until they freeze on stage, run long on remarks, or can't recover when something goes off-script."
              },
              {
                title: "Low Energy at Key Moments",
                description: "Your Fund-A-Need and live auction need peak energy. Without a professional building momentum throughout the night, donors aren't primed to give."
              }
            ].map((problem, i) => (
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
              What You Get With Our Emcee Services
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Professional emcee for the entire event",
                  "Welcome guests and set the tone",
                  "Introduce speakers, honorees, and VIPs",
                  "Seamless transitions between segments",
                  "Energy management throughout the night"
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
                  "Build excitement leading into auction and Fund-A-Need",
                  "Manage timing and cues backstage",
                  "Adapt to real-time changes and surprises",
                  "Work with your AV team on mic and lighting cues",
                  "Post-event debrief on what worked"
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

      {/* Event Night Timeline Section */}
      <section className="section-pad bg-muted" data-testid="section-event-night">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            What It Looks Like on Event Night
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Before Doors Open",
                description: "We arrive early, review the run-of-show with your team, meet speakers, test AV, and do a final walkthrough."
              },
              {
                title: "Cocktail Hour",
                description: "We're backstage preparing, reviewing last-minute changes, and making sure every speaker is ready."
              },
              {
                title: "Program Begins",
                description: "We welcome the room, set the tone, and take control of the evening's pace and energy."
              },
              {
                title: "Key Fundraising Moments",
                description: "We build momentum throughout the night so donors are emotionally primed for the Fund-A-Need and live auction."
              },
              {
                title: "Closing",
                description: "We bring the evening to a strong close, thank sponsors and donors, and leave guests feeling inspired."
              }
            ].map((moment, i) => (
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
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-muted" data-testid="section-faq">
        <div className="container-tight">
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
            Common Questions
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                q: "Can we use our own emcee and have you support them?",
                a: "Absolutely. We can handle backstage management and cue your host throughout the night so they look polished without needing to know every detail."
              },
              {
                q: "What if we have a celebrity or VIP host?",
                a: "We love working with VIP hosts. We prep them beforehand and manage all the backstage logistics so they can focus on being great on stage."
              },
              {
                q: "Is the emcee also the auctioneer?",
                a: "They can be. Ron serves as both emcee and auctioneer for many events. Or we can split the roles if you prefer a different dynamic."
              },
              {
                q: "How does the emcee prepare?",
                a: "We study your organization, your donors, your honorees, and your program. We don't show up cold—we show up ready to tell your story."
              },
              {
                q: "What style of emcee are you?",
                a: "Warm, professional, and high-energy—but we read the room. We match the tone of your event, whether it's a formal black-tie gala or a casual outdoor fundraiser."
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6 border-none shadow-sm bg-white">
                <h3 className="display-font text-lg font-bold text-primary mb-2">{faq.q}</h3>
                <p className="text-secondary leading-relaxed">{faq.a}</p>
              </Card>
            ))}
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
                 icon: Megaphone,
                 desc: "High-energy bidding."
               },
               {
                 title: "Fund-A-Need",
                 slug: "fund-a-need",
                 icon: Zap,
                 desc: "Maximize giving moments."
               },
               {
                 title: "Event Planning",
                 slug: "event-planning",
                 icon: Clock,
                 desc: "Seamless run-of-show."
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
        title="Want a host who elevates your entire evening?"
        subtitle="Get a free consultation and let's talk about your next event."
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
