import type { Navigate } from '../router'
import { CREATORS } from '../content/creators'
import { postsByAuthor } from '../content/posts'
import { TWEETS } from '../content/tweets'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import CreatorCard from '../components/CreatorCard'
import TweetCard from '../components/TweetCard'
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
          </header>

          {CREATORS.length > 0 && (
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
          )}

          {TWEETS.length > 0 && (
            <div className={styles.group} style={{ marginTop: 48 }}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>SEE WHAT CREATORS HAVE TO SAY</h2>
              </div>
              <div className={styles.newsGrid}>
                {TWEETS.map((t) => (
                  <TweetCard key={t.id} item={t} />
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
