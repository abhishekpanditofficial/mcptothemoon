import { COLOR_VAR, DARK_TEXT_ON } from '../data'
import type { Person } from '../content/people'
import styles from './PersonCard.module.css'

interface PersonCardProps {
  person: Person
}

/** Build a 2-letter monogram from a person's name. */
function initials(name: string) {
  const parts = name.split(' ')
  return (parts[0][0] + (parts[parts.length - 1][0] ?? '')).toUpperCase()
}

export default function PersonCard({ person }: PersonCardProps) {
  const accent = COLOR_VAR[person.color]
  const darkText = DARK_TEXT_ON.has(person.color)

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span
          className={styles.avatar}
          style={{ background: accent, color: darkText ? 'var(--ink)' : '#fff' }}
          aria-hidden="true"
        >
          {initials(person.name)}
        </span>
        <div className={styles.id}>
          <h3 className={styles.name}>{person.name}</h3>
          <span className={styles.role}>{person.role}</span>
        </div>
      </div>

      <span className={styles.org}>@ {person.org}</span>
      <p className={styles.blurb}>{person.blurb}</p>

      <div className={styles.actions}>
        <a className={styles.link} href={person.link} target="_blank" rel="noreferrer">
          {person.linkLabel}
        </a>
        {person.x && (
          <a
            className={styles.xLink}
            href={`https://x.com/${person.x}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${person.name} on X`}
          >
            @{person.x}
          </a>
        )}
      </div>
    </article>
  )
}
