# Editing site content

All community + blog content lives here as plain data — no CMS, no database.
Edit a file, commit, and the site rebuilds.

## Partners (`partners.ts`)

Each partner is a company backing MCP to the Moon.

1. Drop the logo into `public/partners/` (e.g. `public/partners/acme.png`).
2. Add an entry to `PARTNERS`:

```ts
{
  name: 'Acme',
  blurb: 'One line on what they do for the community.',
  logo: '/partners/acme.png',   // path is relative to /public
  url: 'https://acme.com',
  linkLabel: 'ACME ↗',
  color: 'red',                 // blue | red | yellow | green | purple | orange
}
```

## Members (`members.ts`)

People in the community — name, designation (`role`), and an optional photo.

1. Drop the photo into `public/members/` (square images look best).
2. Add an entry to `MEMBERS`:

```ts
{
  name: 'Ada Lovelace',
  role: 'Community Lead',        // designation
  org: 'MCP to the Moon',        // optional
  image: '/members/ada.jpg',     // optional — falls back to initials
  color: 'purple',
  link: 'https://…',             // optional profile link
  x: 'ada',                      // optional X handle, no @
}
```

## Moonshot Creators (`creators.ts`)

Contributors who make content for us. Each card shows their **LinkedIn video**
and links to their **blog posts**.

```ts
{
  slug: 'ada-lovelace',          // stable id — blog posts reference this
  name: 'Ada Lovelace',
  role: 'MCP Builder',
  image: '/creators/ada.jpg',    // optional — drop file in public/creators/
  linkedInVideo: 'https://www.linkedin.com/posts/…',  // their video on LinkedIn
  color: 'green',
}
```

## LinkedIn videos (`videos.ts`)

Recent videos from the MCP to the Moon LinkedIn, shown on the Moonshot Creators
page. LinkedIn blocks automated fetching, so these are added by hand.

For each post, open it on LinkedIn and either:

```ts
{
  title: 'What the video is about',
  url: 'https://www.linkedin.com/posts/…',   // link to the post
  thumbnail: '/videos/clip.jpg',             // optional preview image (public/videos/)
  date: '2026-07-01',
  color: 'blue',
}
```

…or, for a **live inline preview**, use the post's "Embed this post" option and
paste the iframe `src`:

```ts
{
  title: '…',
  url: 'https://www.linkedin.com/posts/…',
  embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:share:123…',
  color: 'blue',
}
```

## Blog posts (`posts/*.md`)

Real Markdown files — the filename becomes the URL slug
(`posts/my-post.md` → `?post=my-post`). Each file starts with frontmatter:

```markdown
---
title: My Post Title
author: ada-lovelace        # must match a creator `slug` above
date: 2026-07-10            # ISO date; newest sorts first
summary: One-line teaser shown on the blog index.
tags: MCP, Tutorial        # optional, comma-separated
---

## Your heading

Write the body in **Markdown**. Headings, lists, links, quotes and
`code` blocks are all supported.
```

Posts automatically link back to their author's creator card, and the creator
card links forward to their posts.
