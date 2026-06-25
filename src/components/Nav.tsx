import type { Navigate, Screen } from '../router'
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

  return (
    <nav className={styles.nav}>
      <div className={`${styles.inner} wrap`}>
        <button
          className={styles.brand}
          onClick={() => navigate('homeA')}
          aria-label="MCP to the Moon — home"
        >
          <Rocket cell={4} rotate={-18} scale={1.1} ariaHidden />
          <span className={styles.wordmark}>
            MCP<span className={styles.slash}>//</span>MOON
          </span>
        </button>

        <div className={styles.links}>
          <button
            className={`btn ${homeActive ? 'btn--yellow' : ''}`}
            aria-current={homeActive ? 'page' : undefined}
            onClick={() => navigate('homeA')}
          >
            Home
          </button>
          {LINKS.map((l) => (
            <button
              key={l.screen}
              className={`btn ${current === l.screen ? 'btn--yellow' : ''}`}
              aria-current={current === l.screen ? 'page' : undefined}
              onClick={() => navigate(l.screen)}
            >
              {l.label}
            </button>
          ))}
          <a className="btn btn--blue" href="#" aria-label="Join our Discord">
            Discord
          </a>
          <a
            className="btn btn--yellow"
            href="/moonpack"
            aria-label="Claim your MoonPack"
          >
            MoonPack 🚀
          </a>
        </div>
      </div>
    </nav>
  )
}
