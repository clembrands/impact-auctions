"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  organization: z.string().optional(),
  eventDate: z.string().optional(),
  message: z.string().min(10, "Please add a short message"),
});

type FormValues = z.infer<typeof schema>;

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

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      eventDate: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Mockup mode: no backend submission
    console.log("Contact form submitted", values);
  }

  return (
    <div className="min-h-dvh bg-background" data-testid="page-contact">
      <SiteHeader />

      <PageHero
        title="Contact"
        subtitle="Tell us about your event and we'll follow up with next steps."
      />

      <section className="section-pad" data-testid="section-contact-form">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-xl border border-card-border bg-card p-6 md:col-span-2" data-testid="card-contact-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-contact">
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
                          <Textarea rows={6} {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage data-testid="error-message" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-2">
                    <Button className="rounded-lg bg-primary px-6" type="submit" data-testid="button-submit">
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>

            <Card className="rounded-xl border border-card-border bg-muted p-6" data-testid="card-contact-info">
              <h3 className="display-font text-lg font-semibold text-primary" data-testid="text-contact-info-title">
                Contact Info
              </h3>
              <div className="mt-4 space-y-2 text-sm text-secondary">
                <p data-testid="text-contact-phone">407-267-8988</p>
                <p data-testid="text-contact-email">Debbie@ImpactAuctions.org</p>
                <p data-testid="text-contact-location">Based in North Carolina • Serving nationwide</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
