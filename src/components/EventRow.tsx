import { COLOR_VAR, DARK_TEXT_ON, type EventItem } from '../data'
import styles from './EventRow.module.css'

interface EventRowProps {
  event: EventItem
}

export default function EventRow({ event }: EventRowProps) {
  const accent = COLOR_VAR[event.color]
  const darkText = DARK_TEXT_ON.has(event.color)

  return (
    <article className={styles.row}>
      <div
        className={styles.date}
        style={{ background: accent, color: darkText ? 'var(--ink)' : '#fff' }}
      >
        <span className={styles.day}>{event.day}</span>
        <span className={styles.month}>{event.month}</span>
      </div>

      <div className={styles.mid}>
        <div className={styles.tags}>
          <span className="chip">{event.type}</span>
          {event.upcoming ? (
            <span className={styles.live}>● UPCOMING</span>
          ) : (
            <span className={styles.past}>RECAP</span>
          )}
        </div>
        <h3 className={styles.title}>{event.title}</h3>
        <span className={styles.loc}>{event.location}</span>
        <p className={styles.blurb}>{event.blurb}</p>
      </div>

      <div className={styles.right}>
        <a
          className={event.upcoming ? styles.rsvp : styles.recap}
          href={event.url}
          target="_blank"
          rel="noreferrer"
        >
          {event.upcoming ? 'RSVP' : 'RECAP →'}
        </a>
      </div>
    </article>
  )
}
