export type VideoColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface LinkedInVideo {
  title: string
  /** Link to the LinkedIn post. */
  url: string
  /**
   * Optional LinkedIn embed src for a live inline preview.
   * On the post → "…" menu → "Embed this post" → copy the iframe `src`.
   * e.g. "https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890"
   */
  embedUrl?: string
  /** Optional thumbnail under /public/videos/ (used when there's no embedUrl). */
  thumbnail?: string
  /** Optional ISO date, e.g. "2026-07-01". */
  date?: string
  color: VideoColor
}

/**
 * Recent videos from the MCP to the Moon LinkedIn.
 *
 * ⚠️ PLACEHOLDERS: LinkedIn blocks automated fetching, so these can't be pulled
 * in automatically. To add a real one, open the post on LinkedIn, and either:
 *   • paste its URL into `url` (+ optionally a `thumbnail` image), or
 *   • use "Embed this post" and paste the iframe src into `embedUrl` for a live
 *     inline preview.
 * See content/README.md.
 */
export const LINKEDIN_VIDEOS: LinkedInVideo[] = [
  {
    title: 'Latest video — replace with a real LinkedIn post',
    url: 'https://www.linkedin.com/company/mcptothemoon/posts/',
    date: '2026-07-01',
    color: 'blue',
  },
  {
    title: 'Latest video — replace with a real LinkedIn post',
    url: 'https://www.linkedin.com/company/mcptothemoon/posts/',
    date: '2026-06-24',
    color: 'green',
  },
  {
    title: 'Latest video — replace with a real LinkedIn post',
    url: 'https://www.linkedin.com/company/mcptothemoon/posts/',
    date: '2026-06-17',
    color: 'purple',
  },
]
