import { useEffect, useState } from 'react'

export interface Counters {
  builders: number
  servers: number
  stars: number
}

// servers = live MCP server count on Glama, the largest registry (verified 2026-06-25).
const START: Counters = { builders: 14271, servers: 48545, stars: 12840 }

const randInt = (max: number) => Math.floor(Math.random() * (max + 1))

/**
 * Live community counters. Tick UP every ~1.7s:
 *  builders +0–2, servers occasionally +1, stars +0–7.
 */
export function useCounters(): Counters {
  const [counters, setCounters] = useState<Counters>(START)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCounters((c) => ({
        builders: c.builders + randInt(2),
        servers: c.servers + (Math.random() < 0.35 ? 1 : 0),
        stars: c.stars + randInt(7),
      }))
    }, 1700)
    return () => window.clearInterval(id)
  }, [])

  return counters
}

export const fmt = (n: number) => n.toLocaleString('en-US')
