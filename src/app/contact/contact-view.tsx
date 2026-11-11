"use client";

import { useMemo, useState } from "react";
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
import type { ContentFor } from "@/content";

type ContactContent = ContentFor<"contactPage">;

function buildSchema(messages: ContactContent["validationMessages"]) {
  return z.object({
    name: z.string().min(1, messages.nameRequired),
    organization: z.string().min(1, messages.organizationRequired),
    email: z.string().email(messages.emailInvalid),
    telephone: z.string().min(1, messages.phoneRequired),
    eventDate: z.string().min(1, messages.eventDateRequired),
    message: z.string().min(10, messages.messageTooShort),
    honeypot: z.string().optional(),
  });
}

type FormValues = z.infer<ReturnType<typeof buildSchema>>;

/** "(407) 267-8988" -> "tel:+14072678988" */
function toTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}

export default function ContactView({ content }: { content: ContactContent }) {
  const { hero, form: formText, validationMessages, contactInfo, whatToExpect } = content;
  const schema = useMemo(() => buildSchema(validationMessages), [validationMessages]);
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
        text: formText.successMessage,
      });
      form.reset();
    } catch (error) {
      console.error("[v0] Form submission error:", error);
      setSubmitMessage({
        type: "error",
        text: formText.errorMessage,
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
              {hero.title}
            </h1>
            <p className="mt-4 text-secondary text-lg" data-testid="text-page-subtitle">
              {hero.subtitle}
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
                            placeholder={formText.namePlaceholder}
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
                            placeholder={formText.organizationPlaceholder}
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
                            placeholder={formText.emailPlaceholder}
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
                            placeholder={formText.phonePlaceholder}
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
                            placeholder={formText.eventDatePlaceholder}
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
                            placeholder={formText.messagePlaceholder}
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
                    {isSubmitting ? formText.submittingButton : formText.submitButton}
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
                    alt={contactInfo.imageAlt}
                    className="h-full w-full object-cover object-center"
                    data-testid="img-debbie-headshot"
                  />
                </div>

                <div className="p-8">
                  {/* Contact heading */}
                  <h2 className="display-font text-2xl font-extrabold text-primary mb-6" data-testid="text-contact-heading">
                    {contactInfo.heading}
                  </h2>

                  {/* Contact details */}
                  <div className="space-y-4">
                    <Link href={toTelHref(contactInfo.phone)} data-testid="link-contact-phone">
                      <div className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                        <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{contactInfo.phone}</span>
                      </div>
                    </Link>

                    <Link href={`mailto:${contactInfo.email}`} data-testid="link-contact-email">
                      <div className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{contactInfo.email}</span>
                      </div>
                    </Link>

                    <div className="flex items-center gap-3 text-secondary">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{contactInfo.location}</span>
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
                      {whatToExpect.heading}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed" data-testid="text-expect-content">
                      {whatToExpect.body}
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
