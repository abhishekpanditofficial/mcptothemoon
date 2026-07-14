import type { Navigate, Screen } from '../router'
import { PARTNERS } from '../content/partners'
import { MEMBERS } from '../content/members'
import { CREATORS } from '../content/creators'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import listing from './Listing.module.css'
import styles from './Community.module.css'

interface CommunityProps {
  navigate: Navigate
}

interface Tile {
  screen: Screen
  name: string
  count: number
  color: string
  blurb: string
}

export default function Community({ navigate }: CommunityProps) {
  const tiles: Tile[] = [
    {
      screen: 'partners',
      name: 'PARTNERS',
      count: PARTNERS.length,
      color: 'var(--blue)',
      blurb: 'Companies backing the mission and building the MCP tooling.',
    },
    {
      screen: 'members',
      name: 'MEMBERS',
      count: MEMBERS.length,
      color: 'var(--purple)',
      blurb: 'The crew keeping the launchpad running.',
    },
    {
      screen: 'creators',
      name: 'MOONSHOT CREATORS',
      count: CREATORS.length,
      color: 'var(--green)',
      blurb: 'The folks making content — LinkedIn videos and posts.',
    },
  ]

  return (
    <div className="paper-grid">
      <Nav current="community" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={listing.header}>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>
              [ MISSION CONTROL ]
            </span>
            <h1 className={listing.title}>COMMUNITY</h1>
            <p className={listing.intro}>
              The partners, members and creators fueling MCP to the Moon. Pick a crew.
            </p>
          </header>

          <div className={styles.grid}>
            {tiles.map((t) => (
              <button
                key={t.screen}
                className={styles.card}
                style={{ borderColor: t.color }}
                onClick={() => navigate(t.screen)}
              >
                <span className={styles.count} style={{ color: t.color }}>
                  {t.count}
                </span>
                <span className={styles.name}>{t.name}</span>
                <p className={styles.blurb}>{t.blurb}</p>
                <span className={styles.go}>EXPLORE →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
