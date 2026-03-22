"use client";

import { Check, Plane, Compass, Ticket, Utensils, HeartPulse, Sparkles, MapPin, Search, CalendarCheck, BadgeDollarSign, HeadphonesIcon, Megaphone, Presentation, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

export default function AuctionPackages() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-auction-packages">
      <SiteHeader />

      <PageHero
        title="Auction Packages"
        subtitle="Exciting travel and experiences with no upfront cost"
      />

      {/* Intro Section */}
      <section className="section-pad" data-testid="section-intro">
        <div className="container-tight">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="display-font text-3xl font-bold text-primary">
                High-Value Auction Items Without the Risk
              </h2>
              <div className="space-y-4 text-secondary text-lg leading-relaxed">
                <p>
                  Every auction needs showstopper items—the kind that get people excited, drive competitive bidding, and generate buzz. But sourcing those items takes time, connections, and sometimes upfront investment your organization can't afford to risk.
                </p>
                <p>
                  Our auction packages solve that problem. We provide curated travel experiences and luxury packages on consignment—meaning you pay nothing upfront and only pay if the item sells. It's risk-free excitement for your auction.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted grid place-items-center">
               <span className="text-muted-foreground font-medium">Photo: Luxury travel destination</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-pad bg-background" data-testid="section-how-it-works">
        <div className="container-tight">
          <div className="text-center mb-16">
            <h2 className="display-font text-3xl font-extrabold text-primary">
              How Auction Packages Work
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-muted -z-10" />

            {[
              {
                icon: Search,
                title: "Browse & Select",
                description: "Review our catalog of travel experiences and luxury packages. Choose items that fit your audience and event theme."
              },
              {
                icon: CalendarCheck,
                title: "Reserve Your Packages",
                description: "We hold the items for your event at no cost. No deposits, no upfront fees, no financial risk to your organization."
              },
              {
                icon: Megaphone,
                title: "Auction Them Off",
                description: "Feature the packages in your live or silent auction. We provide descriptions, photos, and suggested starting bids."
              },
              {
                icon: BadgeDollarSign,
                title: "Pay Only If They Sell",
                description: "If the item sells, you pay our cost and keep the profit. If it doesn't sell, you owe nothing. Zero risk."
              }
            ].map((item, i) => {
              const Icon = item.icon;
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
              Why Auction Packages Work
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "No Upfront Cost",
                icon: BadgeDollarSign,
                description: "You don't pay a dime until the item sells. If it doesn't sell, you're not out anything. This is completely risk-free fundraising."
              },
              {
                title: "Guaranteed Quality",
                icon: Check,
                description: "Our packages are professionally curated with reliable fulfillment. No awkward donor experiences, no logistical headaches for your team."
              },
              {
                title: "Proven Bid Drivers",
                icon: Sparkles,
                description: "Travel and experiences consistently outperform physical items. They create emotional excitement and drive competitive bidding."
              }
            ].map((feature, i) => {
               const Icon = feature.icon;
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
            Types of Packages Available
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Luxury Getaways",
                icon: Plane,
                desc: "Multi-night stays at premium resorts, boutique hotels, and vacation destinations. Domestic and international options."
              },
              {
                title: "Adventure Travel",
                icon: Compass,
                desc: "Bucket-list experiences like safaris, wine tours, culinary trips, and outdoor adventures."
              },
              {
                title: "Sports & Entertainment",
                icon: Ticket,
                desc: "VIP tickets, behind-the-scenes access, and premium experiences at major events."
              },
              {
                title: "Culinary Experiences",
                icon: Utensils,
                desc: "Private chef dinners, wine tastings, cooking classes, and gourmet getaways."
              },
              {
                title: "Wellness Retreats",
                icon: HeartPulse,
                desc: "Spa weekends, yoga retreats, and wellness-focused travel packages."
              },
              {
                title: "Custom Packages",
                icon: Sparkles,
                desc: "Have something specific in mind? We can often source custom experiences for your audience."
              }
            ].map((type, i) => {
              const Icon = type.icon;
              return (
                <Card key={i} className="p-6 border border-card-border shadow-sm bg-background flex flex-col items-start hover:border-accent/50 transition-colors">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center mb-4 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="display-font text-lg font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{type.desc}</p>
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
            Sample Packages
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Napa Valley Wine Experience",
                desc: "4 days/3 nights in Napa Valley including luxury accommodations, private wine tastings, and gourmet dining.",
                startBid: "$2,500",
                winBid: "$4,000-$5,500"
              },
              {
                title: "Caribbean Beach Getaway",
                desc: "5 days/4 nights at a premium Caribbean resort. Includes accommodations, breakfast daily, and resort credits.",
                startBid: "$2,000",
                winBid: "$3,500-$5,000"
              },
              {
                title: "Golf & Spa Retreat",
                desc: "3 days/2 nights at a top-rated golf resort. Includes accommodations, two rounds of golf, and spa credits.",
                startBid: "$1,500",
                winBid: "$2,500-$4,000"
              }
            ].map((pkg, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-sm bg-white flex flex-col h-full">
                <div className="aspect-[4/3] bg-muted w-full relative grid place-items-center">
                  <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="display-font text-xl font-bold text-primary mb-3">{pkg.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">{pkg.desc}</p>
                  <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary">Suggested Starting Bid:</span>
                      <span className="font-semibold text-primary">{pkg.startBid}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary">Typical Winning Bid:</span>
                      <span className="font-bold text-accent">{pkg.winBid}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-secondary text-sm mt-8 italic">
            These are examples only. Our full catalog includes dozens of options across price points and destinations.
          </p>
        </div>
      </section>

      {/* The Math Section */}
      <section className="section-pad bg-background" data-testid="section-math">
        <div className="container-tight">
          <div className="mx-auto max-w-5xl">
            <h2 className="display-font text-3xl font-extrabold text-center md:text-left text-primary mb-12">
               The Numbers Make Sense
            </h2>
            <div className="grid gap-12 md:grid-cols-2 items-start">
              <div className="space-y-6">
                <p className="text-lg text-secondary">
                  Here's how a typical auction package works for your organization:
                </p>
                <div className="bg-muted rounded-xl p-6 md:p-8 space-y-4 font-mono text-sm md:text-base">
                  <div className="flex justify-between border-b border-card-border pb-2">
                    <span className="text-secondary">Package retail value:</span>
                    <span className="text-primary line-through">$5,000</span>
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-2">
                    <span className="text-secondary">Your cost (if sold):</span>
                    <span className="text-primary">$2,200</span>
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-2">
                    <span className="text-secondary">Suggested starting bid:</span>
                    <span className="text-primary">$2,500</span>
                  </div>
                  <div className="flex justify-between border-b border-card-border pb-2">
                    <span className="text-secondary">Average winning bid:</span>
                    <span className="text-primary">$4,000</span>
                  </div>
                  <div className="flex justify-between pt-2 text-lg md:text-xl">
                    <span className="font-bold text-primary">Your profit:</span>
                    <span className="font-bold text-accent">$1,800</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-primary flex items-center gap-2">
                  <Check className="text-accent h-5 w-5" strokeWidth={3} />
                  And if it doesn't sell? Your cost is $0.
                </p>
              </div>
              
              <div className="bg-primary text-white p-8 md:p-10 rounded-xl h-full flex flex-col justify-center">
                <div className="mb-6">
                   <BadgeDollarSign className="h-12 w-12 text-[#D4C4A8]" strokeWidth={1.5} />
                </div>
                <blockquote className="display-font text-2xl md:text-3xl font-bold leading-tight mb-6">
                  "Most organizations see 60-80% profit margins on auction packages—with zero risk and zero upfront investment."
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
              We Handle Fulfillment
            </h2>
            <p className="text-center text-lg text-secondary mb-12 max-w-3xl mx-auto">
              When your winning bidder is ready to book their trip, they work directly with our travel fulfillment team—not your staff. We handle all the details:
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8 mb-10">
              <ul className="space-y-5 flex-1">
                {[
                  "Booking coordination",
                  "Travel date flexibility",
                  "Accommodation confirmations",
                  "Special requests and upgrades"
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
                  "Pre-trip communication",
                  "On-trip support if needed",
                  "Post-trip follow-up",
                  "Issue resolution"
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
            
            <div className="text-center bg-background py-4 px-6 rounded-lg border border-card-border shadow-sm inline-block mx-auto flex items-center justify-center gap-3">
               <HeadphonesIcon className="text-accent h-5 w-5" />
               <span className="font-medium text-primary">Your team does zero work after the auction. We take care of your winners.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-pad bg-background" data-testid="section-testimonial">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="space-y-6">
              <p className="display-font text-2xl md:text-3xl font-medium text-primary italic leading-relaxed">
                "The travel packages were our top-selling auction items two years in a row. Our donors love them, and we love that there's no risk. Impact Auctions made it incredibly easy."
              </p>
              <footer className="text-base font-semibold text-secondary">
                — Development Director, Regional Children's Nonprofit
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-[#F5F5F1]" data-testid="section-faq">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-10">
              Common Questions About Auction Packages
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: "Is there really no upfront cost?",
                  a: "Correct. You reserve packages at no charge. You only pay if the item sells at your auction. If it doesn't sell, you owe nothing."
                },
                {
                  q: "What if the item doesn't sell?",
                  a: "No problem. You simply return it to our catalog with no penalty. Many organizations hold unsold packages for a future event."
                },
                {
                  q: "How do winners book their trips?",
                  a: "After your event, we send booking instructions directly to the winners. They work with our travel team to select dates and finalize details. Your staff isn't involved."
                },
                {
                  q: "Are there blackout dates?",
                  a: "Most packages have some restrictions around major holidays and peak seasons. All restrictions are clearly disclosed in the package descriptions."
                },
                {
                  q: "Can we see the full catalog?",
                  a: "Yes! Contact us for access to our full package catalog with current availability and pricing."
                },
                {
                  q: "How far in advance should we reserve packages?",
                  a: "We recommend reserving at least 4-6 weeks before your event to ensure availability of your preferred packages."
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

      {/* CTA Browse Section */}
      <section className="section-pad bg-background" data-testid="section-cta-browse">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl bg-muted rounded-2xl p-8 md:p-12 border border-card-border shadow-sm">
             <h2 className="display-font text-3xl font-extrabold text-primary mb-8 text-center md:text-left">
              Ready to Browse Packages?
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
               <div className="md:w-3/5 text-lg text-secondary leading-relaxed text-center md:text-left">
                  Our catalog includes dozens of travel experiences and luxury packages across price points. Contact us for full access and let's find the perfect items for your auction.
               </div>
               <div className="md:w-2/5 flex flex-col gap-3 w-full sm:max-w-xs">
                 <Link href="/contact">
                   <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base">
                     Request Full Catalog
                   </Button>
                 </Link>
                 <Link href="/contact">
                   <Button variant="outline" className="w-full border-primary text-primary hover:bg-muted h-12 text-base">
                     Contact Us
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
                 title: "Event Planning",
                 slug: "event-planning-emcee",
                 icon: Presentation,
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
        title="Add risk-free excitement to your next auction" 
        subtitle="Browse our packages and reserve your favorites—no upfront cost." 
        buttonText="Get Started"
        className="bg-primary"
      />
      <SiteFooter />
    </div>
  );
}
