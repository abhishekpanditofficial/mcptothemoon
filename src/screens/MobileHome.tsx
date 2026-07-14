import { useState } from 'react'
import type { Counters } from '../hooks/useCounters'
import type { Screen } from '../router'
import { SERVERS, EVENTS, REGISTRY_COUNTS } from '../data'
import { NEWS } from '../content/news'
import { PEOPLE } from '../content/people'
import { RESOURCE_GROUPS } from '../content/resources'
import { PARTNERS } from '../content/partners'
import { MEMBERS } from '../content/members'
import { CREATORS } from '../content/creators'
import { POSTS, getPost, postsByAuthor } from '../content/posts'
import { getCreator } from '../content/creators'
import { LINKEDIN_VIDEOS } from '../content/videos'
import Nav from '../components/Nav'
import Ticker from '../components/Ticker'
import Launchpad from '../components/Launchpad'
import StatBar from '../components/StatBar'
import ServerCard from '../components/ServerCard'
import NewsCard from '../components/NewsCard'
import EventRow from '../components/EventRow'
import PersonCard from '../components/PersonCard'
import PartnerCard from '../components/PartnerCard'
import MemberCard from '../components/MemberCard'
import CreatorCard from '../components/CreatorCard'
import PostCard, { formatDate } from '../components/PostCard'
import VideoCard from '../components/VideoCard'
import ResourceCard from '../components/ResourceCard'
import Footer from '../components/Footer'
import home from './HomeA.module.css'
import listing from './Listing.module.css'
import blog from './Blog.module.css'
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
  community: 'm-partners',
  partners: 'm-partners',
  members: 'm-members',
  creators: 'm-creators',
  blog: 'm-blog',
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
  // Blog has no separate route on mobile — tapping a post expands it inline.
  const [openPost, setOpenPost] = useState<string | null>(null)

  const scrollToBlog = () => {
    setOpenPost(null)
    document.getElementById('m-blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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

      {/* ── PARTNERS ─────────────────────────────────────── */}
      <section id="m-partners" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--blue)' }}>
            [ MISSION BACKERS ]
          </span>
          <h2 className={styles.h2}>PARTNERS</h2>
          <div className={listing.serverGrid}>
            {PARTNERS.map((p) => (
              <PartnerCard key={p.name} partner={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MEMBERS ──────────────────────────────────────── */}
      <section id="m-members" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--purple)' }}>
            [ CREW MANIFEST ]
          </span>
          <h2 className={styles.h2}>MEMBERS</h2>
          <div className={listing.crewGrid}>
            {MEMBERS.map((m, i) => (
              <MemberCard key={`${m.name}-${i}`} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MOONSHOT CREATORS ────────────────────────────── */}
      <section id="m-creators" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--green)' }}>
            [ MOONSHOTS ]
          </span>
          <h2 className={styles.h2}>MOONSHOT CREATORS</h2>
          <div className={listing.crewGrid}>
            {CREATORS.map((c) => (
              <CreatorCard
                key={c.slug}
                creator={c}
                postCount={postsByAuthor(c.slug).length}
                onViewPosts={scrollToBlog}
              />
            ))}
          </div>

          {LINKEDIN_VIDEOS.length > 0 && (
            <div className={listing.group} style={{ marginTop: 32 }}>
              <div className={listing.groupHead}>
                <h3 className={listing.groupTitle}>LATEST ON LINKEDIN</h3>
                <span className={listing.groupBlurb}>Recent videos.</span>
              </div>
              <div className={listing.newsGrid}>
                {LINKEDIN_VIDEOS.map((v, i) => (
                  <VideoCard key={`${v.url}-${i}`} video={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────── */}
      <section id="m-blog" className={`${styles.section} section`}>
        <div className="wrap">
          <span className="eyebrow" style={{ color: 'var(--orange)' }}>
            [ TRANSMISSIONS ]
          </span>
          <h2 className={styles.h2}>BLOG</h2>

          {openPost ? (
            <MobileArticle slug={openPost} onBack={() => setOpenPost(null)} />
          ) : POSTS.length === 0 ? (
            <p className={blog.empty}>No posts yet — check back soon. 🚀</p>
          ) : (
            <div className={blog.postGrid}>
              {POSTS.map((p) => (
                <PostCard key={p.slug} post={p} onOpen={() => setOpenPost(p.slug)} />
              ))}
            </div>
          )}
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

/** Inline post reader for mobile — no routing, just expand/collapse in place. */
function MobileArticle({ slug, onBack }: { slug: string; onBack: () => void }) {
  const post = getPost(slug)!
  const author = getCreator(post.author)

  return (
    <article>
      <button className={blog.back} onClick={onBack}>
        ← BACK TO BLOG
      </button>
      <div className={blog.articleHead}>
        <h3 className={styles.h2}>{post.title}</h3>
        <div className={blog.byline}>
          {post.date && <span>{formatDate(post.date)}</span>}
          {author && (
            <>
              <span>·</span>
              <span>{author.name}</span>
            </>
          )}
        </div>
      </div>
      <div className={blog.article} dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
