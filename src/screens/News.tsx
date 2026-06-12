import type { Navigate } from '../router'
import { NEWS } from '../content/news'
import { ECOSYSTEM_FACTS } from '../content/resources'
import Nav from '../components/Nav'
import Ticker from '../components/Ticker'
import NewsCard from '../components/NewsCard'
import Footer from '../components/Footer'
import styles from './Listing.module.css'

interface NewsProps {
  navigate: Navigate
}

export default function News({ navigate }: NewsProps) {
  return (
    <div className="paper-grid">
      <Nav current="news" navigate={navigate} />
      <Ticker />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>
              [ MISSION LOG ]
            </span>
            <h1 className={styles.title}>THE BIGGEST MCP NEWS</h1>
            <p className={styles.intro}>
              Every milestone that took the Model Context Protocol from an internal
              Anthropic experiment to a Linux Foundation standard the whole industry
              speaks. Newest transmissions first.
            </p>
          </header>

          <div className={styles.factStrip}>
            {ECOSYSTEM_FACTS.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factValue}>{f.value}</span>
                <span className={styles.factLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.newsGrid}>
            {NEWS.map((n) => (
              <NewsCard key={n.title} item={n} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
