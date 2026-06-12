import styles from './DirToggle.module.css'

interface DirToggleProps {
  active: 'A' | 'B'
  onPick: (dir: 'A' | 'B') => void
}

export default function DirToggle({ active, onPick }: DirToggleProps) {
  return (
    <div className={styles.toggle} role="group" aria-label="Switch home direction">
      <span className={styles.lead}>DIR</span>
      <button
        className={active === 'A' ? styles.on : styles.off}
        aria-pressed={active === 'A'}
        onClick={() => onPick('A')}
      >
        A
      </button>
      <span className={styles.bar}>|</span>
      <button
        className={active === 'B' ? styles.on : styles.off}
        aria-pressed={active === 'B'}
        onClick={() => onPick('B')}
      >
        B
      </button>
    </div>
  )
}
