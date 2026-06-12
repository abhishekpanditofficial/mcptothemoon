import styles from './FlameTrail.module.css'

export interface FlameTrailProps {
  /** Base cell size — should roughly match the rocket's cell. */
  cell?: number
  /** Number of flame segments, top (wide) to bottom (narrow). */
  segments?: number
}

const FLAME_COLORS = ['#ffce1f', '#ff8c1a', '#ef3e36']

/**
 * A tall pixel flame trail: a column of tapering yellow/orange/red cells
 * that flicker. Rendered below the rocket during a launch.
 */
export default function FlameTrail({ cell = 14, segments = 14 }: FlameTrailProps) {
  const rows = []
  for (let i = 0; i < segments; i++) {
    const t = i / segments
    // Taper width from ~3 cells down to 1 as it descends.
    const width = Math.max(1, Math.round(3 - t * 2))
    const color = FLAME_COLORS[Math.min(FLAME_COLORS.length - 1, Math.floor(t * 3))]
    rows.push(
      <div
        key={i}
        className={styles.seg}
        style={{
          width: width * cell,
          height: cell,
          background: color,
          animationDelay: `${i * 60}ms`,
        }}
      />,
    )
  }

  return (
    <div className={styles.trail} aria-hidden="true">
      {rows}
    </div>
  )
}
