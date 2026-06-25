import type { Navigate } from '../router'
import type { Counters } from '../hooks/useCounters'
import { fmt } from '../hooks/useCounters'
import { useLaunch } from '../hooks/useLaunch'
import { DISCORD_URL, DOCS_URL } from '../data'
import Rocket from '../components/Rocket'
import FlameTrail from '../components/FlameTrail'
import styles from './HomeB.module.css'

interface HomeBProps {
  navigate: Navigate
  counters: Counters
}

export default function HomeB({ navigate, counters }: HomeBProps) {
  const { phase, launch, launching } = useLaunch()

  // Blast the rocket off, then ~0.5s later land the user in Discord.
  const launchToDiscord = () => {
    if (launching) return
    launch()
    window.setTimeout(() => {
      window.location.href = DISCORD_URL
    }, 500)
  }

  const stageClass = [
    styles.flyStage,
    phase === 'up' ? styles.up : '',
    phase === 'down' ? styles.down : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="paper-dots">
      {/* ── minimal nav ─────────────────────────────────── */}
      <nav className={styles.nav}>
        <button className={styles.wordmark} onClick={() => navigate('homeA')}>
          mcp <span className={styles.slash}>//</span>moon
        </button>
        <div className={styles.navLinks}>
          <button className={styles.linkY} onClick={() => navigate('servers')}>
            servers
          </button>
          <button className={styles.linkG} onClick={() => navigate('news')}>
            news
          </button>
          <button className={styles.linkB} onClick={() => navigate('events')}>
            events
          </button>
          <button className={styles.linkR} onClick={() => navigate('resources')}>
            resources
          </button>
          <a className={styles.discord} href={DISCORD_URL} target="_blank" rel="noreferrer">
            DISCORD ↗
          </a>
        </div>
      </nav>

      {/* ── split hero ──────────────────────────────────── */}
      <header className={`${styles.hero} section`}>
        <div className={`${styles.heroGrid} wrap`}>
          <div className={styles.left}>
            <span className={styles.sticker}>v1.0 · OPEN SOURCE · UNHINGED</span>
            <h1 className={styles.headline}>
              the community
              <br />
              shipping <span className={styles.blue}>MCP</span>
              <br />
              to the <span className={styles.red}>moon.</span>
            </h1>
            <p className={styles.para}>
              A scrappy hub for builders wiring models into the real world. Find a
              server, ship a server, send it. We give servers — we take none.
            </p>
            <div className={styles.ctaRow}>
              <button
                className="btn btn--red btn--big"
                onClick={launchToDiscord}
                disabled={launching}
              >
                ▶ Launch
              </button>
              <button className={styles.exploreLink} onClick={() => navigate('servers')}>
                explore servers →
              </button>
            </div>
            <p className={styles.launchWarning}>
              ⚠ heads up: launch will take you to our Discord ↗
            </p>
            <div className={styles.inlineStats}>
              <span>
                <b className={styles.blue}>{fmt(counters.builders)}</b> builders
              </span>
              <span>
                <b className={styles.red}>{fmt(counters.servers)}</b> servers
              </span>
              <span>
                <b>★ {fmt(counters.stars)}</b> stars
              </span>
            </div>
          </div>

          {/* rocket flying toward the moon */}
          <div className={styles.right}>
            <span className={styles.moon} aria-hidden="true" />
            <span className={styles.trajectory} aria-hidden="true" />
            <button
              className={styles.flyBtn}
              onClick={launchToDiscord}
              disabled={launching}
              aria-label="Launch the rocket — opens our Discord"
            >
              <span className={stageClass}>
                <Rocket cell={13} rotate={28} ariaHidden />
                {phase === 'up' && (
                  <span className={styles.flame}>
                    <FlameTrail cell={11} />
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── 01 / WHAT IS MCP dark band ──────────────────── */}
      <section className={styles.band}>
        <div className={`${styles.bandInner} wrap`}>
          <span className={styles.bandNum}>01 / WHAT IS MCP</span>
          <p className={styles.bandStatement}>
            MCP is the open standard that plugs a model into your{' '}
            <span className={styles.blue}>files</span>,{' '}
            <span className={styles.yellow}>APIs</span> and{' '}
            <span className={styles.red}>databases</span>. Write a server once and every
            MCP-speaking app can use it — no glue, no lock-in, no rewrites.
          </p>
          <div className={styles.bandBtns}>
            <button className="btn btn--yellow" onClick={() => navigate('servers')}>
              Browse Servers
            </button>
            <a className={styles.darkBtn} href={DOCS_URL} target="_blank" rel="noreferrer">
              Read Docs ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className={`${styles.cta} section`}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>come build with us 🚀</h2>
          <a
            className="btn btn--blue btn--big"
            href={DISCORD_URL}
            target="_blank"
            rel="noreferrer"
          >
            Join the Discord →
          </a>
          <p className={styles.fine}>
            Not financial advice. Definitely emotional advice. © 2026 the moon.
          </p>
        </div>
      </section>
    </div>
  )
}
