import type { Navigate } from '../router'
import { MEMBERS } from '../content/members'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import MemberCard from '../components/MemberCard'
import styles from './Listing.module.css'

export default function Members({ navigate }: { navigate: Navigate }) {
  return (
    <div className="paper-grid">
      <Nav current="members" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--purple)' }}>
              [ CREW MANIFEST ]
            </span>
            <h1 className={styles.title}>MEMBERS</h1>
            <p className={styles.intro}>
              The people who keep the launchpad running — organizers, contributors and
              community leads behind MCP to the Moon.
            </p>
          </header>

          <div className={styles.crewGrid}>
            {MEMBERS.map((m, i) => (
              <MemberCard key={`${m.name}-${i}`} member={m} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
