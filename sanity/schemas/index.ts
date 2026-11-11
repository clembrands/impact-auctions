import blogPost from "./blogPost";
import { contentRegistry } from "../../src/content";
import { schemaFromDefaults } from "../lib/schema-from-defaults";

/** One auto-generated document type per page + site settings. */
export const contentSchemas = Object.entries(contentRegistry).map(([id, entry]) =>
  schemaFromDefaults({
    name: id,
    title: entry.title,
    defaults: entry.defaults as Record<string, unknown>,
    description: `Text shown on ${entry.route}. Leave a field blank to use the original website text.`,
  }),
);

export const singletonTypes = new Set(Object.keys(contentRegistry));

export const schemaTypes = [...contentSchemas, blogPost];
