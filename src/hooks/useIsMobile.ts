import { useEffect, useState } from 'react'

/**
 * True when the viewport is phone-sized. Matches the nav's hamburger
 * breakpoint so the monolithic mobile layout and the burger menu agree.
 */
export function useIsMobile(query = '(max-width: 760px)'): boolean {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    setIsMobile(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return isMobile
}
