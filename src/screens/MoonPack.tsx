import { useEffect, useState } from 'react'
import './MoonPack.css'

/*
 * MoonPack — MCP to the Moon × NitroStack partnership landing page.
 * Ported from the original NitroStack Next.js route into this Vite app as /moonpack.
 * next/link → <a>, next/image → <img>, posthog tracking removed.
 */

const PARTNER_URL = 'https://mcptothemoon.com'
const PARTNER_LOGO =
  'https://res.cloudinary.com/dbtfmldin/image/upload/v1781850552/mcp-to-the-moon_d8y1uj.png'
const PARTNER_DISCORD_URL = 'https://discord.gg/C25DjtV2R'
// Where the "Claim your MoonPack" CTAs send members to claim the bundle.
const CLAIM_URL = 'https://nitrostack.ai/moonpack'

const TICKER_ITEMS = [
  '14,000+ BUILDERS ONLINE',
  'MOONPACK IS LIVE',
  'MCP TO THE MOON',
  'WAGMI',
  'LINUX FOUNDATION BACKED',
]

const NAV_LINKS = [
  { label: 'Servers', href: `${PARTNER_URL}/servers`, tone: 'y' as const },
  { label: 'Docs', href: 'https://modelcontextprotocol.io/docs', tone: 'b' as const },
  { label: 'Events', href: `${PARTNER_URL}/events`, tone: 'r' as const },
  { label: 'News', href: `${PARTNER_URL}/news`, tone: 'g' as const },
]

const FOOTER_LINKS = [
  { label: 'Servers', href: `${PARTNER_URL}/servers` },
  { label: 'People', href: `${PARTNER_URL}/people` },
  { label: 'Events', href: `${PARTNER_URL}/events` },
  { label: 'Resources', href: `${PARTNER_URL}/resources` },
  { label: 'Discord', href: PARTNER_DISCORD_URL },
]

const PERKS = [
  {
    tag: 'TOKENS',
    icon: '⚡',
    title: 'Up to 100M LLM tokens',
    description:
      'Up to 100M tokens on the frontier models you already use. Claude, GPT, Gemini, and more. No card to start.',
    chip: 'UP TO 100M',
  },
  {
    tag: 'DEPLOY',
    icon: '🛰️',
    title: 'Free deploy on premium infra',
    description:
      'Ship your MCP server on premium infrastructure. One free deploy included with your MoonPack.',
    chip: 'NO CARD',
  },
  {
    tag: 'GRANT',
    icon: '💰',
    title: 'Chance to win $10,000',
    description:
      'Not everyone gets it, but every shipped project is in the running. Top builds from the community can win the $10,000 MoonPack grant.',
    chip: 'COMPETE',
  },
  {
    tag: 'IDEAS',
    icon: '💡',
    title: 'Ready-to-ship MCP ideas',
    description:
      'Skip the blank page. Pick a curated MCP idea and start building the same day you claim.',
    chip: 'START FAST',
  },
  {
    tag: 'RANK',
    icon: '🏆',
    title: 'Leaderboard spotlight',
    description:
      'Get ranked and featured in front of 14,000 MCP builders who are actually shipping.',
    chip: '14K EYES',
  },
  {
    tag: 'FOUNDER',
    icon: '🎖️',
    title: 'Founding Member badge',
    description:
      'First 100 claimants lock in Founding Member status. Permanent badge and early access to new drops.',
    chip: 'FIRST 100',
  },
]

const TIMELINE = [
  {
    label: '[ STEP 1 ]',
    badge: 'LIVE',
    title: 'Claim your MoonPack',
    description:
      'Free for every MCP to the Moon member. Tokens, deploy, and creator access unlock on claim.',
    borderColor: 'var(--mcp-green)',
  },
  {
    label: '[ STEP 2 ]',
    badge: 'BUILD',
    title: 'Ship your MCP server',
    description:
      'Use your tokens, deploy to production, and get a real server live before the week is out.',
    borderColor: 'var(--mcp-blue)',
  },
  {
    label: '[ STEP 3 ]',
    badge: 'SHARE',
    title: 'Post it in the community',
    description:
      'Drop your build inside MCP to the Moon. Get feedback, climb the leaderboard, and get seen by other builders.',
    borderColor: 'var(--mcp-yellow)',
  },
]

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      strokeWidth={2.5}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 32 32"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mcp-burger-icon"
      style={{
        width: 20,
        height: 20,
        transition: 'transform 500ms ease-in-out',
        transform: open ? 'rotate(-45deg)' : 'none',
      }}
    >
      <path
        style={{
          transition: 'all 500ms ease-in-out',
          strokeDasharray: open ? '20 300' : '12 63',
          strokeDashoffset: open ? '-32.42px' : undefined,
        }}
        d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
      />
      <path d="M7 16 27 16" />
    </svg>
  )
}

function McpMoonNavbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const tickerTrack = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <>
      <div className="mcp-ticker" aria-hidden>
        <div className="mcp-ticker-inner">
          {tickerTrack.map((item, i) => (
            <span key={`${item}-${i}`} className="mcp-ticker-item">
              {item}
              <span className="mcp-ticker-sep">★</span>
            </span>
          ))}
        </div>
      </div>

      <header className="mcp-nav">
        <div className="mcp-nav-inner">
          <a href={PARTNER_URL} target="_blank" rel="noopener noreferrer" className="mcp-wordmark">
            <img src={PARTNER_LOGO} alt="" width={28} height={28} className="rounded-sm" />
            <span>
              MCP<span className="mcp-text-yellow">/</span>MOON
            </span>
          </a>

          <nav className="mcp-nav-links mcp-nav-links--desktop" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mcp-nav-link mcp-nav-link--${link.tone}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a
              href={CLAIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mcp-btn mcp-btn--blue mcp-nav-cta"
            >
              Claim MoonPack
            </a>

            <button
              type="button"
              className="mcp-btn mcp-nav-burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <MenuToggleIcon open={open} />
            </button>
          </div>
        </div>

        {open ? (
          <div
            className="mcp-nav-sheet"
            style={{
              padding: '16px 20px 20px',
              borderTop: '3px solid var(--mcp-ink)',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mcp-nav-link mcp-nav-link--${link.tone}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CLAIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mcp-btn mcp-btn--blue mcp-btn--big"
              style={{ width: '100%', marginTop: 8 }}
              onClick={() => setOpen(false)}
            >
              Claim MoonPack
            </a>
          </div>
        ) : null}
      </header>
    </>
  )
}

function McpMoonFooter() {
  return (
    <footer className="mcp-footer">
      <div className="mcp-footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={PARTNER_LOGO} alt="" width={32} height={32} />
          <span className="mcp-footer-wordmark">
            MCP TO THE MOON <span className="mcp-footer-slash">/</span> WAGMI
          </span>
        </div>
        <p className="mcp-footer-tag">Mission control for the open MCP community.</p>
        <nav className="mcp-footer-links" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mcp-footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mcp-footer-fine">
          Infra partner:{' '}
          <a
            href="https://nitrostack.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--mcp-yellow)' }}
          >
            NitroStack
          </a>
          {' · '}
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--mcp-card)' }}
          >
            mcptothemoon.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default function MoonPack() {
  return (
    <div className="mcp-moon-root">
      <McpMoonNavbar />

      <main>
        {/* HERO */}
        <section className="mcp-section" style={{ paddingBottom: 48 }}>
          <div className="mcp-wrap mcp-hero-center">
            <span className="mcp-sticker">● LIVE · MOONPACK OPEN</span>

            <p className="mcp-eyebrow mcp-text-blue">[ MCP TO THE MOON ]</p>

            <h1 className="mcp-headline">
              PUSHING MCP <span className="mcp-text-blue">ALL THE WAY</span>{' '}
              <span className="mcp-text-red">UP.</span>
            </h1>

            <p className="mcp-vt mcp-hero-lead">
              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mcp-text-blue"
                style={{ fontWeight: 600 }}
              >
                MCP to the Moon
              </a>{' '}
              is a global builder community for shipping MCP servers. Members claim the MoonPack, an
              exclusive builder bundle powered by{' '}
              <a
                href="https://nitrostack.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mcp-text-blue"
                style={{ fontWeight: 600 }}
              >
                NitroStack
              </a>
              , the official infrastructure partner. Join 14,000 builders already shipping together.
            </p>

            <div className="mcp-hero-cta-wrap">
              <a
                href={CLAIM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mcp-btn mcp-btn--blue mcp-btn--big mcp-hero-cta"
              >
                Claim your MoonPack →
              </a>
              <p className="mcp-hero-partner">Exclusive to MCP to the Moon members</p>
            </div>
          </div>
        </section>

        {/* INFRA PARTNER */}
        <section className="mcp-band">
          <div
            className="mcp-wrap"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <span className="mcp-band-num">[ OFFICIAL INFRASTRUCTURE PARTNER ]</span>
            <p className="mcp-band-statement" style={{ maxWidth: '30ch' }}>
              <a
                href="https://nitrostack.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mcp-text-blue"
                style={{ textDecoration: 'none' }}
              >
                NitroStack
              </a>
            </p>
            <p
              className="mcp-vt"
              style={{ margin: 0, fontSize: 20, maxWidth: '46ch', color: 'var(--mcp-muted)' }}
            >
              Deployment and runtime infrastructure for MCP to the Moon members.
            </p>
          </div>
        </section>

        {/* MOON PACK PERKS */}
        <section
          className="mcp-section"
          style={{ borderTop: '4px solid var(--mcp-ink)', paddingTop: 64 }}
        >
          <div className="mcp-wrap">
            <p className="mcp-eyebrow">[ MOON PACK ]</p>
            <h2 className="mcp-h2">WHAT THE MOONPACK UNLOCKS FOR YOU.</h2>
            <p
              className="mcp-vt"
              style={{ margin: '18px 0 0', fontSize: 22, color: 'var(--mcp-muted-2)', maxWidth: '48ch' }}
            >
              Everything below is included when you claim. No credit card required.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 22,
                marginTop: 36,
              }}
            >
              {PERKS.map((perk) => (
                <article key={perk.title} className="mcp-feat-card">
                  <div className="mcp-feat-top">
                    <div className="mcp-feat-icon">{perk.icon}</div>
                    <span className="mcp-chip">{perk.tag}</span>
                  </div>
                  <h3 className="mcp-feat-name">{perk.title}</h3>
                  <p className="mcp-feat-desc">{perk.description}</p>
                  <div className="mcp-feat-foot">
                    <span className="mcp-feat-chip">{perk.chip}</span>
                    <span className="mcp-press mcp-text-red" style={{ fontSize: 11 }}>
                      ★ INCLUDED
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mcp-section" style={{ borderTop: '4px solid var(--mcp-ink)' }}>
          <div className="mcp-wrap">
            <p className="mcp-eyebrow">[ HOW IT WORKS ]</p>
            <h2 className="mcp-h2">CLAIM. BUILD. SHARE.</h2>

            <div className="mcp-galaxy-grid" style={{ marginTop: 36 }}>
              {TIMELINE.map((item) => (
                <article
                  key={item.title}
                  className="mcp-galaxy-card"
                  style={{ borderTopColor: item.borderColor }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 8,
                    }}
                  >
                    <span className="mcp-galaxy-label">{item.label}</span>
                    {item.badge === 'LIVE' ? (
                      <span className="mcp-live-badge">● {item.badge}</span>
                    ) : (
                      <span
                        className="mcp-chip"
                        style={{ background: 'var(--mcp-card)', color: 'var(--mcp-ink)', fontSize: 8 }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mcp-galaxy-title">{item.title}</h3>
                  <p className="mcp-galaxy-blurb">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mcp-join">
          <div className="mcp-wrap">
            <h2 className="mcp-join-title">READY TO CLAIM?</h2>
            <p className="mcp-join-para">
              Your MoonPack is waiting. Free for every MCP to the Moon member.
            </p>
            <div style={{ marginTop: 28 }}>
              <a
                href={CLAIM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mcp-btn mcp-btn--big"
                style={{ background: 'var(--mcp-yellow)', fontSize: 12 }}
              >
                Claim your MoonPack →
              </a>
            </div>
            <p className="mcp-fine" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 18 }}>
              MoonPack powered by{' '}
              <a
                href="https://nitrostack.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--mcp-yellow)', textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                NitroStack
              </a>
            </p>
          </div>
        </section>
      </main>

      <McpMoonFooter />
    </div>
  )
}
