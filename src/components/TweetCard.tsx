import { Suspense } from 'react'
import { Tweet, TweetSkeleton, TweetNotFound } from 'react-tweet'
import { COLOR_VAR } from '../data'
import type { TweetItem } from '../content/tweets'
import { formatDate } from './PostCard'
import styles from './TweetCard.module.css'

/** Fallback shown when a tweet is deleted, protected, or fails to load. */
function NotFound({ item }: { item: TweetItem }) {
  return (
    <div className={styles.fallback}>
      <TweetNotFound />
      <a
        className={styles.fallbackLink}
        href={`https://x.com/mcptothemoon/status/${item.id}`}
        target="_blank"
        rel="noreferrer"
      >
        VIEW ON X ↗
      </a>
    </div>
  )
}

export default function TweetCard({ item }: { item: TweetItem }) {
  const accent = COLOR_VAR[item.color]

  return (
    <article className={styles.card} style={{ ['--accent' as string]: accent }}>
      <div className={styles.head}>
        <span className={styles.badge}>✕ X</span>
        <span className={styles.meta}>{formatDate(item.date)}</span>
      </div>

      <div className={styles.embed} data-theme="light">
        <Suspense fallback={<TweetSkeleton />}>
          <Tweet id={item.id} components={{ TweetNotFound: () => <NotFound item={item} /> }} />
        </Suspense>
      </div>
    </article>
  )
}
