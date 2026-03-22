import { Metadata } from "next";
import { getAllPosts } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";
import BlogFilters from "./blog-filters";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical ideas to help your fundraising events run smoother and raise more.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />

      <section className="section-pad">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-secondary">
              Practical ideas to help your fundraising events run smoother and
              raise more.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-tight">
          <BlogFilters posts={posts} />
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
