"use client";

import {
  Award,
  BadgeDollarSign,
  CalendarClock,
  Coins,
  HandHeart,
  Megaphone,
  Mic,
  Plane,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";

const services = [
  {
    title: "Fundraising Auctioneer",
    description: "High-energy, professional auctioneer that keeps the room engaged and entertained in surpassing goals.",
    icon: Megaphone,
    slug: "live-auctions",
  },
  {
    title: "Fund-A-Need (Appeal)",
    description: "A compelling moment that inspires donors to give at meaningful levels; including a paddle drop.",
    icon: HandHeart,
    slug: "fund-a-need",
  },
  {
    title: "Heads or Tails",
    description: "A crowd-favorite fundraising game that gets every guest on their feet and generates real revenue.",
    icon: Coins,
    slug: "heads-or-tails",
  },
  {
    title: "Event Planning",
    description: "Strategic run-of-show development, vendor coordination, and backstage management so your event runs like clockwork.",
    icon: CalendarClock,
    slug: "event-planning",
  },
  {
    title: "Emcee Services",
    description: "A professional auctioneer who commands the room, keeps transitions tight, and builds momentum towards the biggest fundraising moments. ",
    icon: Mic,
    slug: "emcee",
  },
  {
    title: "Live Auction Packages",
    description: "Curated travel experiences that add excitement and raise more for your mission.",
    icon: Plane,
    slug: "consignment-travel",
    externalHref: "https://www.myamoretravel.com/impact-auctions",
  },
];

const team = [
  { name: "Ron Hitzel", title: "Founder/Auctioneer", image: "/images/headshot-ron.jpg" },
  { name: "Debbie Hitzel", title: "Founder/Event Planning", image: "/images/headshot-debbie.jpg" },
  { name: "Josh Loewensteiner", title: "CAI Auctioneer", image: "/images/headshot-josh.jpg" },
  { name: "Stephen LaRaviere", title: "Auctioneer", image: "/images/headshot-stephen.jpg" },
];

function PhotoCard({
  src,
  alt,
  testId,
}: {
  src: string;
  alt: string;
  testId: string;
}) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-card-border bg-muted"
      data-testid={testId}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        data-testid={`img-${testId}`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-black/10"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-home">
      <SiteHeader />

      {/* Hero — with floating stats bar overlapping the bottom edge */}
      <section
        className="relative isolate overflow-visible"
        data-testid="section-hero"
      >
        <div className="relative min-h-[78vh] md:min-h-[86vh] overflow-hidden">
          <img
            src="/images/hero-auction.jpg"
            alt="Live fundraising auction in a ballroom"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            loading="eager"
            data-testid="img-hero-background"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

          <div className="container-tight flex min-h-[78vh] md:min-h-[86vh] items-center pb-28 pt-16">
            <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:text-left">
              <h1
                className="display-font text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl"
                data-testid="text-hero-title"
              >
                Maximize Your Fundraising Impact
              </h1>
              <p
                className="mt-5 max-w-2xl text-pretty text-base/7 text-white/85 md:text-lg"
                data-testid="text-hero-subtitle"
              >
                Professional auctioneers helping nonprofits exceed their goals—with energy,
                warmth, and 20+ years of experience.
              </p>

              <div
                className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center md:justify-start"
                data-testid="group-hero-actions"
              >
                <Link href="/contact" data-testid="link-hero-primary">
                  <Button
                    className="rounded-lg bg-white px-6 text-primary hover:bg-white/90"
                    data-testid="button-hero-book"
                  >
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/services" data-testid="link-hero-secondary">
                  <Button
                    variant="outline"
                    className="rounded-lg border-white/45 bg-white/0 px-6 text-white hover:bg-white/10"
                    data-testid="button-hero-services"
                  >
                    Our Services
                  </Button>
                </Link>
              </div>

              <div className="mt-7 flex items-center justify-center gap-3 text-sm text-white/80 md:justify-start">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15"
                  data-testid="icon-hero-trust"
                  aria-hidden="true"
                >
                  <Award className="h-5 w-5 text-white" strokeWidth={1.8} />
                </span>
                <p data-testid="text-hero-trust">Trusted by nonprofits nationwide for high-touch events.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats bar — overlaps hero bottom and services top */}
        <div className="container-tight relative z-10 -mt-14" data-testid="section-stats">
          <div
            className="rounded-2xl bg-white px-8 py-7 shadow-lg"
            style={{ border: "1px solid rgba(212,196,168,0.35)" }}
          >
            <div className="grid gap-6 text-center md:grid-cols-3 md:divide-x md:divide-[rgba(212,196,168,0.4)]">
              <div className="space-y-1">
                <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-raised">$20M+</div>
                <div className="text-sm text-secondary" data-testid="stat-raised-sub">For nonprofits nationwide</div>
              </div>
              <div className="space-y-1 md:pl-6">
                <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-years">20+ Years</div>
                <div className="text-sm text-secondary" data-testid="stat-years-sub">Fundraising experience</div>
              </div>
              <div className="space-y-1 md:pl-6">
                <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-record">$3.2M</div>
                <div className="text-sm text-secondary" data-testid="stat-record-sub">In one night — Joe DiMaggio Children&apos;s Hospital</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — cream background */}
      <section className="bg-muted section-pad pt-20" data-testid="section-services">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-services-subtitle">
              Everything you need for a successful fundraising event.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={s.externalHref ?? `/services/${s.slug}`}
                  target={s.externalHref ? "_blank" : undefined}
                  rel={s.externalHref ? "noopener noreferrer" : undefined}
                  data-testid={`link-service-${s.slug}`}
                >
                  <Card
                    className="h-full rounded-xl border border-card-border bg-card p-6 transition-colors hover:bg-white"
                    data-testid={`card-service-${s.slug}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="grid h-12 w-12 place-items-center"
                        data-testid={`icon-service-${s.slug}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                      </div>
                      <div className="space-y-1">
                        <div
                          className="display-font text-base font-semibold text-primary"
                          data-testid={`text-service-title-${s.slug}`}
                        >
                          {s.title}
                        </div>
                        <p
                          className="text-sm/6 text-secondary"
                          data-testid={`text-service-desc-${s.slug}`}
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

      {/* Testimonials — Google Business Profile Reviews via Elfsight */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonials">
        <div className="container-tight">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Team — white background, includes Ron & Debbie intro above the grid */}
      <section className="bg-background section-pad" data-testid="section-team">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-team-title">
              Your Impact Auctions Team
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              Experienced fundraising event professionals
            </p>
          </div>

          {/* Ron & Debbie founders intro */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 mb-14 pb-14" style={{ borderBottom: "1px solid rgba(212,196,168,0.35)" }}>
            <PhotoCard
              src="/images/about-ron-debbie.jpg"
              alt="Ron and Debbie at a gala"
              testId="img-about-placeholder"
            />
            <div className="space-y-4">
              <h3 className="display-font text-2xl font-extrabold tracking-tight text-primary" data-testid="text-about-title">
                Meet Ron &amp; Debbie
              </h3>
              <p className="text-secondary" data-testid="text-about-body">
                Debbie and Ron Hitzel bring over 20 years of dedicated fundraising experience to Impact Auctions, a full-service, licensed charity auctioneer brand based in North Carolina and Florida. As a dynamic husband-and-wife team, Ron leverages his unique background as a multilingual former US Navy Nuclear Submariner and global business manager, while Debbie draws on her nearly 30-year career as an educator to passionately support charitable causes. Together, they specialize in helping nonprofit organizations achieve record-breaking profits in a single night.
              </p>
              <Link href="/about" data-testid="link-about-learn">
                <Button
                  variant="outline"
                  className="rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                  data-testid="button-about-learn"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Full team grid */}
          <div className="grid gap-6 md:grid-cols-4">
            {team.map((m) => (
              <Card
                key={m.name}
                className="rounded-xl border border-card-border bg-card p-6 text-center"
                data-testid={`card-team-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div
                  className="mx-auto grid h-40 w-40 place-items-center overflow-hidden rounded-full border border-[var(--tan)] bg-muted"
                  data-testid={`img-team-${m.name.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Users className="h-8 w-8 text-primary" strokeWidth={1.8} />
                  )}
                </div>
                <div className="mt-4">
                  <div className="display-font text-base font-semibold text-primary" data-testid={`text-team-name-${m.name.replace(/\s+/g, "-").toLowerCase()}`}>
                    {m.name}
                  </div>
                  <div className="text-sm text-secondary" data-testid={`text-team-title-${m.name.replace(/\s+/g, "-").toLowerCase()}`}>
                    {m.title}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/about" data-testid="link-team-meet">
              <Button
                variant="outline"
                className="rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                data-testid="button-team-meet"
              >
                Meet Everyone
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
