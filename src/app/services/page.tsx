"use client";

import Link from "next/link";
import {
  CalendarClock,
  Check,
  Coins,
  HandHeart,
  Megaphone,
  Plane,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Fundraising Auctioneer",
    description: "Licensed professional auctioneers who bring energy, expertise, and proven bid-calling techniques to keep your program moving and donors engaged all night.",
    icon: Megaphone,
    slug: "live-auctions",
  },
  {
    title: "Fund-A-Need",
    description: "The most powerful fundraising moment of your night. We craft compelling appeals that inspire donors to give at meaningful levels for your mission.",
    icon: HandHeart,
    slug: "fund-a-need",
  },
  {
    title: "Heads or Tails",
    description: "A crowd-favorite fundraising game that gets every guest on their feet, builds excitement, and generates meaningful revenue in just minutes.",
    icon: Coins,
    slug: "heads-or-tails",
  },
  {
    title: "Event Planning & Emcee",
    description: "Full run-of-show support, stage management, and professional emcee services to keep your night seamless so your team can focus on guests.",
    icon: CalendarClock,
    slug: "event-planning-emcee",
  },
  {
    title: "Live Auction Packages",
    description: "Curated travel and experience packages that add excitement to your auction and increase overall proceeds—with no upfront cost to your organization.",
    icon: Plane,
    slug: "auction-packages",
    externalHref: "https://www.myamoretravel.com/impact-auctions",
  },
];

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-pad" data-testid="section-page-hero">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl" data-testid="text-page-title">
            {title}
          </h1>
          <p className="mt-4 text-secondary" data-testid="text-page-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-services">
      <SiteHeader />

      <PageHero
        title="Services"
        subtitle="From live auctions to event planning, we bring the expertise and energy to help your nonprofit exceed its fundraising goals."
      />

      <section className="section-pad" data-testid="section-services-grid">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={s.externalHref ?? `/services/${s.slug}`}
                  target={s.externalHref ? "_blank" : undefined}
                  rel={s.externalHref ? "noopener noreferrer" : undefined}
                  data-testid={`link-services-${s.slug}`}
                >
                  <Card
                    className="h-full rounded-xl border border-card-border bg-card p-6 transition-colors hover:bg-muted"
                    data-testid={`card-services-${s.slug}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="grid h-12 w-12 place-items-center"
                        data-testid={`icon-services-${s.slug}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                      </div>
                      <div className="space-y-1">
                        <div
                          className="display-font text-base font-semibold text-primary"
                          data-testid={`text-services-name-${s.slug}`}
                        >
                          {s.title}
                        </div>
                        <p
                          className="text-sm/6 text-secondary"
                          data-testid={`text-services-desc-${s.slug}`}
                        >
                          {s.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-pad bg-muted" data-testid="section-whats-included">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12" data-testid="text-included-title">
              What You Get When You Work With Us
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-4">
              <ul className="space-y-5">
                {[
                  "Licensed Fundraising Auctioneer",
                  "Silent Auction Expertise",
                  "Fund Appeal Strategy",
                  "Run-of-Show Planning",
                  "Emcee Services"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5">
                {[
                  "Marketing Assistance",
                  "Sponsorship Strategies",
                  "Innovative Theme Ideas",
                  "Social Media Support",
                  "Unlimited Strategy Calls"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white">
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

      {/* Why It Works */}
      <section className="section-pad bg-[#F5F5F5]" data-testid="section-why-it-works">
        <div className="container-tight">
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary" data-testid="stat-experience">
                20+ Years
              </div>
              <div className="text-sm font-medium text-secondary" data-testid="stat-experience-sub">
                Experience
              </div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary" data-testid="stat-raised">
                $20M+
              </div>
              <div className="text-sm font-medium text-secondary" data-testid="stat-raised-sub">
                Raised for Nonprofits
              </div>
            </div>
            <div className="space-y-2">
              <div className="display-font text-4xl font-extrabold text-primary" data-testid="stat-single-night">
                $3.2M
              </div>
              <div className="text-sm font-medium text-secondary" data-testid="stat-single-night-sub">
                Raised in One Night
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
