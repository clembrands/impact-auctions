"use client";

import { createContext, useContext } from "react";
import { siteSettingsContent } from "@/content/site-settings";
import type { SiteSettings } from "@/content";

const SiteContentContext = createContext<SiteSettings>(siteSettingsContent);

/** Makes the Sanity "Site Settings" text available to header/footer/banners. */
export function SiteContentProvider({
  value,
  children,
}: {
  value: SiteSettings;
  children: React.ReactNode;
}) {
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
