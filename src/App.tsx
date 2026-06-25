import { useEffect, useState } from 'react'
import type { Screen } from './router'
import { useCounters } from './hooks/useCounters'
import { useIsMobile } from './hooks/useIsMobile'
import HomeA from './screens/HomeA'
import HomeB from './screens/HomeB'
import MobileHome from './screens/MobileHome'
import Servers from './screens/Servers'
import News from './screens/News'
import Events from './screens/Events'
import Crew from './screens/Crew'
import Resources from './screens/Resources'
import MoonPack from './screens/MoonPack'
import DirToggle from './components/DirToggle'

export default function App() {
  const [screen, setScreen] = useState<Screen>('homeA')
  const [path, setPath] = useState(() => window.location.pathname)
  const counters = useCounters()
  const isMobile = useIsMobile()

  // keep the rendered route in sync with browser back/forward navigation
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // jump to top whenever the screen changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen])

  // /moonpack is a standalone landing page with its own nav + footer
  if (path === '/moonpack' || path === '/moonpack/') {
    return <MoonPack />
  }

  const isHome = screen === 'homeA' || screen === 'homeB'

  // Phones get one monolithic, scrollable page; desktop keeps the multi-screen site.
  if (isMobile) {
    return <MobileHome counters={counters} />
  }

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
