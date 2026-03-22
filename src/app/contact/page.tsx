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
  organization: z.string().min(1, "Please enter your organization"),
  address: z.string().min(1, "Please enter your address"),
  email: z.string().email("Please enter a valid email address"),
  telephone: z.string().min(1, "Please enter your telephone number"),
  eventDate: z.string().min(1, "Please enter your event date"),
  howDidYouHear: z.string().optional(),
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
      organization: "",
      address: "",
      email: "",
      telephone: "",
      eventDate: "",
      howDidYouHear: "",
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
        title="Call Debbie at (407) 267-8988 or fill out the form below"
        subtitle="Let's Get Started"
      />

      <section className="section-pad" data-testid="section-contact-form">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-xl border border-card-border bg-card p-6 md:col-span-2" data-testid="card-contact-form">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-contact">

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-name">Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
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
                        <FormLabel data-testid="label-organization">Name of Organization *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-organization" />
                        </FormControl>
                        <FormMessage data-testid="error-organization" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-address">Address *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-address" />
                        </FormControl>
                        <FormMessage data-testid="error-address" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-email">E-mail address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-email" />
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
                        <FormLabel data-testid="label-telephone">Telephone *</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="input-telephone" />
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
                        <FormLabel data-testid="label-event-date">Date of Event *</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/DD/YYYY" {...field} data-testid="input-event-date" />
                        </FormControl>
                        <FormMessage data-testid="error-event-date" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="howDidYouHear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-how-did-you-hear">How did you hear about us?</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-how-did-you-hear" />
                        </FormControl>
                        <FormMessage data-testid="error-how-did-you-hear" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel data-testid="label-message">Message *</FormLabel>
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
