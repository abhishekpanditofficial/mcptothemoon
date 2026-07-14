import type { Navigate } from '../router'
import { PARTNERS } from '../content/partners'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import PartnerCard from '../components/PartnerCard'
import styles from './Listing.module.css'

export default function Partners({ navigate }: { navigate: Navigate }) {
  return (
    <div className="paper-grid">
      <Nav current="partners" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--blue)' }}>
              [ MISSION BACKERS ]
            </span>
            <h1 className={styles.title}>PARTNERS</h1>
            <p className={styles.intro}>
              The companies backing MCP to the Moon — building the tools and platforms
              that help the community ship MCP servers faster.
            </p>
          </header>

          <div className={styles.serverGrid}>
            {PARTNERS.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
