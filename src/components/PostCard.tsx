import type { Post } from '../content/posts'
import { getCreator } from '../content/creators'
import styles from './PostCard.module.css'

/** Format an ISO date (YYYY-MM-DD) as "JUL 10, 2026". Falls back to the raw string. */
export function formatDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return iso
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  return `${months[Number(m[2]) - 1]} ${m[3]}, ${m[1]}`
}

export default function PostCard({ post, onOpen }: { post: Post; onOpen: () => void }) {
  const author = getCreator(post.author)

  return (
    <button className={styles.card} onClick={onOpen}>
      <div className={styles.meta}>
        {post.date && <span>{formatDate(post.date)}</span>}
        {author && <span className={styles.byline}>· {author.name}</span>}
        <span>· {post.readingMinutes} min</span>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.summary}>{post.summary}</p>
      {post.tags.length > 0 && (
        <div className={styles.tags}>
          {post.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      )}
      <span className={styles.readMore}>READ →</span>
    </button>
  )
}
