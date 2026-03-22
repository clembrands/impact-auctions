"use client";

import {
  Award,
  BadgeDollarSign,
  CalendarClock,
  HandHeart,
  Megaphone,
  MonitorPlay,
  Plane,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  {
    title: "Live Auctions",
    description: "High-energy, professional live auctioneering that keeps the room engaged and giving.",
    icon: Megaphone,
    slug: "live-auctions",
  },
  {
    title: "Silent Auctions",
    description: "Strategic silent auction setup and pacing to drive more bids—without chaos.",
    icon: BadgeDollarSign,
    slug: "silent-auctions",
  },
  {
    title: "Fund-A-Need",
    description: "A compelling moment that inspires donors to give at meaningful levels.",
    icon: HandHeart,
    slug: "fund-a-need",
  },
  {
    title: "Virtual Events",
    description: "Keep momentum online with confident hosting, timing, and audience management.",
    icon: MonitorPlay,
    slug: "virtual-events",
  },
  {
    title: "Event Planning & Emcee",
    description: "Run-of-show support, announcements, and on-stage flow that feels effortless.",
    icon: CalendarClock,
    slug: "event-planning-emcee",
  },
  {
    title: "Consignment Travel",
    description: "Curated travel experiences that add excitement and raise more for your mission.",
    icon: Plane,
    slug: "consignment-travel",
  },
];

const testimonials = [
  {
    quote:
      "Impact Auctions brought the perfect mix of professionalism and warmth. Our donors stayed engaged all night.",
    name: "Development Director",
    org: "Regional Children's Nonprofit",
  },
  {
    quote:
      "They guided our team with clarity and confidence. The Fund-A-Need was our best ever.",
    name: "Event Chair",
    org: "Community Foundation",
  },
  {
    quote:
      "From planning to execution, they made the night feel seamless—and the results exceeded expectations.",
    name: "Executive Director",
    org: "Health & Wellness Charity",
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

const contactSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function HomeContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log("Home contact form submitted", values);
  }

  return (
    <section className="bg-muted section-pad" data-testid="section-home-contact">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-home-contact-title">
            Get in Touch
          </h2>
          <p className="mt-3 text-secondary" data-testid="text-home-contact-subtitle">
            Tell us about your upcoming event.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-3xl">
          <Card className="rounded-xl border border-card-border bg-card p-6 md:p-8" data-testid="card-home-contact">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-home-contact">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-name">Name</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage data-testid="error-name" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-email">Email</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage data-testid="error-email" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-phone">Phone</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage data-testid="error-phone" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-organization">Organization</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-organization" />
                        </FormControl>
                        <FormMessage data-testid="error-organization" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-event-date">Event Date</FormLabel>
                      <FormControl>
                        <Input placeholder="MM/DD/YYYY" {...field} data-testid="input-event-date" />
                      </FormControl>
                      <FormMessage data-testid="error-event-date" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-message">Message</FormLabel>
                      <FormControl>
                        <Textarea rows={4} {...field} data-testid="input-message" />
                      </FormControl>
                      <FormMessage data-testid="error-message" />
                    </FormItem>
                  )}
                />

                <div className="pt-2 text-center">
                  <Button className="w-full md:w-auto rounded-lg bg-primary px-8" type="submit" data-testid="button-submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-home">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative isolate min-h-[78vh] overflow-hidden"
        data-testid="section-hero"
      >
        <img
          src="/images/hero-auction.jpg"
          alt="Live fundraising auction in a ballroom"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
          data-testid="img-hero-background"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-black/55"
        />

        <div className="container-tight flex min-h-[78vh] items-center py-16">
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
                  Book a Free Consultation
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
      </section>

      {/* Stats */}
      <section className="bg-[#E7E3DD]" data-testid="section-stats">
        <div className="container-tight py-10">
          <div className="grid gap-10 text-center md:grid-cols-3">
            <div className="space-y-1">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-raised">
                $20M+
              </div>
              <div className="text-sm text-secondary" data-testid="stat-raised-sub">
                For nonprofits nationwide
              </div>
            </div>
            <div className="space-y-1">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-years">
                20+ Years
              </div>
              <div className="text-sm text-secondary" data-testid="stat-years-sub">
                Fundraising experience
              </div>
            </div>
            <div className="space-y-1">
              <div className="display-font text-3xl font-extrabold text-primary" data-testid="stat-record">
                $3.2M
              </div>
              <div className="text-sm text-secondary" data-testid="stat-record-sub">
                in One Night / Joe DiMaggio Children's Hospital
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" data-testid="section-services">
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
                  href={`/services/${s.slug}`}
                  data-testid={`link-service-${s.slug}`}
                >
                  <Card
                    className="h-full rounded-xl border border-card-border bg-card p-6 transition-colors hover:bg-muted"
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

      {/* About */}
      <section className="bg-muted section-pad" data-testid="section-about">
        <div className="container-tight">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <PhotoCard
              src="/images/about-ron-debbie.jpg"
              alt="Ron and Debbie at a gala"
              testId="img-about-placeholder"
            />
            <div className="space-y-4">
              <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-about-title">
                Meet Ron &amp; Debbie
              </h2>
              <p className="text-secondary" data-testid="text-about-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/about" data-testid="link-about-learn">
                <Button
                  variant="outline"
                  className="rounded-lg border-primary/30 text-primary hover:bg-primary/5"
                  data-testid="button-about-learn"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad" data-testid="section-testimonials">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-testimonials-title">
              What Nonprofits Say
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <Card
                key={idx}
                className="flex min-h-[220px] flex-col rounded-xl border border-card-border bg-card p-7"
                data-testid={`card-testimonial-${idx}`}
              >
                <div className="flex-1">
                  <div
                    className="mb-4 flex items-start gap-4"
                    data-testid={`wrap-testimonial-quote-${idx}`}
                  >
                    <div aria-hidden="true" data-testid={`icon-testimonial-quote-${idx}`}>
                      <span className="display-font text-5xl font-extrabold leading-none text-primary/70">"</span>
                    </div>
                    <p
                      className="text-base/7 text-secondary"
                      data-testid={`text-testimonial-quote-${idx}`}
                    >
                      {t.quote}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-card-border pt-4">
                  <div
                    className="text-sm font-semibold text-primary"
                    data-testid={`text-testimonial-name-${idx}`}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-sm text-secondary"
                    data-testid={`text-testimonial-org-${idx}`}
                  >
                    {t.org}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted section-pad" data-testid="section-team">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-team-title">
              Your On-Stage Team
            </h2>
            <p className="mt-3 text-secondary" data-testid="text-team-subtitle">
              Experienced auctioneers ready to energize your event.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
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

      <HomeContactForm />

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
