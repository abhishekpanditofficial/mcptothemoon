export type TweetColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface TweetItem {
  /** Numeric status id parsed from the tweet URL — react-tweet needs the id, not the URL. */
  id: string
  /** ISO date, e.g. "2026-08-13". Shown in the card meta line. */
  date: string
  color: TweetColor
}

const PALETTE: TweetColor[] = ['blue', 'green', 'purple', 'orange', 'red', 'yellow']

/**
 * Curated posts from the MCP to the Moon X (twitter.com/mcptothemoon), newest first.
 * `id` is the trailing status number from each tweet URL, e.g.
 *   https://x.com/mcptothemoon/status/2087804970473324809 → "2087804970473324809".
 *
 * Rendered inline via <TweetCard> (react-tweet). To add one, drop the id + date at
 * the top of this list; accent colors rotate automatically.
 */
export const TWEETS: TweetItem[] = [
  { id: '2087804970473324809', date: '2026-08-13' },
  { id: '2087409572512481733', date: '2026-08-12' },
  { id: '2087042417115402309', date: '2026-08-11' },
  { id: '2086787569149424090', date: '2026-08-10' },
  { id: '2085670813957771381', date: '2026-08-07' },
  { id: '2085359111030669517', date: '2026-08-06' },
  { id: '2080253188419240098', date: '2026-07-23' },
  { id: '2079453292275589517', date: '2026-07-21' },
  { id: '2077223512742453375', date: '2026-07-15' },
  { id: '2076515962313224504', date: '2026-07-13' },
  { id: '2076147392592945552', date: '2026-07-12' },
  { id: '2075787685546058048', date: '2026-07-11' },
  { id: '2075422660151169377', date: '2026-07-10' },
  { id: '2074697772071366799', date: '2026-07-08' },
  { id: '2074335141183574468', date: '2026-07-07' },
  { id: '2073693490706624692', date: '2026-07-05' },
  { id: '2073264553572618609', date: '2026-07-04' },
  { id: '2072545874853654929', date: '2026-07-02' },
].map((t, i) => ({ ...t, color: PALETTE[i % PALETTE.length] }))
