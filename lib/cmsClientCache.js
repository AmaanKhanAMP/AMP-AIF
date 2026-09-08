/**
 * In-memory + sessionStorage snapshots of Home/Events CMS payloads.
 * Soft navigations remount client pages with empty useState — without a
 * snapshot the Upcoming Events gate unmounts and the Hero falls back to
 * hardcoded slides, which is the visible flicker. Snapshots restore the
 * last known good CMS paint before the next network round-trip.
 *
 * Server Components must not read these — window/sessionStorage only.
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

/** Stable compare so background refresh does not re-paint identical CMS. */
export function cmsSnapshotEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
}
