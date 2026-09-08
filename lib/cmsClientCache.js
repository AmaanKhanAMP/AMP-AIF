/**
 * In-memory + sessionStorage snapshots of Home/Events CMS payloads.
 *
 * Critical: client revalidation must NEVER replace a successful published
 * array with `null` (fetch failure). That unmounts Upcoming Events because
 * the render gate requires Array.isArray(events).
 */

const HOME_KEY = "aif:cms:home:v1";
const EVENTS_KEY = "aif:cms:events:v1";

let homeMem = null;
let eventsMem = null;

function readStorage(key) {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Quota / private mode — memory cache still helps soft nav.
  }
}

export function peekHomeCms() {
  if (homeMem) return homeMem;
  homeMem = readStorage(HOME_KEY);
  return homeMem;
}

export function peekEventsCms() {
  if (eventsMem) return eventsMem;
  eventsMem = readStorage(EVENTS_KEY);
  return eventsMem;
}

export function rememberHomeCms(data) {
  if (!data || typeof data !== "object") return;
  homeMem = data;
  writeStorage(HOME_KEY, data);
}

export function rememberEventsCms(data) {
  if (!data || typeof data !== "object") return;
  eventsMem = data;
  writeStorage(EVENTS_KEY, data);
}

export function cmsSnapshotEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
}

/**
 * Prefer a successful published list (`[]` or `[...]`) over `null` (request
 * failure). Empty array is a real CMS result and must be allowed to clear.
 */
function keepPublishedList(next, prev) {
  return Array.isArray(next) ? next : prev;
}

function keepVisibility(next, prev) {
  return typeof next === "boolean" ? next : prev;
}

/** Merge client revalidation into existing SSR/snapshot without null wipes. */
export function mergeHomeCms(prev, next) {
  const base = prev && typeof prev === "object" ? prev : {};
  const incoming = next && typeof next === "object" ? next : {};
  return {
    heroBanners: keepPublishedList(incoming.heroBanners, base.heroBanners),
    homeProjects: keepPublishedList(incoming.homeProjects, base.homeProjects),
    homeEvents: keepPublishedList(incoming.homeEvents, base.homeEvents),
    homeGallery: keepPublishedList(incoming.homeGallery, base.homeGallery),
    testimonials: keepPublishedList(incoming.testimonials, base.testimonials),
    homeEventsVisible: keepVisibility(
      incoming.homeEventsVisible,
      base.homeEventsVisible
    ),
  };
}

export function mergeEventsCms(prev, next) {
  const base = prev && typeof prev === "object" ? prev : {};
  const incoming = next && typeof next === "object" ? next : {};
  return {
    featuredEvents: keepPublishedList(
      incoming.featuredEvents,
      base.featuredEvents
    ),
    upcomingEvents: keepPublishedList(
      incoming.upcomingEvents,
      base.upcomingEvents
    ),
    pastEvents: keepPublishedList(incoming.pastEvents, base.pastEvents),
    upcomingVisible: keepVisibility(
      incoming.upcomingVisible,
      base.upcomingVisible
    ),
  };
}
