"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import type { ContentFor } from "@/content";

type AboutContent = ContentFor<"aboutPage">;

// Non-text data stays in code and is matched to the Sanity-editable text by position.
const teamMemberMeta = [
  { slug: "josh-loewensteiner", image: "/images/headshot-josh.jpg" },
  { slug: "stephen-laraviere", image: "/images/headshot-stephen.jpg" },
];

// Fixed test ids for the stats bar, matched by position.
const statTestIds = ["stat-raised", "stat-experience", "stat-events", "stat-licensed"];

export default function AboutView({ content }: { content: AboutContent }) {
  const { hero, founders, stats, featuredTestimonial, team, ctaBanner } = content;
  return (
    <div className="min-h-dvh bg-background" data-testid="page-about">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-primary section-pad" data-testid="section-about-hero">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-white md:text-5xl" data-testid="text-page-title">
              {hero.title}
            </h1>
            <p className="mt-4 text-white/90 text-lg" data-testid="text-page-subtitle">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Ron & Debbie Feature — white background */}
      <section className="section-pad bg-background" data-testid="section-founders">
        <div className="container-tight">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-card-border bg-muted" data-testid="img-founders-wrapper">
              <img
                src="/images/about-ron-debbie.jpg"
                alt={founders.imageAlt}
                className="h-full w-full object-cover"
                data-testid="img-founders"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-founders-title">
                  {founders.heading}
                </h2>
                <div className="text-lg font-medium text-primary/60" data-testid="text-founders-subtitle">
                  {founders.subheading}
                </div>
              </div>

              <div className="space-y-4 text-secondary leading-relaxed">
                {founders.paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link href="/videos" data-testid="link-founders-testimonials">
                  <Button variant="outline" className="rounded-lg border-primary/30 text-primary hover:bg-primary/5 px-6">
                    {founders.testimonialsButton}
                  </Button>
                </Link>
                <Link href="/contact" data-testid="link-founders-contact">
                  <Button className="rounded-lg bg-primary text-white hover:bg-primary/90 px-6">
                    {founders.contactButton}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — cream background */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.15)" }} data-testid="section-credibility-stats">
        <div className="container-tight">
          <div className="grid gap-8 text-center md:grid-cols-4 md:divide-x md:divide-[rgba(212,196,168,0.4)]">
            {stats.map((stat, idx) => {
              const testId = statTestIds[idx] ?? `stat-${idx + 1}`;
              return (
                <div key={idx} className={idx === 0 ? "space-y-1" : "space-y-1 md:pl-8"}>
                  <div className="display-font text-3xl font-extrabold text-primary" data-testid={testId}>{stat.value}</div>
                  <div className="text-sm text-secondary" data-testid={`${testId}-sub`}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Testimonial — white background */}
      <section className="section-pad bg-background" data-testid="section-featured-testimonial">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-card-border bg-card p-10 text-center space-y-4">
              <p className="text-lg italic leading-relaxed text-primary" data-testid="text-testimonial-quote">
                <span className="display-font text-4xl font-extrabold text-primary/20 not-italic" aria-hidden="true">&ldquo;</span>
                {featuredTestimonial.quote}
              </p>
              <div className="pt-2">
                <div className="display-font text-lg font-extrabold text-primary" data-testid="text-testimonial-name">{featuredTestimonial.name}</div>
                <div className="text-sm text-secondary" data-testid="text-testimonial-org">{featuredTestimonial.organization}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid — cream background */}
      <section className="section-pad" style={{ backgroundColor: "rgba(212, 196, 168, 0.15)" }} data-testid="section-team">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-team-title">
              {team.heading}
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              {team.subheading}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {team.members.map((member, idx) => {
              const meta = teamMemberMeta[idx] ?? { slug: `member-${idx + 1}`, image: "" };
              return (
              <Card
                key={meta.slug}
                className="rounded-xl border border-card-border bg-card overflow-hidden"
                data-testid={`card-team-${meta.slug}`}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted" data-testid={`img-team-wrapper-${meta.slug}`}>
                  <img
                    src={meta.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                    data-testid={`img-team-${meta.slug}`}
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <div className="display-font text-lg font-extrabold text-primary" data-testid={`text-team-name-${meta.slug}`}>
                      {member.name}
                    </div>
                    <div className="text-sm font-medium text-primary/60" data-testid={`text-team-title-${meta.slug}`}>
                      {member.title}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary" data-testid={`text-team-bio-${meta.slug}`}>
                    {member.bio}
                  </p>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About-specific CTA — navy background */}
      <section className="bg-primary section-pad" data-testid="section-about-cta">
        <div className="container-tight">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
            <div className="space-y-2">
              <h2 className="display-font text-2xl font-bold text-white md:text-3xl" data-testid="text-cta-title">
                {ctaBanner.title}
              </h2>
              <p className="text-white/80 md:text-base" data-testid="text-cta-subtext">
                {ctaBanner.subtitle}
              </p>
            </div>
            <Link href="/contact" data-testid="link-cta-book">
              <Button
                className="rounded-lg bg-white px-8 text-primary hover:bg-white/90"
                data-testid="button-cta-book"
              >
                {ctaBanner.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
