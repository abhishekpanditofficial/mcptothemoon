import { fmt, type Counters } from '../hooks/useCounters'
import styles from './StatBar.module.css'

interface StatBarProps {
  counters: Counters
}

export default function StatBar({ counters }: StatBarProps) {
  const cells = [
    { label: 'BUILDERS', value: fmt(counters.builders), color: 'var(--blue)' },
    { label: 'SERVERS', value: fmt(counters.servers), color: 'var(--red)' },
    { label: '★ STARS', value: fmt(counters.stars), color: 'var(--ink)' },
  ]
  return (
    <div className={styles.bar} role="group" aria-label="Live community stats">
      {cells.map((c) => (
        <div key={c.label} className={styles.cell}>
          <span className={styles.value} style={{ color: c.color }}>
            {c.value}
          </span>
          <span className={styles.label}>{c.label}</span>
        </div>
      ))}
    </div>
  )
}
