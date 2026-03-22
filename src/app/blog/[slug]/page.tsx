import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPostBySlug, getRelatedPosts, getAllSlugs } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import { Card } from "@/components/ui/card";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt || "",
    openGraph: post.thumbnail
      ? { images: [urlFor(post.thumbnail).width(1200).height(630).url()] }
      : undefined,
  };
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="w-full rounded-xl"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-secondary">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="display-font mt-10 mb-4 text-2xl font-bold text-primary">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="display-font mt-8 mb-3 text-xl font-semibold text-primary">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="display-font mt-6 mb-2 text-lg font-semibold text-primary">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-6 border-l-4 border-[var(--tan)] pl-4 italic text-secondary">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 text-base/7 text-foreground">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-primary underline underline-offset-2 hover:text-primary/80"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-4 ml-6 list-disc space-y-1 text-foreground">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-4 ml-6 list-decimal space-y-1 text-foreground">{children}</ol>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader />

      <article className="section-pad">
        <div className="container-tight">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-medium text-secondary">
              {post.category && (
                <span className="uppercase tracking-wider">{post.category}</span>
              )}
              {post.category && post.date && <span>&bull;</span>}
              {post.date && (
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1 className="display-font mt-4 text-3xl font-extrabold tracking-tight text-primary md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {post.thumbnail && (
              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src={urlFor(post.thumbnail).width(1200).height(630).url()}
                  alt={post.thumbnail?.alt || post.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="mt-10 prose-impact">
              <PortableText
                value={post.content}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-muted">
          <div className="container-tight">
            <h2 className="display-font mb-8 text-2xl font-bold text-primary">
              Related Posts
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r: any) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <Card className="overflow-hidden rounded-xl border border-card-border bg-card transition-all hover:shadow-md cursor-pointer h-full">
                    {r.thumbnail ? (
                      <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
                        <img
                          src={urlFor(r.thumbnail).width(600).height(340).url()}
                          alt={r.thumbnail?.alt || r.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="grid aspect-[16/9] place-items-center bg-muted">
                        <div className="text-sm font-medium text-secondary">Image</div>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="display-font text-base font-semibold text-primary line-clamp-2">
                        {r.title}
                      </h3>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
