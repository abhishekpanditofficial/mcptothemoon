import { COLOR_VAR, DARK_TEXT_ON } from '../data'
import type { Creator } from '../content/creators'
import styles from './MemberCard.module.css'

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + (parts[parts.length - 1][0] ?? '')).toUpperCase()
}

interface CreatorCardProps {
  creator: Creator
  /** Number of blog posts this creator has authored. */
  postCount: number
  /** Jump to the blog filtered to this creator. */
  onViewPosts: () => void
}

export default function CreatorCard({ creator, postCount, onViewPosts }: CreatorCardProps) {
  const accent = COLOR_VAR[creator.color]
  const darkText = DARK_TEXT_ON.has(creator.color)

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span
          className={styles.avatar}
          style={
            creator.image
              ? undefined
              : { background: accent, color: darkText ? 'var(--ink)' : '#fff' }
          }
          aria-hidden="true"
        >
          {creator.image ? (
            <img className={styles.photo} src={creator.image} alt="" />
          ) : (
            initials(creator.name)
          )}
        </span>
        <div className={styles.id}>
          <h3 className={styles.name}>{creator.name}</h3>
          <span className={styles.role}>{creator.role}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          className={styles.link}
          href={creator.linkedInVideo}
          target="_blank"
          rel="noreferrer"
          aria-label={`${creator.name}'s video on LinkedIn`}
        >
          ▶ LINKEDIN VIDEO
        </a>
        {postCount > 0 && (
          <button className={styles.xLink} onClick={onViewPosts}>
            THEIR POSTS ({postCount}) →
          </button>
        )}
      </div>
    </article>
  )
}
