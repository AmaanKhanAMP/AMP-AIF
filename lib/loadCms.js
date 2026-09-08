/**
 * Server CMS loaders for layout + Home/Events first paint.
 *
 * Home/Events seed from loadHomeCms / loadEventsCms so Upcoming Events is
 * present in the initial HTML. Client loaders still revalidate after mount.
 * All fetches are time-bounded (see contentApi withTimeout).
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

/** Seconds — Next data cache for soft-nav reuse without unbounded waits. */
const HOME_EVENTS_REVALIDATE = 60;

export async function loadSiteShellCms() {
  const shellCache = { revalidate: 60 };
  const [navbarSettings, navbarItems, footerSettings, footerLinks, footerFocus] =
    await Promise.all([
      loadLayoutSettings("navbar"),
      loadPublished("navbar-items", mapNavbarItem, shellCache),
      loadLayoutSettings("footer"),
      loadPublished("footer-links", mapFooterLink, shellCache),
      loadPublished("footer-focus", mapFooterFocusItem, shellCache),
    ]);

  return {
    navbarSettings,
    navbarItems,
    footerSettings,
    footerLinks,
    footerFocus,
  };
}

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
    loadSectionVisibility("home_events", cache),
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

export async function loadEventsCms() {
  const cache = { revalidate: HOME_EVENTS_REVALIDATE };
  const [featuredEvents, upcomingEvents, pastEvents, upcomingVisible] =
    await Promise.all([
      loadPublished("featured-events", mapFeaturedEvent, cache),
      loadPublished("upcoming-events", mapUpcomingEvent, cache),
      loadPublished("past-events", mapPastEvent, cache),
      loadSectionVisibility("upcoming_events", cache),
    ]);

  return {
    featuredEvents,
    upcomingEvents,
    pastEvents,
    upcomingVisible,
  };
}
