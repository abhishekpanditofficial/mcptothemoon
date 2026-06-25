import { useState } from 'react'
import type { Counters } from '../hooks/useCounters'
import type { Screen } from '../router'
import { SERVERS, EVENTS, REGISTRY_COUNTS } from '../data'
import { NEWS } from '../content/news'
import { PEOPLE } from '../content/people'
import { RESOURCE_GROUPS } from '../content/resources'
import Marquee from '../components/Marquee'
import Nav from '../components/Nav'
import Ticker from '../components/Ticker'
import Launchpad from '../components/Launchpad'
import StatBar from '../components/StatBar'
import ServerCard from '../components/ServerCard'
import NewsCard from '../components/NewsCard'
import EventRow from '../components/EventRow'
import PersonCard from '../components/PersonCard'
import ResourceCard from '../components/ResourceCard'
import Footer from '../components/Footer'
import home from './HomeA.module.css'
import listing from './Listing.module.css'
import styles from './MobileHome.module.css'

const PREVIEW = 3

interface MobileHomeProps {
  counters: Counters
}

/** Maps the shared nav screens to in-page section anchors. */
const SECTION_IDS: Partial<Record<Screen, string>> = {
  servers: 'm-servers',
  news: 'm-news',
  events: 'm-events',
  crew: 'm-crew',
  resources: 'm-resources',
}

function SeeMore({
  expanded,
  total,
  noun,
  onClick,
}: {
  expanded: boolean
  total: number
  noun: string
  onClick: () => void
}) {
  return (
    <button className={styles.seeMore} onClick={onClick} aria-expanded={expanded}>
      {expanded ? '▲ See less' : `▼ See all ${total} ${noun}`}
    </button>
  )
}

/**
 * Phone-only monolithic layout: every section lives on one scrolling page,
 * each showing a preview with a "See more" toggle. The desktop multi-screen
 * site is untouched — App decides which to render.
 */
export default function MobileHome({ counters }: MobileHomeProps) {
  const [openServers, setOpenServers] = useState(false)
  const [openNews, setOpenNews] = useState(false)
  const [openEvents, setOpenEvents] = useState(false)
  const [openCrew, setOpenCrew] = useState(false)
  const [openResources, setOpenResources] = useState(false)

  // Nav links scroll to the matching section instead of switching screens.
  const scrollTo = (screen: Screen) => {
    if (screen === 'homeA' || screen === 'homeB') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(SECTION_IDS[screen] ?? '')
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="paper-grid">
      <Marquee />
      <Nav current="homeA" navigate={scrollTo} />
      <Ticker />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className={`${home.hero} section`}>
        <div className={`${home.heroInner} wrap`}>
          <h1 className={home.title}>
            MCP TO THE
            <br />
            MOON <span className={home.rocketEmoji}>🚀</span>
          </h1>
          <p className={home.subhead}>
            Mission control for the open-source community building with the Model
            Context Protocol. We give servers. We take none. WAGMI.*
          </p>
          <p className={home.footnote}>*we're all gonna make it (ship)</p>

          <Launchpad cell={16} />
          <StatBar counters={counters} />
        </div>
      </header>

      {/* ── SERVERS ──────────────────────────────────────── */}
      <section id="m-servers" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>
            [ THE REGISTRY ]
          </span>
          <h2 className={styles.h2}>SERVER DIRECTORY</h2>
          <div className={listing.factStrip}>
            {REGISTRY_COUNTS.map((r) => (
              <div key={r.name} className={listing.fact}>
                <span className={listing.factValue}>{r.count}</span>
                <span className={listing.factLabel}>{r.name}</span>
              </div>
            ))}
          </div>
          <div className={listing.serverGrid}>
            {(openServers ? SERVERS : SERVERS.slice(0, PREVIEW)).map((s) => (
              <ServerCard key={s.name} server={s} showInstall />
            ))}
          </div>
          <SeeMore
            expanded={openServers}
            total={SERVERS.length}
            noun="servers"
            onClick={() => setOpenServers((o) => !o)}
          />
        </div>
      </section>

      {/* ── NEWS ─────────────────────────────────────────── */}
      <section id="m-news" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--green)' }}>
            [ MISSION LOG ]
          </span>
          <h2 className={styles.h2}>LATEST NEWS</h2>
          <div className={listing.newsGrid}>
            {(openNews ? NEWS : NEWS.slice(0, PREVIEW)).map((n) => (
              <NewsCard key={n.title} item={n} />
            ))}
          </div>
          <SeeMore
            expanded={openNews}
            total={NEWS.length}
            noun="stories"
            onClick={() => setOpenNews((o) => !o)}
          />
        </div>
      </section>

      {/* ── EVENTS ───────────────────────────────────────── */}
      <section id="m-events" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--red)' }}>
            [ MISSION SCHEDULE ]
          </span>
          <h2 className={styles.h2}>EVENTS & SUMMITS</h2>
          <div className={listing.eventList}>
            {(openEvents ? EVENTS : EVENTS.slice(0, PREVIEW)).map((e) => (
              <EventRow key={`${e.day}-${e.title}`} event={e} />
            ))}
          </div>
          <SeeMore
            expanded={openEvents}
            total={EVENTS.length}
            noun="events"
            onClick={() => setOpenEvents((o) => !o)}
          />
        </div>
      </section>

      {/* ── CREW ─────────────────────────────────────────── */}
      <section id="m-crew" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--purple)' }}>
            [ CREW MANIFEST ]
          </span>
          <h2 className={styles.h2}>PEOPLE TO FOLLOW</h2>
          <div className={listing.crewGrid}>
            {(openCrew ? PEOPLE : PEOPLE.slice(0, PREVIEW)).map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>
          <SeeMore
            expanded={openCrew}
            total={PEOPLE.length}
            noun="people"
            onClick={() => setOpenCrew((o) => !o)}
          />
        </div>
      </section>

      {/* ── RESOURCES ────────────────────────────────────── */}
      <section id="m-resources" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>
            [ SUPPLY DEPOT ]
          </span>
          <h2 className={styles.h2}>RESOURCES & DOCS</h2>
          {(openResources ? RESOURCE_GROUPS : RESOURCE_GROUPS.slice(0, 1)).map((group) => (
            <div key={group.heading} className={listing.group}>
              <div className={listing.groupHead}>
                <h3 className={listing.groupTitle}>{group.heading}</h3>
                <span className={listing.groupBlurb}>{group.blurb}</span>
              </div>
              <div className={listing.resourceGrid}>
                {group.items.map((r) => (
                  <ResourceCard key={r.title} resource={r} />
                ))}
              </div>
            </div>
          ))}
          <SeeMore
            expanded={openResources}
            total={RESOURCE_GROUPS.length}
            noun="sections"
            onClick={() => setOpenResources((o) => !o)}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
