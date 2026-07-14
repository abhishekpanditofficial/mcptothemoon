import { COLOR_VAR } from '../data'
import type { LinkedInVideo } from '../content/videos'
import { formatDate } from './PostCard'
import styles from './VideoCard.module.css'

export default function VideoCard({ video }: { video: LinkedInVideo }) {
  const accent = COLOR_VAR[video.color]

  return (
    <article className={styles.card}>
      {video.embedUrl ? (
        // True inline preview via LinkedIn's own embed.
        <div className={styles.preview}>
          <iframe
            className={styles.embed}
            src={video.embedUrl}
            title={video.title}
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        // Thumbnail (or branded placeholder) that links out to the post.
        <a className={styles.preview} href={video.url} target="_blank" rel="noreferrer">
          <span className={styles.badge}>▶ LINKEDIN</span>
          {video.thumbnail ? (
            <img className={styles.thumb} src={video.thumbnail} alt="" />
          ) : (
            <span
              className={styles.placeholder}
              style={{ background: `linear-gradient(135deg, ${accent}, var(--ink))` }}
            >
              <span className={styles.play}>▶</span>
            </span>
          )}
        </a>
      )}

      <div className={styles.body}>
        {video.date && <span className={styles.meta}>{formatDate(video.date)}</span>}
        <h3 className={styles.title}>{video.title}</h3>
        <a className={styles.link} href={video.url} target="_blank" rel="noreferrer">
          WATCH ON LINKEDIN ↗
        </a>
      </div>
    </article>
  )
}
