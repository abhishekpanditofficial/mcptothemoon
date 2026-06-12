export type PersonColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Person {
  name: string
  role: string
  org: string
  blurb: string
  color: PersonColor
  link: string
  linkLabel: string
}

/** The CREW MANIFEST — people shaping MCP worth following. */
export const PEOPLE: Person[] = [
  {
    name: 'David Soria Parra',
    role: 'Co-creator · Lead Maintainer',
    org: 'Anthropic',
    blurb: 'Co-invented MCP and steers the spec, the registry and the roadmap.',
    color: 'blue',
    link: 'https://www.latent.space/p/mcp',
    linkLabel: 'INTERVIEW ↗',
  },
  {
    name: 'Justin Spahr-Summers',
    role: 'Co-creator',
    org: 'Anthropic',
    blurb: 'The other half of the duo that turned an internal experiment into a standard.',
    color: 'red',
    link: 'https://www.latent.space/p/mcp',
    linkLabel: 'INTERVIEW ↗',
  },
  {
    name: 'Den Delimarsky',
    role: 'Lead Maintainer',
    org: 'MCP Core',
    blurb: 'Writes the clearest field notes on where MCP is going. Read his blog.',
    color: 'green',
    link: 'https://den.dev/blog/one-year-of-mcp/',
    linkLabel: 'BLOG ↗',
  },
  {
    name: 'Clare Liguori',
    role: 'Core Maintainer',
    org: 'AWS',
    blurb: 'Joined the core crew in 2026 to push enterprise readiness and auth.',
    color: 'orange',
    link: 'https://blog.modelcontextprotocol.io/posts/2026-04-08-maintainer-update/',
    linkLabel: 'ANNOUNCEMENT ↗',
  },
  {
    name: 'Ido Salomon',
    role: 'MCP-UI Co-creator',
    org: 'UI Working Group',
    blurb: 'Incubated the interactive-UI patterns that became MCP Apps.',
    color: 'purple',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/',
    linkLabel: 'MCP APPS ↗',
  },
  {
    name: 'Liad Yosef',
    role: 'MCP-UI Co-creator',
    org: 'UI Working Group',
    blurb: 'Co-led MCP-UI and championed rich surfaces over plain text replies.',
    color: 'yellow',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/',
    linkLabel: 'MCP APPS ↗',
  },
  {
    name: 'Adam Jones',
    role: 'Registry Maintainer',
    org: 'MCP Registry',
    blurb: 'Keeps the official server registry honest, searchable and verified.',
    color: 'blue',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/',
    linkLabel: 'REGISTRY ↗',
  },
  {
    name: 'Nick Cooper',
    role: 'Steering Contributor',
    org: 'OpenAI',
    blurb: 'Helps keep MCP genuinely multi-vendor from the OpenAI side.',
    color: 'green',
    link: 'https://modelcontextprotocol.io/community/contributing',
    linkLabel: 'CONTRIBUTE ↗',
  },
  {
    name: 'Olivier Chafik',
    role: 'Core Contributor',
    org: 'Anthropic',
    blurb: 'Drives tooling and SDK work across the reference implementations.',
    color: 'red',
    link: 'https://github.com/modelcontextprotocol',
    linkLabel: 'GITHUB ↗',
  },
]
