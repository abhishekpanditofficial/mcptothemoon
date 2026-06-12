import { COLOR_VAR, DARK_TEXT_ON, type Server } from '../data'
import styles from './ServerCard.module.css'

interface ServerCardProps {
  server: Server
  /** When true, show the install bar + INSTALL chip (Servers screen). */
  showInstall?: boolean
}

export default function ServerCard({ server, showInstall = false }: ServerCardProps) {
  const iconColor = COLOR_VAR[server.color]
  const darkText = DARK_TEXT_ON.has(server.color)

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span
          className={styles.icon}
          style={{ background: iconColor, color: darkText ? 'var(--ink)' : '#fff' }}
          aria-hidden="true"
        >
          {server.name[0].toUpperCase()}
        </span>
        <span className="chip">{server.category}</span>
      </div>

      <h3 className={styles.name}>{server.name}</h3>
      <p className={styles.desc}>{server.desc}</p>

      {showInstall && (
        <div className={styles.install}>
          <code>$ {server.cmd}</code>
        </div>
      )}

      <div className={styles.foot}>
        <span className={styles.stars}>★ {server.stars}</span>
        {showInstall && <span className={styles.installChip}>INSTALL</span>}
      </div>
    </article>
  )
}
