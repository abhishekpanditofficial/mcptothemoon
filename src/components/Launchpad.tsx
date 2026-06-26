import { useLaunch } from '../hooks/useLaunch'
import { DISCORD_URL } from '../data'
import Rocket from './Rocket'
import FlameTrail from './FlameTrail'
import styles from './Launchpad.module.css'

interface LaunchpadProps {
  cell?: number
}

/**
 * Hero rocket on its launch pad. Clicking the rocket OR the
 * "▶ LAUNCH ROCKET" button blasts it off-screen, bounces it back,
 * and opens the community Discord in a new tab.
 */
export default function Launchpad({ cell = 16 }: LaunchpadProps) {
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
    styles.stage,
    phase === 'up' ? styles.up : '',
    phase === 'down' ? styles.down : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.pad}>
      <div className={styles.viewport}>
        <div className={stageClass}>
          <Rocket
            cell={cell}
            interactive={!launching}
            onClick={launchToDiscord}
            title="Launch the rocket — opens our Discord"
          />
          {phase === 'up' && <FlameTrail cell={cell - 2} />}
        </div>
      </div>

      <button
        className="btn btn--blue btn--big"
        onClick={launchToDiscord}
        disabled={launching}
      >
        ▶ Land on the Moon
      </button>
      <p className={styles.helper}>click the rocket to send it to the moon</p>
      <p className={styles.warning}>⚠ heads up: this will launch you to our Discord ↗</p>
    </div>
  )
}
