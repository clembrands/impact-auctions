import { Check, Coins, Megaphone, BadgeDollarSign, CalendarClock, Mic } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
        title="Event Planning"
        subtitle="Strategic planning that turns your vision into a flawless fundraising night"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                Great Events Don't Happen by Accident
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Behind every successful gala is months of strategic planning—coordinating vendors, building the program, preparing speakers, and anticipating problems before they happen. Most nonprofit teams are stretched thin. You're managing a full-time job on top of planning a major event. That's where we come in.
                </p>
                <p>
                  We handle the program planning so your team can focus on donor relationships, sponsorships, and the things only you can do.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
              <span className="text-muted-foreground font-medium">Photo: Event planning team at work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Cards Section */}
      <section className="section-pad bg-muted" data-testid="section-problems">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              Common Event Planning Challenges
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "No Clear Timeline",
                description: "Without a structured plan, details slip through the cracks. Vendors don't know their cues, speakers aren't prepped, and your team is scrambling the week before the event."
              },
              {
                title: "Program Runs Too Long",
                description: "We've seen 90-minute programs stretch to three hours. Donors leave early, energy dies, and your biggest fundraising moments happen to a half-empty room."
              },
              {
                title: "Staff Burnout",
                description: "Your board members and staff spend the entire event running around backstage instead of connecting with donors. By the time the paddle raise happens, they're exhausted."
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
              What You Get
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Detailed run-of-show development",
                  "Timeline planning with realistic pacing",
                  "Vendor and AV coordination",
                  "Speaker preparation and cue cards",
                  "Pre-event venue walkthrough"
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
                  "Backstage management on event night",
                  "Real-time adjustments to keep on schedule",
                  "Contingency planning for common issues",
                  "Post-event debrief and recommendations",
                  "Unlimited strategy calls leading up to the event"
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

      {/* Testimonial Section */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonial">
        <div className="container-tight">
          <TestimonialCarousel title="What Nonprofits Say" />
        </div>
      </section>

      {/* Planning Timeline Section */}
      <section className="section-pad bg-background" data-testid="section-planning-timeline">
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
              <Card key={i} className="relative bg-muted border-card-border p-6 shadow-sm flex flex-col items-center text-center">
                <div className="w-4 h-4 rounded-full bg-[#D4C4A8] mb-4 ring-4 ring-background" />
                <h3 className="display-font text-lg font-bold text-primary mb-3">{item.step}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Run-of-Show Section */}
      <section className="section-pad bg-muted" data-testid="section-run-of-show">
        <div className="container-tight">
          <div className="mx-auto max-w-5xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              Sample Run-of-Show Timeline
            </h2>
            <p className="text-center text-secondary mb-8 leading-relaxed">
              Here's an example of what a typical gala event timeline looks like. We customize every run-of-show to your specific event, venue, and fundraising goals.
            </p>
            
            <div className="overflow-hidden rounded-xl border border-card-border shadow-sm bg-white">
              <div className="bg-primary text-white px-6 py-4 font-semibold">
                Example Gala Timeline
              </div>
              <div className="divide-y divide-card-border">
                {[
                  { time: "6:00 PM", activity: "Guest Arrival & Cocktail Reception", notes: "Background music, silent auction opens" },
                  { time: "6:45 PM", activity: "Guests Transition to Ballroom", notes: "Assigned seating, table info cards out" },
                  { time: "7:00 PM", activity: "Welcome by Board Chair", notes: "2-3 minutes, sets tone for evening" },
                  { time: "7:05 PM", activity: "Mission Moment / Beneficiary Story", notes: "Emotional, inspire giving" },
                  { time: "7:15 PM", activity: "Dinner Service Begins", notes: "AV runs during dinner" },
                  { time: "7:45 PM", activity: "Live Auction - 8 Items", notes: "High-energy, professional auctioneer" },
                  { time: "8:45 PM", activity: "Fund-A-Need Paddle Raise", notes: "Peak fundraising moment" },
                  { time: "9:15 PM", activity: "Closing Remarks & Thank You", notes: "Celebrate results, inspire future giving" },
                  { time: "9:30 PM", activity: "Event Concludes / Networking", notes: "Post-event connections" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-12 items-center">
                    <div className="col-span-2 px-6 py-4 font-bold text-primary border-r border-card-border bg-muted/30">
                      {row.time}
                    </div>
                    <div className="col-span-5 px-6 py-4 font-semibold text-primary">
                      {row.activity}
                    </div>
                    <div className="col-span-5 px-6 py-4 text-sm text-secondary">
                      {row.notes}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 px-6 py-4 text-sm text-secondary text-center border-t border-card-border">
                We customize every run-of-show to your event, venue, and goals. No two galas are the same.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-background" data-testid="section-faq">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              Common Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "How early should we bring you in?",
                  a: "The earlier the better. Ideally 3-6 months before your event. But we've helped organizations with as little as 6 weeks of lead time."
                },
                {
                  q: "Can you work with our existing event planner?",
                  a: "Absolutely. We collaborate well with event planners, coordinators, and venue staff. We focus on the program and stage while they handle logistics like catering and decor."
                },
                {
                  q: "What does the run-of-show include?",
                  a: "A minute-by-minute plan for your entire event—every segment, transition, speaker cue, AV cue, and contingency. It's the blueprint your whole team works from on event night."
                },
                {
                  q: "Do you attend the event?",
                  a: "Yes. We're there from setup through teardown, managing backstage and making real-time adjustments to keep everything on track."
                },
                {
                  q: "What if we already have a program outline?",
                  a: "Great—we'll refine it. We'll tighten the pacing, fill in gaps, add contingencies, and make sure it's structured to maximize your fundraising moments."
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
                desc: "Professional bid-calling expertise."
              },
              {
                title: "Fund-A-Need",
                slug: "fund-a-need",
                icon: BadgeDollarSign,
                desc: "Maximize giving moments."
              },
              {
                title: "Emcee Services",
                slug: "emcee",
                icon: Mic,
                desc: "Energetic event hosting."
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
              );
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
