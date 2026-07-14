import { useState } from 'react'
import type { Navigate, Screen } from '../router'
import { DISCORD_URL } from '../data'
import styles from './Nav.module.css'

interface NavProps {
  /** Active screen — omit (e.g. on the standalone /moonpack page) to highlight nothing. */
  current?: Screen
  navigate: Navigate
}

const PRE_LINKS: { label: string; screen: Screen }[] = [
  { label: 'Servers', screen: 'servers' },
  { label: 'News', screen: 'news' },
  { label: 'Events', screen: 'events' },
  { label: 'Crew', screen: 'crew' },
]

const POST_LINKS: { label: string; screen: Screen }[] = [
  { label: 'Blog', screen: 'blog' },
  { label: 'Resources', screen: 'resources' },
]

/** The Community dropdown — overview first, then the three sub-pages. */
const COMMUNITY_LINKS: { label: string; screen: Screen }[] = [
  { label: 'Overview', screen: 'community' },
  { label: 'Partners', screen: 'partners' },
  { label: 'Members', screen: 'members' },
  { label: 'Moonshot Creators', screen: 'creators' },
]

const COMMUNITY_SCREENS: Screen[] = ['community', 'partners', 'members', 'creators']

export default function Nav({ current, navigate }: NavProps) {
  const homeActive = current === 'homeA' || current === 'homeB'
  const communityActive = current !== undefined && COMMUNITY_SCREENS.includes(current)
  const [open, setOpen] = useState(false)

  const go = (screen: Screen) => {
    navigate(screen)
    setOpen(false)
  }

  const navButtons = (
    <>
      <button
        className={`btn ${homeActive ? 'btn--yellow' : ''}`}
        aria-current={homeActive ? 'page' : undefined}
        onClick={() => go('homeA')}
      >
        Home
      </button>

      {PRE_LINKS.map((l) => (
        <button
          key={l.screen}
          className={`btn ${current === l.screen ? 'btn--yellow' : ''}`}
          aria-current={current === l.screen ? 'page' : undefined}
          onClick={() => go(l.screen)}
        >
          {l.label}
        </button>
      ))}

      {/* Community: opens the overview; hover/focus (desktop) or the sheet (mobile) reveals sub-pages. */}
      <div className={styles.dropdown}>
        <button
          className={`btn ${communityActive ? 'btn--yellow' : ''}`}
          aria-current={communityActive ? 'page' : undefined}
          aria-haspopup="true"
          onClick={() => go('community')}
        >
          Community ▾
        </button>
        <div className={styles.menu}>
          {COMMUNITY_LINKS.map((l) => (
            <button
              key={l.screen}
              className={`btn ${current === l.screen ? 'btn--yellow' : ''}`}
              aria-current={current === l.screen ? 'page' : undefined}
              onClick={() => go(l.screen)}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {POST_LINKS.map((l) => (
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
      <a
        className="btn btn--yellow"
        href="/moonpack"
        aria-label="Claim your MoonPack"
        onClick={() => setOpen(false)}
      >
        MoonPack 🚀
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
          <img
            className={styles.logo}
            src="/mcptothemoonlogo.png"
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
          />
          <span className={styles.wordmark}>MCP to the Moon</span>
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
