import type { Navigate } from '../router'
import { PEOPLE } from '../content/people'
import Nav from '../components/Nav'
import PersonCard from '../components/PersonCard'
import Footer from '../components/Footer'
import styles from './Listing.module.css'

interface CrewProps {
  navigate: Navigate
}

export default function Crew({ navigate }: CrewProps) {
  return (
    <div className="paper-grid">
      <Nav current="crew" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--purple)' }}>
              [ CREW MANIFEST ]
            </span>
            <h1 className={styles.title}>PEOPLE TO FOLLOW</h1>
            <p className={styles.intro}>
              The maintainers, creators and contributors steering MCP. Follow them, read
              their work, and — when you ship your first server — tag them. They built the
              launchpad; you bring the rocket.
            </p>
          </header>

          <div className={styles.crewGrid}>
            {PEOPLE.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
