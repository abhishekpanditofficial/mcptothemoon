import { COLOR_VAR } from '../data'
import type { Partner } from '../content/partners'
import styles from './PartnerCard.module.css'

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className={styles.card} style={{ borderColor: COLOR_VAR[partner.color] }}>
      <div className={styles.logoWrap}>
        <img className={styles.logo} src={partner.logo} alt={`${partner.name} logo`} />
      </div>
      <h3 className={styles.name}>{partner.name}</h3>
      <p className={styles.blurb}>{partner.blurb}</p>
      <a className={styles.link} href={partner.url} target="_blank" rel="noreferrer">
        {partner.linkLabel}
      </a>
    </article>
  )
}
