export type ResourceColor = 'blue' | 'red' | 'yellow' | 'green' | 'purple' | 'orange'

export interface Resource {
  title: string
  kind: string
  desc: string
  url: string
  host: string
  color: ResourceColor
}

export interface ResourceGroup {
  heading: string
  blurb: string
  items: Resource[]
}

/** The SUPPLY DEPOT — curated, real MCP resources. */
export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    heading: 'START HERE',
    blurb: 'Bookmark these four. Everything else is downstream.',
    items: [
      {
        title: 'Spec & Docs',
        kind: 'OFFICIAL',
        desc: 'The canonical specification, concepts and quickstarts. The source of truth.',
        url: 'https://modelcontextprotocol.io/',
        host: 'modelcontextprotocol.io',
        color: 'blue',
      },
      {
        title: 'Official Registry',
        kind: 'DIRECTORY',
        desc: 'Searchable, verified directory of MCP servers — 36,000+ and growing.',
        url: 'https://registry.modelcontextprotocol.io/',
        host: 'registry.modelcontextprotocol.io',
        color: 'green',
      },
      {
        title: 'The MCP Blog',
        kind: 'NEWS',
        desc: 'Spec releases, roadmaps and working-group updates straight from the maintainers.',
        url: 'https://blog.modelcontextprotocol.io/',
        host: 'blog.modelcontextprotocol.io',
        color: 'red',
      },
      {
        title: 'GitHub Org',
        kind: 'CODE',
        desc: 'Reference SDKs, the spec repo, example servers and the issue tracker.',
        url: 'https://github.com/modelcontextprotocol',
        host: 'github.com/modelcontextprotocol',
        color: 'purple',
      },
    ],
  },
  {
    heading: 'BUILD',
    blurb: 'Ship your first server before your coffee gets cold.',
    items: [
      {
        title: 'TypeScript SDK',
        kind: 'SDK',
        desc: 'The most-used reference SDK. npm install and you are off to the races.',
        url: 'https://github.com/modelcontextprotocol/typescript-sdk',
        host: 'github.com',
        color: 'blue',
      },
      {
        title: 'Python SDK',
        kind: 'SDK',
        desc: 'First-class Python support for servers and clients alike.',
        url: 'https://github.com/modelcontextprotocol/python-sdk',
        host: 'github.com',
        color: 'yellow',
      },
      {
        title: 'Awesome MCP Servers',
        kind: 'LIST',
        desc: 'Community-curated mega-list of quality servers, sorted by what they do.',
        url: 'https://mcpservers.org/',
        host: 'mcpservers.org',
        color: 'orange',
      },
      {
        title: 'Code Execution with MCP',
        kind: 'GUIDE',
        desc: 'Anthropic engineering on building leaner, faster agents on top of MCP.',
        url: 'https://www.anthropic.com/engineering/code-execution-with-mcp',
        host: 'anthropic.com',
        color: 'green',
      },
    ],
  },
  {
    heading: 'LEARN & FOLLOW',
    blurb: 'Level up, then go yell WAGMI in the Discord.',
    items: [
      {
        title: 'The Creators of MCP',
        kind: 'PODCAST',
        desc: 'Latent.Space sits down with the people who built the protocol.',
        url: 'https://www.latent.space/p/mcp',
        host: 'latent.space',
        color: 'purple',
      },
      {
        title: 'The 2026 Roadmap',
        kind: 'ROADMAP',
        desc: 'Where the protocol is heading: stateless transport, discovery, enterprise auth.',
        url: 'https://modelcontextprotocol.io/development/roadmap',
        host: 'modelcontextprotocol.io',
        color: 'blue',
      },
      {
        title: 'One Year of MCP',
        kind: 'ESSAY',
        desc: "Den Delimarsky's core-maintainer retrospective. Required reading.",
        url: 'https://den.dev/blog/one-year-of-mcp/',
        host: 'den.dev',
        color: 'red',
      },
      {
        title: 'Contribute to MCP',
        kind: 'COMMUNITY',
        desc: 'How to file, fix and ship — plus where to find the working groups & Discord.',
        url: 'https://modelcontextprotocol.io/community/contributing',
        host: 'modelcontextprotocol.io',
        color: 'green',
      },
    ],
  },
]

/** Big-picture ecosystem facts for the stat strips. */
export const ECOSYSTEM_FACTS = [
  { value: '36,000+', label: 'PUBLIC SERVERS' },
  { value: '97M+', label: 'SDK DOWNLOADS / MO' },
  { value: '10+', label: 'OFFICIAL SDKS' },
  { value: 'LF', label: 'BACKED BY LINUX FDN' },
]
