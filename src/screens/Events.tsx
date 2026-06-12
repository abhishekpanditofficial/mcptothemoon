import type { Navigate } from '../router'
import { EVENTS } from '../data'
import Nav from '../components/Nav'
import EventRow from '../components/EventRow'
import Footer from '../components/Footer'
import styles from './Listing.module.css'

interface EventsProps {
  navigate: Navigate
}

export default function Events({ navigate }: EventsProps) {
  return (
    <div className="paper-grid">
      <Nav current="events" navigate={navigate} />

      <section className="section">
        <div className="wrap">
          <header className={styles.header}>
            <span className="eyebrow" style={{ color: 'var(--red)' }}>
              [ MISSION SCHEDULE ]
            </span>
            <h1 className={styles.title}>UPCOMING LAUNCHES</h1>
            <p className={styles.intro}>
              Hackathons, meetups, pizza and the occasional demo-day meltdown. Pick a
              date and show up — IRL or in the Discord stage.
            </p>
          </header>

          <div className={styles.eventList}>
            {EVENTS.map((e) => (
              <EventRow key={`${e.day}-${e.title}`} event={e} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
