"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity.client";

interface Post {
  title: string;
  slug: string;
  date: string;
  thumbnail?: any;
  excerpt?: string;
}

export default function BlogFilters({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.length === 0 && (
        <div className="mt-10 text-center text-secondary py-12">
          <p>No blog posts found.</p>
        </div>
      )}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}>
            <Card className="overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:shadow-md cursor-pointer h-full">
              {p.thumbnail ? (
                <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                  <img
                    src={urlFor(p.thumbnail).width(800).height(450).url()}
                    alt={p.thumbnail?.alt || p.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ) : (
                <div className="grid aspect-[16/9] place-items-center bg-muted">
                  <div className="text-sm font-medium text-secondary">
                    Image
                  </div>
                </div>
              )}

              <div className="p-6">
                {p.date && (
                  <div className="text-xs font-medium text-secondary">
                    <span>
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                )}
                <h3 className="mt-2 display-font text-lg font-semibold text-primary">
                  {p.title}
                </h3>
                {p.excerpt && (
                  <p className="mt-2 text-sm/6 text-secondary line-clamp-3">
                    {p.excerpt}
                  </p>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
