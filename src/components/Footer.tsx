import Rocket from './Rocket'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} wrap`}>
        <div className={styles.brandRow}>
          <Rocket cell={4} ariaHidden />
          <span className={styles.wordmark}>
            MCP<span className={styles.slash}>//</span>MOON
          </span>
        </div>
        <p className={styles.tag}>Built by the community, for the community.</p>

        <div className={styles.links}>
          <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#">Discord</a>
          <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer">
            Docs
          </a>
          <a
            href="https://modelcontextprotocol.io/specification/2025-11-25"
            target="_blank"
            rel="noreferrer"
          >
            Spec
          </a>
          <a href="https://registry.modelcontextprotocol.io" target="_blank" rel="noreferrer">
            Registry
          </a>
        </div>

        <p className={styles.fine}>
          Not financial advice. Definitely emotional advice. © 2026 the moon.
        </p>
      </div>
    </footer>
  )
}
