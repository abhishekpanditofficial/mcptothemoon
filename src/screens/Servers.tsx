import type { Navigate } from '../router'
import { SERVERS } from '../data'
import Nav from '../components/Nav'
import ServerCard from '../components/ServerCard'
import Footer from '../components/Footer'
import styles from './Listing.module.css'

interface ServersProps {
  navigate: Navigate
}

export default function Servers({ navigate }: ServersProps) {
  return (
    <div className="paper-grid">
      <Nav current="servers" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              [ THE REGISTRY ]
            </span>
            <h1 className={styles.title}>SERVER DIRECTORY</h1>
            <p className={styles.intro}>
              A hand-picked starter pack to get you connected fast. The full ecosystem is
              36,000+ servers deep — when you outgrow these, the official registry has the
              rest.
            </p>
            <a
              className="btn btn--blue"
              href="https://registry.modelcontextprotocol.io"
              target="_blank"
              rel="noreferrer"
            >
              Browse the Official Registry →
            </a>
          </header>

          <div className={styles.serverGrid}>
            {SERVERS.map((s) => (
              <ServerCard key={s.name} server={s} showInstall />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
