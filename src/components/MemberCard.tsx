import { useState } from 'react'
import { COLOR_VAR, DARK_TEXT_ON } from '../data'
import type { Member } from '../content/members'
import styles from './MemberCard.module.css'

/** Build a 2-letter monogram from a name, used when there's no photo. */
function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + (parts[parts.length - 1][0] ?? '')).toUpperCase()
}

export default function MemberCard({ member }: { member: Member }) {
  const accent = COLOR_VAR[member.color]
  const darkText = DARK_TEXT_ON.has(member.color)
  // Fall back to initials if the photo is missing or fails to load.
  const [imgOk, setImgOk] = useState(true)
  const showPhoto = Boolean(member.image) && imgOk

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span
          className={styles.avatar}
          style={
            showPhoto
              ? undefined
              : { background: accent, color: darkText ? 'var(--ink)' : '#fff' }
          }
          aria-hidden="true"
        >
          {showPhoto ? (
            <img
              className={styles.photo}
              src={member.image}
              alt=""
              onError={() => setImgOk(false)}
            />
          ) : (
            initials(member.name)
          )}
        </span>
        <div className={styles.id}>
          <h3 className={styles.name}>{member.name}</h3>
          <span className={styles.role}>{member.role}</span>
        </div>
      </div>

      {member.org && <span className={styles.org}>@ {member.org}</span>}

      {(member.link || member.x) && (
        <div className={styles.actions}>
          {member.link && (
            <a className={styles.link} href={member.link} target="_blank" rel="noreferrer">
              {member.link.includes('linkedin.com') ? 'LINKEDIN ↗' : 'PROFILE ↗'}
            </a>
          )}
          {member.x && (
            <a
              className={styles.xLink}
              href={`https://x.com/${member.x}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on X`}
            >
              @{member.x}
            </a>
          )}
        </div>
      )}
    </article>
  )
}
