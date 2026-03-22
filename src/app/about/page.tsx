"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Josh Loewensteiner",
    title: "CAI Auctioneer",
    image: "/images/headshot-josh.jpg",
    bio: "A Certified Auctioneers Institute graduate with years of live fundraising experience. Josh brings a commanding yet approachable presence, reading the room and building momentum to turn good auctions into great ones.",
  },
  {
    name: "Stephen LaRaviere",
    title: "Auctioneer",
    image: "/images/headshot-stephen.jpg",
    bio: "An energetic and experienced auctioneer known for connecting with audiences and driving competitive bidding. Stephen adapts seamlessly to any crowd size or format.",
  },
];

export default function About() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-about">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-primary section-pad" data-testid="section-about-hero">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-white md:text-5xl" data-testid="text-page-title">
              About Impact Auctions
            </h1>
            <p className="mt-4 text-white/90 text-lg" data-testid="text-page-subtitle">
              A husband-and-wife team helping nonprofits raise more — with less stress.
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
                alt="Ron and Debbie Hitzel"
                className="h-full w-full object-cover"
                data-testid="img-founders"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-founders-title">
                  Meet Ron & Debbie Hitzel
                </h2>
                <div className="text-lg font-medium text-primary/60" data-testid="text-founders-subtitle">
                  Founders of Impact Auctions
                </div>
              </div>

              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Ron and Debbie bring over 20 years of experience raising record-breaking funds for nonprofits they believe in. Ron, a former US Navy Nuclear Submariner with a master's in business and multilingual skills honed across 56 countries, brings boundless energy and a global perspective to every event. Debbie, a former educator of nearly 30 years, brings her expertise in connecting people and advancing missions to create seamless, impactful fundraising experiences.
                </p>
                <p>
                  Based in North Carolina and Florida, they founded Impact Auctions as a licensed charity auctioneer brand dedicated to helping thousands of organizations maximize profits in a single night — while minimizing stress for volunteers.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <Link href="/testimonials" data-testid="link-founders-testimonials">
                  <Button variant="outline" className="rounded-lg border-primary/30 text-primary hover:bg-primary/5 px-6">
                    Hear From Our Clients
                  </Button>
                </Link>
                <Link href="/contact" data-testid="link-founders-contact">
                  <Button className="rounded-lg bg-primary text-white hover:bg-primary/90 px-6">
                    Contact Debbie Now
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
            <div className="space-y-1">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-raised">$20M+</div>
              <div className="text-sm text-secondary" data-testid="stat-raised-sub">Raised for Nonprofits</div>
            </div>
            <div className="space-y-1 md:pl-8">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-experience">20+ Years</div>
              <div className="text-sm text-secondary" data-testid="stat-experience-sub">Experience</div>
            </div>
            <div className="space-y-1 md:pl-8">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-events">Thousands</div>
              <div className="text-sm text-secondary" data-testid="stat-events-sub">Of Events</div>
            </div>
            <div className="space-y-1 md:pl-8">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-licensed">Licensed</div>
              <div className="text-sm text-secondary" data-testid="stat-licensed-sub">Charity Auctioneers</div>
            </div>
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
                We love working with Debbie and Ron. Their professionalism, energy, and wit are extraordinary. Yet what we appreciate most is their authenticity — they're good people with a genuine heart for building relationships and serving the community.
              </p>
              <div className="pt-2">
                <div className="display-font text-lg font-extrabold text-primary" data-testid="text-testimonial-name">Allen Starrett</div>
                <div className="text-sm text-secondary" data-testid="text-testimonial-org">Founder/Chair, Ballantyne Ball</div>
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
              The Team
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              Professional auctioneers and event experts
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="rounded-xl border border-card-border bg-card overflow-hidden"
                data-testid={`card-team-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted" data-testid={`img-team-wrapper-${member.name.replace(/\s+/g, "-").toLowerCase()}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-top"
                    data-testid={`img-team-${member.name.replace(/\s+/g, "-").toLowerCase()}`}
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <div className="display-font text-lg font-extrabold text-primary" data-testid={`text-team-name-${member.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      {member.name}
                    </div>
                    <div className="text-sm font-medium text-primary/60" data-testid={`text-team-title-${member.name.replace(/\s+/g, "-").toLowerCase()}`}>
                      {member.title}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary" data-testid={`text-team-bio-${member.name.replace(/\s+/g, "-").toLowerCase()}`}>
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About-specific CTA — navy background */}
      <section className="bg-primary section-pad" data-testid="section-about-cta">
        <div className="container-tight">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
            <div className="space-y-2">
              <h2 className="display-font text-2xl font-bold text-white md:text-3xl" data-testid="text-cta-title">
                Ready to make an impact at your next event?
              </h2>
              <p className="text-white/80 md:text-base" data-testid="text-cta-subtext">
                Contact us for a free consultation
              </p>
            </div>
            <Link href="/contact" data-testid="link-cta-book">
              <Button
                className="rounded-lg bg-white px-8 text-primary hover:bg-white/90"
                data-testid="button-cta-book"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
