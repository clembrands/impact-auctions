import type { StructureResolver } from "sanity/structure";
import { pageRegistry } from "../src/content";

/**
 * Studio sidebar:
 *   Site Settings  – header, footer, shared banners
 *   Pages          – one entry per website page
 *   Blog Posts
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website Content")
    .items([
      S.listItem()
        .title("Site Settings (Header, Footer, Banners)")
        .id("siteSettings")
        
        .child(S.document().schemaType("siteSettings").documentId("siteSettings").title("Site Settings")),
      S.listItem()
        .title("Pages")
        
        .child(
          S.list()
            .title("Pages")
            .items(
              Object.entries(pageRegistry).map(([id, page]) =>
                S.listItem()
                  .title(page.title)
                  .id(id)
                  
                  .child(S.document().schemaType(id).documentId(id).title(page.title)),
              ),
            ),
        ),
      S.divider(),
      S.documentTypeListItem("blogPost").title("Blog Posts"),
    ]);
