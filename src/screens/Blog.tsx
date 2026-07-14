import { useEffect, useState } from 'react'
import type { Navigate } from '../router'
import { POSTS, getPost, postsByAuthor } from '../content/posts'
import { getCreator } from '../content/creators'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PostCard, { formatDate } from '../components/PostCard'
import listing from './Listing.module.css'
import styles from './Blog.module.css'

interface BlogProps {
  navigate: Navigate
}

interface BlogView {
  post?: string
  author?: string
}

function readParams(): BlogView {
  const q = new URLSearchParams(window.location.search)
  return { post: q.get('post') ?? undefined, author: q.get('author') ?? undefined }
}

export default function Blog({ navigate }: BlogProps) {
  const [view, setView] = useState<BlogView>(readParams)

  // Keep the view in sync with browser back/forward.
  useEffect(() => {
    const onPop = () => {
      setView(readParams())
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const push = (next: BlogView) => {
    const params = new URLSearchParams({ screen: 'blog' })
    if (next.post) params.set('post', next.post)
    if (next.author) params.set('author', next.author)
    history.pushState({}, '', `?${params.toString()}`)
    setView(next)
    window.scrollTo(0, 0)
  }

  const openPost = (slug: string) => push({ post: slug })
  const showAuthor = (slug: string) => push({ author: slug })
  const showAll = () => push({})

  const active = view.post ? getPost(view.post) : undefined

  return (
    <div className="paper-grid">
      <Nav current="blog" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          {active ? (
            <ArticleView slug={active.slug} onBack={showAll} onAuthor={showAuthor} />
          ) : (
            <BlogIndex authorFilter={view.author} onOpen={openPost} onClearFilter={showAll} />
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

function BlogIndex({
  authorFilter,
  onOpen,
  onClearFilter,
}: {
  authorFilter?: string
  onOpen: (slug: string) => void
  onClearFilter: () => void
}) {
  const filterCreator = authorFilter ? getCreator(authorFilter) : undefined
  const posts = authorFilter ? postsByAuthor(authorFilter) : POSTS

  return (
    <>
      <header className={listing.header}>
        <span className="eyebrow" style={{ color: 'var(--orange)' }}>
          [ TRANSMISSIONS ]
        </span>
        <h1 className={listing.title}>BLOG</h1>
        <p className={listing.intro}>
          Technical writing from our Moonshot Creators — guides, deep-dives and field
          notes on building with MCP.
        </p>
      </header>

      {authorFilter && (
        <div className={styles.filterBar}>
          <span className={styles.filterLabel}>
            Showing posts by <strong>{filterCreator?.name ?? authorFilter}</strong>
          </span>
          <button className={styles.back} onClick={onClearFilter}>
            ✕ ALL POSTS
          </button>
        </div>
      )}

      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet — check back soon. 🚀</p>
      ) : (
        <div className={styles.postGrid}>
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} onOpen={() => onOpen(p.slug)} />
          ))}
        </div>
      )}
    </>
  )
}

function ArticleView({
  slug,
  onBack,
  onAuthor,
}: {
  slug: string
  onBack: () => void
  onAuthor: (slug: string) => void
}) {
  const post = getPost(slug)!
  const author = getCreator(post.author)

  return (
    <article>
      <button className={styles.back} onClick={onBack}>
        ← BACK TO BLOG
      </button>

      <div className={styles.articleHead}>
        <h1 className={listing.title}>{post.title}</h1>
        <div className={styles.byline}>
          {post.date && <span>{formatDate(post.date)}</span>}
          {author && (
            <>
              <span>·</span>
              <span
                className={styles.authorLink}
                role="button"
                tabIndex={0}
                onClick={() => onAuthor(author.slug)}
                onKeyDown={(e) => e.key === 'Enter' && onAuthor(author.slug)}
              >
                {author.name}
              </span>
            </>
          )}
          <span>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>

      <div
        className={styles.article}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}
