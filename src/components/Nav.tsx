import { useState } from 'react'
import type { Navigate, Screen } from '../router'
import { DISCORD_URL } from '../data'
import Rocket from './Rocket'
import styles from './Nav.module.css'

interface NavProps {
  current: Screen
  navigate: Navigate
}

const LINKS: { label: string; screen: Screen }[] = [
  { label: 'Servers', screen: 'servers' },
  { label: 'News', screen: 'news' },
  { label: 'Events', screen: 'events' },
  { label: 'Crew', screen: 'crew' },
  { label: 'Resources', screen: 'resources' },
]

export default function Nav({ current, navigate }: NavProps) {
  const homeActive = current === 'homeA' || current === 'homeB'
  const [open, setOpen] = useState(false)

  const go = (screen: Screen) => {
    navigate(screen)
    setOpen(false)
  }

  // Home + section links, shared between the desktop row and the mobile sheet.
  const navButtons = (
    <>
      <button
        className={`btn ${homeActive ? 'btn--yellow' : ''}`}
        aria-current={homeActive ? 'page' : undefined}
        onClick={() => go('homeA')}
      >
        Home
      </button>
      {LINKS.map((l) => (
        <button
          key={l.screen}
          className={`btn ${current === l.screen ? 'btn--yellow' : ''}`}
          aria-current={current === l.screen ? 'page' : undefined}
          onClick={() => go(l.screen)}
        >
          {l.label}
        </button>
      ))}
      <a
        className="btn btn--blue"
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Join our Discord"
        onClick={() => setOpen(false)}
      >
        Discord
      </a>
    </>
  )

  return (
    <nav className={styles.nav}>
      <div className={`${styles.inner} wrap`}>
        <button
          className={styles.brand}
          onClick={() => go('homeA')}
          aria-label="MCP to the Moon — home"
        >
          <Rocket cell={4} rotate={-18} scale={1.1} ariaHidden />
          <span className={styles.wordmark}>
            MCP<span className={styles.slash}>//</span>MOON
          </span>
        </button>

        <div className={styles.links}>{navButtons}</div>

        <button
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && <div className={styles.sheet}>{navButtons}</div>}
    </nav>
  )
}
