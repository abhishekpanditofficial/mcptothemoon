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
        desc: 'Searchable, verified directory of MCP servers — 9,600+ and growing.',
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
  {
    heading: 'ROADMAP · NON-TECHNICAL',
    blurb: 'No code required. Go from "what is MCP?" to actually using it, in four steps.',
    items: [
      {
        title: 'What is MCP, in plain English',
        kind: 'STEP 1',
        desc: 'Think USB-C for AI: one plug that lets any model talk to your tools and data. Start with the intro.',
        url: 'https://modelcontextprotocol.io/introduction',
        host: 'modelcontextprotocol.io',
        color: 'blue',
      },
      {
        title: 'Connect your first server',
        kind: 'STEP 2',
        desc: 'No terminal needed — add a server to Claude Desktop and watch your AI pick up new superpowers.',
        url: 'https://modelcontextprotocol.io/quickstart/user',
        host: 'modelcontextprotocol.io',
        color: 'green',
      },
      {
        title: 'Find servers for your tools',
        kind: 'STEP 3',
        desc: 'Browse the registry for Gmail, Notion, Slack and 9,600+ more. Search, click, connect.',
        url: 'https://registry.modelcontextprotocol.io/',
        host: 'registry.modelcontextprotocol.io',
        color: 'orange',
      },
      {
        title: 'Join the community',
        kind: 'STEP 4',
        desc: 'Lurk, ask, share what worked. The Discord is where the WAGMI energy lives.',
        url: 'https://discord.gg/C25DjtV2R',
        host: 'discord.gg',
        color: 'purple',
      },
    ],
  },
  {
    heading: 'ROADMAP · TECHNICAL',
    blurb: 'You can read a stack trace. Ship a production-grade server in four steps.',
    items: [
      {
        title: 'Read the spec & core concepts',
        kind: 'STEP 1',
        desc: 'Tools, resources, prompts, transports. Understand the primitives before you build on them.',
        url: 'https://modelcontextprotocol.io/docs/concepts/architecture',
        host: 'modelcontextprotocol.io',
        color: 'blue',
      },
      {
        title: 'Scaffold with an SDK',
        kind: 'STEP 2',
        desc: 'Grab the TypeScript or Python SDK and stand up a hello-world server before your coffee cools.',
        url: 'https://modelcontextprotocol.io/quickstart/server',
        host: 'modelcontextprotocol.io',
        color: 'yellow',
      },
      {
        title: 'Add tools, resources & elicitation',
        kind: 'STEP 3',
        desc: 'Wire real capabilities, return rich results, and use elicitation for multi round-trip flows.',
        url: 'https://modelcontextprotocol.io/docs/concepts/tools',
        host: 'modelcontextprotocol.io',
        color: 'red',
      },
      {
        title: 'Ship to the registry & harden auth',
        kind: 'STEP 4',
        desc: 'Publish a verified entry, lock down authorization, and follow the 2026 stateless guidance.',
        url: 'https://modelcontextprotocol.io/development/roadmap',
        host: 'modelcontextprotocol.io',
        color: 'green',
      },
    ],
  },
]

/** Big-picture ecosystem facts for the stat strips. */
export const ECOSYSTEM_FACTS = [
  { value: '48,500+', label: 'PUBLIC SERVERS' },
  { value: '97M+', label: 'SDK DOWNLOADS / MO' },
  { value: '10+', label: 'OFFICIAL SDKS' },
  { value: 'LF', label: 'BACKED BY LINUX FDN' },
]
