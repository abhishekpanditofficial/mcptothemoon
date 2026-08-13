# X (Tweet) Previews in Moonshot Creators — Design

**Date:** 2026-08-13
**Status:** Approved (pending spec review)

## Goal

Replace the placeholder "LATEST ON LINKEDIN" video section (currently on both the
desktop `MoonshotCreators` page and the `MobileHome` page) with a live **"LATEST ON X"**
section that renders inline previews of 18 tweets from
[@mcptothemoon](https://x.com/mcptothemoon), newest first. Each preview shows the
tweet's real content (text, media, author, timestamp) rendered directly on the site.

## Approach

Use the **`react-tweet`** library. In a Vite SPA its `<Tweet id={...} />` component
fetches each tweet through X's public **syndication API** at runtime — no API key, no
`platform.twitter.com/widgets.js` tracking script. Tweets that are deleted, protected,
or fail to load fall back gracefully (react-tweet renders an error state; we wrap it
with a link out to X).

## Components & Data Flow

### 1. `src/content/tweets.ts` (new)

Single source of truth for the tweets to display.

```ts
export type TweetColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface TweetItem {
  /** Numeric status id parsed from the tweet URL (react-tweet needs the id, not the URL). */
  id: string
  /** ISO date, e.g. "2026-08-13". Shown in the card meta line. */
  date: string
  color: TweetColor
}

export const TWEETS: TweetItem[] = [ /* 18 entries, newest first */ ]
```

IDs are the trailing `status/<id>` numbers from each URL. Full mapping (newest → oldest):

| id | date |
|----|------|
| 2087804970473324809 | 2026-08-13 |
| 2087409572512481733 | 2026-08-12 |
| 2087042417115402309 | 2026-08-11 |
| 2086787569149424090 | 2026-08-10 |
| 2085670813957771381 | 2026-08-07 |
| 2085359111030669517 | 2026-08-06 |
| 2080253188419240098 | 2026-07-23 |
| 2079453292275589517 | 2026-07-21 |
| 2077223512742453375 | 2026-07-15 |
| 2076515962313224504 | 2026-07-13 |
| 2076147392592945552 | 2026-07-12 |
| 2075787685546058048 | 2026-07-11 |
| 2075422660151169377 | 2026-07-10 |
| 2074697772071366799 | 2026-07-08 |
| 2074335141183574468 | 2026-07-07 |
| 2073693490706624692 | 2026-07-05 |
| 2073264553572618609 | 2026-07-04 |
| 2072545874853654929 | 2026-07-02 |

Accent colors rotate through the palette (blue, green, purple, orange, red, yellow…)
the same way the old videos did.

### 2. `src/components/TweetCard.tsx` + `TweetCard.module.css` (new)

Wraps `react-tweet`'s `<Tweet id={item.id} />` inside the site's card frame
(4px ink border + card shadow, matching the retro paper aesthetic used by `VideoCard`).

- Meta line above/below the embed: `✕ X · <formatted date>` (reuse `formatDate` from `PostCard`).
- Rendered in **light theme** with a scoped CSS-variable override in the module so the
  embedded tweet blends with the paper look (rounded corners removed / softened, matching border color where practical).
- Loading: react-tweet's built-in Suspense skeleton (`<TweetSkeleton />` / default placeholder).
- Error/missing: react-tweet renders `TweetNotFound`; we ensure a visible "View on X ↗"
  link out so a failed embed is never a dead card.

Props: `{ item: TweetItem }`.

### 3. `src/screens/MoonshotCreators.tsx` (edit)

- Remove `LINKEDIN_VIDEOS` and `VideoCard` imports and the LinkedIn `styles.group` block.
- Add a **"LATEST ON X"** section using the existing `styles.group` / `styles.groupHead` /
  `styles.newsGrid` layout, mapping `TWEETS` → `TweetCard`.
- Blurb copy: "Recent posts from the MCP to the Moon X."

### 4. `src/screens/MobileHome.tsx` (edit)

Same swap as above, using the `listing.*` class names already in that file and the
mobile blurb ("Recent posts.").

### 5. Dependency

Add `react-tweet` to `package.json` dependencies and install (updating both
`package-lock.json` and `pnpm-lock.yaml` to match the repo's committed lockfiles).

### 6. Cleanup

`src/content/videos.ts`, `src/components/VideoCard.tsx`, and `VideoCard.module.css`
become unused after both screens are updated → **delete them**.

## Testing / Verification

- `npm run build` (tsc + vite) passes with no type errors.
- `npm run dev` and load the Moonshot Creators page + mobile home: tweets render inline,
  newest first, in the card grid with correct accent framing.
- Spot-check that a bad/nonexistent id degrades to the not-found fallback rather than crashing.

## Out of Scope

- No CMS / dynamic fetching of the tweet list — the 18 tweets are a static curated list.
- No changes to the LinkedIn data model beyond deleting the now-unused files.
