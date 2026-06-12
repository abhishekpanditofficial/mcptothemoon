import styles from './Rocket.module.css'

const COLORS: Record<string, string> = {
  K: '#15140f',
  W: '#f1efe2',
  S: '#cdcab8',
  B: '#2b6fed',
  E: '#ffffff',
  M: '#ffffff',
  R: '#ef3e36',
  D: '#c4251f',
  Y: '#ffce1f',
  O: '#ff8c1a',
}

// 13 cols × 23 rows. '.' = transparent.
const ROWS = [
  '......K......',
  '.....KWK.....',
  '.....KWK.....',
  '....KWSWK....',
  '....KWWWK....',
  '...KWWWWWK...',
  '...KWWWWWK...',
  '..KWBBBBBWK..',
  '..KWBBBBBWK..',
  '..KWBEBEBWK..',
  '..KWBBBBBWK..',
  '..KWMBBBMWK..',
  '..KWBMMMBWK..',
  '..KWBBBBBWK..',
  '..KWWWWWWWK..',
  '.RKWWWWWWWKR.',
  'RDKWWWWWWWKDR',
  'RDKWWSWSWWKDR',
  '.RKKKKKKKKKR.',
  '...KOYOYOK...',
  '....OYOYO....',
  '.....OYO.....',
  '......Y......',
]

const COLS = 13
const ROW_COUNT = ROWS.length

export interface RocketProps {
  /** Pixel size of each cell. ~16 in heroes, ~4 in navs/footers. */
  cell?: number
  /** Enable idle bob + hover wiggle. */
  interactive?: boolean
  /** Static visual transform (e.g. rotate) applied to the whole rocket. */
  rotate?: number
  scale?: number
  onClick?: () => void
  className?: string
  ariaHidden?: boolean
  title?: string
}

export default function Rocket({
  cell = 16,
  interactive = false,
  rotate,
  scale,
  onClick,
  className,
  ariaHidden,
  title = 'Pixel rocket mascot',
}: RocketProps) {
  const baseTransform =
    rotate !== undefined || scale !== undefined
      ? `rotate(${rotate ?? 0}deg) scale(${scale ?? 1})`
      : undefined

  const cells = []
  for (let r = 0; r < ROW_COUNT; r++) {
    const row = ROWS[r]
    for (let c = 0; c < COLS; c++) {
      const ch = row[c]
      cells.push(
        <div
          key={`${r}-${c}`}
          style={{
            width: cell,
            height: cell,
            background: ch === '.' ? 'transparent' : COLORS[ch],
          }}
        />,
      )
    }
  }

  const classes = [
    styles.rocket,
    interactive ? styles.interactive : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const Tag = onClick ? 'button' : 'div'

  return (
    <Tag
      type={onClick ? 'button' : undefined}
      className={classes}
      onClick={onClick}
      aria-hidden={ariaHidden}
      aria-label={onClick ? title : undefined}
      title={onClick ? title : undefined}
      style={{ '--rk-base': baseTransform } as React.CSSProperties}
    >
      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${cell}px)`,
          gridTemplateRows: `repeat(${ROW_COUNT}, ${cell}px)`,
        }}
      >
        {cells}
      </div>
    </Tag>
  )
}
