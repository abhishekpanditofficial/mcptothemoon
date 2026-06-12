import { useLaunch } from '../hooks/useLaunch'
import Rocket from './Rocket'
import FlameTrail from './FlameTrail'
import styles from './Launchpad.module.css'

interface LaunchpadProps {
  cell?: number
}

/**
 * Hero rocket on its launch pad. Clicking the rocket OR the
 * "▶ LAUNCH ROCKET" button blasts it off-screen and bounces it back.
 */
export default function Launchpad({ cell = 16 }: LaunchpadProps) {
  const { phase, launch, launching } = useLaunch()

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
            onClick={launch}
            title="Launch the rocket to the moon"
          />
          {phase === 'up' && <FlameTrail cell={cell - 2} />}
        </div>
      </div>

      <button className="btn btn--red btn--big" onClick={launch} disabled={launching}>
        ▶ Launch Rocket
      </button>
      <p className={styles.helper}>click the rocket to send it to the moon</p>
    </div>
  )
}
