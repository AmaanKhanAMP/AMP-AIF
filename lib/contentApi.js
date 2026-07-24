/**
 * Public content API helpers for the website.
 * On network/API failure, callers keep hardcoded fallbacks.
 * An empty published list is success — do not restore fallbacks.
 */

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000").replace(
  /\/$/,
  ""
);

export function resolveMediaUrl(url) {
  if (!url) return "";
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("blob:") ||
    url.startsWith("data:")
  ) {
    return url;
  }
  return url.startsWith("/") ? `${API_BASE}${url}` : `${API_BASE}/${url}`;
}

async function fetchPublished(resource) {
  const res = await fetch(`${API_BASE}/api/content/${resource}`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${resource}`);
  const json = await res.json();
  if (!json?.success || !Array.isArray(json.data)) {
    throw new Error(`Invalid response for ${resource}`);
  }
  // Empty published list is valid — callers should not fall back to hardcoded data
  return json.data;
}

/**
 * Client-side fetch (no Next cache).
 * Returns { ok: true, data: array } on success (data may be empty).
 * Returns { ok: false, data: null } on network/API failure.
 */
export async function fetchContentClient(resource) {
  try {
    const res = await fetch(`${API_BASE}/api/content/${resource}`, {
      cache: "no-store",
    });
    if (!res.ok) return { ok: false, data: null };
    const json = await res.json();
    if (!json?.success || !Array.isArray(json.data)) {
      return { ok: false, data: null };
    }
    return { ok: true, data: json.data };
  } catch {
    return { ok: false, data: null };
  }
}

export function mapHeroBanner(row) {
  return {
    id: row.id,
    image: resolveMediaUrl(row.image_url),
    titleStart: row.title || "",
    titleAccent: row.title_accent || "",
    subtitle: row.subtitle || row.description || "",
    primaryBtnText: row.primary_btn_text || "Learn More",
    primaryLink: row.primary_btn_link || "/",
    secondaryBtnText: row.secondary_btn_text || "",
    secondaryLink: row.secondary_btn_link || "/",
  };
}

export function mapHomeProject(row) {
  return {
    id: row.id,
    image: resolveMediaUrl(row.image_url),
    title: row.title,
    description: row.description,
    link: row.button_link || "/projects",
    buttonText: row.button_text,
  };
}

export function mapHomeEvent(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    speaker: row.speaker,
    date: row.event_date,
    venue: row.venue,
    image: resolveMediaUrl(row.image_url),
    detailsLink: row.registration_link || "#",
  };
}

export function mapTestimonial(row) {
  return {
    id: row.id,
    name: row.name,
    role: row.designation || row.organisation || "",
    location: row.location || "",
    avatar: resolveMediaUrl(row.profile_image),
    quote: row.message?.startsWith('"') ? row.message : `"${row.message || ""}"`,
  };
}

export function mapFeaturedEvent(row) {
  return {
    id: row.id,
    title: row.title,
    date: row.event_date,
    time: row.event_time,
    venue: row.venue,
    category: row.category,
    description: row.description,
    image: resolveMediaUrl(row.banner_image),
    registrationLink: row.registration_link,
  };
}

export function mapUpcomingEvent(row) {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    date: row.event_date,
    venue: row.venue,
    description: row.description,
    image: resolveMediaUrl(row.image_url),
    registrationLink: row.registration_link,
  };
}

export function mapGalleryItem(row) {
  return {
    id: row.id,
    name: row.title,
    year: row.year,
    location: row.location,
    image: resolveMediaUrl(row.image_url),
    category: row.category,
    tall: false,
  };
}

export { fetchPublished, API_BASE };
