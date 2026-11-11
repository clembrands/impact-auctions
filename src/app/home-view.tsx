"use client";

import {
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
import type { ContentFor } from "@/content";

type HomeContent = ContentFor<"homePage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const serviceMeta = [
  { icon: Megaphone, slug: "live-auctions" },
  { icon: HandHeart, slug: "fund-a-need" },
  { icon: Coins, slug: "heads-or-tails" },
  { icon: CalendarClock, slug: "event-planning" },
  { icon: Mic, slug: "emcee" },
  { icon: Plane, slug: "consignment-travel", externalHref: "https://www.myamoretravel.com/impact-auctions" },
] as { icon: typeof Megaphone; slug: string; externalHref?: string }[];

const teamImages = [
  "/images/headshot-ron.jpg",
  "/images/headshot-debbie.jpg",
  "/images/headshot-josh.jpg",
  "/images/headshot-stephen.jpg",
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

export default function HomeView({ content }: { content: HomeContent }) {
  const { hero, stats, services, photoGallery, team } = content;
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
            alt={hero.imageAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
            style={{ objectPosition: "center 30%" }}
            loading="eager"
            data-testid="img-hero-background"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

          <div className="container-tight flex min-h-[78vh] md:min-h-[86vh] items-end pb-28 pt-16">
            <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:text-left">
              <h1
                className="display-font text-balance text-4xl font-extrabold tracking-tight text-white md:text-6xl"
                data-testid="text-hero-title"
              >
                {hero.title}
              </h1>
              <p
                className="mt-5 max-w-2xl text-pretty text-base/7 text-white/85 md:text-lg"
                data-testid="text-hero-subtitle"
              >
                {hero.subtitle}
              </p>

              <div
                className="mt-8 hidden flex-col justify-center gap-3 sm:flex-row sm:items-center md:flex md:justify-start"
                data-testid="group-hero-actions"
              >
                <Link href="/contact" data-testid="link-hero-primary">
                  <Button
                    className="rounded-lg bg-white px-6 text-primary hover:bg-white/90"
                    data-testid="button-hero-book"
                  >
                    {hero.primaryButton}
                  </Button>
                </Link>
                <Link href="/services" data-testid="link-hero-secondary">
                  <Button
                    variant="outline"
                    className="rounded-lg border-white/45 bg-white/0 px-6 text-white hover:bg-white/10"
                    data-testid="button-hero-services"
                  >
                    {hero.secondaryButton}
                  </Button>
                </Link>
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
              {stats.map((stat, i) => (
                <div key={i} className={i === 0 ? "space-y-1" : "space-y-1 md:pl-6"}>
                  <div className="display-font text-3xl font-extrabold text-primary" data-testid={`stat-${i}`}>{stat.value}</div>
                  <div className="text-sm text-secondary" data-testid={`stat-${i}-sub`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — cream background */}
      <section className="bg-muted section-pad pt-20" data-testid="section-services">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-services-title">
              {services.heading}
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-services-subtitle">
              {services.subheading}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
            {services.cards.map((card, i) => {
              const meta = serviceMeta[i] ?? { icon: Megaphone, slug: `service-${i}` };
              const s = { ...meta, ...card };
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

      {/* Photo Gallery — staggered masonry-style */}
      <section
        className="w-full pt-20 pb-32 px-6 bg-white"
        data-testid="section-photo-gallery"
      >
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-center md:gap-0">
          {/* Left image — tilted -2deg, raised */}
          <div
            className="w-full max-w-sm md:w-72 lg:w-80 flex-shrink-0 overflow-hidden rounded-xl md:-mr-6"
            style={{
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              transform: "rotate(0deg)",
              maxHeight: "500px",
            }}
          >
            <img
              src="/images/event-photo-1.jpg"
              alt={photoGallery.leftImageAlt}
              className="w-full h-full object-cover md:rotate-[-2deg] md:scale-105"
              style={{ maxHeight: "500px", display: "block" }}
            />
          </div>

          {/* Center image — larger, offset lower */}
          <div
            className="w-full max-w-sm md:w-80 lg:w-96 flex-shrink-0 overflow-hidden rounded-xl relative z-10 md:mb-[-40px]"
            style={{
              boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
              maxHeight: "540px",
            }}
          >
            <img
              src="/images/event-photo-2.jpg"
              alt={photoGallery.centerImageAlt}
              className="w-full h-full object-cover"
              style={{ maxHeight: "540px", display: "block" }}
            />
          </div>

          {/* Right image — tilted +2deg, raised */}
          <div
            className="w-full max-w-sm md:w-72 lg:w-80 flex-shrink-0 overflow-hidden rounded-xl md:-ml-6"
            style={{
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              maxHeight: "500px",
            }}
          >
            <img
              src="/images/event-photo-3.jpg"
              alt={photoGallery.rightImageAlt}
              className="w-full h-full object-cover md:rotate-[2deg] md:scale-105"
              style={{ maxHeight: "500px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials — Google Business Profile Reviews via Elfsight */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.18)" }} data-testid="section-testimonials">
        <div className="container-tight">
          <TestimonialCarousel title={content.testimonials.heading} />
        </div>
      </section>

      {/* Team — white background, includes Ron & Debbie intro above the grid */}
      <section className="bg-background section-pad" data-testid="section-team">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-team-title">
              {team.heading}
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              {team.subheading}
            </p>
          </div>

          {/* Ron & Debbie founders intro */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 mb-14 pb-14" style={{ borderBottom: "1px solid rgba(212,196,168,0.35)" }}>
            <PhotoCard
              src="/images/about-ron-debbie.jpg"
              alt={team.foundersImageAlt}
              testId="img-about-placeholder"
            />
            <div className="space-y-4">
              <h3 className="display-font text-2xl font-extrabold tracking-tight text-primary" data-testid="text-about-title">
                {team.foundersHeading}
              </h3>
              <p className="text-secondary" data-testid="text-about-body">
                {team.foundersBody}
              </p>
              <Link href="/about" data-testid="link-about-learn">
                <Button
                  variant="outline"
                  className="rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                  data-testid="button-about-learn"
                >
                  {team.foundersButton}
                </Button>
              </Link>
            </div>
          </div>

          {/* Full team grid */}
          <div className="grid gap-6 md:grid-cols-4">
            {team.members.map((member, i) => ({ ...member, image: teamImages[i] })).map((m) => (
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
                {team.meetTeamButton}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner {...content.ctaBanner} />
      <SiteFooter />
    </div>
  );
}
