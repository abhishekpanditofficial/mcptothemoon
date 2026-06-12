import { COLOR_VAR, DARK_TEXT_ON } from '../data'
import type { NewsItem } from '../content/news'
import styles from './NewsCard.module.css'

interface NewsCardProps {
  item: NewsItem
}

export default function NewsCard({ item }: NewsCardProps) {
  const accent = COLOR_VAR[item.color]
  const darkText = DARK_TEXT_ON.has(item.color)

  return (
    <article className={styles.card} style={{ borderLeftColor: accent }}>
      <div className={styles.head}>
        <span
          className={styles.tag}
          style={{ background: accent, color: darkText ? 'var(--ink)' : '#fff' }}
        >
          {item.tag}
        </span>
        <span className={styles.date}>
          {item.date} · {item.year}
        </span>
        {item.upcoming && <span className={styles.soon}>◆ UPCOMING</span>}
      </div>

      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.blurb}>{item.blurb}</p>

      <a className={styles.source} href={item.url} target="_blank" rel="noreferrer">
        {item.source} ↗
      </a>
    </article>
  )
}
