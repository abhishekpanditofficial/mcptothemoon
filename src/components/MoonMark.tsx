import { MOON_TONES, PALETTES, SPAN, type MoonTone } from './moonCells'
import styles from './MoonMark.module.css'

export interface MoonMarkProps {
  /** Pixel size of each cell. ~2 in the nav (→ 54px moon). */
  cell?: number
  /** Color palette for the sphere. */
  tone?: MoonTone
  /** Enable the gentle idle bob. */
  interactive?: boolean
  ariaHidden?: boolean
  title?: string
}

/** Small procedural pixel-moon brand mark. */
export default function MoonMark({
  cell = 2,
  tone = 'blue',
  interactive = true,
  ariaHidden,
  title = 'Pixel moon mascot',
}: MoonMarkProps) {
  const palette = PALETTES[tone]
  return (
    <div
      className={`${styles.moon} ${interactive ? styles.bob : ''}`}
      style={{ gridTemplateColumns: `repeat(${SPAN}, ${cell}px)` }}
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : 'img'}
      aria-label={ariaHidden ? undefined : title}
    >
      {MOON_TONES.map((t, i) => (
        <span
          key={i}
          style={{
            width: cell,
            height: cell,
            background: t === null ? 'transparent' : palette[t],
          }}
        />
      ))}
    </div>
  )
}
