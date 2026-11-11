/**
 * Builds a Sanity document schema automatically from a plain "defaults"
 * content object (see src/content/*). Every string becomes an editable field,
 * nested objects become collapsible sections, and lists become editable
 * arrays. The current website text is used as the initial value, so when an
 * editor opens a page in the Studio for the first time it is pre-filled with
 * exactly what is live on the site today.
 */
import { defineType } from "sanity";

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const LONG_TEXT = 90;

export function humanize(key: string): string {
  const spaced = key
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .trim();
  const titled = spaced.charAt(0).toUpperCase() + spaced.slice(1);
  return titled.replace(/\b(Cta|Faq|Seo|Url)\b/gi, (w) => w.toUpperCase());
}

function isPlainObject(v: unknown): v is Record<string, Json> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function stringField(name: string, title: string, sample: string) {
  const long = sample.length > LONG_TEXT || sample.includes("\n");
  return long
    ? {
        name,
        title,
        type: "text",
        rows: Math.min(10, Math.max(3, Math.ceil(sample.length / 80) + 1)),
      }
    : { name, title, type: "string" };
}

/** Merge the shapes of every item in a list so all possible keys get a field. */
function mergeShapes(items: Record<string, Json>[]): Record<string, Json> {
  const out: Record<string, Json> = {};
  for (const item of items) {
    for (const [k, v] of Object.entries(item)) {
      const prev = out[k];
      if (prev === undefined) out[k] = v;
      else if (typeof prev === "string" && typeof v === "string" && v.length > prev.length)
        out[k] = v;
    }
  }
  return out;
}

function fieldFor(name: string, value: Json, depth: number): Record<string, unknown> {
  const title = humanize(name);

  if (typeof value === "string") return stringField(name, title, value);
  if (typeof value === "number") return { name, title, type: "number" };
  if (typeof value === "boolean") return { name, title, type: "boolean" };

  if (Array.isArray(value)) {
    const objects = value.filter(isPlainObject) as Record<string, Json>[];
    if (objects.length > 0) {
      const shape = mergeShapes(objects);
      const fields = Object.entries(shape).map(([k, v]) => fieldFor(k, v, depth + 1));
      const firstText = Object.entries(shape).find(([, v]) => typeof v === "string");
      const secondText = Object.entries(shape).filter(([, v]) => typeof v === "string")[1];
      return {
        name,
        title,
        type: "array",
        of: [
          {
            type: "object",
            name: `${name}Item`,
            title: humanize(name.replace(/s$/, "")) || "Item",
            fields,
            preview: firstText
              ? {
                  select: {
                    title: firstText[0],
                    ...(secondText ? { subtitle: secondText[0] } : {}),
                  },
                }
              : undefined,
          },
        ],
      };
    }
    const longest = (value as Json[])
      .filter((v): v is string => typeof v === "string")
      .reduce((a, b) => (b.length > a.length ? b : a), "");
    const long = longest.length > LONG_TEXT;
    return {
      name,
      title,
      type: "array",
      of: [long ? { type: "text", rows: 3 } : { type: "string" }],
    };
  }

  if (isPlainObject(value)) {
    return {
      name,
      title,
      type: "object",
      options: { collapsible: true, collapsed: depth === 0 },
      fields: Object.entries(value).map(([k, v]) => fieldFor(k, v, depth + 1)),
    };
  }

  return { name, title, type: "string" };
}

let keyCounter = 0;
/** Sanity requires a unique _key on every object inside an array. */
function withKeys(value: Json): Json {
  if (Array.isArray(value)) {
    return value.map((item) =>
      isPlainObject(item)
        ? { _key: `k${(keyCounter++).toString(36)}`, ...(withKeys(item) as Record<string, Json>) }
        : withKeys(item),
    );
  }
  if (isPlainObject(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withKeys(v)]));
  }
  return value;
}

export function schemaFromDefaults(opts: {
  name: string;
  title: string;
  defaults: Record<string, unknown>;
  description?: string;
}) {
  const defaults = opts.defaults as Record<string, Json>;
  return defineType({
    name: opts.name,
    title: opts.title,
    type: "document",
    description: opts.description,
    fields: Object.entries(defaults).map(([k, v]) => fieldFor(k, v, 0)) as never,
    initialValue: () => withKeys(defaults) as Record<string, unknown>,
    preview: { prepare: () => ({ title: opts.title }) },
  });
}
