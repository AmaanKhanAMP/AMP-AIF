/**
 * CMS loaders for the public site.
 * Layout uses these in Server Components; Home/Events call them after mount.
 * All requests use cache: "no-store" via contentApi helpers.
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
  const [heroBanners, homeProjects, homeEvents, homeGallery, testimonials] =
    await Promise.all([
      loadPublished("hero-banners", mapHeroBanner),
      loadPublished("home-projects", mapHomeProject),
      loadPublished("home-events", mapHomeEvent),
      loadPublished("home-gallery", mapHomeGalleryItem),
      loadPublished("testimonials", mapTestimonial),
    ]);

  return {
    heroBanners,
    homeProjects,
    homeEvents,
    homeGallery,
    testimonials,
  };
}

export async function loadEventsCms() {
  const [featuredEvents, upcomingEvents, pastEvents, upcomingVisible] =
    await Promise.all([
      loadPublished("featured-events", mapFeaturedEvent),
      loadPublished("upcoming-events", mapUpcomingEvent),
      loadPublished("past-events", mapPastEvent),
      loadSectionVisibility("upcoming_events"),
    ]);

  return {
    featuredEvents,
    upcomingEvents,
    pastEvents,
    upcomingVisible,
  };
}
