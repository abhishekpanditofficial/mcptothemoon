import styles from './Marquee.module.css'

const ITEMS = [
  'MODEL CONTEXT PROTOCOL',
  'TO THE MOON',
  'OPEN SOURCE',
  'WAGMI',
  'SHIP SERVERS',
  'GIVE SERVERS, TAKE NONE',
  'WRITE ONCE, PLUG IN EVERYWHERE',
]

function Track() {
  return (
    <span className={styles.track} aria-hidden="true">
      {ITEMS.map((it, i) => (
        <span key={i} className={styles.item}>
          {it}
          <span className={styles.sep}>★</span>
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className={styles.bar} role="marquee" aria-label="Community slogans">
      <div className={styles.inner}>
        {/* duplicated content, animated translateX 0 -> -50% */}
        <Track />
        <Track />
      </div>
    </div>
  )
}
