export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
export const INDEXNOW_KEY = "51e9d2d62bf357523274a20c53e380c6";
export const INDEXNOW_MAX_URLS = 10_000;
export const DEFAULT_SITE_BASE_URL = "https://agentfirst.directory";

const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;
const INDEXABLE_EXACT_PATHS = new Set([
  "/",
  "/open-source-ai-agent-tools",
  "/research/state-of-agent-first-infrastructure",
]);
const INDEXABLE_COLLECTION_PATH_PATTERN = /^\/(?:tools|category)\/[^/]+\/?$/;

export function filterIndexNowUrls(urls, { siteBaseUrl = DEFAULT_SITE_BASE_URL } = {}) {
  if (!Array.isArray(urls)) {
    throw new Error("IndexNow URLs must be provided as an array.");
  }

  const siteUrl = new URL(siteBaseUrl);

  return urls.filter((value) => {
    let url;
    try {
      url = new URL(value);
    } catch {
      throw new Error(`IndexNow URL is invalid: ${value}`);
    }

    if (url.origin !== siteUrl.origin) {
      throw new Error(`IndexNow URL must belong to ${siteUrl.origin}: ${value}`);
    }

    return INDEXABLE_EXACT_PATHS.has(url.pathname)
      || INDEXABLE_COLLECTION_PATH_PATTERN.test(url.pathname);
  });
}

export function createIndexNowPayload(
  urls,
  {
    key = INDEXNOW_KEY,
    siteBaseUrl = DEFAULT_SITE_BASE_URL,
  } = {},
) {
  if (!KEY_PATTERN.test(key)) {
    throw new Error("IndexNow key must be 8–128 letters, numbers, or dashes.");
  }

  if (!Array.isArray(urls)) {
    throw new Error("IndexNow URLs must be provided as an array.");
  }

  const siteUrl = new URL(siteBaseUrl);
  if (!["http:", "https:"].includes(siteUrl.protocol)) {
    throw new Error("IndexNow site base URL must use http or https.");
  }

  const normalizedUrls = [];
  const seenUrls = new Set();

  for (const value of urls) {
    let url;
    try {
      url = new URL(value);
    } catch {
      throw new Error(`IndexNow URL is invalid: ${value}`);
    }

    if (!["http:", "https:"].includes(url.protocol) || url.origin !== siteUrl.origin) {
      throw new Error(`IndexNow URL must belong to ${siteUrl.origin}: ${value}`);
    }

    if (!seenUrls.has(url.href)) {
      seenUrls.add(url.href);
      normalizedUrls.push(url.href);
    }
  }

  if (normalizedUrls.length === 0) {
    throw new Error("At least one IndexNow URL is required.");
  }

  if (normalizedUrls.length > INDEXNOW_MAX_URLS) {
    throw new Error(`IndexNow accepts at most ${INDEXNOW_MAX_URLS} URLs per request.`);
  }

  return {
    host: siteUrl.host,
    key,
    keyLocation: new URL(`/${key}.txt`, siteUrl.origin).toString(),
    urlList: normalizedUrls,
  };
}

export async function submitIndexNow({
  urls,
  fetchImpl = fetch,
  endpoint = INDEXNOW_ENDPOINT,
  key = INDEXNOW_KEY,
  siteBaseUrl = DEFAULT_SITE_BASE_URL,
  timeoutMs = 15_000,
} = {}) {
  const indexableUrls = filterIndexNowUrls(urls, { siteBaseUrl });
  const payload = createIndexNowPayload(indexableUrls, { key, siteBaseUrl });
  const response = await fetchImpl(endpoint, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (![200, 202].includes(response.status)) {
    const responseBody = (await response.text()).slice(0, 500).trim();
    const detail = responseBody ? `: ${responseBody}` : "";
    throw new Error(`IndexNow submission failed with HTTP ${response.status}${detail}`);
  }

  return {
    status: response.status,
    submittedUrlCount: payload.urlList.length,
    keyLocation: payload.keyLocation,
  };
}
