import type { Screen } from '../router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './MoonPack.css'

/*
 * MoonPack — MCP to the Moon × NitroStack partnership landing page.
 * Ported from the original NitroStack Next.js route into this Vite app as /moonpack.
 * Uses the shared site Nav + Footer so the header/footer match the main landing page.
 */

const PARTNER_URL = 'https://mcptothemoon.com'
// Where the "Claim your MoonPack" CTAs send members to claim the bundle.
const CLAIM_URL = 'https://nitrostack.ai/moonpack'

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

export default function MoonPack() {
  // Section links jump back to the main site, which reads ?screen= on load.
  const navigate = (screen: Screen) => {
    window.location.href =
      screen === 'homeA' || screen === 'homeB' ? '/' : `/?screen=${screen}`
  }

  return (
    <>
      <Nav navigate={navigate} />
      <div className="mcp-moon-root">
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
      </div>

      <Footer />
    </>
  )
}
