import { client } from "./sanity.client";

const allPostsQuery = `*[_type == "blogPost"] | order(date desc) {
  title,
  "slug": slug.current,
  date,
  thumbnail,
  excerpt
}`;

const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  date,
  thumbnail,
  excerpt,
  content
}`;

const relatedPostsQuery = `*[_type == "blogPost" && slug.current != $slug] | order(date desc) [0...3] {
  title,
  "slug": slug.current,
  date,
  thumbnail,
  excerpt
}`;

export async function getAllPosts() {
  return client.fetch(allPostsQuery);
}

export async function getPostBySlug(slug: string) {
  return client.fetch(postBySlugQuery, { slug });
}

export async function getRelatedPosts(slug: string) {
  return client.fetch(relatedPostsQuery, { slug });
}

export async function getAllSlugs() {
  return client.fetch<{ slug: string }[]>(
    `*[_type == "blogPost"]{ "slug": slug.current }`
  );
}
