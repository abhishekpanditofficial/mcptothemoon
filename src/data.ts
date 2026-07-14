/** Shared external links. One place to rule them all. */
export const DISCORD_URL = 'https://discord.gg/QkYesRzU4r'
export const DOCS_URL = 'https://modelcontextprotocol.io'

/** MCP to the Moon's official social accounts. */
export type SocialIcon = 'linkedin' | 'instagram' | 'x'

export interface Social {
  label: string
  url: string
  icon: SocialIcon
}

export const SOCIALS: Social[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/mcptothemoon', icon: 'linkedin' },
  { label: 'Instagram', url: 'https://instagram.com/mcptothemoon', icon: 'instagram' },
  { label: 'X', url: 'https://x.com/mcptothemoon', icon: 'x' },
]

export type ServerColor =
  | 'blue'
  | 'black'
  | 'red'
  | 'yellow'
  | 'green'
  | 'purple'
  | 'orange'

export interface Server {
  name: string
  category: string
  stars: string
  cmd: string
  color: ServerColor
  desc: string
}

export const SERVERS: Server[] = [
  {
    name: 'filesystem',
    category: 'CORE',
    stars: '8.4k',
    cmd: 'npx -y @mcp/filesystem',
    color: 'blue',
    desc: 'Read, write & wrangle local files without leaving the chat.',
  },
  {
    name: 'github',
    category: 'DEV',
    stars: '11.2k',
    cmd: 'npx -y @mcp/github',
    color: 'black',
    desc: 'Issues, PRs and repos — let the model do the grunt git work.',
  },
  {
    name: 'postgres',
    category: 'DATA',
    stars: '6.7k',
    cmd: 'npx -y @mcp/postgres',
    color: 'red',
    desc: 'Query your database in plain English. SELECT * FROM vibes.',
  },
  {
    name: 'puppeteer',
    category: 'BROWSER',
    stars: '5.1k',
    cmd: 'npx -y @mcp/puppeteer',
    color: 'yellow',
    desc: 'Drive a headless browser. Click, scrape, screenshot, repeat.',
  },
  {
    name: 'memory',
    category: 'CORE',
    stars: '9.3k',
    cmd: 'npx -y @mcp/memory',
    color: 'green',
    desc: 'Give your agent a long-term memory it actually remembers.',
  },
  {
    name: 'slack',
    category: 'COMMS',
    stars: '4.4k',
    cmd: 'npx -y @mcp/slack',
    color: 'purple',
    desc: 'Post, read and react — ship updates without alt-tabbing.',
  },
  {
    name: 'brave-search',
    category: 'WEB',
    stars: '3.8k',
    cmd: 'npx -y @mcp/brave',
    color: 'orange',
    desc: 'Fresh web results piped straight into your model. No ads.',
  },
  {
    name: 'sqlite',
    category: 'DATA',
    stars: '5.9k',
    cmd: 'npx -y @mcp/sqlite',
    color: 'blue',
    desc: 'A whole database in one file. Tiny, local, and delightful.',
  },
  {
    name: 'gdrive',
    category: 'FILES',
    stars: '4.0k',
    cmd: 'npx -y @mcp/gdrive',
    color: 'red',
    desc: 'Search and read your Drive docs from inside the conversation.',
  },
]

export type EventColor = 'red' | 'blue' | 'yellow' | 'green' | 'purple'

/** Call-for-papers status. Omit for events without an open submission window. */
export type CfpStatus = 'open' | 'closed'

export interface EventItem {
  day: string
  month: string
  type: string
  title: string
  location: string
  blurb: string
  color: EventColor
  url: string
  upcoming?: boolean
  cfp?: CfpStatus
}

/**
 * Real MCP / agent events, newest-relevant first: upcoming launches up top,
 * recent recaps below. CFP status shown where there's a submission window.
 */
export const EVENTS: EventItem[] = [
  {
    day: '17',
    month: 'SEP',
    type: 'SUMMIT',
    title: 'AGNTCon + MCPCon Europe',
    location: 'RAI Amsterdam, NL · Sept 17–18',
    blurb:
      "The AAIF's flagship European stop — the whole open agentic stack on the canals, under the Linux Foundation.",
    color: 'purple',
    url: 'https://events.linuxfoundation.org/agntcon-mcpcon-europe/',
    upcoming: true,
    cfp: 'closed',
  },
  {
    day: '∞',
    month: 'ONGOING',
    type: 'COMMUNITY',
    title: 'MCP Connect Day',
    location: 'Online · Worldwide',
    blurb: 'The grassroots meetup series — a rolling pulse-check on what builders ship next.',
    color: 'green',
    url: 'https://mcpmanager.ai/blog/ai-conferences-list/',
    upcoming: true,
  },
  {
    day: '11',
    month: 'JUN',
    type: 'SUMMIT',
    title: 'MCP Dev Summit Mumbai',
    location: 'Mumbai, IN · India edition',
    blurb: 'The summit circuit hits India — server builders and enterprise teams, assemble.',
    color: 'blue',
    url: 'https://sessionize.com/mcp-dev-summit-mumbai-india-2026/',
    cfp: 'closed',
  },
  {
    day: '04',
    month: 'MAY',
    type: 'AGENTCON',
    title: 'AgentCon Silicon Valley',
    location: 'Silicon Valley, CA · Global AI Community',
    blurb: 'Free one-day agent throwdown — deep-dive talks, workshops and live demos on the Global AI world tour.',
    color: 'red',
    url: 'https://globalai.community/chapters/san-francisco/events/agentcon-silicon-valley/',
    cfp: 'closed',
  },
  {
    day: '02',
    month: 'APR',
    type: 'SUMMIT',
    title: 'MCP Dev Summit North America',
    location: 'Marriott Marquis, NYC · Apr 2–3',
    blurb: 'Gateways, gRPC and observability across ~1,200 builders — the first NA summit signalled serious hardening.',
    color: 'yellow',
    url: 'https://www.infoq.com/news/2026/04/aaif-mcp-summit/',
    cfp: 'closed',
  },
  {
    day: '23',
    month: 'MAR',
    type: 'WORKSHOP',
    title: 'Agentics Day: MCP + Agents',
    location: 'Amsterdam, NL',
    blurb: 'Real-world MCP, security and enterprise integration, courtesy CNCF & the LF.',
    color: 'blue',
    url: 'https://mcpmanager.ai/blog/ai-conferences-list/',
  },
  {
    day: '09',
    month: 'MAR',
    type: 'AGENTCON',
    title: 'AgentCon New York',
    location: 'New York, NY · Global AI Community',
    blurb: 'Engineers, researchers and founders on what actually works in agent design — the NYC leg of the world tour.',
    color: 'green',
    url: 'https://globalai.community/chapters/new-york/events/agentcon-new-york/',
  },
]

/**
 * Realistic public-server counts across the major registries (mid-2026).
 * The same server is often listed in several places, so these overlap —
 * there is no single global total, just a very big, very busy ecosystem.
 */
export interface RegistryCount {
  name: string
  count: string
  note: string
}

export const REGISTRY_COUNTS: RegistryCount[] = [
  { name: 'Glama', count: '48,500+', note: 'largest community index' },
  { name: 'PulseMCP', count: '19,500+', note: 'curated & monitored' },
  { name: 'Smithery', count: '6,000+', note: 'one-click installs' },
  { name: 'Official Registry', count: '9,600+', note: 'verified entries' },
]

/** Maps token names to CSS custom-property colors. */
export const COLOR_VAR: Record<string, string> = {
  blue: 'var(--blue)',
  black: 'var(--ink)',
  red: 'var(--red)',
  yellow: 'var(--yellow)',
  green: 'var(--green)',
  purple: 'var(--purple)',
  orange: 'var(--orange)',
}

/** Which icon/date colors need dark text for contrast. */
export const DARK_TEXT_ON = new Set(['yellow', 'orange'])
