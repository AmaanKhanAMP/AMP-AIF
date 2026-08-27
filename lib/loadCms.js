/**
 * Server-only CMS loaders for page/layout Server Components.
 *
 * Layout/shell uses cache: "no-store" (via contentApi defaults).
 * Home/Events use a short Data Cache TTL — those pages issue many CMS
 * requests and were much slower on soft navigation than static pages.
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

/** Seconds — Home/Events CMS Data Cache (keeps CMS updates timely, nav fast). */
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
