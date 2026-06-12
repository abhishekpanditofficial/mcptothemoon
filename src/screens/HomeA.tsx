import type { Navigate } from '../router'
import type { Counters } from '../hooks/useCounters'
import { SERVERS } from '../data'
import { ECOSYSTEM_FACTS } from '../content/resources'
import { NEWS } from '../content/news'
import Marquee from '../components/Marquee'
import Nav from '../components/Nav'
import Ticker from '../components/Ticker'
import Launchpad from '../components/Launchpad'
import StatBar from '../components/StatBar'
import ServerCard from '../components/ServerCard'
import Footer from '../components/Footer'
import type { Screen } from '../router'
import styles from './HomeA.module.css'

const GALAXY: {
  screen: Screen
  glyph: string
  label: string
  title: string
  blurb: string
  color: string
}[] = [
  {
    screen: 'news',
    glyph: '📡',
    label: '[ MISSION LOG ]',
    title: 'LATEST NEWS',
    blurb: 'Every milestone from launch to Linux Foundation. Newest first.',
    color: 'var(--green)',
  },
  {
    screen: 'crew',
    glyph: '🧑‍🚀',
    label: '[ CREW MANIFEST ]',
    title: 'PEOPLE TO FOLLOW',
    blurb: 'The maintainers and creators steering the protocol.',
    color: 'var(--purple)',
  },
  {
    screen: 'events',
    glyph: '🗓️',
    label: '[ MISSION SCHEDULE ]',
    title: 'EVENTS & SUMMITS',
    blurb: 'Summits, hackathons and meetups across the galaxy.',
    color: 'var(--red)',
  },
  {
    screen: 'resources',
    glyph: '🛰️',
    label: '[ SUPPLY DEPOT ]',
    title: 'RESOURCES',
    blurb: 'Specs, SDKs, registries and required reading.',
    color: 'var(--orange)',
  },
]

interface HomeAProps {
  navigate: Navigate
  counters: Counters
}

const STAR_COLORS = ['var(--blue)', 'var(--red)', 'var(--yellow)', 'var(--green)', 'var(--purple)']

export default function HomeA({ navigate, counters }: HomeAProps) {
  return (
    <div className="paper-grid">
      <Marquee />
      <Nav current="homeA" navigate={navigate} />
      <Ticker />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header className={`${styles.hero} section`}>
        <div className={`${styles.heroInner} wrap`}>
          {/* scattered pixel stars */}
          {[
            { top: '8%', left: '6%', c: 0 },
            { top: '18%', left: '88%', c: 1 },
            { top: '40%', left: '4%', c: 2 },
            { top: '62%', left: '92%', c: 3 },
            { top: '78%', left: '12%', c: 4 },
            { top: '30%', left: '70%', c: 1 },
          ].map((s, i) => (
            <span
              key={i}
              className="star"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                background: STAR_COLORS[s.c],
              }}
            />
          ))}

          <button
            className={styles.latest}
            onClick={() => navigate('news')}
            aria-label={`Latest MCP news: ${NEWS[0].title}. Open the news log.`}
          >
            <span className={styles.latestDot} aria-hidden="true">
              ●
            </span>
            <span className={styles.latestTag}>LATEST DROP</span>
            <span className={styles.latestText}>{NEWS[0].title}</span>
            <span className={styles.latestGo} aria-hidden="true">
              read the log →
            </span>
          </button>

          <h1 className={styles.title}>
            MCP TO THE
            <br />
            MOON <span className={styles.rocketEmoji}>🚀</span>
          </h1>

          <p className={styles.subhead}>
            Mission control for the open-source community building with the Model
            Context Protocol. We give servers. We take none. WAGMI.*
          </p>
          <p className={styles.footnote}>*we're all gonna make it (ship)</p>

          <Launchpad cell={16} />

          <StatBar counters={counters} />
        </div>
      </header>

      {/* ── WHAT IS MCP? ─────────────────────────────────── */}
      <section className={`${styles.what} section`}>
        <div className={`${styles.whatGrid} wrap`}>
          <div className={styles.whatLeft}>
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              [ WHAT IS MCP? ]
            </span>
            <h2 className={styles.whatTitle}>
              USB-C FOR YOUR AI.
              <br />
              BUT OPEN SOURCE.
            </h2>
            <p className={styles.para}>
              MCP is the open standard that plugs a model into your files, APIs and
              databases. One protocol, spoken everywhere — so your AI stops guessing and
              starts doing.
            </p>
            <p className={styles.para}>
              Write a server once, and every MCP-speaking app can use it. No bespoke
              glue, no vendor lock-in, no rewrites. The community did the hard part — you
              just plug in.
            </p>
            <div className={styles.btnRow}>
              <button className="btn btn--blue" onClick={() => navigate('servers')}>
                Browse Servers
              </button>
              <a className="btn" href="#">
                Read the Docs
              </a>
            </div>
          </div>

          {/* faux terminal card */}
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={styles.dot} style={{ background: 'var(--red)' }} />
              <span className={styles.dot} style={{ background: 'var(--yellow)' }} />
              <span className={styles.dot} style={{ background: 'var(--green)' }} />
              <span className={styles.termPath}>~/your-first-server</span>
            </div>
            <div className={styles.termBody}>
              <p>
                <span className={styles.prompt}>$</span> npx -y @mcp/create-server
              </p>
              <p className={styles.dim}>scaffolding hello-moon…</p>
              <p className={styles.ok}>✓ server ready in 0.4s</p>
              <p>
                <span className={styles.prompt}>$</span> mcp connect hello-moon
              </p>
              <p className={styles.info}>◆ tool registered: launch()</p>
              <p className={styles.comment}>// the community did the hard part</p>
              <p>
                <span className={styles.cursor}>▮</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED SERVERS ─────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className={styles.featHead}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>
                [ HOT THIS WEEK ]
              </span>
              <h2 className={styles.featTitle}>FEATURED SERVERS</h2>
            </div>
            <button className="btn btn--yellow" onClick={() => navigate('servers')}>
              See All →
            </button>
          </div>
          <div className={styles.featGrid}>
            {SERVERS.slice(0, 3).map((s) => (
              <ServerCard key={s.name} server={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE THE GALAXY ───────────────────────────── */}
      <section className={`${styles.galaxy} section`}>
        <div className="wrap">
          <div className={styles.galaxyHead}>
            <span className="eyebrow" style={{ color: 'var(--purple)' }}>
              [ STAR MAP ]
            </span>
            <h2 className={styles.galaxyTitle}>EXPLORE THE GALAXY</h2>
            <p className={styles.galaxyIntro}>
              One hub, the whole ecosystem. News, people, events and resources —
              your single source of truth for everything MCP.
            </p>
          </div>

          <div className={styles.factStrip}>
            {ECOSYSTEM_FACTS.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factValue}>{f.value}</span>
                <span className={styles.factLabel}>{f.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.galaxyGrid}>
            {GALAXY.map((g) => (
              <button
                key={g.screen}
                className={styles.galaxyCard}
                onClick={() => navigate(g.screen)}
                style={{ borderTopColor: g.color }}
              >
                <span className={styles.galaxyGlyph} aria-hidden="true">
                  {g.glyph}
                </span>
                <span className={styles.galaxyLabel} style={{ color: g.color }}>
                  {g.label}
                </span>
                <span className={styles.galaxyCardTitle}>{g.title}</span>
                <span className={styles.galaxyBlurb}>{g.blurb}</span>
                <span className={styles.galaxyEnter}>ENTER →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ─────────────────────────────────────── */}
      <section className={styles.join}>
        <div className={`${styles.joinInner} wrap`}>
          <h2 className={styles.joinTitle}>JOIN THE MISSION</h2>
          <p className={styles.joinPara}>
            14,000+ builders are already in the Discord swapping servers, shipping demos
            and yelling WAGMI at 2am. Pull up a chair.
          </p>
          <a className="btn btn--yellow btn--big" href="#">
            Join the Discord →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
