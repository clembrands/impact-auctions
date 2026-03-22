"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  organization: z.string().min(1, "Please enter your organization"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Please enter your telephone number"),
  eventDate: z.string().min(1, "Please enter your event date"),
  message: z.string().min(10, "Please add a short message"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      telephone: "",
      eventDate: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitMessage({
        type: "success",
        text: "Thank you! We've received your message and will be in touch soon.",
      });
      form.reset();
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      setSubmitMessage({
        type: "error",
        text: "There was an error submitting your form. Please try again or call Debbie at (407) 267-8988.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-dvh bg-background" data-testid="page-contact">
      <SiteHeader />

      {/* Hero */}
      <section
        className="section-pad"
        style={{ backgroundColor: "rgba(212, 196, 168, 0.15)" }}
        data-testid="section-contact-hero"
      >
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl" data-testid="text-page-title">
              Let's Plan Your Next Event
            </h1>
            <p className="mt-4 text-secondary text-lg" data-testid="text-page-subtitle">
              Whether you're 6 months out or 6 weeks away, we'd love to hear about your fundraising goals.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Contact Info Section */}
      <section className="bg-background section-pad" data-testid="section-contact-form">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form Card */}
            <Card
              className="rounded-xl border border-card-border p-8 shadow-sm"
              style={{ backgroundColor: "rgba(212, 196, 168, 0.08)" }}
              data-testid="card-contact-form"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="form-contact">
                  {submitMessage && (
                    <div
                      className={`rounded-lg p-4 ${
                        submitMessage.type === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                      data-testid={`message-${submitMessage.type}`}
                    >
                      {submitMessage.text}
                    </div>
                  )}

                  {/* Honeypot field - hidden from real users */}
                  <div className="sr-only" aria-hidden="true">
                    <input
                      type="text"
                      {...form.register("honeypot")}
                      tabIndex={-1}
                      autoComplete="off"
                      data-testid="input-honeypot"
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-name" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Organization Name"
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-organization"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-organization" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Email Address"
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-email" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone Number"
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-telephone"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-telephone" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Event Date (MM/DD/YYYY)"
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-event-date"
                          />
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
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your event goals..."
                            rows={5}
                            {...field}
                            className="rounded-lg border border-card-border bg-white placeholder:text-secondary/60"
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage data-testid="error-message" />
                      </FormItem>
                    )}
                  />

                  <Button
                    className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary/90"
                    type="submit"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Submit Info"}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Contact Info Card */}
            <div className="self-start">
              <Card
                className="rounded-xl border border-card-border overflow-hidden"
                style={{ backgroundColor: "rgba(212, 196, 168, 0.08)" }}
                data-testid="card-contact-info"
              >
                {/* Photo — landscape 16:9 crop */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                  <img
                    src="/images/about-ron-debbie.jpg"
                    alt="Ron and Debbie Hitzel"
                    className="h-full w-full object-cover object-center"
                    data-testid="img-debbie-headshot"
                  />
                </div>

                <div className="p-8">
                  {/* Contact heading */}
                  <h2 className="display-font text-2xl font-extrabold text-primary mb-6" data-testid="text-contact-heading">
                    Talk to Debbie
                  </h2>

                  {/* Contact details */}
                  <div className="space-y-4">
                    <Link href="tel:+14072678988" data-testid="link-contact-phone">
                      <div className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">(407) 267-8988</span>
                      </div>
                    </Link>

                    <Link href="mailto:Debbie@ImpactAuctions.org" data-testid="link-contact-email">
                      <div className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">Debbie@ImpactAuctions.org</span>
                      </div>
                    </Link>

                    <div className="flex items-center gap-3 text-secondary">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">Based in North Carolina • Serving nationwide</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px" style={{ backgroundColor: "rgba(212,196,168,0.5)" }} />

                  {/* Social links */}
                  <div className="flex items-center gap-4 mb-6">
                    <Link href="https://facebook.com/ImpactAuctions" target="_blank" rel="noopener noreferrer" data-testid="link-social-facebook">
                      <Facebook className="h-5 w-5 text-primary hover:text-primary/70 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://instagram.com/ImpactAuctions" target="_blank" rel="noopener noreferrer" data-testid="link-social-instagram">
                      <Instagram className="h-5 w-5 text-primary hover:text-primary/70 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://linkedin.com/company/ImpactAuctions" target="_blank" rel="noopener noreferrer" data-testid="link-social-linkedin">
                      <Linkedin className="h-5 w-5 text-primary hover:text-primary/70 transition-colors cursor-pointer" />
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-6" style={{ backgroundColor: "rgba(212,196,168,0.5)" }} />

                  {/* What to Expect — merged into this card */}
                  <div data-testid="card-what-to-expect">
                    <h3 className="display-font font-semibold text-primary mb-2" data-testid="text-expect-title">
                      What to Expect
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed" data-testid="text-expect-content">
                      We'll respond within 24 hours with a free consultation call to discuss your event goals and how we can help.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
