/**
 * Server-only CMS loaders for page/layout Server Components.
 *
 * Layout/shell uses cache: "no-store" (via contentApi defaults).
 * Home/Events load CMS in the browser after mount (see loadHomeCmsClient /
 * loadEventsCmsClient) so soft navigation is never blocked on those APIs.
 */

import {
  loadLayoutSettings,
  loadPublished,
  loadSectionVisibility,
  mapFeaturedEvent,
  mapFooterFocusItem,
  mapFooterLink,
  mapHeroBanner,
  mapHomeEvent,
  mapHomeGalleryItem,
  mapHomeProject,
  mapNavbarItem,
  mapPastEvent,
  mapTestimonial,
  mapUpcomingEvent,
} from "@/lib/contentApi";

/** Seconds — retained for any remaining server-side content loaders. */
const HOME_EVENTS_REVALIDATE = 60;

export async function loadSiteShellCms() {
  const [navbarSettings, navbarItems, footerSettings, footerLinks, footerFocus] =
    await Promise.all([
      loadLayoutSettings("navbar"),
      loadPublished("navbar-items", mapNavbarItem),
      loadLayoutSettings("footer"),
      loadPublished("footer-links", mapFooterLink),
      loadPublished("footer-focus", mapFooterFocusItem),
    ]);

  return {
    navbarSettings,
    navbarItems,
    footerSettings,
    footerLinks,
    footerFocus,
  };
}

/** @deprecated Prefer loadHomeCmsClient for routes — kept for scripts/tools. */
export async function loadHomeCms() {
  const cache = { revalidate: HOME_EVENTS_REVALIDATE };
  const [
    heroBanners,
    homeProjects,
    homeEvents,
    homeGallery,
    testimonials,
    homeEventsVisible,
  ] = await Promise.all([
    loadPublished("hero-banners", mapHeroBanner, cache),
    loadPublished("home-projects", mapHomeProject, cache),
    loadPublished("home-events", mapHomeEvent, cache),
    loadPublished("home-gallery", mapHomeGalleryItem, cache),
    loadPublished("testimonials", mapTestimonial, cache),
    loadSectionVisibility("home_events"),
  ]);

  return {
    heroBanners,
    homeProjects,
    homeEvents,
    homeGallery,
    testimonials,
    homeEventsVisible,
  };
}

/** @deprecated Prefer loadEventsCmsClient for routes — kept for scripts/tools. */
export async function loadEventsCms() {
  const cache = { revalidate: HOME_EVENTS_REVALIDATE };
  const [featuredEvents, upcomingEvents, pastEvents, upcomingVisible] =
    await Promise.all([
      loadPublished("featured-events", mapFeaturedEvent, cache),
      loadPublished("upcoming-events", mapUpcomingEvent, cache),
      loadPublished("past-events", mapPastEvent, cache),
      loadSectionVisibility("upcoming_events"),
    ]);

  return {
    featuredEvents,
    upcomingEvents,
    pastEvents,
    upcomingVisible,
  };
}
