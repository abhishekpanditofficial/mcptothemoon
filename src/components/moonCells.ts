/**
 * Procedurally-shaded pixel moon — a 27×27 grid of tone indices (0–5) or null
 * for transparent cells outside the disc. Computed once; the tone is mapped to
 * an actual color by a swappable PALETTE at render time. Sphere normal + fixed
 * light vector + a handful of craters, quantized into 6 shading bands.
 *
 * Tone order: 0 rim · 1 highlight · 2 light · 3 base · 4 shadow · 5 core
 */
const R = 13 // radius in cells
export const SPAN = 2 * R + 1 // 27
const L = { x: -0.5, y: -0.55, z: 0.67 } // light: upper-left, toward viewer

// crater centers + radii in cell units; first match wins
const CRATERS: [number, number, number][] = [
  [-3, -2, 1.9],
  [2.5, 2, 2.1],
  [3, -3, 1.3],
  [-2, 3.2, 1.5],
  [0.5, -4, 1.1],
  [4, 1, 1.0],
]

function cellTone(gx: number, gy: number): number | null {
  const dx = gx - R
  const dy = gy - R
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist > R + 0.2) return null // outside the disc → transparent

  const nx = dx / R
  const ny = dy / R
  const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny))
  let light = nx * L.x + ny * L.y + nz * L.z

  for (const [cx, cy, cr] of CRATERS) {
    const ex = dx - cx
    const ey = dy - cy
    if (Math.sqrt(ex * ex + ey * ey) <= cr) {
      light -= 0.42
      break
    }
  }

  if (dist > R - 0.6) return 0 // rim
  if (light > 0.55) return 1 // highlight
  if (light > 0.28) return 2 // light
  if (light > 0.02) return 3 // base
  if (light > -0.3) return 4 // shadow
  return 5 // core
}

export const MOON_TONES: (number | null)[] = Array.from(
  { length: SPAN * SPAN },
  (_, i) => cellTone(i % SPAN, Math.floor(i / SPAN)),
)

/** Tone → color, indexed [rim, highlight, light, base, shadow, core]. */
export const PALETTES = {
  blue: ['#0a3f9e', '#9cccff', '#5aa8ff', '#2b8fff', '#1366d8', '#0e4fb0'],
  black: ['#0d0d0d', '#5c5c5c', '#3a3a3a', '#242424', '#161616', '#0c0c0c'],
  gold: ['#8a5a00', '#fff7d6', '#ffe784', '#ffce1f', '#e3a417', '#b67d0c'],
} as const

export type MoonTone = keyof typeof PALETTES
