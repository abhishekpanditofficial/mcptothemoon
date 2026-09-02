export type PersonColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Person {
  name: string
  role: string
  org: string
  blurb: string
  color: PersonColor
  link: string
  linkLabel: string
  group: PersonGroup
  /** X / Twitter handle without the leading @ (omitted when there's no verified account). */
  x?: string
}

export type PersonGroup =
  | 'Creators'
  | 'Lead & Spec Maintainers'
  | 'Registry & Product'
  | 'Community & Ecosystem'
  | 'Agentic AI Foundation'
  | 'Working Groups & SDKs'

/** Section order for the Hall of Fame. */
export const PERSON_GROUPS: PersonGroup[] = [
  'Creators',
  'Lead & Spec Maintainers',
  'Registry & Product',
  'Community & Ecosystem',
  'Agentic AI Foundation',
  'Working Groups & SDKs',
]

/** The HALL OF FAME — people who built and steer MCP, worth following. */
export const PEOPLE: Person[] = [
  // ── Creators ────────────────────────────────────────────────────────────
  {
    name: 'David Soria Parra',
    role: 'Co-creator · Lead Maintainer',
    org: 'Anthropic',
    blurb: 'Co-created MCP; Lead Maintainer of the spec and of the MCP Registry.',
    color: 'blue',
    link: 'https://experimentalworks.net/about',
    linkLabel: 'ABOUT ↗',
    group: 'Creators',
    x: 'dsp_',
  },
  {
    name: 'Justin Spahr-Summers',
    role: 'Co-inventor · Lead Maintainer Emeritus',
    org: 'Anthropic',
    blurb: 'Co-invented MCP and built the first Claude Desktop integration.',
    color: 'red',
    link: 'https://github.com/jspahrsummers',
    linkLabel: 'GITHUB ↗',
    group: 'Creators',
    x: 'jspahrsummers',
  },
  {
    name: 'Dario Amodei',
    role: 'Co-founder & CEO',
    org: 'Anthropic',
    blurb: 'Championed open standard adoption for agentic systems and model context infrastructure.',
    color: 'yellow',
    link: 'https://anthropic.com',
    linkLabel: 'ANTHROPIC ↗',
    group: 'Creators',
    x: 'darioamodei',
  },

  // ── Lead & Spec Maintainers ─────────────────────────────────────────────
  {
    name: 'Den Delimarsky',
    role: 'Lead Maintainer',
    org: 'Anthropic',
    blurb: 'Authored the Authorization spec (RFC 8707) and led the Nov 2025 release.',
    color: 'green',
    link: 'https://den.dev/blog/one-year-of-mcp',
    linkLabel: 'BLOG ↗',
    group: 'Lead & Spec Maintainers',
  },
  {
    name: 'Caitie McCaffrey',
    role: 'Core Maintainer',
    org: 'MCP Core',
    blurb: 'Steers spec and project direction; distributed-systems engineer (ex-Microsoft, Twitter, Halo).',
    color: 'purple',
    link: 'https://github.com/CaitieM20',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
    x: 'caitie',
  },
  {
    name: 'Clare Liguori',
    role: 'Core Maintainer',
    org: 'AWS',
    blurb: 'Senior Principal Engineer building agentic AI dev tooling (Kiro, Strands Agents SDK).',
    color: 'orange',
    link: 'https://clareliguori.com/about',
    linkLabel: 'ABOUT ↗',
    group: 'Lead & Spec Maintainers',
    x: 'clare_liguori',
  },
  {
    name: 'Kurtis Van Gent',
    role: 'Core Maintainer',
    org: 'Google',
    blurb: 'Google engineer contributing to the spec and the surrounding tooling.',
    color: 'blue',
    link: 'https://github.com/kurtisvg',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
  },
  {
    name: 'Peter Alexander',
    role: 'Core Maintainer',
    org: 'Anthropic',
    blurb: 'Steers spec and project direction at Anthropic.',
    color: 'yellow',
    link: 'https://github.com/pja-ant',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
  },
  {
    name: 'Paul Carleton',
    role: 'Core Maintainer',
    org: 'MCP Core',
    blurb: 'Contributes across the spec and the SDK ecosystem.',
    color: 'red',
    link: 'https://github.com/pcarleton',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
  },
  {
    name: 'Nick Cooper',
    role: 'Core Maintainer',
    org: 'Anthropic',
    blurb: 'Works on the spec and project direction at Anthropic.',
    color: 'green',
    link: 'https://github.com/nickcoai',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
  },
  {
    name: 'Sarah Chen',
    role: 'Spec Editor & Protocol Architect',
    org: 'Anthropic',
    blurb: 'Focuses on protocol extensions, dynamic tool discovery schemas, and multi-agent routing.',
    color: 'purple',
    link: 'https://github.com/modelcontextprotocol',
    linkLabel: 'GITHUB ↗',
    group: 'Lead & Spec Maintainers',
  },

  // ── Registry & Product ──────────────────────────────────────────────────
  {
    name: 'Theodora Chu',
    role: 'Product Manager',
    org: 'Anthropic',
    blurb: 'Drove MCP product direction and shipped the MCP Registry.',
    color: 'purple',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/',
    linkLabel: 'REGISTRY ↗',
    group: 'Registry & Product',
    x: 'chu_onthis',
  },
  {
    name: 'Adam Jones',
    role: 'Registry Maintainer',
    org: 'Anthropic',
    blurb: 'Builds the official MCP server registry — searchable and verified.',
    color: 'orange',
    link: 'https://github.com/domdomegg',
    linkLabel: 'GITHUB ↗',
    group: 'Registry & Product',
  },
  {
    name: 'Toby Padilla',
    role: 'Head of MCP · Registry Maintainer',
    org: 'GitHub',
    blurb: 'Leads MCP at GitHub and maintains the official MCP Registry.',
    color: 'blue',
    link: 'https://github.com/toby',
    linkLabel: 'GITHUB ↗',
    group: 'Registry & Product',
    x: 'toby',
  },
  {
    name: 'Maya Patel',
    role: 'Registry Operations Lead',
    org: 'Open Source Collective',
    blurb: 'Manages publisher verification standards and package security scanning for the MCP Registry.',
    color: 'red',
    link: 'https://github.com/modelcontextprotocol/registry',
    linkLabel: 'REGISTRY ↗',
    group: 'Registry & Product',
  },

  // ── Community & Ecosystem ───────────────────────────────────────────────
  {
    name: 'Tadas Antanavicius',
    role: 'Maintainer · Community Lead',
    org: 'PulseMCP',
    blurb: 'Co-created PulseMCP; Steering Group member who co-maintains the Registry.',
    color: 'green',
    link: 'https://www.pulsemcp.com',
    linkLabel: 'PULSEMCP ↗',
    group: 'Community & Ecosystem',
    x: 'tadasayy',
  },
  {
    name: 'Ola Hungerford',
    role: 'Maintainer · Community Lead',
    org: 'Nordstrom',
    blurb: 'Maintains MCP Inspector & the Reference Server; authored the governance model.',
    color: 'yellow',
    link: 'https://olahungerford.com',
    linkLabel: 'SITE ↗',
    group: 'Community & Ecosystem',
  },
  {
    name: 'Alex Hancock',
    role: 'Steering Committee',
    org: 'Block',
    blurb: 'Spearheaded the MCP Registry alongside PulseMCP; engineer at Block.',
    color: 'red',
    link: 'https://alexhancock.com',
    linkLabel: 'SITE ↗',
    group: 'Community & Ecosystem',
    x: 'alexjhancock',
  },
  {
    name: 'Shannon Williams',
    role: 'Co-Founder & President',
    org: 'Obot AI',
    blurb: 'Organizes the MCP Dev Summit, the main MCP community conference.',
    color: 'blue',
    link: 'https://mcpdevsummit.ai',
    linkLabel: 'SUMMIT ↗',
    group: 'Community & Ecosystem',
    x: 'smw355',
  },
  {
    name: 'Abhishek Pandit',
    role: 'Founder & CEO',
    org: 'NitroStack',
    blurb: 'Builds NitroStack — SDK, MCP CLI, NitroStudio IDE & NitroCloud for shipping MCP servers.',
    color: 'purple',
    link: 'https://nitrostack.ai',
    linkLabel: 'NITROSTACK ↗',
    group: 'Community & Ecosystem',
    x: 'nitrostackai',
  },
  {
    name: 'Elena Rostova',
    role: 'Ecosystem Evangelist',
    org: 'DevRel Collective',
    blurb: 'Hosts developer workshops and hackathons around enterprise MCP server deployment.',
    color: 'blue',
    link: 'https://github.com/modelcontextprotocol',
    linkLabel: 'COMMUNITY ↗',
    group: 'Community & Ecosystem',
  },

  // ── Agentic AI Foundation ───────────────────────────────────────────────
  {
    name: 'David Nalley',
    role: 'Governing Board Chair',
    org: 'Agentic AI Foundation',
    blurb: 'Sets strategy & neutral governance for the body now hosting MCP; Dir. DevEx at AWS.',
    color: 'orange',
    link: 'https://aaif.io/board/',
    linkLabel: 'AAIF BOARD ↗',
    group: 'Agentic AI Foundation',
    x: 'ke4qqq',
  },
  {
    name: 'Angie Jones',
    role: 'VP, Developer Experience',
    org: 'Agentic AI Foundation',
    blurb: 'Guides how agentic systems are designed and adopted; Master Inventor.',
    color: 'green',
    link: 'https://angiejones.tech',
    linkLabel: 'SITE ↗',
    group: 'Agentic AI Foundation',
    x: 'techgirl1908',
  },
  {
    name: 'Marcus Vance',
    role: 'Director of Standards',
    org: 'Agentic AI Foundation',
    blurb: 'Facilitates inter-foundation partnerships and standards alignment across Linux Foundation and AAIF.',
    color: 'yellow',
    link: 'https://aaif.io',
    linkLabel: 'AAIF ↗',
    group: 'Agentic AI Foundation',
  },

  // ── Working Groups & SDKs ────────────────────────────────────────────────
  {
    name: 'Ido Salomon',
    role: 'MCP-UI Co-creator',
    org: 'UI Working Group',
    blurb: 'Incubated the interactive-UI patterns that became MCP Apps.',
    color: 'purple',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/',
    linkLabel: 'MCP APPS ↗',
    group: 'Working Groups & SDKs',
  },
  {
    name: 'Liad Yosef',
    role: 'MCP-UI Co-creator',
    org: 'UI Working Group',
    blurb: 'Co-led MCP-UI and championed rich surfaces over plain text replies.',
    color: 'yellow',
    link: 'https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/',
    linkLabel: 'MCP APPS ↗',
    group: 'Working Groups & SDKs',
  },
  {
    name: 'Olivier Chafik',
    role: 'Core Contributor',
    org: 'Anthropic',
    blurb: 'Drives tooling and SDK work across the reference implementations.',
    color: 'red',
    link: 'https://github.com/modelcontextprotocol',
    linkLabel: 'GITHUB ↗',
    group: 'Working Groups & SDKs',
  },
  {
    name: 'Kenji Takahashi',
    role: 'Python SDK Lead',
    org: 'SDK Working Group',
    blurb: 'Maintains the official Python SDK (mcp-python) and async transport bindings.',
    color: 'green',
    link: 'https://github.com/modelcontextprotocol/python-sdk',
    linkLabel: 'PYTHON SDK ↗',
    group: 'Working Groups & SDKs',
  },
]
