/**
 * Editable text for /blog (src/app/blog/page.tsx, blog-filters.tsx) and the
 * individual post pages (src/app/blog/[slug]/page.tsx).
 * Edited in Sanity Studio under "Pages › Blog (Listing & Post Pages)".
 * These values are the defaults; anything saved in Sanity overrides them.
 * (The posts themselves are edited under "Blog Posts".)
 */
export const blogContent = {
  listing: {
    title: "Blog",
    subtitle: "Practical ideas to help your fundraising events run smoother and raise more.",
    noPostsMessage: "No blog posts found.",
  },
  imagePlaceholder: "Image",
  postPage: {
    noContentMessage: "No content available.",
    relatedPostsHeading: "Related Posts",
    postNotFoundTitle: "Post Not Found",
  },
  ctaBanner: {
    title: "Ready to exceed your fundraising goals?",
    subtitle: "Get a free consultation for your next event.",
    buttonText: "Get a Quote",
  },
};
