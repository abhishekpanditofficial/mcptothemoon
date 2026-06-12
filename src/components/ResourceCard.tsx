import { COLOR_VAR, DARK_TEXT_ON } from '../data'
import type { Resource } from '../content/resources'
import styles from './ResourceCard.module.css'

interface ResourceCardProps {
  resource: Resource
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const accent = COLOR_VAR[resource.color]
  const darkText = DARK_TEXT_ON.has(resource.color)

  return (
    <a className={styles.card} href={resource.url} target="_blank" rel="noreferrer">
      <div className={styles.head}>
        <span
          className={styles.kind}
          style={{ background: accent, color: darkText ? 'var(--ink)' : '#fff' }}
        >
          {resource.kind}
        </span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>

      <h3 className={styles.title}>{resource.title}</h3>
      <p className={styles.desc}>{resource.desc}</p>
      <span className={styles.host}>{resource.host}</span>
    </a>
  )
}
