import { Metadata } from "next";
import { getAllPosts } from "@/lib/sanity.queries";
import { getContent } from "@/lib/content";
import { urlFor } from "@/lib/sanity.client";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import BlogFilters from "./blog-filters";

export async function generateMetadata(): Promise<Metadata> {
  const { listing } = await getContent("blogPage");
  return {
    title: listing.title,
    description: listing.subtitle,
  };
}

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, content] = await Promise.all([getAllPosts(), getContent("blogPage")]);

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />

      <section className="section-pad">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              {content.listing.title}
            </h1>
            <p className="mt-4 text-secondary">
              {content.listing.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-tight">
          <BlogFilters
            posts={posts}
            noPostsMessage={content.listing.noPostsMessage}
            imagePlaceholder={content.imagePlaceholder}
          />
        </div>
      </section>

      <CtaBanner {...content.ctaBanner} />
      <SiteFooter />
    </div>
  );
}
