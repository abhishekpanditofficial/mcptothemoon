import { TICKER } from '../content/news'
import styles from './Ticker.module.css'

function Track() {
  return (
    <span className={styles.track} aria-hidden="true">
      {TICKER.map((t, i) => (
        <span key={i} className={styles.item}>
          {t}
          <span className={styles.sep}>◆</span>
        </span>
      ))}
    </span>
  )
}

/** Slow-scrolling headline ticker — "live transmissions" from the ecosystem. */
export default function Ticker() {
  return (
    <div className={styles.bar} aria-label="Latest MCP headlines">
      <span className={styles.tag}>● LIVE</span>
      <div className={styles.viewport}>
        <div className={styles.inner}>
          <Track />
          <Track />
        </div>
      </div>
    </div>
  )
}
