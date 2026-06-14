import { useEffect, useRef, useState } from 'react'

export type LaunchPhase = 'idle' | 'up' | 'down'

/**
 * Drives the rocket launch state machine:
 *  idle → up (blast off, 1s) → down (bouncy return, ~0.9s) → idle.
 * Guarded so it can't re-trigger mid-flight.
 */
export function useLaunch() {
  const [phase, setPhase] = useState<LaunchPhase>('idle')
  const timers = useRef<number[]>([])

  useEffect(() => {
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t))
    }
  }, [])

  const launch = () => {
    if (phase !== 'idle') return
    setPhase('up')
    timers.current.push(
      window.setTimeout(() => setPhase('down'), 1000),
      window.setTimeout(() => setPhase('idle'), 1000 + 900),
    )
  }

  return { phase, launch, launching: phase !== 'idle' }
}
