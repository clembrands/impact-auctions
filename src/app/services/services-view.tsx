"use client";

import Link from "next/link";
import {
  CalendarClock,
  Check,
  Coins,
  HandHeart,
  Megaphone,
  Mic,
  Plane,
  ArrowRight,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { ContentFor } from "@/content";

type ServicesContent = ContentFor<"servicesPage">;

type ServiceMeta = { icon: typeof Megaphone; slug: string; externalHref?: string };

// Non-text data stays in code and is matched to the Sanity-editable text by position.
// Core revenue-driving services
const coreServiceMeta: ServiceMeta[] = [
  { icon: Megaphone, slug: "live-auctions" },
  { icon: HandHeart, slug: "fund-a-need" },
  { icon: Plane, slug: "auction-packages", externalHref: "https://www.myamoretravel.com/impact-auctions" },
];

// Supporting services
const supportingServiceMeta: ServiceMeta[] = [
  { icon: CalendarClock, slug: "event-planning" },
  { icon: Mic, slug: "emcee" },
  { icon: Coins, slug: "heads-or-tails" },
];

// Fixed test ids for the stats bar, matched by position.
const statTestIds = ["stat-raised", "stat-years", "stat-record"];

export default function ServicesView({ content }: { content: ServicesContent }) {
  const { hero, stats, coreServices, supportingServices, whatsIncluded, ctaBanner } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-services">
      <SiteHeader />

      {/* Hero — no stats bar inside */}
      <section className="relative isolate bg-primary" data-testid="section-services-hero">
        <div className="container-tight py-16 md:py-20 pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-white md:text-5xl" data-testid="text-services-hero-title">
              {hero.title}
            </h1>
            <p className="mt-4 text-white/90 text-lg" data-testid="text-services-hero-subtitle">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Floating stats bar — positioned to overlap hero and core services */}
      <div className="relative z-10" style={{ marginTop: "-56px" }} data-testid="section-services-stats">
        <div className="container-tight">
          <div className="rounded-2xl bg-white px-8 py-7 shadow-lg" style={{ border: "1px solid rgba(212,196,168,0.35)" }}>
            <div className="grid gap-6 text-center md:grid-cols-3 md:divide-x md:divide-[rgba(212,196,168,0.4)]">
              {stats.map((stat, idx) => {
                const testId = statTestIds[idx] ?? `stat-${idx + 1}`;
                return (
                  <div key={idx} className={idx === 0 ? "space-y-1" : "space-y-1 md:pl-6"}>
                    <div className="display-font text-3xl font-extrabold text-primary" data-testid={testId}>{stat.value}</div>
                    <div className="text-sm text-secondary" data-testid={`${testId}-sub`}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Core Services — white background, with top padding for overlapping stats */}
      <section className="bg-background section-pad pt-20" data-testid="section-core-services">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-core-services-title">
              {coreServices.heading}
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-core-services-subtitle">
              {coreServices.subheading}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {coreServices.cards.map((card, i) => {
              const meta: ServiceMeta = coreServiceMeta[i] ?? { icon: Megaphone, slug: `core-service-${i + 1}` };
              const s = { ...meta, ...card };
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={s.externalHref ?? `/services/${s.slug}`}
                  target={s.externalHref ? "_blank" : undefined}
                  rel={s.externalHref ? "noopener noreferrer" : undefined}
                  data-testid={`link-core-service-${s.slug}`}
                >
                  <Card
                    className="h-full rounded-xl border border-card-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:bg-primary/2"
                    data-testid={`card-core-service-${s.slug}`}
                  >
                    <div className="flex flex-col h-full">
                      <div
                        className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10"
                        data-testid={`icon-core-service-${s.slug}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                      </div>
                      <div className="flex-1">
                        <div
                          className="display-font text-lg font-extrabold text-primary mb-2"
                          data-testid={`text-core-service-title-${s.slug}`}
                        >
                          {s.title}
                        </div>
                        <p
                          className="text-sm/6 text-secondary"
                          data-testid={`text-core-service-desc-${s.slug}`}
                        >
                          {s.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm mt-4">
                        {coreServices.learnMoreLabel}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supporting Services — cream background */}
      <section className="bg-muted section-pad" data-testid="section-supporting-services">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-supporting-services-title">
              {supportingServices.heading}
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-supporting-services-subtitle">
              {supportingServices.subheading}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {supportingServices.cards.map((card, i) => {
              const meta: ServiceMeta = supportingServiceMeta[i] ?? { icon: CalendarClock, slug: `supporting-service-${i + 1}` };
              const s = { ...meta, ...card };
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  data-testid={`link-supporting-service-${s.slug}`}
                >
                  <Card
                    className="h-full rounded-xl border border-card-border bg-card p-6 transition-colors hover:bg-white"
                    data-testid={`card-supporting-service-${s.slug}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="grid h-12 w-12 place-items-center"
                        data-testid={`icon-supporting-service-${s.slug}`}
                        aria-hidden="true"
                      >
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                      </div>
                      <div className="space-y-1">
                        <div
                          className="display-font text-base font-semibold text-primary"
                          data-testid={`text-supporting-service-title-${s.slug}`}
                        >
                          {s.title}
                        </div>
                        <p
                          className="text-sm/6 text-secondary"
                          data-testid={`text-supporting-service-desc-${s.slug}`}
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

      {/* What's Included — white background */}
      <section className="bg-background section-pad" data-testid="section-whats-included">
        <div className="container-tight">
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-3xl font-extrabold text-center text-primary mb-12" data-testid="text-included-title">
              {whatsIncluded.heading}
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-4">
              <ul className="space-y-5">
                {whatsIncluded.leftColumnItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-[#D4C4A8] text-white">
                      <Check className="h-4 w-4" strokeWidth={4} />
                    </div>
                    <span className="font-semibold text-lg text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-5">
                {whatsIncluded.rightColumnItems.map((item, i) => (
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

      <CtaBanner {...ctaBanner} />
      <SiteFooter />
    </div>
  );
}
