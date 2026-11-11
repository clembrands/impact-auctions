/**
 * Registry of every editable piece of website text.
 *
 * Each entry becomes a single document in Sanity Studio (a "singleton"), and
 * its schema is generated automatically from the defaults object — so adding
 * a new text field is as simple as adding it to the defaults file and using
 * it in the page. No manual Sanity schema work required.
 *
 * NOTE: this file is imported by the Sanity Studio config, so keep it (and the
 * files it imports) free of "@/..." path aliases and React/Next imports.
 */
import { siteSettingsContent } from "./site-settings";
import { homeContent } from "./pages/home";
import { aboutContent } from "./pages/about";
import { servicesContent } from "./pages/services";
import { liveAuctionsContent } from "./pages/live-auctions";
import { fundANeedContent } from "./pages/fund-a-need";
import { headsOrTailsContent } from "./pages/heads-or-tails";
import { eventPlanningContent } from "./pages/event-planning";
import { emceeContent } from "./pages/emcee";
import { eventPlanningEmceeContent } from "./pages/event-planning-emcee";
import { silentAuctionsContent } from "./pages/silent-auctions";
import { virtualEventsContent } from "./pages/virtual-events";
import { auctionPackagesContent } from "./pages/auction-packages";
import { videosContent } from "./pages/videos";
import { contactContent } from "./pages/contact";
import { blogContent } from "./pages/blog";
import { notFoundContent } from "./pages/not-found";

export const pageRegistry = {
  homePage: { title: "Home", route: "/", defaults: homeContent },
  aboutPage: { title: "About", route: "/about", defaults: aboutContent },
  servicesPage: { title: "Services (Overview)", route: "/services", defaults: servicesContent },
  liveAuctionsPage: { title: "Services › Fundraising Auctioneer", route: "/services/live-auctions", defaults: liveAuctionsContent },
  fundANeedPage: { title: "Services › Fund-A-Need", route: "/services/fund-a-need", defaults: fundANeedContent },
  headsOrTailsPage: { title: "Services › Heads or Tails", route: "/services/heads-or-tails", defaults: headsOrTailsContent },
  eventPlanningPage: { title: "Services › Event Planning", route: "/services/event-planning", defaults: eventPlanningContent },
  emceePage: { title: "Services › Emcee", route: "/services/emcee", defaults: emceeContent },
  eventPlanningEmceePage: { title: "Services › Event Planning & Emcee", route: "/services/event-planning-emcee", defaults: eventPlanningEmceeContent },
  silentAuctionsPage: { title: "Services › Silent Auctions", route: "/services/silent-auctions", defaults: silentAuctionsContent },
  virtualEventsPage: { title: "Services › Virtual Events", route: "/services/virtual-events", defaults: virtualEventsContent },
  auctionPackagesPage: { title: "Auction Packages", route: "/auction-packages", defaults: auctionPackagesContent },
  videosPage: { title: "Videos", route: "/videos", defaults: videosContent },
  contactPage: { title: "Contact", route: "/contact", defaults: contactContent },
  blogPage: { title: "Blog (Listing & Post Pages)", route: "/blog", defaults: blogContent },
  notFoundPage: { title: "404 Not Found", route: "(404)", defaults: notFoundContent },
};

export const contentRegistry = {
  siteSettings: {
    title: "Site Settings (Header, Footer, Banners)",
    route: "(every page)",
    defaults: siteSettingsContent,
  },
  ...pageRegistry,
};

export type ContentId = keyof typeof contentRegistry;
export type PageId = keyof typeof pageRegistry;
export type ContentFor<K extends ContentId> = (typeof contentRegistry)[K]["defaults"];
export type SiteSettings = typeof siteSettingsContent;
