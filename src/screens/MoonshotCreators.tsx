import type { Navigate } from '../router'
import { CREATORS } from '../content/creators'
import { postsByAuthor } from '../content/posts'
import { LINKEDIN_VIDEOS } from '../content/videos'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CreatorCard from '../components/CreatorCard'
import VideoCard from '../components/VideoCard'
import styles from './Listing.module.css'

export default function MoonshotCreators({ navigate }: { navigate: Navigate }) {
  // Jump to the blog, pre-filtered to a creator's posts. Blog reads ?author= on mount.
  const viewCreatorPosts = (slug: string) => {
    history.pushState({}, '', `?screen=blog&author=${slug}`)
    navigate('blog')
  }

  return (
    <div className="paper-grid">
      <Nav current="creators" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--green)' }}>
              [ MOONSHOTS ]
            </span>
            <h1 className={styles.title}>MOONSHOT CREATORS</h1>
            <p className={styles.intro}>
              The folks making content for us — watch their LinkedIn videos and read
              their posts. They bring the signal; you bring the launch.
            </p>
          </header>

          <div className={styles.crewGrid}>
            {CREATORS.map((c) => (
              <CreatorCard
                key={c.slug}
                creator={c}
                postCount={postsByAuthor(c.slug).length}
                onViewPosts={() => viewCreatorPosts(c.slug)}
              />
            ))}
          </div>

          {LINKEDIN_VIDEOS.length > 0 && (
            <div className={styles.group} style={{ marginTop: 48 }}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>LATEST ON LINKEDIN</h2>
                <span className={styles.groupBlurb}>
                  Recent videos from the MCP to the Moon LinkedIn.
                </span>
              </div>
              <div className={styles.newsGrid}>
                {LINKEDIN_VIDEOS.map((v, i) => (
                  <VideoCard key={`${v.url}-${i}`} video={v} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
