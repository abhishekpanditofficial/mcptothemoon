import type { Navigate } from '../router'
import { PEOPLE, PERSON_GROUPS } from '../content/people'
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
              [ HALL OF FAME ]
            </span>
            <h1 className={styles.title}>HALL OF FAME</h1>
            <p className={styles.intro}>
              The creators, maintainers and community leaders who built and steer MCP.
              Follow them, read their work, and — when you ship your first server — tag
              them. They built the launchpad; you bring the rocket.
            </p>
          </header>

          {PERSON_GROUPS.map((group) => {
            const members = PEOPLE.filter((p) => p.group === group)
            if (members.length === 0) return null
            return (
              <div key={group} className={styles.crewGroup}>
                <h2 className={styles.groupTitle}>{group}</h2>
                <div className={styles.crewGrid}>
                  {members.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </div>
  )
}
