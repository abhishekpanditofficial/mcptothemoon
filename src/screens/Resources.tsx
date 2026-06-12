import type { Navigate } from '../router'
import { RESOURCE_GROUPS } from '../content/resources'
import Nav from '../components/Nav'
import ResourceCard from '../components/ResourceCard'
import Footer from '../components/Footer'
import styles from './Listing.module.css'

interface ResourcesProps {
  navigate: Navigate
}

export default function Resources({ navigate }: ResourcesProps) {
  return (
    <div className="paper-grid">
      <Nav current="resources" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--orange)' }}>
              [ SUPPLY DEPOT ]
            </span>
            <h1 className={styles.title}>RESOURCES & DOCS</h1>
            <p className={styles.intro}>
              Hand-picked, real, and regularly the difference between "it works" and "why
              won't it work." Specs, SDKs, registries, podcasts and the people who keep it
              all running.
            </p>
          </header>

          {RESOURCE_GROUPS.map((group) => (
            <div key={group.heading} className={styles.group}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>{group.heading}</h2>
                <span className={styles.groupBlurb}>{group.blurb}</span>
              </div>
              <div className={styles.resourceGrid}>
                {group.items.map((r) => (
                  <ResourceCard key={r.title} resource={r} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
