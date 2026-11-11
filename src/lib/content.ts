import { client } from "./sanity.client";
import { contentRegistry, type ContentId, type ContentFor } from "@/content";

/**
 * Deep-merges what editors saved in Sanity on top of the built-in defaults.
 * Anything left blank in the Studio falls back to the original website text,
 * so the site never renders an empty heading.
 */
export function mergeContent<T>(defaults: T, data: unknown): T {
  if (typeof defaults === "string") {
    return (typeof data === "string" && data.trim() !== "" ? data : defaults) as T;
  }
  if (typeof defaults === "number" || typeof defaults === "boolean") {
    return (typeof data === typeof defaults ? data : defaults) as T;
  }
  if (Array.isArray(defaults)) {
    if (!Array.isArray(data) || data.length === 0) return defaults;
    const template = defaults[0];
    return data
      .map((item, i) => {
        const base = i < defaults.length ? defaults[i] : template;
        if (typeof base === "string") {
          return typeof item === "string" && item.trim() !== "" ? item : undefined;
        }
        if (base === undefined) return item;
        // New items added by editors should not inherit text from item #1.
        const fallback = i < defaults.length ? base : blankLike(base);
        return mergeContent(fallback, item);
      })
      .filter((v) => v !== undefined) as T;
  }
  if (typeof defaults === "object" && defaults !== null) {
    const src = (typeof data === "object" && data !== null ? data : {}) as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(defaults as Record<string, unknown>)) {
      out[k] = mergeContent(v, src[k]);
    }
    if (typeof src._key === "string") out._key = src._key;
    return out as T;
  }
  return defaults;
}

function blankLike<T>(value: T): T {
  if (typeof value === "string") return "" as T;
  if (Array.isArray(value)) return [] as T;
  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, blankLike(v)]),
    ) as T;
  }
  return value;
}

const contentClient = client.withConfig({ useCdn: false });

/** Fetch the editable text for a page (or the shared site settings). */
export async function getContent<K extends ContentId>(id: K): Promise<ContentFor<K>> {
  const defaults = contentRegistry[id].defaults as ContentFor<K>;
  try {
    const data = await contentClient.fetch<unknown>(
      `*[_id == $id][0]`,
      { id: id as string },
      { next: { revalidate: 60, tags: ["siteContent", id] } },
    );
    return mergeContent(defaults, data);
  } catch (err) {
    console.error(`[content] Failed to load "${id}" from Sanity, using defaults`, err);
    return defaults;
  }
}
