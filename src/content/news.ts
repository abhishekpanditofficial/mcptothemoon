export type NewsColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface NewsItem {
  date: string // display date, e.g. "JUL 28"
  year: string
  tag: string
  color: NewsColor
  title: string
  blurb: string
  source: string
  url: string
  upcoming?: boolean
}

/** The MISSION LOG — biggest MCP news, newest first. */
export const NEWS: NewsItem[] = [
  {
    date: 'JUL 28',
    year: '2026',
    tag: 'SPEC',
    color: 'blue',
    title: 'Spec 2026-07-28: the stateless era',
    blurb:
      'The next spec lands as a release candidate — a stateless protocol core, an Extensions framework, Tasks and serious auth hardening. Servers can finally scale sideways.',
    source: 'blog.modelcontextprotocol.io',
    url: 'https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/',
    upcoming: true,
  },
  {
    date: 'JUN 09',
    year: '2026',
    tag: 'EVENT',
    color: 'purple',
    title: 'MCP Dev Summit touches down in Bengaluru',
    blurb:
      'The summit circuit hits India — contributors, server builders and enterprise teams gather to shape the agentic stack.',
    source: 'events.linuxfoundation.org',
    url: 'https://events.linuxfoundation.org/mcp-dev-summit-north-america/',
  },
  {
    date: 'APR 08',
    year: '2026',
    tag: 'GOVERNANCE',
    color: 'green',
    title: 'The maintainer crew gets bigger',
    blurb:
      'Clare Liguori joins the core maintainers and fresh registry maintainers come aboard as MCP scales its open governance under the Linux Foundation.',
    source: 'blog.modelcontextprotocol.io',
    url: 'https://blog.modelcontextprotocol.io/posts/2026-04-08-maintainer-update/',
  },
  {
    date: 'APR 02',
    year: '2026',
    tag: 'EVENT',
    color: 'blue',
    title: '1,200 builders pack MCP Dev Summit NYC',
    blurb:
      'Gateways, gRPC and observability headline the first North America summit — ~50 speakers from Google, Anthropic, Block and more signal real protocol hardening.',
    source: 'infoq.com',
    url: 'https://www.infoq.com/news/2026/04/aaif-mcp-summit/',
  },
  {
    date: 'APR 01',
    year: '2026',
    tag: 'SECURITY',
    color: 'red',
    title: "Critical 'by design' RCE flaw disclosed",
    blurb:
      'Researchers find an arbitrary-command-execution weakness affecting thousands of public servers. Translation: pin your servers, read the advisory, do not run randos.',
    source: 'thehackernews.com',
    url: 'https://thehackernews.com/2026/04/anthropic-mcp-design-vulnerability.html',
  },
  {
    date: 'JAN 15',
    year: '2026',
    tag: 'RELEASE',
    color: 'yellow',
    title: 'MCP Apps ships as the first official extension',
    blurb:
      'Servers can now hand back interactive UIs — not just text. The patterns the MCP-UI crew incubated are now part of the standard.',
    source: 'blog.modelcontextprotocol.io',
    url: 'https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/',
  },
  {
    date: 'DEC 10',
    year: '2025',
    tag: 'ADOPTION',
    color: 'orange',
    title: 'Google goes all-in on managed MCP servers',
    blurb:
      'Maps, BigQuery, Compute Engine and GKE get agent-ready endpoints. Plug a model in; it just works.',
    source: 'techcrunch.com',
    url: 'https://techcrunch.com/2025/12/10/google-is-going-all-in-on-mcp-servers-agent-ready-by-design/',
  },
  {
    date: 'DEC 01',
    year: '2025',
    tag: 'GOVERNANCE',
    color: 'purple',
    title: 'Anthropic donates MCP to the Linux Foundation',
    blurb:
      'The new Agentic AI Foundation (AAIF) — co-founded with Block and OpenAI, backed by Google, Microsoft, AWS, Cloudflare & Bloomberg — takes stewardship. MCP belongs to everyone now.',
    source: 'anthropic.com',
    url: 'https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation',
  },
  {
    date: 'NOV 25',
    year: '2025',
    tag: 'SPEC',
    color: 'blue',
    title: 'Spec 2025-11-25 + the official Registry go live',
    blurb:
      'A searchable directory of verified servers ships alongside the new spec. No more "trust me bro" install commands.',
    source: 'registry.modelcontextprotocol.io',
    url: 'https://registry.modelcontextprotocol.io/',
  },
  {
    date: 'APR 09',
    year: '2025',
    tag: 'ADOPTION',
    color: 'green',
    title: 'Gemini will speak MCP',
    blurb:
      "Demis Hassabis confirms MCP support in Google's models — the standard picks up its second hyperscaler in a month.",
    source: 'en.wikipedia.org',
    url: 'https://en.wikipedia.org/wiki/Model_Context_Protocol',
  },
  {
    date: 'MAR 26',
    year: '2025',
    tag: 'ADOPTION',
    color: 'red',
    title: 'OpenAI adopts MCP',
    blurb:
      'Agents SDK, Responses API and ChatGPT desktop all speak MCP — and the Assistants API is put on a sunset clock. The walled garden opens.',
    source: 'en.wikipedia.org',
    url: 'https://en.wikipedia.org/wiki/Model_Context_Protocol',
  },
  {
    date: 'NOV 25',
    year: '2024',
    tag: 'ORIGIN',
    color: 'yellow',
    title: 'MCP is born',
    blurb:
      'Anthropic open-sources the Model Context Protocol with TypeScript and Python SDKs. One protocol to plug every model into the real world. WAGMI.',
    source: 'anthropic.com',
    url: 'https://www.anthropic.com/news/model-context-protocol',
  },
]

/** Short headlines for the scrolling ticker. */
export const TICKER: string[] = [
  '🚀 Spec 2026-07-28 RC is out — stateless core + Extensions',
  '🪐 36,000+ MCP servers and counting',
  '📡 97M+ monthly SDK downloads',
  '🏛️ MCP now lives at the Linux Foundation (AAIF)',
  '🟢 OpenAI · Google · Microsoft · AWS all speak MCP',
  '🛡️ Patch your servers — read the April security advisory',
  '🌍 MCP Dev Summit Europe · Amsterdam · Sept 17–19',
]
