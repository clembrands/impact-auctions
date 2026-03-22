"use client";

import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const team = [
  { name: "Ron Hitzel", title: "Founder/Auctioneer", image: "/images/headshot-ron.jpg" },
  { name: "Debbie Hitzel", title: "Founder/Event Planning", image: "/images/headshot-debbie.jpg" },
  { name: "Josh Loewensteiner", title: "CAI Auctioneer", image: "/images/headshot-josh.jpg" },
  { name: "Stephen LaRaviere", title: "Auctioneer", image: "/images/headshot-stephen.jpg" },
];

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-muted section-pad" data-testid="section-page-hero">
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

export default function About() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-about">
      <SiteHeader />

      <PageHero
        title="About Impact Auctions"
        subtitle="Experience. Reliability. Expertise in Live and Silent Auctions."
      />

      {/* Founders Section */}
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

              <div className="space-y-4 text-secondary/90 leading-relaxed text-base">
                <p>
                  Ron and Debbie Hitzel are a husband and wife team with over 20 years of experience raising money for charitable causes close to their hearts.
                </p>
                <p>
                  Ron is a former US Navy Nuclear Submariner who upgraded electrical power plants around the world. With a master's degree in business management and experience working in over 56 countries, he speaks several languages and brings his world travels—and boundless energy—to the stage.
                </p>
                <p>
                  Debbie is a former teacher of nearly 30 years who now dedicates her expertise to helping nonprofits run successful fundraising events.
                </p>
                <p>
                  Based in North Carolina and Florida, Impact Auctions is a licensed charity auctioneer helping thousands of organizations set record-breaking profits in one night—with less work for volunteers and committee members.
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

      {/* Team Section */}
      <section className="bg-muted section-pad" data-testid="section-team">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-team-title">
              Your On-Stage Team
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              Experienced auctioneers ready to energize your event
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {team.map((m) => (
              <Card
                key={m.name}
                className="rounded-xl border border-card-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
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
                      className={m.name.includes("Stephen") ? "h-full w-full object-cover object-top" : "h-full w-full object-cover"}
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
        </div>
      </section>

      {/* Josh Section */}
      <section className="section-pad bg-background" data-testid="section-josh">
        <div className="container-tight">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-card-border bg-muted" data-testid="img-josh-wrapper">
              <img
                src="/images/headshot-josh.jpg"
                alt="Josh Loewensteiner"
                className="h-full w-full object-cover object-top"
                data-testid="img-josh"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-josh-title">
                  Meet Josh Loewensteiner
                </h2>
                <div className="text-lg font-medium text-primary/60" data-testid="text-josh-subtitle">
                  CAI Auctioneer
                </div>
              </div>
              <div className="space-y-4 text-secondary/90 leading-relaxed text-base">
                <p>
                  Josh Loewensteiner is a Certified Auctioneers Institute (CAI) graduate and a passionate advocate for the nonprofit community. With years of experience on the auction floor, Josh brings a commanding yet approachable presence that keeps bidders engaged and dollars flowing.
                </p>
                <p>
                  His background in live event fundraising means he understands the nuances of working with a crowd — reading the room, building momentum at the right moment, and turning a good auction into a great one. Josh is known for his quick wit, professional stage presence, and genuine commitment to every organization he serves.
                </p>
                <p>
                  Whether running a paddle raise, a live auction, or a fund-a-need appeal, Josh consistently helps clients exceed their fundraising goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stephen Section */}
      <section className="section-pad bg-muted" data-testid="section-stephen">
        <div className="container-tight">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-6 md:order-2">
              <div className="space-y-2">
                <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-stephen-title">
                  Meet Stephen LaRaviere
                </h2>
                <div className="text-lg font-medium text-primary/60" data-testid="text-stephen-subtitle">
                  Auctioneer
                </div>
              </div>
              <div className="space-y-4 text-secondary/90 leading-relaxed text-base">
                <p>
                  Stephen LaRaviere is an energetic and experienced auctioneer who brings enthusiasm and professionalism to every event he takes the stage. With a natural gift for connecting with audiences, Stephen has earned a reputation for driving competitive bidding and creating memorable fundraising moments.
                </p>
                <p>
                  Stephen's background spans a wide range of nonprofit and charity events, giving him the versatility to adapt to any crowd size, cause, or format. His warm personality and ability to keep energy high throughout an event make him a favorite among both event organizers and bidders alike.
                </p>
                <p>
                  From intimate galas to large-scale charity auctions, Stephen is dedicated to helping organizations maximize every dollar raised while making the experience fun and exciting for everyone in the room.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-card-border bg-muted md:order-1" data-testid="img-stephen-wrapper">
              <img
                src="/images/headshot-stephen.jpg"
                alt="Stephen LaRaviere"
                className="h-full w-full object-cover object-top"
                data-testid="img-stephen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About-specific CTA */}
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
