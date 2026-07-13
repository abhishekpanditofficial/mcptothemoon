# Community Hub + Markdown Blog — Design

**Date:** 2026-07-13
**Repo:** mcptothemoon (React + TypeScript + Vite)

## Goal

Add four community-facing areas to the site:

1. **Partners** — companies backing MCP to the Moon (first: NitroStack, with fetched logo).
2. **Members** — people in the community (name, designation, image).
3. **Moonshot Creators** — contributors who agreed to make content; each links a LinkedIn video and their blog posts.
4. **Blog / technical writing** — a CMS-free blog sourced from Markdown files, authored by Moonshot Creators.

## Constraints & existing patterns

- No react-router. Routing is a `Screen` union in `src/router.ts`, a render switch in `App.tsx`, a `LINKS` array + `SCREENS` deep-link allow-list, and `?screen=` / `popstate` handling.
- Content lives as typed modules in `src/content/*.ts`.
- Design system: `paper-grid`, `.section`, `.wrap`, `.eyebrow`, `btn` classes; per-item accent colors via `COLOR_VAR` in `src/data.ts`; grouped listings via `Listing.module.css` (`crewGroup`, `groupTitle`, `crewGrid`).
- People currently render color-initial avatars (`PersonCard`); no image support yet.

## Decisions (from brainstorming)

- **Navigation:** one **Community** hub page (Partners + Members + Moonshot Creators stacked) plus a separate **Blog** nav item.
- **Blog engine:** real `.md` files parsed at build with **`marked`** (render) + **`gray-matter`** (frontmatter). Caveat: `gray-matter` needs a `Buffer` polyfill under Vite; if that's fragile, fall back to a ~10-line frontmatter parser. Load via `import.meta.glob('./posts/*.md', { query: '?raw', eager: true })`.
- **Content:** ship one real partner (NitroStack + logo) and clearly-marked placeholder members/creators/posts, plus a content README.
- **Creators ↔ Blog:** linked. A post's `author` frontmatter is a creator `slug`; creators link to their filtered posts and each post credits + links back to its creator.

## Architecture

### Routing
Add `'community'` and `'blog'` to the `Screen` union, the `App.tsx` switch, `Nav.tsx` `LINKS`, and the `SCREENS` allow-list. Individual posts render on the `blog` screen selected by a `?post=<slug>` query param (read on mount + `popstate`, set via `history.pushState`), mirroring the existing `?screen=` approach. Nav order: `Servers · News · Events · Crew · Community · Blog · Resources`.

### Content modules
- `src/content/partners.ts` — `Partner { name, blurb, logo, url, linkLabel, color }`. First entry: NitroStack → `public/partners/nitrostack.png`, https://nitrostack.ai.
- `src/content/members.ts` — `Member { name, role, image?, org?, color, link?, x? }`. Images in `public/members/`; fall back to color initials when `image` absent.
- `src/content/creators.ts` — `Creator { slug, name, role, image?, linkedInVideo, color, link? }`. Images in `public/creators/`. `slug` links posts to creators.
- `src/content/posts/*.md` — frontmatter `title, author (creator slug), date (ISO), summary, tags?, cover?`; body is Markdown.
- `src/content/posts.ts` — loads/parses the `.md` glob into a sorted `Post[]` (`{ slug, title, author, date, summary, tags, html }`), and helpers `getPost(slug)` / `postsByAuthor(slug)`.

### Components
- `PartnerCard` — logo tile + name + blurb + link.
- `MemberCard` — photo (or initials fallback) + name + designation + org.
- `CreatorCard` — photo + name + role + LinkedIn-video link + "Their posts →" (navigates to `blog?author=<slug>`, or filters in place).
- `PostCard` — title, author name, date, summary, tag chips; opens the post.
- Reuse `Listing.module.css` group/grid classes; add small CSS modules where a component needs new styling (e.g. `PartnerCard.module.css`, `PostView.module.css`).

### Screens
- `src/screens/Community.tsx` — Nav + three sections (Partners, Members, Moonshot Creators) using the group/grid pattern; Footer.
- `src/screens/Blog.tsx` — index of `PostCard`s (optional author filter from `?author=`); when `?post=<slug>` is present, render the single-post view (title, byline linking to creator, date, `marked`-rendered HTML via `dangerouslySetInnerHTML`, back link).

### Assets
- `public/partners/nitrostack.png` (fetched — done).
- `public/members/`, `public/creators/` for images (placeholder-friendly; cards fall back to initials).

### Content README
`src/content/README.md` documents: how to add a partner (+ logo path), a member (+ image), a creator (+ slug/video/image), and a new blog post (`.md` filename = slug, required frontmatter, `author` must match a creator slug).

## Dependencies
Add `marked` and `gray-matter`. No build/deploy config changes otherwise (Vite handles the `?raw` glob; add a `Buffer` polyfill only if `gray-matter` requires it).

## Testing / verification
- `npm install`, then `npm run build` (`tsc -b && vite build`) must pass with no type errors.
- `npm run dev`: Community renders all three sections with the NitroStack logo; Blog index lists placeholder posts; a post opens via `?post=` and its byline links to the creator; creator "Their posts →" filters/links correctly; back/forward navigation works.

## Out of scope
- Real member/creator data and additional blog posts (placeholders + README only).
- Comments, pagination, search, RSS.
