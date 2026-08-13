export type CreatorColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Creator {
  /** Stable id used to link posts (post frontmatter `author`) back to this creator. */
  slug: string
  name: string
  /** Designation / focus, e.g. "MCP Builder". */
  role: string
  /** Photo path under /public (e.g. "/creators/jane.jpg"). Falls back to initials when omitted. */
  image?: string
  /** URL of their content video posted on LinkedIn. */
  linkedInVideo: string
  color: CreatorColor
  /** Optional profile link. */
  link?: string
}

/**
 * The MOONSHOT CREATORS — folks who agreed to make content for us.
 * Each card shows their LinkedIn video and links to their blog posts
 * (posts whose frontmatter `author` matches this `slug`).
 *
 * PLACEHOLDER DATA: replace names, set `linkedInVideo` to the real LinkedIn
 * post URL, drop a photo in public/creators/ and set `image`. See content/README.md.
 */
export const CREATORS: Creator[] = []

export function getCreator(slug: string): Creator | undefined {
  return CREATORS.find((c) => c.slug === slug)
}
