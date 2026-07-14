import { marked } from 'marked'

/**
 * A blog post, sourced from a Markdown file in ./posts/*.md.
 * No CMS: files are read at build time, frontmatter is parsed, and the
 * Markdown body is rendered to HTML with `marked`.
 */
export interface Post {
  /** URL slug — the .md filename without extension. */
  slug: string
  title: string
  /** Author's creator `slug` (see content/creators.ts) — links a post to its Moonshot Creator. */
  author: string
  /** ISO date string, e.g. "2026-07-10". Used for sorting + display. */
  date: string
  summary: string
  tags: string[]
  /** Optional cover image path under /public. */
  cover?: string
  /** Rendered HTML of the Markdown body. */
  html: string
  /** Estimated reading time in minutes (≈200 wpm, min 1). */
  readingMinutes: number
}

/**
 * Split a raw .md file into its frontmatter fields and Markdown body.
 * Browser-safe by design — a tiny `key: value` parser, no gray-matter/Buffer.
 * Supports quoted values and comma-separated lists (handled by callers).
 */
function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const field = /^([A-Za-z0-9_]+)\s*:\s*(.*)$/.exec(line)
    if (!field) continue
    let value = field[2].trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    data[field[1]] = value
  }
  return { data, body: match[2] }
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

// Vite reads every .md file as a raw string at build time. Add a file → it appears.
const files = import.meta.glob('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

/** All posts, newest first. */
export const POSTS: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw)
    const slug = slugFromPath(path)
    const words = body.trim().split(/\s+/).filter(Boolean).length
    return {
      slug,
      title: data.title ?? slug,
      author: data.author ?? '',
      date: data.date ?? '',
      summary: data.summary ?? '',
      tags: data.tags
        ? data.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      cover: data.cover || undefined,
      html: marked.parse(body, { async: false }) as string,
      readingMinutes: Math.max(1, Math.round(words / 200)),
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug)
}

/** Posts written by a given creator (matches `author` to a creator `slug`). */
export function postsByAuthor(slug: string): Post[] {
  return POSTS.filter((p) => p.author === slug)
}
