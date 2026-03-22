import { Check, Coins, Megaphone, BadgeDollarSign, CalendarClock } from "lucide-react";
import Link from "next/link";
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

export default function LiveAuctions() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-live-auctions">
      <SiteHeader />

      <PageHero
        title="Fundraising Auctioneer"
        subtitle="High-energy bidding that keeps donors engaged all night"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                A Professional Auctioneer Makes All the Difference
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Your live auction is the centerpiece of your fundraising gala—and the right auctioneer can double your results. Our licensed fundraising auctioneers bring energy, expertise, and proven bid-calling techniques that keep your program moving and maximize every item's potential.
                </p>
                <p>
                  We don't just call bids—we read the room, build excitement, and create moments that inspire generosity. With 20+ years of experience and over $20 million raised for nonprofits nationwide, we know how to turn a good auction into a record-breaking night.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Auctioneer on stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-pad bg-background" data-testid="section-what-we-do">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
              What You Get With Our Fundraising Auctioneer Services
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8">
              <ul className="space-y-5 flex-1">
                {[
                  "Licensed, professional charity auctioneer",
                  "Pre-event strategy call to review items and goals",
                  "Item sequencing recommendations for maximum impact",
                  "Bid spotters and ringmen coordination",
                  "Sound system and AV coordination"
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
                  "High-energy bid calling that builds momentum",
                  "Crowd engagement and entertainment",
                  "Real-time adjustments based on room energy",
                  "Post-auction recap and recommendations",
                  "Unlimited strategy calls leading up to your event"
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

      {/* Why It Matters Section */}
      <section className="section-pad bg-muted" data-testid="section-why-it-matters">
        <div className="container-tight">
          <div className="text-center mb-12">
             <h2 className="display-font text-3xl font-extrabold text-primary">
              Why a Professional Auctioneer Matters
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Build Momentum",
                description: "Amateur auctioneers often lose the room. Our professionals know how to build energy item by item, keeping guests engaged and bidding throughout the night."
              },
              {
                title: "Maximize Every Item",
                description: "We use proven techniques—strategic pacing, compelling item descriptions, and competitive bid increments—to get top dollar for every item in your lineup."
              },
              {
                title: "Keep Guests in the Room",
                description: "A great auctioneer is an entertainer. We keep your audience laughing, engaged, and most importantly—present and bidding instead of heading to the bar."
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

      {/* The Process Section */}
      <section className="section-pad bg-background" data-testid="section-process">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              How It Works
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We learn about your organization, your event, and your fundraising goals."
              },
              {
                step: "02",
                title: "Pre-Event Planning",
                description: "We review your auction items, recommend sequencing, and develop a strategy for your night."
              },
              {
                step: "03",
                title: "Event Night",
                description: "Our auctioneer arrives early, coordinates with your team, and delivers a high-energy performance that drives results."
              },
              {
                step: "04",
                title: "Post-Event Recap",
                description: "We review what worked, what we can improve, and help you plan for next year."
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
          <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12">
             Results That Speak for Themselves
          </h2>
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary">
                $20M+
              </div>
              <div className="text-sm font-medium text-secondary">
                Raised for Nonprofits
              </div>
            </div>
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
                20+ Years
              </div>
              <div className="text-sm font-medium text-secondary">
                Professional Experience
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

      {/* Related Services Section */}
      <section className="section-pad bg-muted" data-testid="section-related">
        <div className="container-tight">
          <h2 className="display-font text-2xl font-bold text-center text-primary mb-10">
            Often Paired With
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
             {[
               {
                 title: "Fund-A-Need",
                 slug: "fund-a-need",
                 icon: BadgeDollarSign,
                 desc: "Maximize giving moments."
               },
               {
                 title: "Heads or Tails",
                 slug: "heads-or-tails",
                 icon: Coins,
                 desc: "Crowd-favorite fundraising game."
               },
               {
                 title: "Event Planning",
                 slug: "event-planning-emcee",
                 icon: CalendarClock,
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
        title="Ready to energize your next auction?"
        subtitle="Get a free consultation and let's discuss your event."
        buttonText="Contact Us"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
