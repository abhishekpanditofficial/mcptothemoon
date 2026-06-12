import { useEffect, useState } from 'react'
import type { Screen } from './router'
import { useCounters } from './hooks/useCounters'
import HomeA from './screens/HomeA'
import HomeB from './screens/HomeB'
import Servers from './screens/Servers'
import News from './screens/News'
import Events from './screens/Events'
import Crew from './screens/Crew'
import Resources from './screens/Resources'
import DirToggle from './components/DirToggle'

export default function App() {
  const [screen, setScreen] = useState<Screen>('homeA')
  const counters = useCounters()

  // jump to top whenever the screen changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen])

  const isHome = screen === 'homeA' || screen === 'homeB'

  return (
    <>
      {screen === 'homeA' && <HomeA navigate={setScreen} counters={counters} />}
      {screen === 'homeB' && <HomeB navigate={setScreen} counters={counters} />}
      {screen === 'servers' && <Servers navigate={setScreen} />}
      {screen === 'news' && <News navigate={setScreen} />}
      {screen === 'events' && <Events navigate={setScreen} />}
      {screen === 'crew' && <Crew navigate={setScreen} />}
      {screen === 'resources' && <Resources navigate={setScreen} />}

      {isHome && (
        <DirToggle
          active={screen === 'homeA' ? 'A' : 'B'}
          onPick={(dir) => setScreen(dir === 'A' ? 'homeA' : 'homeB')}
        />
      )}
    </>
  )
}
