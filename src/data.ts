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
}

/** Real MCP events. Upcoming ones RSVP; past ones link to a recap. */
export const EVENTS: EventItem[] = [
  {
    day: '17',
    month: 'SEP',
    type: 'SUMMIT',
    title: 'MCP Dev Summit Europe',
    location: 'Amsterdam, NL · Sept 17–19',
    blurb: 'Three days of agentic AI on the canals, hosted by the Linux Foundation.',
    color: 'purple',
    url: 'https://events.linuxfoundation.org/mcp-dev-summit-north-america/',
    upcoming: true,
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
    day: '09',
    month: 'JUN',
    type: 'SUMMIT',
    title: 'MCP Dev Summit Bengaluru',
    location: 'Bengaluru, IN',
    blurb: 'The summit circuit hit India — server builders and enterprise teams, assemble.',
    color: 'blue',
    url: 'https://infosec-conferences.com/event/20260609-mcp-dev-summit-bengaluru-2026/',
  },
  {
    day: '02',
    month: 'MAY',
    type: 'HACKATHON',
    title: 'MCP × A2A Hackathon — AWS Edition',
    location: 'San Francisco, CA',
    blurb: 'A day of agent-to-agent chaos at the AWS Startup Loft. 48 hours of pure vibes.',
    color: 'red',
    url: 'https://mcpmanager.ai/blog/ai-conferences-list/',
  },
  {
    day: '02',
    month: 'APR',
    type: 'SUMMIT',
    title: 'MCP Dev Summit North America',
    location: 'New York, NY · ~1,200 builders',
    blurb: 'Gateways, gRPC and observability — the first NA summit signalled serious hardening.',
    color: 'yellow',
    url: 'https://www.infoq.com/news/2026/04/aaif-mcp-summit/',
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
